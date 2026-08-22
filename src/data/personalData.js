import Tees from '../assets/projectsImg/Tees.png';
import Magessa from '../assets/projectsImg/magessa.png';
import SkinAI from '../assets/projectsImg/skinAI.png';
import HandVirtual from '../assets/projectsImg/handVirtualRobot.png';
import TasteAI from '../assets/projectsImg/tasteAI.png';
import JavascriptBooks from '../assets/projectsImg/javascriptBooks.png';
import TaskFlow from '../assets/projectsImg/taskFlow2.png';
import NeoBooth from '../assets/projectsImg/neobooth.png';
import Notetily from '../assets/projectsImg/notetily.png';
import Duora from '../assets/projectsImg/duora.png';
import LampiranCepat from '../assets/projectsImg/lampiranCepatAI.png';
import HakimAI from '../assets/projectsImg/hakimAI.png';

export const personalData = [
  {
    label: 'System Status',
    value: 'Online',
    color: 'text-emerald-500',
  },
  {
    label: 'Availability',
    value: 'Open for Work',
    color: 'text-white',
  },
  {
    label: 'Location',
    value: 'Tasikmalaya, ID',
    color: 'text-neutral-400',
  },
  {
    label: 'Local Time',
    value: 'GMT+7',
    color: 'text-neutral-400',
  },
];

export const skillsData = [
  {
    name: 'React.js',
    level: 90,
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    level: 88,
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    level: 88,
    category: 'Language',
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'Language',
  },
  {
    name: 'TanStack Query',
    level: 82,
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 88,
    category: 'Frontend',
  },
  {
    name: 'Node.js & Express',
    level: 75,
    category: 'Backend',
  },
  {
    name: 'Supabase',
    level: 80,
    category: 'Backend & Database',
  },
  {
    name: 'PostgreSQL',
    level: 70,
    category: 'Database',
  },
  {
    name: 'FastAPI',
    level: 65,
    category: 'Backend',
  },
  {
    name: 'Python',
    level: 60,
    category: 'AI/ML',
  },
  {
    name: 'MediaPipe',
    level: 70,
    category: 'AI/ML',
  },
  {
    name: 'Three.js',
    level: 65,
    category: '3D Graphics',
  },
  {
    name: 'Git',
    level: 85,
    category: 'Tools',
  },
  {
    name: 'Docker',
    level: 65,
    category: 'Tools',
  },
  {
    name: 'Figma',
    level: 90,
    category: 'UI Design',
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'SkinAI',
    category: 'AI & Computer Vision',
    year: '2026',
    label: 'Thesis Project',
    desc: 'AI-powered skin analysis platform using MediaPipe for facial region detection and MobileNetV2 for patch-based skin classification, with interactive heatmaps and a composite facial condition map.',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'FastAPI',
      'Supabase',
      'TanStack Query',
      'MediaPipe',
      'MobileNetV2',
    ],
    image: SkinAI,
    url: 'https://skinai.my.id/',
  },

  {
    id: 2,
    title: 'Duora',
    category: 'AI & Real-Time Application',
    year: '2026',
    label: 'Personal Project',
    desc: 'Relationship management platform featuring shared goals, planning, daily check-ins, savings, and an AI-powered debate system with coordinated real-time interactions.',
    tech: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'TanStack Query',
      'Tailwind CSS',
      'Groq API',
      'OpenRouter API',
    ],
    image: Duora,
    url: 'https://duora-grow-together.vercel.app/',
  },

  {
    id: 3,
    title: 'LampiranCepat.AI',
    category: 'AI Document Automation',
    year: '2025',
    label: 'AI Application',
    desc: 'AI document automation platform that converts receipt and invoice images into eight editable administrative documents, with vendor-based document consolidation and Word/PDF export.',
    tech: [
      'Next.js',
      'TypeScript',
      'Gemini API',
      'OpenRouter API',
    ],
    image: LampiranCepat,
    url: 'https://lampiran-cepat-ai.vercel.app/',
  },

  {
    id: 4,
    title: 'HakimAI',
    category: 'AI & Interactive System',
    year: '2026',
    label: 'AI Application',
    desc: 'Interactive AI courtroom simulator where users can create or select legal cases and assume roles such as judge, prosecutor, lawyer, or defendant in turn-based courtroom conversations.',
    tech: [
      'Next.js',
      'TypeScript',
      'Groq API',
    ],
    image: HakimAI,
    url: 'https://courtroom-ai-simulator.vercel.app/',
  },

  {
    id: 5,
    title: 'Notetily',
    category: 'Productivity & Knowledge Management',
    year: '2025',
    label: 'Personal Project',
    desc: 'Knowledge management app with connected note graphs, folders, favorites, archives, search, and a cleanup system for detecting duplicate, untitled, unorganized, and inactive notes.',
    tech: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
    image: Notetily,
    url: 'https://notetily.vercel.app/',
  },

  {
    id: 6,
    title: 'Magessa',
    category: 'Enterprise System',
    year: '2025',
    label: 'E-Office',
    desc: 'Internal enterprise web application for correspondence and document disposition management with five role-based access levels, internal documentation features, and a QR-code-based guestbook.',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'Supabase',
      'QR Code',
    ],
    image: Magessa,
    url: 'https://magessa.vercel.app/',
  },
];

