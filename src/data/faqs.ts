export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I access the course after enrollment?",
    answer: "Once you complete the payment, you'll receive immediate access via email and WhatsApp. You can access all video lectures, study materials, and mock tests through our learning portal. The login credentials are sent within 5 minutes of successful payment.",
    category: "Access"
  },
  {
    id: 2,
    question: "Are the video lectures available for download?",
    answer: "For security reasons, videos are available for streaming only. However, all PDF study materials, notes, and practice sheets can be downloaded for offline study. The videos are accessible 24/7 on our platform.",
    category: "Access"
  },
  {
    id: 3,
    question: "What if I miss a live session?",
    answer: "All live sessions are recorded and uploaded within 24 hours. You can watch them at your convenience during your subscription period. You can also submit your doubts via our WhatsApp group or the portal's doubt section.",
    category: "Classes"
  },
  {
    id: 4,
    question: "Is the course content updated for the latest exam pattern?",
    answer: "Yes, absolutely. Our courses are updated regularly to reflect the latest exam patterns, syllabus changes, and NCERT updates. When significant changes occur, we add supplementary materials at no extra cost.",
    category: "Content"
  },
  {
    id: 5,
    question: "What is the validity period of the course?",
    answer: "Each course has a specific validity period mentioned on the course page. For example, the CTET Complete Mastery course is valid for 12 months. You can extend the validity if needed at a minimal cost.",
    category: "Access"
  },
  {
    id: 6,
    question: "Do you provide refunds if I'm not satisfied?",
    answer: "We offer a 7-day refund policy. If you've watched less than 20% of the course content and feel it's not right for you, you can request a full refund within 7 days of enrollment. No questions asked.",
    category: "Payment"
  },
  {
    id: 7,
    question: "Is there any installment option available?",
    answer: "Yes, for courses above ₹3,000, we offer a 2-part installment option. You can pay 60% upfront and the remaining 40% within 30 days. Contact our support team on WhatsApp to arrange this.",
    category: "Payment"
  },
  {
    id: 8,
    question: "How are doubts resolved?",
    answer: "We have multiple doubt resolution channels: 1) Weekly live doubt sessions where you can ask questions directly, 2) WhatsApp support group with response within 4-6 hours, 3) Doubt submission portal for detailed answers within 24 hours.",
    category: "Support"
  },
  {
    id: 9,
    question: "Which device can I use to access the course?",
    answer: "Our platform works on mobile phones (Android & iOS), tablets, laptops, and desktop computers. You can switch between devices as needed. We recommend a stable internet connection for smooth video streaming.",
    category: "Access"
  },
  {
    id: 10,
    question: "Will this course be enough or do I need additional coaching?",
    answer: "Our courses are designed to be comprehensive and self-sufficient. They cover the complete syllabus, provide ample practice, and include exam strategies. Most of our successful students relied solely on our course without any additional coaching.",
    category: "Content"
  }
];
