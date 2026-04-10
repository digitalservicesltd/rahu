import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* WhatsApp CTA Strip */}
      <div className="bg-green-600 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium text-center sm:text-left">
            Have questions? Get instant support on WhatsApp
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi, I have a question about your courses."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-green-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white tracking-tight">ShikshaPath</span>
                <span className="text-[10px] text-slate-400 -mt-1 tracking-wide">ACADEMY</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering aspiring teachers with quality education and proven strategies to crack CTET, TGT, and HP teaching exams.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="text-accent-400">★★★★★</span>
              <span>Trusted by 15,000+ Students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors text-sm">All Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Instructor</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses/ctet-complete" className="text-slate-400 hover:text-white transition-colors text-sm">CTET Complete Mastery</Link>
              </li>
              <li>
                <Link to="/courses/hp-tet" className="text-slate-400 hover:text-white transition-colors text-sm">HP TET Complete</Link>
              </li>
              <li>
                <Link to="/courses/tgt-arts" className="text-slate-400 hover:text-white transition-colors text-sm">TGT Arts Foundation</Link>
              </li>
              <li>
                <Link to="/courses/ctet-crash" className="text-slate-400 hover:text-white transition-colors text-sm">CTET Crash Course</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 mt-0.5 text-primary-400 group-hover:text-primary-300" />
                  <div>
                    <p className="text-sm">+91 98765 43210</p>
                    <p className="text-xs text-slate-500">Mon-Sat, 9AM-7PM</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:support@shikshapath.in" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 mt-0.5 text-primary-400 group-hover:text-primary-300" />
                  <div>
                    <p className="text-sm">support@shikshapath.in</p>
                    <p className="text-xs text-slate-500">We reply within 24 hours</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary-400" />
                  <div>
                    <p className="text-sm">Shimla, Himachal Pradesh</p>
                    <p className="text-xs text-slate-500">India - 171001</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} ShikshaPath Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-slate-500 hover:text-slate-300 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
