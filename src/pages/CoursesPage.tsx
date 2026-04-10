import { courses } from '@/data/courses';
import { CourseCard } from '@/components/CourseCard';
import { FAQSection } from '@/components/FAQSection';

export function CoursesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Comprehensive preparation programs designed to help you crack CTET, TGT, and HP teaching exams with confidence.
          </p>
        </div>
      </section>

      {/* Course Filters & Grid */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl p-4 lg:p-6 text-center border border-slate-100">
              <div className="text-2xl lg:text-3xl font-bold text-primary-700 mb-1">{courses.length}</div>
              <div className="text-slate-600 text-sm">Total Courses</div>
            </div>
            <div className="bg-white rounded-xl p-4 lg:p-6 text-center border border-slate-100">
              <div className="text-2xl lg:text-3xl font-bold text-primary-700 mb-1">500+</div>
              <div className="text-slate-600 text-sm">Video Hours</div>
            </div>
            <div className="bg-white rounded-xl p-4 lg:p-6 text-center border border-slate-100">
              <div className="text-2xl lg:text-3xl font-bold text-primary-700 mb-1">15,000+</div>
              <div className="text-slate-600 text-sm">Students Enrolled</div>
            </div>
            <div className="bg-white rounded-xl p-4 lg:p-6 text-center border border-slate-100">
              <div className="text-2xl lg:text-3xl font-bold text-primary-700 mb-1">89%</div>
              <div className="text-slate-600 text-sm">Success Rate</div>
            </div>
          </div>

          {/* Exam Category Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-primary-200 transition-colors">
              All Courses
            </span>
            <span className="bg-white text-slate-600 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
              CTET
            </span>
            <span className="bg-white text-slate-600 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
              TGT
            </span>
            <span className="bg-white text-slate-600 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
              HP TET
            </span>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Didn't find what you're looking for */}
          <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 text-center border border-slate-100">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Didn't find what you're looking for?
            </h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              We're constantly adding new courses based on student demand. Let us know what course you need and we'll prioritize it.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi, I'm looking for a course on..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Request a Course
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
