import { Users, Trophy, BookOpen, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '15,000+',
    label: 'Students Taught',
    description: 'Across all courses'
  },
  {
    icon: Trophy,
    value: '89%',
    label: 'Success Rate',
    description: 'Clear in first attempt'
  },
  {
    icon: BookOpen,
    value: '8+',
    label: 'Years Experience',
    description: 'In teaching exams'
  },
  {
    icon: Clock,
    value: '500+',
    label: 'Hours Content',
    description: 'Video lectures'
  }
];

export function TrustIndicators() {
  return (
    <section className="py-16 lg:py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-800 rounded-2xl mb-4">
                <stat.icon className="w-7 h-7 text-primary-300" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-primary-200 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-primary-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
