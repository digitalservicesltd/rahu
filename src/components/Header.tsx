import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { cn } from '@/utils/cn';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      {/* Top bar with contact */}
      <div className="bg-primary-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-primary-200">🎓 15,000+ students trust ShikshaPath for their exam preparation</p>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg shadow-primary-200 group-hover:shadow-primary-300 transition-shadow">
              <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl lg:text-2xl text-primary-900 tracking-tight">ShikshaPath</span>
              <span className="text-[10px] lg:text-xs text-slate-500 -mt-1 tracking-wide">ACADEMY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  isActive(item.href)
                    ? "text-primary-700"
                    : "text-slate-600 hover:text-primary-700"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors"
            >
              Get Help
            </a>
            <Link
              to="/courses"
              className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-primary-200 hover:shadow-primary-300"
            >
              View Courses
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary-50 text-primary-700"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3 px-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center rounded-lg border border-primary-200 text-primary-700 font-medium hover:bg-primary-50 transition-colors"
                >
                  WhatsApp Support
                </a>
                <Link
                  to="/courses"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 text-center rounded-lg bg-primary-700 text-white font-medium hover:bg-primary-800 transition-colors"
                >
                  View Courses
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
