import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "0.5+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Coding Problems Solved", value: "500+" },
  { label: "Certifications", value: "6+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in India,Madhya Pradesh" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "CS Graduate from Amity University" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];


export const userReviewData = [
  {
    id: 1,
    name: "Competitive Programming",
    profession: "Problem Solving & Algorithms",
    userImage: "/images/u1.jpg",
    review:
      "Solved 500+ coding problems across platforms like LeetCode, CodeChef, and HackerRank. Developed strong expertise in Data Structures, Algorithms, and problem-solving techniques.",
  },
  {
    id: 2,
    name: "TCS CodeVita Achievement",
    profession: "Programming Competition",
    userImage: "/images/u2.jpg",
    review:
      "Secured All India Rank 3986 in TCS CodeVita Season 13 Round 1 (2025), demonstrating strong logical thinking and competitive programming ability.",
  },
  {
    id: 3,
    name: "Oracle Cloud Certification",
    profession: "AI & Cloud Technologies",
    userImage: "/images/u3.jpg",
    review:
      "Earned the Oracle Cloud Infrastructure 2025 AI Foundations Associate certification, strengthening knowledge in artificial intelligence concepts and cloud technologies.",
  },
  {
    id: 4,
    name: "GitHub & Development",
    profession: "Open Source & Projects",
    userImage: "/images/u4.jpg",
    review:
      "Built multiple full-stack MERN and AI projects including Doctor Appointment Booking System, Medicinal Herbal AI Chatbot, and E-commerce platform, showcasing practical development skills on GitHub.",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shiva18021912@gmail.com",
    href: "mailto:shiva18021912@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6263436913",
    href: "tel:+916263436913",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India, Madhya Pradesh",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/rajawatshivpratap46", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/shiva-rajawat/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Web Development Intern",
    company: "Zaalima Development Pvt. Ltd.",
    period: "Mar 2026 - Jun 2026",
    description:
      "Selected for a remote Web Development Internship at Zaalima Development Pvt. Ltd. Worked on real-world web development projects, contributing to frontend and backend features while following professional development practices and deadlines.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
  },
  {
    type: "work",
    title: "Web Development Intern",
    company: "Saanvi Research Hub",
    period: "Jul 2024 - Sep 2024",
    description:
      "Worked as a Web Development Intern where I developed responsive websites and web applications. Implemented modern UI components and collaborated with team members to build interactive client websites.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
  },
  {
    type: "work",
    title: "Full Stack MERN Developer (Projects)",
    company: "Personal & Academic Projects",
    period: "2023 - Present",
    description:
      "Developed multiple full-stack web applications using the MERN stack including a Doctor Appointment Booking System, E-commerce platform, and AI-based chatbots. Implemented authentication, REST APIs, database integration, and responsive UI design.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
  },
  {
    type: "work",
    title: "AI & Machine Learning Developer (Projects)",
    company: "Academic Projects",
    period: "2024 - Present",
    description:
      "Built AI-based applications including Medicinal Herbal AI Chatbot and LLM-based Medical Chatbot using NLP and machine learning techniques. Implemented intelligent query processing and conversational AI systems.",
    technologies: ["Python", "Machine Learning", "NLP", "AI Chatbots", "LangChain"],
  },
  {
    type: "achievement",
    title: "Competitive Programming Achievements",
    company: "LeetCode, CodeChef, HackerRank",
    period: "2023 - Present",
    description:
      "Solved 500+ coding problems across multiple platforms and achieved 1-Star rating on CodeChef. Secured All India Rank 3986 in TCS CodeVita Season 13 Round 1 (2025) and completed a 45-day coding challenge organized by Amity Coding Club.",
    technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    type: "education",
    title: "B.Tech – Computer Science Engineering (AI & ML)",
    company: "Amity University, Madhya Pradesh",
    period: "2022 - 2026",
    description:
      "Pursuing B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning. Developed strong foundation in Data Structures, Algorithms, OOP, Database Systems, and Software Engineering.",
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures",
      "DBMS",
      "Operating Systems",
    ],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/rajawatshivpratap46", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shiva-rajawat/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:shiva18021912@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "Medical AI Chatbot with LLMs",
    description:
      "An AI-powered medical chatbot that uses Large Language Models with LangChain and Pinecone to answer health-related queries. The system retrieves medical knowledge from a vector database and provides intelligent responses through a Flask-based API deployed on AWS.",
    image: "/images/p1.jpg",
    techStack: ["Python", "LangChain", "Pinecone", "Flask", "AWS", "LLMs"],
    demoUrl: "https://example.com",
    githubUrl: "github.com/rajawatshivpratap46/Build-a-Complete-Medical-Chatbot-with-LLMs-LangChain-Pinecone-Flask-AWS",
  },
  {
    title: "Medicinal Herbal AI Chatbot",
    description:
      "An AI chatbot that recommends medicinal herbs based on user symptoms. It provides information about herbal remedies, benefits, and usage using AI-driven responses and a knowledge-based system.",
    image: "/images/p2.jpg",
    techStack: ["Python", "Machine Learning", "Flask", "AI Chatbot", "NLP"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/rajawatshivpratap46/Medicinal_herbal_chatbot",
  },
  {
    title: "Movie Recommender System",
    description:
      "A movie recommendation system that suggests movies based on user preferences using machine learning techniques like cosine similarity and collaborative filtering with a user-friendly interface.",
    image: "/images/p3.jpg",
    techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Streamlit"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/rajawatshivpratap46/Movie-Recommender-System",
  },
  {
    title: "Doctor Appointment Booking System",
    description:
      "A web application that allows patients to book appointments with doctors online. It includes doctor listings, scheduling, patient management, and secure database storage.",
    image: "/images/p4.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/rajawatshivpratap46/prescripto",
  },
  {
    title: "Real-Time Chatting Application",
    description:
      "A real-time messaging application that allows users to chat instantly. It supports live messaging, authentication, and socket-based communication for seamless user interaction.",
    image: "/images/p5.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/rajawatshivpratap46/Chatting-Application",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern developer portfolio website showcasing projects, skills, and experience with responsive design, smooth animations, and project showcases.",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/rajawatshivpratap46/portfolio",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Javascript", icon: FileCode },
      { name: "Redux", icon: Layers },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];