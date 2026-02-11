import Tees from '../assets/projectsImg/Tees.png';
import Fit from '../assets/projectsImg/fitCompetition.jpg';
import Magessa from '../assets/projectsImg/magessa.png';
import SkinAI from '../assets/projectsImg/skinAI.png';
import HandVirtual from '../assets/projectsImg/handVirtual.jpg';
import DesaKit from '../assets/projectsImg/desaKit.png';
import TasteAI from '../assets/projectsImg/tasteAI.png';
import JavascriptBooks from '../assets/projectsImg/javascriptBooks.png';
import TaskFlow from '../assets/projectsImg/taskFlow.png';
import PhotoBooth from '../assets/projectsImg/photoBooth.png';

export const personalData = [
    { label: 'System Status', value: 'Online', color: 'text-green-500' },
    { label: 'Availability', value: 'Open for Work', color: 'text-white' },
    { label: 'Location', value: 'Tasikmalaya, ID', color: 'text-neutral-400' },
    { label: 'Local Time', value: 'GMT+7', color: 'text-neutral-400' }
]

export const skillsData = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Node.js & Express", level: 70, category: "Backend" },
    { name: "Python", level: 60, category: "AI/ML" },
    { name: "PostgreSQL", level: 60, category: "Database" },
    { name: "Figma", level: 90, category: "Ui Design" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Three.js", level: 60, category: "3D Graphics" },
    { name: "System Design", level: 87, category: "Architecture" }
];

export const projectsData = [
    {
        id: 1,
        title: "SkinAI (Thesis)",
        category: "AI & Computer Vision",
        year: "2026",
        desc: "Facial skin analysis web app integrating MobileNetV2 for classification and MediaPipe Tasks Vision for real-time detection.",
        tech: ["React.js", "TensorFlow.js", "MediaPipe", "Python"],
        image: SkinAI,
        url: "https://skinai-two.vercel.app/",
    },
    {
        id: 2,
        title: "Magessa (E-Office)",
        category: "Enterprise System",
        year: "2025",
        desc: "Mail management system featuring 5-level RBAC (Admin to Staff), digital disposition flow, and QR Code guestbook.",
        tech: ["React.js", "PostgreSQL", "Node.js & Express", "QR Code"],
        image: Magessa,
        url: "https://magessa.vercel.app//",
    },
    {
        id: 3,
        title: "Smart City Tasik",
        category: "Competition Winner",
        year: "2024",
        desc: "Award-winning dashboard integrating public services, data visualization, and civic reporting. Juara Harapan 2 FIT Competition.",
        tech: ["React.js", "Leaflet Maps", "Chart.js", "API"],
        image: Fit,
        url: "https://tasikmalaya-smart-city.vercel.app/",
    },
    {
        id: 4,
        title: "HandRobot 3D",
        category: "Creative Tech / IoT",
        year: "2025",
        desc: "Gesture-controlled virtual robotic arm simulation utilizing hand tracking to manipulate 3D objects in real-time.",
        tech: ["Three.js", "MediaPipe", "React-Three-Fiber", "WebGL"],
        image: HandVirtual,
        url: "https://hand-robot-virtual-3d.vercel.app/",
    }
];

export const additionalProjects = [
    {
        title: "Photo Booth App",
        image: PhotoBooth,
        year: "2025",
        desc: "Interactive web-based photo booth application allowing users to capture moments with custom frames and filters directly from the browser.",
        tech: ["ReactJS (Vite)", "TailwindCSS", "Three.js"],
        url: "https://photo-booth-app-sigma.vercel.app/"
    },
    {
        title: "Task Flow App",
        image: TaskFlow,
        year: "2025",
        desc: "A streamlined productivity application designed to manage tasks and enhance workflow efficiency with a modern, intuitive interface.",
        tech: ["ReactJS (Vite)", "TailwindCSS", "Three.js"],
        url: "https://task-flow-pink-omega.vercel.app/"
    },
    {
        title: "Recipe Recomendation",
        image: TasteAI,
        year: "2025",
        desc: "AI-powered culinary assistant (TASTE-AI) that provides personalized food and recipe recommendations using the Groq AI model.",
        tech: ["ReactJS (Vite)", "TailwindCSS", "Three.js"],
        url: "https://tasteai-recipe-assistant.vercel.app/"
    },
    {
        title: "Javascript Books",
        image: JavascriptBooks,
        year: "2025",
        desc: "A curated digital library and documentation platform built to track and showcase my personal journey in mastering JavaScript.",
        tech: ["ReactJS (Vite)", "TailwindCSS", "Three.js"],
        url: "https://javascript-books.vercel.app/"
    },
    {
        title: "Village Website Builder",
        image: DesaKit,
        year: "2025",
        desc: "DesaKit: A SaaS platform designed to simplify the creation of professional and functional websites for village administrations.",
        tech: ["ReactJS (Vite)", "TailwindCSS", "Three.js"],
        url: "https://desakit-app.vercel.app/"
    },
    {
        title: "TEES E-Commerce",
        image: Tees,
        year: "2025",
        desc: "A modern e-commerce landing page submission for WDC Competition, focused on delivering a seamless shopping experience for apparel.",
        tech: ["ReactJS (Vite)", "TailwindCSS", "Three.js"],
        url: "https://tees-lombawdc.vercel.app/"
    }
];

export const experiencesData = [
    {
        role: "AI Web Developer (Thesis)",
        company: "University Final Project",
        period: "2026 - Present",
        location: "Academic Research",
        achievements: [
            "Developed a facial skin analysis web app integrating MobileNetV2 model for classifying skin types (acne, oily, normal)",
            "Implemented MediaPipe Tasks Vision for precise real-time facial detection and analysis on the web",
            "Built a recommendation engine using clustering algorithms to suggest skincare active ingredients based on analysis results"
        ]
    },
    {
        role: "Frontend Learner",
        company: "Self-Paced Learning",
        period: "2024 - Present",
        location: "Remote",
        achievements: [
            "Dedicating 1+ year to mastering JavaScript and React.js ecosystem",
            "Building personal projects to implement modern web development concepts",
            "Explored routing, state management, and component lifecycle independently"
        ]
    },
    {
        role: "Web Development Finalist",
        company: "FIT COMPETITION 2024",
        period: "2024",
        location: "National Event",
        achievements: [
            "Secured 'Juara Harapan 2' in the Web Development competition category",
            "Competed against university students nationwide in technical challenges",
            "Demonstrated ability to deliver functional web solutions under time pressure"
        ]
    },
    {
        role: "IT Intern (KP)",
        company: "Bappelitbangda Kota Tasikmalaya",
        period: "Internship Period",
        location: "Tasikmalaya, ID",
        achievements: [
            "Built mail management system with 5 roles: Admin, Kepala Kantor, Sekretaris, Kabid, & Staff",
            "Implemented a Guest Book feature utilizing QR Code technology",
            "Developed comprehensive documentation features for photos and activity logs"
        ]
    },
    {
        role: "Web Developer (KKN)",
        company: "Community Service Program",
        period: "KKN Period",
        location: "Tasikmalaya Region",
        achievements: [
            "Built a comprehensive Village Portfolio Website to digitalize local information",
            "Showcased village potential and demographics to a wider audience",
            "Collaborated with village officials to design a representative digital profile"
        ]
    }
];