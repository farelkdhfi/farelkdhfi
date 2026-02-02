import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useInView,
  AnimatePresence
} from 'framer-motion';

import logoImg from '../assets//logo/logo.png';
import screenCodeImg from '../assets/backgorund/screenCode.png';
import darkCloudImg from '../assets/backgorund/darkcloud.png';

// --- EXPANDED DATA ---
const Scenes = [
  {
    id: 1,
    title: "THE ARCHITECT",
    subtitle: "Setia Farel MK",
    img: logoImg,
    desc: "Full-Stack Web Developer & AI Engineer.\nBridging the void between logic and aesthetics.",
    position: "right"
  },
  {
    id: 2,
    title: "CORE SYSTEM",
    subtitle: "Tech Stack",
    img: screenCodeImg,
    desc: "Precision engineering with React, Node.js, and Python.\nOrchestrating data flow with TensorFlow and Supabase.",
    position: "left"
  },
  {
    id: 3,
    title: "ODYSSEY",
    subtitle: "Experience",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    desc: "Building monument structures in the digital realm.\nHigh-Performance Dashboards & AI Architecture.",
    position: "center"
  },
  {
    id: 4,
    title: "MAGNUM OPUS",
    subtitle: "Selected Works",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    desc: "DERM-AI • FINTRACK PRO • NEURO-UI.\nSolutions that redefine the boundaries of interaction.",
    position: "right-top"
  },
  {
    id: 5,
    title: "NEXUS POINT",
    subtitle: "Contact",
    img: darkCloudImg,
    desc: "Initiate collaboration.\nfarelkadhafi34@gmail.com",
    position: "left-bottom"
  },
  {
    id: 6,
    title: "THE BLUEPRINT",
    subtitle: "Portfolio Details",
    img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2053&auto=format&fit=crop", // Gambar Dark/Abstract
    desc: "Simulation complete. Accessing detailed specifications.\nWelcome to the reality below.",
    position: "center"
  }
];

const Skills = [
  { name: "React & Next.js", level: 95, category: "Frontend" },
  { name: "Node.js & Express", level: 90, category: "Backend" },
  { name: "Python & TensorFlow", level: 88, category: "AI/ML" },
  { name: "PostgreSQL & MongoDB", level: 85, category: "Database" },
  { name: "Docker & AWS", level: 82, category: "DevOps" },
  { name: "TypeScript", level: 93, category: "Language" },
  { name: "Three.js & WebGL", level: 78, category: "3D Graphics" },
  { name: "System Design", level: 87, category: "Architecture" }
];

