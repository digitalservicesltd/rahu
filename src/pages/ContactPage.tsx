import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { FAQSection } from '@/components/FAQSection';

export function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Have questions about our courses? We're here to help. Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210?text=Hi, I have a question."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-50 hover:bg-green-100 rounded-2xl p-6 text-center transition-colors"
            >
              <div className="w-14 h-14 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium">+91 98765 43210</p>
              <p className="text-slate-500 text-sm mt-2">Fastest response</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="group bg-primary-50 hover:bg-primary-100 rounded-2xl p-6 text-center transition-colors"
            >
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Phone className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-primary-600 font-medium">+91 98765 43210</p>
              <p className="text-slate-500 text-sm mt-2">Mon-Sat, 9AM-7PM</p>
            </a>

            {/* Email */}
            <a
              href="mailto:support@shikshapath.in"
              className="group bg-amber-50 hover:bg-amber-100 rounded-2xl p-6 text-center transition-colors"
            >
              <div className="w-14 h-14 bg-amber-100 group-hover:bg-amber-200 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Mail className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-amber-600 font-medium">support@shikshapath.in</p>
              <p className="text-slate-500 text-sm mt-2">Reply within 24 hours</p>
            </a>

            {/* Location */}
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600 font-medium">Shimla, HP</p>
              <p className="text-slate-500 text-sm mt-2">India - 171001</p>
            </div>
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="course-inquiry">Course Inquiry</option>
                    <option value="payment-issue">Payment Issue</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="refund-request">Refund Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white py-4 rounded-xl font-semibold transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Support */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="font-semibold text-xl text-slate-900 mb-4">
                  Need Quick Support?
                </h3>
                <p className="text-slate-600 mb-6">
                  For immediate assistance, reach us on WhatsApp. We typically respond within 30 minutes during business hours.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi, I need support with..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-slate-900">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-600">Monday - Saturday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-medium text-slate-900">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Live Doubt Sessions</span>
                    <span className="font-medium text-slate-900">As per schedule</span>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="font-semibold text-xl text-slate-900 mb-6">Expected Response Times</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div>
                      <p className="font-medium text-slate-900">WhatsApp</p>
                      <p className="text-sm text-slate-500">Within 30 minutes (business hours)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <p className="text-sm text-slate-500">Immediate (during business hours)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <p className="text-sm text-slate-500">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
