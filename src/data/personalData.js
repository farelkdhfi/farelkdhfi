import Tees from '../assets/projectsImg/Tees.png';
import Fit from '../assets/projectsImg/tasik.png';
import Magessa from '../assets/projectsImg/magessa.png';
import SkinAI from '../assets/projectsImg/skinAI.png';
import HandVirtual from '../assets/projectsImg/handVirtualRobot.png';
import DesaKit from '../assets/projectsImg/desaKit.png';
import TasteAI from '../assets/projectsImg/tasteAI.png';
import JavascriptBooks from '../assets/projectsImg/javascriptBooks.png';
import TaskFlow from '../assets/projectsImg/taskFlow2.png';
import NeoBooth from '../assets/projectsImg/neobooth.png';
import Notetily from '../assets/projectsImg/notetily.png';
import Duora from '../assets/projectsImg/duora.png';
import LampiranCepat from '../assets/projectsImg/lampiranCepatAI.png';

export const personalData = [
  { label: 'System Status', value: 'Online', color: 'text-emerald-500' },
  { label: 'Availability', value: 'Open for Work', color: 'text-white' },
  { label: 'Location', value: 'Tasikmalaya, ID', color: 'text-neutral-400' },
  { label: 'Local Time', value: 'GMT+7', color: 'text-neutral-400' },
];

export const skillsData = [
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'Node.js & Express', level: 70, category: 'Backend' },
  { name: 'Python', level: 60, category: 'AI/ML' },
  { name: 'PostgreSQL', level: 60, category: 'Database' },
  { name: 'Figma', level: 90, category: 'UI Design' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Three.js', level: 60, category: '3D Graphics' },
  { name: 'System Design', level: 87, category: 'Architecture' },
];

export const projectsData = [
  {
    id: 1,
    title: 'SkinAI',
    category: 'AI & Computer Vision',
    year: '2026',
    label: 'Thesis Project',
    desc: 'Facial skin analysis web application integrating MobileNetV2 for classification and MediaPipe Tasks Vision for real-time facial detection.',
    tech: [
      'React.js',
      'TensorFlow',
      'MediaPipe',
      'Python',
      'Node.js',
      'PostgreSQL',
    ],
    image: SkinAI,
    url: 'https://skinai.my.id',
  },
  {
    id: 2,
    title: 'Duora',
    category: 'Couple App',
    year: '2026',
    label: 'Thesis Project',
    desc: 'Relationship-focused web application designed to help couples grow together through shared goals, planning, daily check-ins, savings, and AI-powered mediation.',
    tech: [
      'Next.js',
      'TypeScript',
      'Groq',
      'OpenRouter',
      'PostgreSQL',
    ],
    image: Duora,
    url: 'https://duora.vercel.app/',
  },
  {
    id: 3,
    title: 'Magessa',
    category: 'Enterprise System',
    year: '2025',
    label: 'E-Office',
    desc: 'Mail management system featuring 5-level RBAC, digital disposition flow, and QR Code guestbook.',
    tech: ['React.js', 'PostgreSQL', 'Node.js', 'QR Code'],
    image: Magessa,
    url: 'https://magessa.vercel.app/',
  },
  {
    id: 4,
    title: 'Notetily',
    category: 'Productivity App',
    year: '2025',
    label: 'Personal Project',
    desc: 'A modern note-taking web application designed to organize, manage, and access personal notes through a clean and intuitive interface.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
    image: Notetily,
    url: 'https://notetily.vercel.app/',
  },
  {
    id: 5,
    title: 'HandRobot 3D',
    category: 'Creative Technology',
    year: '2025',
    label: 'Interactive 3D',
    desc: 'Gesture-controlled virtual robotic arm simulation utilizing hand tracking to manipulate 3D objects in real-time.',
    tech: ['Three.js', 'MediaPipe', 'React Three Fiber', 'WebGL'],
    image: HandVirtual,
    url: 'https://hand-robot-virtual-3d.vercel.app/',
  },
  {
    id: 6,
    title: 'LampiraCepat.AI',
    category: 'AI Productivity',
    year: '2025',
    label: 'AI Application',
    desc: 'AI-powered document processing application designed to simplify the preparation and management of administrative attachments.',
    tech: ['React.js', 'AI', 'Python', 'TailwindCSS'],
    image: LampiranCepat,
    url: 'https://lampirancepat.vercel.app/',
  },
];