const Projects = [
  {
    id: 1,
    title: "DERM-AI",
    category: "Healthcare AI",
    year: "2024",
    desc: "Deep learning platform for dermatological diagnosis with 94% accuracy",
    tech: ["TensorFlow", "React", "FastAPI", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    metrics: { users: "10K+", accuracy: "94%", speed: "2.3s" }
  },
  {
    id: 2,
    title: "FINTRACK PRO",
    category: "FinTech",
    year: "2024",
    desc: "Real-time financial analytics dashboard with predictive modeling",
    tech: ["Next.js", "D3.js", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    metrics: { transactions: "1M+", latency: "50ms", uptime: "99.9%" }
  },
  {
    id: 3,
    title: "NEURO-UI",
    category: "Design System",
    year: "2023",
    desc: "Adaptive component library with AI-powered theme generation",
    tech: ["React", "Tailwind", "Storybook", "GPT-4"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064",
    metrics: { components: "120+", themes: "500+", downloads: "50K+" }
  },
  {
    id: 4,
    title: "QUANTUM SYNC",
    category: "Collaboration",
    year: "2023",
    desc: "Real-time collaborative workspace with end-to-end encryption",
    tech: ["WebRTC", "Socket.io", "MongoDB", "Docker"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    metrics: { users: "5K+", rooms: "10K+", latency: "100ms" }
  }
];

const Experiences = [
  {
    role: "Lead AI Engineer",
    company: "TechVision Labs",
    period: "2023 - Present",
    location: "Remote",
    achievements: [
      "Architected ML pipeline processing 10M+ data points daily",
      "Reduced model inference time by 60% through optimization",
      "Led team of 8 engineers in developing computer vision solutions"
    ]
  },
  {
    role: "Senior Full-Stack Developer",
    company: "Digital Forge Inc",
    period: "2021 - 2023",
    location: "San Francisco, CA",
    achievements: [
      "Built microservices architecture handling 100K req/min",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
      "Mentored 12 junior developers in modern web practices"
    ]
  },
  {
    role: "Software Engineer",
    company: "StartupHub",
    period: "2019 - 2021",
    location: "Jakarta, ID",
    achievements: [
      "Developed 15+ production-ready web applications",
      "Optimized database queries improving response time by 70%",
      "Introduced code review culture and testing standards"
    ]
  }
];

// --- CURSOR FOLLOWER ---
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'BUTTON' || target.tagName === 'A');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 2 : 1
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </>
  );
};

// --- ENHANCED NAVBAR WITH MENU ---
// --- NAVBAR (CINEMATIC COMMAND CENTER) ---
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Data Menu dengan Image Preview
  const navItems = [
    { name: 'About', number: '01', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070' },
    { name: 'Skills', number: '02', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070' },
    { name: 'Projects', number: '03', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072' },
    { name: 'Experience', number: '04', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965' },
    { name: 'Contact', number: '05', img: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074' }
  ];

  return (
    <>
      {/* 1. The Fixed Bar */}
      <nav className="fixed top-0 left-0 w-full px-8 py-8 z-[100] flex justify-between items-center mix-blend-difference text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="z-[101]"
        >
          <span className="text-xl font-bold tracking-tighter cursor-pointer select-none">
            SFMK<span className="text-neutral-500">.</span>
          </span>
        </motion.div>

        {/* Menu Trigger Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="group z-[101] flex items-center gap-4 cursor-pointer focus:outline-none"
        >
          <span className="text-xs uppercase tracking-[0.3em] hidden md:block group-hover:opacity-70 transition-opacity">
            {menuOpen ? 'Close' : 'Menu'}
          </span>
          <div className="w-8 h-8 flex flex-col justify-center items-end gap-1.5">
            <motion.div
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 6 : 0,
                width: menuOpen ? 32 : 32
              }}
              className="h-[2px] bg-white origin-center transition-all duration-300 w-8"
            />
            <motion.div
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -6 : 0,
                width: menuOpen ? 32 : 24
              }}
              className="h-[2px] bg-white origin-center transition-all duration-300 w-6 group-hover:w-8"
            />
          </div>
        </motion.button>
      </nav>

      {/* 2. The Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5 } }}
            className="fixed inset-0 bg-[#0a0a0a] z-[99] flex flex-col md:flex-row"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Left Side: Navigation Links */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 relative z-10">
              <div className="space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 md:gap-8 overflow-hidden">
                      <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors duration-300">
                        {item.number}
                      </span>
                      <h2 className="text-5xl md:text-7xl font-light text-neutral-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 ease-out">
                        {item.name}
                      </h2>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Socials Footer in Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-12 left-8 md:left-20 flex gap-6"
              >
                {['GitHub', 'LinkedIn', 'Twitter'].map(social => (
                  <a key={social} href="#" className="text-xs text-neutral-600 hover:text-white uppercase tracking-wider transition-colors">
                    {social}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Side: Image Preview Area */}
            <div className="hidden md:block w-1/2 h-full relative overflow-hidden bg-neutral-900 border-l border-white/5">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null && (
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0"
                  >
                    {/* The Image */}

                    <img
                      src={navItems[hoveredIndex].img}
                      alt="Menu Preview"
                      className="w-full h-full object-cover opacity-60"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/20" />

                    {/* Floating Label */}
                    <div className="absolute bottom-12 right-12 text-right">
                      <p className="text-white text-3xl font-light">{navItems[hoveredIndex].name}</p>
                      <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest mt-1">Explore Section</p>
                    </div>
                  </motion.div>
                )}

                {/* Default State (When nothing hovered) */}
                {hoveredIndex === null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-[spin_10s_linear_infinite]">
                        <span className="text-white/20 text-xs">✦</span>
                      </div>
                      <p className="text-neutral-700 text-xs uppercase tracking-[0.4em]">Select Navigation</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- IMAGE LAYOUT LOGIC ---
// --- LAYOUT LOGIC (REFINED) ---
const getImageLayout = (position) => {
  const layouts = {
    right: {
      container: "flex-col md:flex-row-reverse",
      imageWrap: "w-full md:w-[50%] h-[50vh] md:h-[85vh]",
      contentWrap: "w-full md:w-[50%] px-6 md:pl-24 md:pr-12",
      align: "items-start md:items-center text-left"
    },
    left: {
      container: "flex-col md:flex-row",
      imageWrap: "w-full md:w-[50%] h-[50vh] md:h-[85vh]",
      contentWrap: "w-full md:w-[50%] px-6 md:pr-24 md:pl-12",
      align: "items-start md:items-center text-left"
    },
    center: {
      container: "flex-col",
      imageWrap: "w-full md:w-[70%] h-[40vh] md:h-[65vh] mx-auto",
      contentWrap: "w-full px-6 mt-8 md:mt-12 text-center",
      align: "items-center justify-center"
    },
    'right-top': {
      container: "flex-col md:flex-row-reverse",
      imageWrap: "w-full md:w-[45%] h-[45vh] md:h-[70vh]",
      contentWrap: "w-full md:w-[55%] px-6 md:pl-20 md:pr-12 pt-0 md:pt-32",
      align: "items-start justify-start text-left"
    },
    'left-bottom': {
      container: "flex-col md:flex-row",
      imageWrap: "w-full md:w-[45%] h-[45vh] md:h-[75vh]",
      contentWrap: "w-full md:w-[55%] px-6 md:pr-20 md:pl-12 pb-0 md:pb-32",
      align: "items-end justify-end text-right"
    }
  };
  return layouts[position] || layouts.right;
};

// --- ELEGANT PARALLAX SCENE ---
// --- ELEGANT PARALLAX SCENE (UPDATED FOR SMOOTH EXIT) ---
const Scene = ({ data, index, scrollIndex, totalScenes }) => {
  const layout = getImageLayout(data.position);
  const isLastScene = index === totalScenes - 1;

  // -- ANIMATION HOOKS --

  // Logic Opacity Khusus:
  // Jika ini scene terakhir, dia tidak akan fade out ke 0 di akhir, tapi stay di 1.
  // Ini membuat transisi ke section HTML biasa (Skills) jadi mulus tanpa flash hitam.
  const opacity = useTransform(
    scrollIndex,
    [index - 0.5, index, index + 0.5],
    [0, 1, isLastScene ? 1 : 0]
  );

  // Container Movement
  const yContainer = useTransform(scrollIndex, [index - 1, index + 1], [100, -100]);

  // Deep Parallax
  const yImageInner = useTransform(scrollIndex, [index - 1, index + 1], ["-15%", "15%"]);

  // Image Scale
  const scaleImage = useTransform(scrollIndex, [index - 1, index, index + 1], [1.3, 1, 1.3]);

  // Text Stagger
  const yTitle = useTransform(scrollIndex, [index - 1, index + 1], [150, -150]);
  const ySubtitle = useTransform(scrollIndex, [index - 1, index + 1], [50, -50]);
  const yDesc = useTransform(scrollIndex, [index - 1, index + 1], [100, -100]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#050505]"
      style={{ zIndex: index, opacity }}
    >
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className={`relative w-full h-full flex ${layout.container} ${layout.align} justify-center gap-0 z-10 max-w-[1920px] mx-auto p-4 md:p-0`}>

        {/* --- IMAGE BLOCK --- */}
        <motion.div
          className={`relative ${layout.imageWrap} overflow-hidden shadow-2xl shadow-black/50`}
          style={{ y: yContainer }}
        >
          <div className="w-full h-full relative overflow-hidden bg-neutral-900 border-x border-white/5">
            <motion.img
              src={data.img}
              alt={data.title}
              className="w-full h-[140%] object-cover absolute top-[-20%] left-0 opacity-80"
              style={{
                y: yImageInner,
                scale: scaleImage,
                filter: isLastScene ? "grayscale(100%) contrast(1.2) brightness(0.8)" : "saturate(0.8) contrast(1.1)"
              }}
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>

        {/* --- CONTENT BLOCK --- */}
        <div className={`relative ${layout.contentWrap} flex flex-col justify-center z-20`}>

          <motion.div style={{ y: ySubtitle }} className="mb-4 overflow-hidden flex items-center gap-4 justify-center md:justify-start">
            <span className="text-xs font-mono text-neutral-500">
              {String(data.id).padStart(2, '0')}
            </span>
            <div className="h-px bg-white/30 w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              {data.subtitle}
            </span>
          </motion.div>

          <motion.div style={{ y: yTitle }} className="relative text-center md:text-left">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white mix-blend-difference mb-6">
              {data.title}
            </h2>
          </motion.div>

          <motion.div style={{ y: yDesc }} className={`max-w-md ${layout.align.includes('center') ? 'mx-auto' : ''}`}>
            <p className="text-neutral-400 text-sm md:text-lg font-light leading-relaxed whitespace-pre-line tracking-wide border-l-2 border-white/10 pl-6 text-left">
              {data.desc}
            </p>
          </motion.div>

          {/* KHUSUS UNTUK SCENE TERAKHIR: INDIKATOR SCROLL KE BAWAH */}
          {isLastScene && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
              className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">Dive In</span>
              <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
          )}

        </div>
      </div>
    </motion.div>
  );
};

// --- SKILLS SECTION ---
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] py-32 px-8 relative overflow-hidden flex flex-col justify-center">
      <div className=" mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12"
        >
          <div>
            <span className="text-xs font-mono text-neutral-500 mb-4 block tracking-widest uppercase">
              // 02 — Competencies
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
              Technical<br />
              <span className="text-neutral-600">Proficiency.</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm leading-relaxed mb-2">
            A curated list of technologies and tools used to engineer scalable digital solutions.
          </p>
        </motion.div>

        {/* The Elegant List */}
        <div className="grid grid-cols-4 gap-5 px-16" onMouseLeave={() => setHoveredSkill(null)}>
          {Skills.map((skill, i) => (
            <SkillRow
              key={skill.name}
              data={skill}
              index={i}
              isHovered={hoveredSkill === i}
              isAnyHovered={hoveredSkill !== null}
              onHover={() => setHoveredSkill(i)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component for individual rows to keep code clean
const SkillRow = ({ data, index, isHovered, isAnyHovered, onHover, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseEnter={onHover}
      className={`relative group cursor-pointer border-b border-white/5 py-10 transition-all duration-500 ease-out ${isAnyHovered && !isHovered ? 'opacity-20 blur-[3px]' : 'opacity-100'
        }`}
    >
      <div className="flex items-baseline justify-between relative z-10">
        <div className="flex items-baseline gap-4 md:gap-12">
          {/* Index Number */}
          <span className="font-mono text-xs text-neutral-600 w-8">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Skill Name */}
          <h3 className="text-lg font-light tracking-tight text-white transition-transform duration-500 group-hover:translate-x-4">
            {data.name}
          </h3>
        </div>

        {/* Right Side Info */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">
            {data.category}
          </span>

          {/* Percentage (Only fully visible on hover) */}
          <div className="relative overflow-hidden h-8 md:h-12 flex items-center">
            <motion.span
              className="text-xl md:text-3xl font-light text-white tabular-nums block"
              initial={{ y: "100%" }}
              animate={{ y: isHovered ? "0%" : "100%" }}
              transition={{ duration: 0.4, ease: "circOut" }}
            >
              {data.level}%
            </motion.span>
            {/* Default state dot when not hovered */}
            <motion.div
              animate={{ scale: isHovered ? 0 : 1, opacity: isHovered ? 0 : 1 }}
              className="w-1.5 h-1.5 rounded-full bg-neutral-700 absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* Progress Line Background */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-white opacity-50"
        />
        {/* Secondary thinner line for precision feel */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? `${data.level}%` : "0%" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        />
      </div>

      {/* Hover Background Glow */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-900/0 via-neutral-900/40 to-neutral-900/0"
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

// --- PROJECTS SECTION ---
// --- PROJECTS SECTION (CINEMATIC GALLERY) ---
const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] py-32 px-8 relative overflow-hidden flex items-center">

      {/* 1. Dynamic Background Ambience */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center blur-[100px] scale-110"
            style={{ backgroundImage: `url(${Projects[activeProject].image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* 2. Navigation / List (Left Side) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-xs font-mono text-neutral-500 mb-4 block tracking-widest uppercase">
              // 03 — Selected Works
            </span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white mb-6">
              Case <span className="text-neutral-600">Studies.</span>
            </h2>
          </motion.div>

          <div className="space-y-2 relative">
            {/* Vertical Line Indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            {Projects.map((project, i) => (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(i)}
                className="group relative pl-8 py-4 cursor-pointer transition-all duration-300"
              >
                {/* Active Indicator Line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-white origin-top"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeProject === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className={`text-2xl md:text-3xl font-light transition-all duration-300 ${activeProject === i ? 'text-white translate-x-2' : 'text-neutral-600 group-hover:text-neutral-400'
                  }`}>
                  {project.title}
                </h3>
                <p className={`text-xs uppercase tracking-wider mt-1 transition-all duration-300 ${activeProject === i ? 'text-neutral-400 opacity-100 translate-x-2' : 'opacity-0 h-0 overflow-hidden'
                  }`}>
                  {project.category} — {project.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Showcase Area (Right Side) */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-[70vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              {/* Main Image Card */}
              <div className="relative w-full h-full overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl shadow-black/50">
                <img
                  src={Projects[activeProject].image}
                  alt={Projects[activeProject].title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                {/* Floating Content within Image */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-lg mb-8 font-light">
                      {Projects[activeProject].desc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {Projects[activeProject].tech.map((tech, idx) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] md:text-xs text-neutral-300 uppercase tracking-wider backdrop-blur-md">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                      {Object.entries(Projects[activeProject].metrics).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + (idx * 0.1) }}
                        >
                          <p className="text-2xl md:text-3xl font-light text-white mb-1 tracking-tight">{value}</p>
                          <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{key}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/20" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- EXPERIENCE TIMELINE ---
// --- EXPERIENCE SECTION (THE MANIFEST) ---
const ExperienceSection = () => {
  const [activeExp, setActiveExp] = useState(0); // Default open the first one
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] py-32 px-8 relative overflow-hidden flex items-center">
      <div className=" mx-auto relative z-10 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-6xl mx-auto flex items-end justify-between border-b border-white/10 pb-8"
        >
          <div>
            <span className="text-xs font-mono text-neutral-500 mb-4 block tracking-widest uppercase">
              // 04 — Career Path
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
              Professional <span className="text-neutral-600">Journey.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Total Experience
            </p>
            <p className="text-white text-3xl font-light">
              5+ Years
            </p>
          </div>
        </motion.div>

        {/* The Manifest List */}
        <div className="flex flex-col px-16">
          {Experiences.map((exp, i) => {
            const isActive = activeExp === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setActiveExp(isActive ? null : i)}
                className={`group border-b border-white/10 cursor-pointer transition-colors duration-500 ${isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                  }`}
              >
                <div className="py-8 md:py-10 px-2 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                  {/* Column 1: Period & Status */}
                  <div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2">
                    <span className={`font-mono text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-500'
                      }`}>
                      {exp.period}
                    </span>

                    {/* Live Indicator if "Present" */}
                    {exp.period.includes('Present') && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-green-500/80">Active</span>
                      </div>
                    )}
                  </div>

                  {/* Column 2: Role & Company */}
                  <div className="md:col-span-9">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                      <h3 className={`text-3xl md:text-4xl font-light transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                        }`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm md:text-lg text-neutral-500">{exp.company}</span>
                        <span className="text-neutral-700 hidden md:block">/</span>
                        <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider">{exp.location}</span>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 border-t border-white/5 mt-4">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                              {exp.achievements.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.1 + (idx * 0.05) }}
                                  className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed"
                                >
                                  <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- CONTACT SECTION ---
// --- CONTACT SECTION (THE NEXUS) ---
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("farelkadhafi34@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] pt-32 pb-12 px-8 relative overflow-hidden flex flex-col justify-between">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-[#050505] to-[#050505]" />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start"
        >
          {/* Left Side - The Hook */}
          <div>
            <span className="text-xs font-mono text-neutral-500 mb-6 block tracking-widest uppercase">
              // 05 — Initiate Collaboration
            </span>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tighter leading-[0.9] mb-12">
              Let's <br />
              <span className="text-neutral-600">Forge</span> <br />
              Future.
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-md border-l border-white/10 pl-6">
              Ready to engineer the next generation of digital experiences?
              The line is open. Let's discuss your vision.
            </p>
          </div>

          {/* Right Side - The Interface */}
          <div className="flex flex-col justify-end h-full space-y-12">

            {/* Interactive Email Card */}
            <div
              onClick={handleCopyEmail}
              className="group cursor-pointer bg-neutral-900/30 border border-white/10 p-8 hover:bg-neutral-900/50 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Primary Channel</span>
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-green-500 uppercase tracking-widest font-mono"
                    >
                      [ Copied to Clipboard ]
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-neutral-600 uppercase tracking-widest group-hover:text-white transition-colors"
                    >
                      [ Click to Copy ]
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-2xl md:text-4xl font-light text-white font-mono break-all relative z-10">
                farelkadhafi34@gmail.com
              </p>

              {/* Background Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            </div>

            {/* Social Matrix */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                { name: 'GitHub', handle: '@setiafarel', url: '#' },
                { name: 'LinkedIn', handle: '/in/setiafarel', url: '#' },
                { name: 'Twitter', handle: '@setiafarel_dev', url: '#' },
                { name: 'Dribbble', handle: '/setiafarel', url: '#' }
              ].map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center justify-between py-4 border-b border-white/5 group hover:border-white/20 transition-colors"
                >
                  <span className="text-neutral-500 group-hover:text-white transition-colors">{social.name}</span>
                  <span className="text-xs text-neutral-700 font-mono group-hover:text-neutral-400 transition-colors">↗</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer / System Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'System Status', value: 'Online', color: 'text-green-500' },
            { label: 'Availability', value: 'Open for Work', color: 'text-white' },
            { label: 'Location', value: 'Jakarta, ID', color: 'text-neutral-400' },
            { label: 'Local Time', value: 'GMT+7', color: 'text-neutral-400' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-mono">{stat.label}</span>
              <span className={`text-sm font-medium ${stat.color} flex items-center gap-2`}>
                {stat.label === 'System Status' && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />}
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// --- FOOTER ---
// --- FOOTER (THE MONOLITH) ---
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 md:px-16 border-t border-white/10 relative overflow-hidden">
      <div className=" mx-auto relative z-10">

        {/* Top Section: Navigation & Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Column 1: Brand Identity */}
          <div className="md:col-span-2">
            <a href="#" onClick={scrollToTop} className="text-2xl font-bold tracking-tighter text-white mb-6 block w-fit">
              SFMK<span className="text-neutral-600">.</span>
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-8">
              Crafting scalable digital ecosystems with precision engineering and aesthetic intelligence.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono border border-white/10 w-fit px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Systems Normal</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6">Explore</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Social */}
          <div>
            <h4 className="text-white font-medium mb-6">Connect</h4>
            <ul className="space-y-4">
              {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section: Big Signature */}
        <div className="relative border-t border-white/10 pt-12 mb-12">
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter mx-auto text-white/5 select-none text-center">
            SETIA FAREL
          </h1>

          {/* Floating Back To Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="absolute right-0 top-0 -mt-6 md:-mt-8 bg-neutral-900 border border-white/10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 z-20 group"
          >
            <span className="text-xl group-hover:-translate-y-1 transition-transform">↑</span>
          </motion.button>
        </div>

        {/* Bottom Section: Copyright & Meta */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-600 font-mono uppercase tracking-wider">
          <p>© 2026 Setia Farel MK. All Rights Reserved.</p>

          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          </div>

          <p className="text-neutral-700">
            v2.5.0 — West Java, ID
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP ---
const HomePage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 0.5
  });

  const scrollIndex = useTransform(smoothProgress, [0, 1], [0, Scenes.length - 1]);

  return (
    <>
      <CursorFollower />

      <div ref={containerRef} className="bg-[#050505] relative h-[700vh] text-white selection:bg-white selection:text-black">
        <Navbar />

        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {Scenes.map((scene, i) => (
            <Scene
              key={scene.id}
              data={scene}
              index={i}
              scrollIndex={scrollIndex}
              totalScenes={Scenes.length} // Pass total scenes untuk logic closing
            />
          ))}

          {/* Progress Bar */}
          <div className="absolute right-8 md:right-12 bottom-0 top-0 w-px hidden md:flex flex-col justify-center items-center z-[50] pointer-events-none">
            <div className="h-[200px] w-px bg-neutral-900 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-white"
                style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
          </div>

          {/* Bottom Status */}
          <div className="absolute bottom-8 left-8 z-[50] flex gap-8 text-[10px] text-neutral-600 font-mono tracking-widest uppercase pointer-events-none">
            <span>Scroll to Navigate</span>
            <span className="hidden md:inline">System Status: Online</span>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage