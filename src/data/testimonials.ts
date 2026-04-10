export interface Testimonial {
  id: number;
  name: string;
  location: string;
  course: string;
  result: string;
  image: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Shimla, HP",
    course: "CTET Complete Mastery",
    result: "Cleared CTET with 142/150",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "The structured approach and doubt sessions made all the difference. Sir's explanation of Child Development concepts was exceptionally clear. I never felt lost during my preparation.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Kangra, HP",
    course: "HP TET Complete Course",
    result: "HP TET Qualified, Rank 45",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The HP GK section was incredibly thorough. I was worried about state-specific questions, but the course covered everything. The mock tests matched the actual exam pattern perfectly.",
    rating: 5
  },
  {
    id: 3,
    name: "Anita Devi",
    location: "Mandi, HP",
    course: "TGT Arts Foundation",
    result: "Selected as TGT Social Studies",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "After two failed attempts, I joined this course. The conceptual clarity I gained was remarkable. Now I'm teaching at a government school. Forever grateful!",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Solan, HP",
    course: "CTET Crash Course",
    result: "Cleared CTET in first attempt",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "I had only 40 days before my exam. The crash course was perfectly designed for quick revision. The practice tests and strategy tips were game-changers.",
    rating: 5
  },
  {
    id: 5,
    name: "Meera Thakur",
    location: "Kullu, HP",
    course: "CTET Complete Mastery",
    result: "Paper I: 145/150, Paper II: 138/150",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    quote: "What I loved most was the genuine care for students. Questions were answered promptly, and the study material was comprehensive. The best investment I made for my career.",
    rating: 5
  },
  {
    id: 6,
    name: "Amit Verma",
    location: "Una, HP",
    course: "HP TET Complete Course",
    result: "HP TET Qualified",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "Being from a rural area, I couldn't afford expensive coaching. This online course provided quality education at an affordable price. The HP-specific content was exactly what I needed.",
    rating: 5
  }
];
