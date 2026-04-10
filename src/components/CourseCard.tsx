import { Link } from 'react-router-dom';
import { Clock, Users, ChevronRight } from 'lucide-react';
import type { Course } from '@/data/courses';
import { cn } from '@/utils/cn';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export function CourseCard({ course, featured = false }: CourseCardProps) {
  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <Link
      to={`/courses/${course.id}`}
      className={cn(
        "group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary-100/50",
        featured && "lg:flex lg:flex-row"
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden",
        featured ? "lg:w-2/5" : "aspect-[16/10]"
      )}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        {course.badge && (
          <span className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {course.badge}
          </span>
        )}
        {/* Discount Badge */}
        <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          {discount}% OFF
        </span>
      </div>

      {/* Content */}
      <div className={cn(
        "p-5 lg:p-6 flex flex-col",
        featured && "lg:w-3/5 lg:justify-center"
      )}>
        {/* Exam Tag */}
        <span className="inline-block text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded-full mb-3 w-fit">
          {course.targetExam}
        </span>

        {/* Title */}
        <h3 className={cn(
          "font-serif font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors",
          featured ? "text-2xl" : "text-xl"
        )}>
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            {course.enrolledCount.toLocaleString()}+ students
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
            <span className="text-sm text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
          </div>
          <span className="flex items-center gap-1 text-primary-700 font-medium text-sm group-hover:gap-2 transition-all">
            View Details
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
