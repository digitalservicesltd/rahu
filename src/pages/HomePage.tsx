import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play, Shield, Award, Headphones } from 'lucide-react';
import { courses } from '@/data/courses';
import { testimonials } from '@/data/testimonials';
import { CourseCard } from '@/components/CourseCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { TrustIndicators } from '@/components/TrustIndicators';
import { FAQSection } from '@/components/FAQSection';

export function HomePage() {
  const featuredCourse = courses.find(c => c.id === 'ctet-complete');
  const otherCourses = courses.filter(c => c.id !== 'ctet-complete').slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm mb-6">
                <span className="flex items-center gap-1 text-accent-500 text-sm">
                  ★★★★★
                </span>
                <span className="text-slate-600 text-sm">Trusted by 15,000+ students across India</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Crack Your Teaching Exam with{' '}
                <span className="text-primary-700">Confidence</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Expert-led preparation for CTET, TGT, and HP TET exams. Get structured learning, proven strategies, and dedicated support to secure your teaching career.
              </p>

              {/* Value Props */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Comprehensive Syllabus</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Live Doubt Sessions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Mock Tests Included</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-xl shadow-primary-200 hover:shadow-primary-300 hover:gap-3"
                >
                  View All Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold transition-colors border border-slate-200"
                >
                  <Play className="w-5 h-5 text-primary-600" />
                  How It Works
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-200/50">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Students learning together"
                  className="w-full h-auto"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {testimonials.slice(0, 4).map((t, i) => (
                        <img
                          key={i}
                          src={t.image}
                          alt=""
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Join 15,000+ students</p>
                      <p className="text-sm text-slate-600">Who achieved their teaching dreams</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg animate-bounce">
                89% Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Featured Course Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-50 px-4 py-2 rounded-full mb-4">
              Featured Course
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Most Popular Course
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trusted by over 4,000 students to crack CTET in their first attempt
            </p>
          </div>

          {featuredCourse && <CourseCard course={featuredCourse} featured />}
        </div>
      </section>

      {/* All Courses Preview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-12">
            <div>
              <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-50 px-4 py-2 rounded-full mb-4">
                Our Programs
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900">
                Explore All Courses
              </h2>
            </div>
            <Link
              to="/courses"
              className="text-primary-700 font-medium flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-50 px-4 py-2 rounded-full mb-4">
              Why ShikshaPath?
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We focus on your success, not flashy marketing. Here's why thousands of students trust us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-slate-50 hover:bg-primary-50 rounded-2xl p-8 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <BookOpen className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">
                Structured Curriculum
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Topic-by-topic coverage designed by exam toppers. Every lesson builds on the previous one for complete conceptual clarity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-slate-50 hover:bg-primary-50 rounded-2xl p-8 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Headphones className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">
                Dedicated Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Weekly live doubt sessions plus WhatsApp support. Your questions are answered within hours, not days.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-slate-50 hover:bg-primary-50 rounded-2xl p-8 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Award className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">
                Proven Results
              </h3>
              <p className="text-slate-600 leading-relaxed">
                89% of our students clear their exam in the first attempt. Our mock tests mirror the actual exam pattern.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-slate-50 hover:bg-primary-50 rounded-2xl p-8 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Shield className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">
                7-Day Refund Policy
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Not satisfied? Get a full refund within 7 days if you've watched less than 20% of the course. No questions asked.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-slate-50 hover:bg-primary-50 rounded-2xl p-8 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Clock className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">
                Flexible Learning
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Learn at your own pace, anytime, anywhere. Access on mobile, tablet, or desktop. Download materials for offline study.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-slate-50 hover:bg-primary-50 rounded-2xl p-8 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Target className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">
                Exam-Focused Content
              </h3>
              <p className="text-slate-600 leading-relaxed">
                No filler content. Every lesson is crafted based on previous year analysis and focused on what actually matters for the exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary-700 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              Student Success Stories
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Real Results from Real Students
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't take our word for it. Here's what our students have to say about their journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Teaching Journey?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who cracked their teaching exams with ShikshaPath. Your dream teaching career is just one step away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              Browse Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi, I'm interested in your courses."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Import missing icons
import { BookOpen, Clock, Target } from 'lucide-react';
