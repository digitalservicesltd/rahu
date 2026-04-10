export interface Course {
  id: string;
  title: string;
  targetExam: string;
  description: string;
  shortDescription: string;
  duration: string;
  price: number;
  originalPrice: number;
  features: string[];
  syllabus: {
    title: string;
    topics: string[];
  }[];
  whoIsThisFor: string[];
  image: string;
  badge?: string;
  enrolledCount: number;
}

export const courses: Course[] = [
  {
    id: "ctet-complete",
    title: "CTET Complete Mastery",
    targetExam: "CTET Paper I & II",
    description: "A comprehensive preparation program covering Child Development, Pedagogy, Language, Mathematics, Science, and Social Studies. This course is designed to give you conceptual clarity and exam-winning strategies for both Paper I and Paper II.",
    shortDescription: "Complete CTET preparation with in-depth coverage of all subjects for Paper I & II",
    duration: "6 Months",
    price: 4999,
    originalPrice: 7999,
    features: [
      "200+ Hours of Video Lectures",
      "Complete Study Material (PDF)",
      "Previous Year Paper Analysis",
      "Weekly Live Doubt Sessions",
      "15 Full-Length Mock Tests",
      "Topic-wise Practice Questions",
      "WhatsApp Support Group",
      "Valid for 12 Months"
    ],
    syllabus: [
      {
        title: "Child Development & Pedagogy",
        topics: ["Growth & Development Concepts", "Piaget & Vygotsky Theories", "Learning & Motivation", "Individual Differences", "Assessment & Evaluation"]
      },
      {
        title: "Language I & II",
        topics: ["Reading Comprehension", "Grammar & Vocabulary", "Pedagogy of Language Development", "Teaching Strategies"]
      },
      {
        title: "Mathematics",
        topics: ["Number System", "Algebra", "Geometry", "Data Handling", "Mathematical Pedagogy"]
      },
      {
        title: "Environmental Studies / Science / Social Studies",
        topics: ["Content Knowledge", "Pedagogical Approaches", "NCERT-based Concepts", "Teaching Methodologies"]
      }
    ],
    whoIsThisFor: [
      "Aspiring Primary & Upper Primary Teachers",
      "First-time CTET Candidates",
      "Candidates who want structured preparation",
      "Those who have attempted before and need better strategy"
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    badge: "Most Popular",
    enrolledCount: 4250
  },
  {
    id: "tgt-arts",
    title: "TGT Arts Foundation",
    targetExam: "TGT Arts (HP/CBSE)",
    description: "Structured preparation for Trained Graduate Teacher examination in Arts stream. Covers History, Geography, Political Science, and Economics with a focus on Himachal Pradesh state syllabus and pedagogy.",
    shortDescription: "Expert TGT Arts preparation for HP and CBSE teaching positions",
    duration: "4 Months",
    price: 3999,
    originalPrice: 5999,
    features: [
      "150+ Hours of Video Content",
      "State-specific Syllabus Coverage",
      "HP GK & Current Affairs",
      "Bi-weekly Live Classes",
      "10 Full-Length Mock Tests",
      "Interview Preparation Guide",
      "Telegram Support Group",
      "Valid for 10 Months"
    ],
    syllabus: [
      {
        title: "History",
        topics: ["Ancient India", "Medieval India", "Modern India", "World History", "HP History"]
      },
      {
        title: "Geography",
        topics: ["Physical Geography", "Indian Geography", "HP Geography", "Map Work"]
      },
      {
        title: "Political Science & Economics",
        topics: ["Indian Constitution", "Political Theory", "Economic Concepts", "Indian Economy"]
      },
      {
        title: "General Pedagogy",
        topics: ["Teaching Methods", "Classroom Management", "NCF 2005", "Assessment Techniques"]
      }
    ],
    whoIsThisFor: [
      "B.A./M.A. Graduates in Arts Subjects",
      "TGT Arts Exam Aspirants",
      "Candidates preparing for HP TET",
      "Those seeking govt. teaching positions"
    ],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    enrolledCount: 1820
  },
  {
    id: "hp-tet",
    title: "HP TET Complete Course",
    targetExam: "Himachal Pradesh TET",
    description: "Specifically designed for Himachal Pradesh Teacher Eligibility Test. Comprehensive coverage of HP-specific content, local history, geography, and state education policies along with core teaching subjects.",
    shortDescription: "Specialized HP TET preparation with state-specific focus",
    duration: "3 Months",
    price: 2999,
    originalPrice: 4499,
    features: [
      "100+ Hours of Focused Content",
      "HP GK Complete Coverage",
      "HP Current Affairs Updates",
      "Weekly Test Series",
      "8 Full-Length Mock Tests",
      "Previous Year Paper Solutions",
      "WhatsApp Doubt Support",
      "Valid for 8 Months"
    ],
    syllabus: [
      {
        title: "HP General Knowledge",
        topics: ["HP History", "HP Geography", "HP Culture & Festivals", "HP Polity", "Current Affairs"]
      },
      {
        title: "Child Development & Pedagogy",
        topics: ["Learning Theories", "Child Psychology", "Special Education", "Assessment Methods"]
      },
      {
        title: "Subject Content",
        topics: ["Language Skills", "Mathematics Concepts", "Environmental Studies", "Science & Social Science"]
      },
      {
        title: "Teaching Aptitude",
        topics: ["Classroom Teaching", "Lesson Planning", "Evaluation Techniques", "Use of Technology"]
      }
    ],
    whoIsThisFor: [
      "HP Domicile Candidates",
      "Those specifically targeting HP Govt. Schools",
      "Candidates familiar with HP state syllabus",
      "Teachers seeking regularization in HP"
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    badge: "State Special",
    enrolledCount: 2680
  },
  {
    id: "ctet-crash",
    title: "CTET Crash Course",
    targetExam: "CTET Paper I & II",
    description: "Intensive 45-day program for candidates who have basic knowledge and need focused revision and practice. Perfect for those with limited time before the exam.",
    shortDescription: "45-day intensive CTET revision with focused practice",
    duration: "45 Days",
    price: 1999,
    originalPrice: 2999,
    features: [
      "60+ Hours of Revision Videos",
      "Quick Revision Notes",
      "Daily Practice MCQs",
      "5 Full-Length Mock Tests",
      "Exam Strategy Sessions",
      "Last-minute Tips",
      "Telegram Updates",
      "Valid for 3 Months"
    ],
    syllabus: [
      {
        title: "Rapid Revision",
        topics: ["CDP Key Concepts", "Important Theories", "Formula Sheets", "Previous Year Analysis"]
      },
      {
        title: "Practice Focus",
        topics: ["Topic-wise MCQs", "Mixed Practice Sets", "Time-based Tests", "Weak Area Focus"]
      }
    ],
    whoIsThisFor: [
      "Candidates with exam in 1-2 months",
      "Those who completed basic preparation",
      "Working professionals with limited time",
      "Repeat candidates needing quick revision"
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    enrolledCount: 3150
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
