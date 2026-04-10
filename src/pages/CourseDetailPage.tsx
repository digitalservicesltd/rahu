import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Users, CheckCircle, Play, FileText, MessageCircle, 
  Award, ArrowLeft, BookOpen, Target, ChevronDown, Shield
} from 'lucide-react';
import { getCourseById, courses } from '@/data/courses';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/TestimonialCard';
import { FAQSection } from '@/components/FAQSection';
import { useState } from 'react';
import { cn } from '@/utils/cn';

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId || '');
  const [openSyllabus, setOpenSyllabus] = useState<number>(0);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary-700 font-medium hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
  const relatedCourses = courses.filter(c => c.id !== course.id).slice(0, 2);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-slate-500 hover:text-primary-700">Home</Link>
            <span className="text-slate-300">/</span>
            <Link to="/courses" className="text-slate-500 hover:text-primary-700">Courses</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{course.title}</span>
          </div>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <Link to="/courses" className="inline-flex items-center gap-2 text-primary-300 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Courses
              </Link>

              {course.badge && (
                <span className="inline-block bg-accent-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  {course.badge}
                </span>
              )}

              <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                {course.title}
              </h1>

              <p className="text-primary-200 text-lg mb-6">
                {course.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-primary-200 mb-8">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {course.enrolledCount.toLocaleString()}+ enrolled
                </span>
                <span className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  {course.targetExam}
                </span>
              </div>

              {/* Mobile Price Card */}
              <div className="lg:hidden bg-white rounded-2xl p-6 shadow-xl mb-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded">
                    {discount}% OFF
                  </span>
                </div>
                <a
                  href="https://wa.me/919876543210?text=Hi, I want to enroll in the course: ${course.title}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white py-4 rounded-xl font-semibold transition-colors mb-3"
                >
                  Enroll Now
                </a>
                <p className="text-center text-slate-500 text-sm flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  7-day money-back guarantee
                </p>
              </div>
            </div>

            {/* Course Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-700 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                  What You'll Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Syllabus */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary-600" />
                  Course Syllabus
                </h2>
                <div className="space-y-3">
                  {course.syllabus.map((module, index) => (
                    <div 
                      key={index}
                      className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenSyllabus(openSyllabus === index ? -1 : index)}
                        className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span className="font-medium text-slate-900 text-left">
                          {index + 1}. {module.title}
                        </span>
                        <ChevronDown className={cn(
                          "w-5 h-5 text-slate-400 transition-transform",
                          openSyllabus === index && "rotate-180"
                        )} />
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-200",
                        openSyllabus === index ? "max-h-96" : "max-h-0"
                      )}>
                        <ul className="p-5 space-y-3 bg-white">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-3 text-slate-600">
                              <div className="w-2 h-2 bg-primary-400 rounded-full" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who This Is For */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary-600" />
                  Who This Course Is For
                </h2>
                <ul className="space-y-4">
                  {course.whoIsThisFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary-600" />
                  Meet Your Instructor
                </h2>
                <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
                      alt="Instructor"
                      className="w-24 h-24 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900 mb-1">Dr. Rajesh Sharma</h3>
                      <p className="text-primary-600 font-medium mb-3">Senior Educator & CTET Expert</p>
                      <p className="text-slate-600 leading-relaxed">
                        With 8+ years of experience in teacher training, Dr. Sharma has helped over 15,000 students achieve their teaching dreams. He holds a Ph.D. in Education and has cleared multiple teaching exams including CTET, HP TET, and UGC NET.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Price Card */}
            <div className="hidden lg:block">
              <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
                </div>
                <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-6">
                  {discount}% OFF - Limited Time
                </span>

                <a
                  href={`https://wa.me/919876543210?text=Hi, I want to enroll in: ${course.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white py-4 rounded-xl font-semibold transition-colors mb-3"
                >
                  Enroll Now
                </a>
                
                <a
                  href={`https://wa.me/919876543210?text=Hi, I have a question about: ${course.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-colors mb-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ask on WhatsApp
                </a>

                <p className="text-center text-slate-500 text-sm flex items-center justify-center gap-2 mb-6">
                  <Shield className="w-4 h-4" />
                  7-day money-back guarantee
                </p>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-medium text-slate-900 mb-4">This course includes:</h4>
                  <ul className="space-y-3">
                    {course.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            What Students Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedCourses.map((relatedCourse) => (
                <Link
                  key={relatedCourse.id}
                  to={`/courses/${relatedCourse.id}`}
                  className="flex gap-4 bg-slate-50 rounded-xl p-4 hover:bg-primary-50 transition-colors group"
                >
                  <img
                    src={relatedCourse.image}
                    alt={relatedCourse.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <span className="text-xs font-medium text-primary-600">{relatedCourse.targetExam}</span>
                    <h3 className="font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                      {relatedCourse.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{relatedCourse.duration}</p>
                    <p className="text-primary-700 font-bold mt-2">₹{relatedCourse.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
