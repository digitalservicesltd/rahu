import { Link } from 'react-router-dom';
import { 
  Award, BookOpen, Users, GraduationCap, Target, 
  ArrowRight, Quote, MapPin
} from 'lucide-react';
import { TrustIndicators } from '@/components/TrustIndicators';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/TestimonialCard';

export function AboutPage() {
  const milestones = [
    { year: '2016', title: 'Started Teaching Journey', description: 'Began teaching at a local coaching center in Shimla' },
    { year: '2018', title: 'Went Online', description: 'Started YouTube channel to help more students across HP' },
    { year: '2020', title: 'Launched ShikshaPath', description: 'Full-fledged online course platform with structured programs' },
    { year: '2022', title: '10,000+ Students', description: 'Crossed the milestone of helping 10,000 students' },
    { year: '2024', title: '15,000+ Students', description: 'Growing community with 89% success rate' },
  ];

  const credentials = [
    { icon: GraduationCap, title: 'Ph.D. in Education', subtitle: 'HPU Shimla' },
    { icon: Award, title: 'CTET Qualified', subtitle: 'Both Paper I & II' },
    { icon: Award, title: 'HP TET Qualified', subtitle: 'TGT & JBT Level' },
    { icon: Award, title: 'UGC NET Qualified', subtitle: 'Education Subject' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-sm font-semibold text-primary-300 bg-primary-800 px-4 py-2 rounded-full mb-6">
                Meet Your Instructor
              </span>
              <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Dr. Rajesh Sharma
              </h1>
              <p className="text-xl text-primary-200 mb-4">
                Senior Educator & Teaching Exam Expert
              </p>
              <p className="text-primary-300 text-lg leading-relaxed mb-8">
                With over 8 years of dedicated experience in teacher training, I've helped more than 15,000 aspiring teachers achieve their dreams. My mission is simple: provide quality education that's accessible, affordable, and effective.
              </p>
              
              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {credentials.map((cred, index) => (
                  <div key={index} className="bg-primary-800/50 rounded-xl p-4">
                    <cred.icon className="w-6 h-6 text-primary-300 mb-2" />
                    <p className="text-white font-medium">{cred.title}</p>
                    <p className="text-primary-400 text-sm">{cred.subtitle}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-primary-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                View My Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=face"
                  alt="Dr. Rajesh Sharma"
                  className="w-full h-auto"
                />
                {/* Location Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-slate-900">Based in Shimla</p>
                      <p className="text-sm text-slate-500">Himachal Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <TrustIndicators />

      {/* My Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-50 px-4 py-2 rounded-full mb-4">
              My Journey
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              From Small-Town Teacher to EdTech Educator
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600">
            <div className="bg-primary-50 rounded-2xl p-8 mb-8 relative">
              <Quote className="w-10 h-10 text-primary-300 absolute top-6 left-6" />
              <p className="text-xl text-primary-900 font-medium italic pl-12">
                "I believe every aspiring teacher deserves access to quality preparation, regardless of where they live or what they can afford. That's why I started ShikshaPath."
              </p>
            </div>

            <p>
              My journey in education started in 2012 when I cleared CTET in my first attempt while pursuing my Master's degree. That experience taught me something valuable: with the right strategy and guidance, any exam can be cracked.
            </p>

            <p>
              After completing my Ph.D. in Education from HPU Shimla, I began teaching at local coaching centers. But I noticed a problem – quality teaching was expensive and only available in big cities. Students from rural areas were at a disadvantage.
            </p>

            <p>
              In 2018, I started a YouTube channel to share free content. The response was overwhelming. Students from across Himachal Pradesh, and eventually from all over India, started reaching out for guidance.
            </p>

            <p>
              That's when ShikshaPath Academy was born in 2020 – a platform designed to provide structured, comprehensive, and affordable preparation for teaching exams. Today, we've helped over 15,000 students achieve their dreams of becoming teachers.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary-700 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              Key Milestones
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900">
              Our Journey So Far
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform lg:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-start gap-6 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} ml-16 lg:ml-0`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                      <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 mt-8 border-4 border-white shadow" />

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-50 px-4 py-2 rounded-full mb-4">
              My Approach
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Teaching Philosophy
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              How I approach teaching that leads to our 89% success rate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">Concept First</h3>
              <p className="text-slate-600 leading-relaxed">
                I don't believe in rote learning. Every topic is explained with underlying concepts so you truly understand what you're studying, not just memorizing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">Exam-Oriented</h3>
              <p className="text-slate-600 leading-relaxed">
                Every lesson is designed with the exam in mind. I analyze previous year papers and teach what actually matters for scoring well.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">Student-Centric</h3>
              <p className="text-slate-600 leading-relaxed">
                Your success is my priority. I'm available for doubts, I listen to feedback, and I continuously improve the course based on student needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary-700 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              Student Success
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Their Words, My Reward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who are preparing for their teaching exams with my guidance. Let's work together towards your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi Dr. Sharma, I'd like to know more about your courses."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              Connect on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
