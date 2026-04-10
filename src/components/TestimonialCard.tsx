import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-primary-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
        <Quote className="w-5 h-5 text-primary-600" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Result Badge */}
      <div className="bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-lg mb-6 inline-block">
        ✓ {testimonial.result}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
        />
        <div>
          <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
