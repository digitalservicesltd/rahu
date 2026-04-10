import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { cn } from '@/utils/cn';

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-50 px-4 py-2 rounded-full mb-4">
            Have Questions?
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses, access, and support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.slice(0, 8).map((faq) => (
            <div
              key={faq.id}
              className={cn(
                "bg-white rounded-xl border transition-all duration-200",
                openId === faq.id ? "border-primary-200 shadow-lg shadow-primary-100/30" : "border-slate-100"
              )}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={cn(
                  "font-medium pr-4 transition-colors",
                  openId === faq.id ? "text-primary-700" : "text-slate-900"
                )}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0",
                    openId === faq.id && "rotate-180 text-primary-600"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openId === faq.id ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919876543210?text=Hi, I have a question about your courses."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-800 transition-colors"
          >
            Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
