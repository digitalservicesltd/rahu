import React, { useState, useRef, useEffect } from 'react';
import JSZip from 'jszip';
import { Download, FileCode2, MonitorPlay, FolderUp, Layout } from 'lucide-react';

interface VFSFile {
  path: string;
  file: File;
}

function resolvePath(basePath: string, relativePath: string): string {
  if (relativePath.startsWith('/')) {
    return relativePath.substring(1);
  }

  const baseParts = basePath.split('/');
  baseParts.pop(); // remove file name
  const relParts = relativePath.split('/');
  
  for (const part of relParts) {
    if (part === '.') continue;
    if (part === '..') {
      if (baseParts.length > 0) {
        baseParts.pop();
      }
    } else {
      baseParts.push(part);
    }
  }
  return baseParts.join('/');
}

export default function App() {
  const [vfs, setVfs] = useState<Map<string, VFSFile>>(new Map());
  const vfsRef = useRef<Map<string, VFSFile>>(new Map());
  const [currentHtml, setCurrentHtml] = useState<string | null>(null);
  const [iframeSrcDoc, setIframeSrcDoc] = useState<string>('');
  const [htmlFiles, setHtmlFiles] = useState<string[]>([]);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const replaceImageInputRef = useRef<HTMLInputElement>(null);
  const [replacingImageTarget, setReplacingImageTarget] = useState<{originalSrc: string, elementId: string} | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    vfsRef.current = vfs;
  }, [vfs]);

  const saveCurrentHtmlToVfs = () => {
    const iframeDoc = iframeRef.current?.contentWindow?.document;
    if (iframeDoc && currentHtml) {
      const clone = iframeDoc.documentElement.cloneNode(true) as HTMLElement;
      
      const script = clone.querySelector('#visual-builder-injected-script');
      if (script) script.remove();
      
      const style = clone.querySelector('#visual-builder-injected-style');
      if (style) style.remove();

      clone.querySelectorAll('[data-original-href]').forEach(el => {
        el.setAttribute('href', el.getAttribute('data-original-href')!);
        el.removeAttribute('data-original-href');
      });
      clone.querySelectorAll('[data-original-src]').forEach(el => {
        el.setAttribute('src', el.getAttribute('data-original-src')!);
        el.removeAttribute('data-original-src');
      });

      clone.querySelectorAll('[contenteditable]').forEach(el => {
        el.removeAttribute('contenteditable');
      });

      clone.querySelectorAll('[id^="img-replace-target-"]').forEach(el => {
        el.removeAttribute('id');
      });

      const htmlContent = '<!DOCTYPE html>\n' + clone.outerHTML;
      
      const newVfs = new Map(vfsRef.current);
      const htmlFile = new File([htmlContent], currentHtml.split('/').pop() || 'index.html', { type: 'text/html' });
      newVfs.set(currentHtml, { path: currentHtml, file: htmlFile });
      setVfs(newVfs);
    }
  };

  const handleFolderUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newVfs = new Map<string, VFSFile>();
    let indexHtmlPath = null;
    const htmls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const parts = file.webkitRelativePath.split('/');
      parts.shift(); // remove root folder name to normalize paths
      const path = parts.join('/');
      
      if (!path) continue;

      newVfs.set(path, { path, file });

      if (path.endsWith('.html')) {
        htmls.push(path);
        if (path === 'index.html' || path.endsWith('/index.html')) {
          if (!indexHtmlPath) indexHtmlPath = path;
        }
      }
    }

    setHtmlFiles(htmls);
    setVfs(newVfs);
    
    const targetHtml = indexHtmlPath || (htmls.length > 0 ? htmls[0] : null);
    if (targetHtml) {
      setCurrentHtml(targetHtml);
    }
  };

  useEffect(() => {
    if (!currentHtml) return;

    const generateSrcDoc = async () => {
      const fileData = vfsRef.current.get(currentHtml);
      if (!fileData) return;
      
      const htmlText = await fileData.file.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      // Replace stylesheet links
      doc.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('data:')) {
          const resolvedPath = resolvePath(currentHtml, href);
          const file = vfsRef.current.get(resolvedPath);
          if (file) {
            const blobUrl = URL.createObjectURL(file.file);
            (link as HTMLLinkElement).href = blobUrl;
            link.setAttribute('data-original-href', href);
          }
        }
      });

      // Replace image sources
      doc.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
          const resolvedPath = resolvePath(currentHtml, src);
          const file = vfsRef.current.get(resolvedPath);
          if (file) {
            const blobUrl = URL.createObjectURL(file.file);
            (img as HTMLImageElement).src = blobUrl;
            img.setAttribute('data-original-src', src);
          }
        }
      });

      // Inject visual editing scripts
      const script = doc.createElement('script');
      script.id = 'visual-builder-injected-script';
      script.textContent = `
        document.body.addEventListener('click', (e) => {
          const a = e.target.closest('a');
          if (a) e.preventDefault(); // Prevent navigation
        });

        document.body.addEventListener('click', (e) => {
          const el = e.target;
          if (el.tagName.match(/^(H[1-6]|P|SPAN|A|DIV|BUTTON|LI|TD|TH|LABEL|STRONG|EM)$/)) {
            const hasBlockChildren = Array.from(el.children).some(c => !c.tagName.match(/^(B|I|U|SPAN|A|STRONG|EM|BR)$/));
            if (!hasBlockChildren) {
              el.contentEditable = "true";
              el.focus();
            }
          }
        });

        document.body.addEventListener('dblclick', (e) => {
          if (e.target.tagName === 'IMG') {
            const originalSrc = e.target.getAttribute('data-original-src');
            if (!originalSrc) return;
            
            const elementId = e.target.id || 'img-replace-target-' + Math.random().toString(36).substr(2, 9);
            e.target.id = elementId;

            window.parent.postMessage({
              type: 'REPLACE_IMAGE',
              originalSrc: originalSrc,
              elementId: elementId
            }, '*');
          }
        });

        window.addEventListener('message', (e) => {
          if (e.data.type === 'IMAGE_UPDATED') {
            const img = document.getElementById(e.data.elementId);
            if (img) {
              img.src = e.data.newBlobUrl;
            }
          }
        });
      `;
      doc.body.appendChild(script);

      const style = doc.createElement('style');
      style.id = 'visual-builder-injected-style';
      style.textContent = `
        [contenteditable="true"]:focus {
          outline: 2px dashed #3b82f6 !important;
          outline-offset: 2px;
          background: rgba(59, 130, 246, 0.1);
        }
        img:hover {
          outline: 2px dashed #10b981 !important;
          outline-offset: 2px;
          cursor: pointer;
          opacity: 0.8;
          transition: all 0.2s;
        }
        /* Optional structural hover outlines for better UX */
        section:hover, header:hover, footer:hover, article:hover {
          outline: 1px solid rgba(255,255,255,0.2) !important;
        }
      `;
      doc.head.appendChild(style);

      setIframeSrcDoc('<!DOCTYPE html>\n' + doc.documentElement.outerHTML);
    };

    generateSrcDoc();
  }, [currentHtml]);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data.type === 'REPLACE_IMAGE') {
        setReplacingImageTarget({
          originalSrc: e.data.originalSrc,
          elementId: e.data.elementId
        });
        replaceImageInputRef.current?.click();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleReplaceImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !replacingImageTarget || !currentHtml) return;

    const resolvedPath = resolvePath(currentHtml, replacingImageTarget.originalSrc);
    
    const newVfs = new Map(vfsRef.current);
    newVfs.set(resolvedPath, { path: resolvedPath, file });
    setVfs(newVfs);

    const blobUrl = URL.createObjectURL(file);

    iframeRef.current?.contentWindow?.postMessage({
      type: 'IMAGE_UPDATED',
      elementId: replacingImageTarget.elementId,
      newBlobUrl: blobUrl
    }, '*');

    setReplacingImageTarget(null);
    if (replaceImageInputRef.current) {
      replaceImageInputRef.current.value = '';
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      saveCurrentHtmlToVfs();
      
      // Wait a tiny bit for state to settle if needed
      await new Promise(resolve => setTimeout(resolve, 100));

      const zip = new JSZip();
      for (const [path, vfsFile] of vfsRef.current.entries()) {
        zip.file(path, vfsFile.file);
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'website-export.zip';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed:", err);
      alert("Export failed. Check console for details.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-200 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <div className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col">
        <div className="p-4 border-b border-neutral-800">
          <div className="flex items-center gap-2 mb-6 text-emerald-400">
            <MonitorPlay className="w-6 h-6" />
            <h1 className="font-bold text-lg tracking-tight">VisualBuilder</h1>
          </div>
          
          <label className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-md cursor-pointer transition-colors shadow-sm font-medium text-sm">
            <FolderUp className="w-4 h-4" />
            <span>Upload Folder</span>
            <input 
              type="file" 
              // @ts-ignore - webkitdirectory is non-standard but widely supported
              webkitdirectory="true" 
              directory="true" 
              multiple 
              onChange={handleFolderUpload} 
              className="hidden" 
            />
          </label>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Pages</h2>
          {htmlFiles.length === 0 ? (
            <div className="text-sm text-neutral-600 italic text-center mt-8">
              No project loaded
            </div>
          ) : (
            <ul className="space-y-1">
              {htmlFiles.map(path => (
                <li key={path}>
                  <button
                    onClick={() => {
                      saveCurrentHtmlToVfs();
                      setCurrentHtml(path);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors text-left ${
                      currentHtml === path 
                        ? 'bg-neutral-800 text-white font-medium' 
                        : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'
                    }`}
                  >
                    <FileCode2 className="w-4 h-4 opacity-70" />
                    <span className="truncate">{path}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/50">
          <div className="text-xs text-neutral-500 space-y-2">
            <p className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Click text to edit</p>
            <p className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Dbl-click image to swap</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <header className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            {currentHtml ? (
              <>
                <Layout className="w-4 h-4 text-neutral-500" />
                <span className="text-sm font-medium text-neutral-300">{currentHtml}</span>
              </>
            ) : (
              <span className="text-sm text-neutral-500">Upload a website folder to begin</span>
            )}
          </div>

          {vfs.size > 0 && (
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 disabled:text-emerald-300 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              {isExporting ? 'Exporting...' : 'Export Website'}
            </button>
          )}
        </header>

        {/* Editor Area */}
        <main className="flex-1 bg-neutral-950 relative overflow-hidden">
          {currentHtml ? (
            <iframe
              ref={iframeRef}
              srcDoc={iframeSrcDoc}
              className="w-full h-full border-none bg-white"
              title="Visual Editor"
              sandbox="allow-same-origin allow-scripts allow-forms"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600">
              <MonitorPlay className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-medium">No Project Loaded</p>
              <p className="text-sm mt-2">Upload a folder containing HTML files to start editing.</p>
            </div>
          )}
        </main>
      </div>

      {/* Hidden inputs */}
      <input
        type="file"
        ref={replaceImageInputRef}
        onChange={handleReplaceImage}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
