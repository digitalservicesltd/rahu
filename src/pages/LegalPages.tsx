import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-primary-200 mt-4">Last updated: January 2024</p>
        </div>
      </section>
      
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, enroll in a course, or contact us for support. This may include your name, email address, phone number, and payment information.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about courses, offers, and events</li>
            </ul>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@shikshapath.in or +91 98765 43210.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-primary-200 mt-4">Last updated: January 2024</p>
        </div>
      </section>
      
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p>By accessing and using ShikshaPath Academy's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Course Access</h2>
            <p>Upon successful payment, you will be granted access to the purchased course for the validity period specified. Course access is personal and non-transferable. Sharing your login credentials is strictly prohibited and may result in account termination.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Intellectual Property</h2>
            <p>All content provided in our courses, including videos, study materials, and practice tests, is the intellectual property of ShikshaPath Academy. You may not reproduce, distribute, or commercially exploit any course content without prior written permission.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Share, distribute, or resell course content</li>
              <li>Record or screenshot course videos</li>
              <li>Use the content for commercial purposes</li>
              <li>Attempt to hack or disrupt our services</li>
            </ul>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Disclaimer</h2>
            <p>While we strive to provide accurate and helpful content, we do not guarantee exam success. Results depend on individual effort, study habits, and various other factors beyond our control.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Contact</h2>
            <p>For any questions regarding these Terms, please contact us at support@shikshapath.in.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function RefundPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">Refund Policy</h1>
          <p className="text-primary-200 mt-4">Last updated: January 2024</p>
        </div>
      </section>
      
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-600">
            <div className="bg-green-50 rounded-xl p-6 mb-8 border border-green-100">
              <h3 className="text-green-800 font-semibold text-lg mb-2">7-Day Money-Back Guarantee</h3>
              <p className="text-green-700 mb-0">We offer a 7-day refund policy on all our courses. No questions asked.</p>
            </div>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Eligibility for Refund</h2>
            <p>You are eligible for a full refund if:</p>
            <ul>
              <li>You request the refund within 7 days of purchase</li>
              <li>You have watched less than 20% of the total course content</li>
              <li>You have not downloaded more than 5 study materials</li>
            </ul>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol>
              <li>Contact us via WhatsApp at +91 98765 43210</li>
              <li>Or email us at support@shikshapath.in</li>
              <li>Include your registered email and reason for refund</li>
              <li>We will process your request within 3-5 business days</li>
            </ol>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Refund Processing</h2>
            <p>Once approved, refunds will be processed to the original payment method within 5-7 business days. Bank processing times may vary.</p>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Non-Refundable Items</h2>
            <p>The following are not eligible for refund:</p>
            <ul>
              <li>Courses purchased more than 7 days ago</li>
              <li>Courses where more than 20% content has been consumed</li>
              <li>Course extensions or add-ons</li>
              <li>Physical materials (if any)</li>
            </ul>
            
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">Questions?</h2>
            <p>If you have any questions about our refund policy, please don't hesitate to reach out via WhatsApp or email. We're here to help!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