export const additionalProjects = [
  {
    title: 'Photo Booth App',
    image: NeoBooth,
    year: '2025',
    desc: 'Interactive web-based photo booth application allowing users to capture moments with custom frames and filters directly from the browser.',
    tech: ['ReactJS', 'TailwindCSS', 'Three.js'],
    url: 'https://photo-booth-app-sigma.vercel.app/',
  },
  {
    title: 'Task Flow App',
    image: TaskFlow,
    year: '2025',
    desc: 'A streamlined productivity application designed to manage tasks and enhance workflow efficiency with a modern, intuitive interface.',
    tech: ['ReactJS', 'TailwindCSS', 'Three.js'],
    url: 'https://task-flow-pink-omega.vercel.app/',
  },
  {
    title: 'TasteAI',
    image: TasteAI,
    year: '2025',
    desc: 'AI-powered culinary assistant that provides personalized food and recipe recommendations using the Groq AI model.',
    tech: ['ReactJS', 'TailwindCSS', 'Groq AI'],
    url: 'https://tasteai-recipe-assistant.vercel.app/',
  },
  {
    title: 'Javascript Books',
    image: JavascriptBooks,
    year: '2025',
    desc: 'A curated digital library and documentation platform built to track and showcase my journey in mastering JavaScript.',
    tech: ['ReactJS', 'TailwindCSS', 'JavaScript'],
    url: 'https://javascript-books.vercel.app/',
  },
  {
    title: 'Village Website Builder',
    image: DesaKit,
    year: '2025',
    desc: 'DesaKit is a SaaS platform designed to simplify the creation of professional websites for village administrations.',
    tech: ['ReactJS', 'TailwindCSS', 'SaaS'],
    url: 'https://desakit-app.vercel.app/',
  },
  {
    title: 'TEES E-Commerce',
    image: Tees,
    year: '2025',
    desc: 'A modern e-commerce landing page submission for WDC Competition focused on delivering a seamless shopping experience for apparel.',
    tech: ['ReactJS', 'TailwindCSS', 'UI Design'],
    url: 'https://tees-lombawdc.vercel.app/',
  },
];

export const experiencesData = [
  {
    role: 'AI Web Developer',
    company: 'University Final Project',
    period: '2026 — Present',
    location: 'Academic Research',
    achievements: [
      'Developed a facial skin analysis web app integrating MobileNetV2 for classifying skin types.',
      'Implemented MediaPipe Tasks Vision for precise real-time facial detection and analysis.',
      'Built a recommendation engine using clustering algorithms to suggest skincare active ingredients.',
    ],
  },
  {
    role: 'Frontend Learner',
    company: 'Self-Paced Learning',
    period: '2024 — Present',
    location: 'Remote',
    achievements: [
      'Dedicating 1+ year to mastering JavaScript and the React.js ecosystem.',
      'Building personal projects to implement modern web development concepts.',
      'Explored routing, state management, and component architecture independently.',
    ],
  },
  {
    role: 'Web Development Finalist',
    company: 'FIT Competition 2024',
    period: '2024',
    location: 'National Event',
    achievements: [
      "Secured 'Juara Harapan 2' in the Web Development competition category.",
      'Competed against university students nationwide in technical challenges.',
      'Delivered functional web solutions under significant time pressure.',
    ],
  },
  {
    role: 'IT Intern',
    company: 'Bappelitbangda Kota Tasikmalaya',
    period: 'Internship',
    location: 'Tasikmalaya, ID',
    achievements: [
      'Built a mail management system with five different roles and permission levels.',
      'Implemented a guest book feature utilizing QR Code technology.',
      'Developed documentation features for photos and activity logs.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Community Service Program',
    period: 'KKN Period',
    location: 'Tasikmalaya Region',
    achievements: [
      'Built a comprehensive Village Portfolio Website to digitalize local information.',
      'Showcased village potential and demographics to a wider audience.',
      'Collaborated with village officials to design a representative digital profile.',
    ],
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