import { image } from 'framer-motion/client';
import Tees from '../assets/projectsImg/Tees.png';

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
    { name: "PostgreSQL & MongoDB", level: 60, category: "Database" },
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
        year: "2024",
        desc: "Facial skin analysis web app integrating MobileNetV2 for classification and MediaPipe Tasks Vision for real-time detection.",
        tech: ["React.js", "TensorFlow.js", "MediaPipe", "Python"],
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070",
        metrics: { accuracy: "92%", classes: "3 Types", latency: "<200ms" }
    },
    {
        id: 2,
        title: "Magessa (E-Office)",
        category: "Enterprise System",
        year: "2023",
        desc: "Mail management system featuring 5-level RBAC (Admin to Staff), digital disposition flow, and QR Code guestbook.",
        tech: ["Laravel", "React", "MySQL", "QR Code"],
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2074",
        metrics: { roles: "5 Levels", users: "50+", efficiency: "+80%" }
    },
    {
        id: 3,
        title: "Smart City Tasik",
        category: "Competition Winner",
        year: "2024",
        desc: "Award-winning dashboard integrating public services, data visualization, and civic reporting. Juara Harapan 2 FIT Competition.",
        tech: ["React.js", "Leaflet Maps", "Chart.js", "API"],
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070",
        metrics: { rank: "Top 5", features: "12+", uptime: "99%" }
    },
    {
        id: 4,
        title: "HandRobot 3D",
        category: "Creative Tech / IoT",
        year: "2024",
        desc: "Gesture-controlled virtual robotic arm simulation utilizing hand tracking to manipulate 3D objects in real-time.",
        tech: ["Three.js", "MediaPipe", "React-Three-Fiber", "WebGL"],
        image: Tees,
        metrics: { fps: "60", latency: "15ms", joints: "12+" }
    }
];

export const additionalProjects = [
    {
        title: "Desa Cibuniasih",
        image: Tees,
        year: "2023",
        desc: "Comprehensive Village Portfolio Website created during KKN to digitalize local demographics and potential.",
        tech: ["Web Design", "CMS", "SEO"],
        url: "https://tees-lombawdc.vercel.app/"
    },
    {
        title: "TEES Project",
        image: Tees,
        year: "2025",
        desc: "Frontend-only landing page submission for WDC Competition 2025. Focused on advanced CSS and layouting.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        url: "https://tees-lombawdc.vercel.app/"
    },
    {
        title: "TEES Project",
        image: Tees,
        year: "2025",
        desc: "Frontend-only landing page submission for WDC Competition 2025. Focused on advanced CSS and layouting.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        url: "https://tees-lombawdc.vercel.app/"
    },
    {
        title: "TEES Project",
        image: Tees,
        year: "2025",
        desc: "Frontend-only landing page submission for WDC Competition 2025. Focused on advanced CSS and layouting.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        url: "https://tees-lombawdc.vercel.app/"
    },
    {
        title: "TEES Project",
        image: Tees,
        year: "2025",
        desc: "Frontend-only landing page submission for WDC Competition 2025. Focused on advanced CSS and layouting.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        url: "https://tees-lombawdc.vercel.app/"
    },
    {
        title: "TEES Project",
        image: Tees,
        year: "2025",
        desc: "Frontend-only landing page submission for WDC Competition 2025. Focused on advanced CSS and layouting.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        url: "https://tees-lombawdc.vercel.app/"
    },
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