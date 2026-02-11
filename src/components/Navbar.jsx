import { useState } from "react";
import {
  motion,
  AnimatePresence
} from 'framer-motion';
import { navItemsData } from "../data/navItemsData"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
                {navItemsData.map((item, i) => (
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

            {/* Right Side: Gradient Preview Area */}
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
                    {/* The Gradient Background (Replaces <img>) */}
                    <div 
                        className="w-full h-full opacity-60"
                        style={{ background: navItemsData[hoveredIndex].gradient }}
                    />

                    {/* Overlay Gradient (Keeping this to blend edges seamlessly) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/20" />

                    {/* Floating Label */}
                    <div className="absolute bottom-12 right-12 text-right">
                      <p className="text-white text-3xl font-light">{navItemsData[hoveredIndex].name}</p>
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
export default Navbar;