export const additionalProjects = [
  {
    title: 'TouchlessOS',
    image: HandVirtual,
    year: '2025',
    desc: 'Interactive 3D dashboard controlled through real-time hand tracking, featuring gesture recognition, a robotic hand model, physics-based objects, and dynamic performance modes.',
    tech: [
      'React.js',
      'MediaPipe',
      'Three.js',
      'React Three Fiber',
      'WebGL',
    ],
    url: 'https://hand-robot-virtual-3d.vercel.app/',
  },

  {
    title: 'TasteAI',
    image: TasteAI,
    year: '2025',
    desc: 'AI-powered culinary assistant that generates recipes, provides nutritional information, supports follow-up questions, and offers voice-based recipe playback.',
    tech: [
      'React.js',
      'Tailwind CSS',
      'Groq API',
    ],
    url: 'https://tasteai-recipe-assistant.vercel.app/',
  },

  {
    title: 'Photo Booth App',
    image: NeoBooth,
    year: '2025',
    desc: 'Interactive web-based photo booth application allowing users to capture moments with custom frames and filters directly from the browser.',
    tech: [
      'React.js',
      'Tailwind CSS',
      'Three.js',
    ],
    url: 'https://photo-booth-app-sigma.vercel.app/',
  },

  {
    title: 'TaskFlow',
    image: TaskFlow,
    year: '2025',
    desc: 'Modern productivity application designed to manage tasks and organize workflows through a clean and intuitive interface.',
    tech: [
      'React.js',
      'Tailwind CSS',
      'Three.js',
    ],
    url: 'https://task-flow-pink-omega.vercel.app/',
  },

  {
    title: 'JavaScript Books',
    image: JavascriptBooks,
    year: '2025',
    desc: 'Curated digital library and documentation platform built to track and showcase a journey through JavaScript concepts and learning materials.',
    tech: [
      'React.js',
      'Tailwind CSS',
      'JavaScript',
    ],
    url: 'https://javascript-books.vercel.app/',
  },

  {
    title: 'TEES E-Commerce',
    image: Tees,
    year: '2025',
    desc: 'Frontend e-commerce experience created for a web development competition, focused on apparel browsing and a modern shopping interface.',
    tech: [
      'React.js',
      'Tailwind CSS',
      'UI Design',
    ],
    url: 'https://tees-lombawdc.vercel.app/',
  },
];

export const experiencesData = [
  {
    role: 'IT Intern',
    company: 'Bappelitbangda Kota Tasikmalaya',
    period: 'Jun 2025 — Jul 2025',
    location: 'Tasikmalaya, Indonesia',
    achievements: [
      'Independently developed Magessa, an internal web application for correspondence and document disposition management.',
      'Implemented five role-based access levels: Admin, Head, Secretary, Division Head, and Staff.',
      'Built internal documentation features and a QR-code-based guestbook system.',
      'Developed the application using React.js, Node.js, Express.js, and Supabase.',
    ],
  },
];

export const awardsData = [
  {
    title: '2nd Honorable Mention — Web Development',
    event: 'FIT Competition 2024',
    year: '2024',
    location: 'Satya Wacana Christian University, Salatiga',
    desc: 'Received Juara Harapan 2 in the Web Development category of FIT Competition 2024.',
  },
];

export const socialMediaLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/farelkdhfi',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/setia-farel-muamar-kadhafi',
  },
  {
    name: 'X',
    url: 'https://x.com/farelkdhfi',
  },
];