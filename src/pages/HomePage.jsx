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

import { socialMediaLinks } from '../data/socialMedia';
import { experiencesData, personalData, projectsData, skillsData } from '../data/personalData';
import { navItemsData } from '../data/navItemsData';
import { scenesData } from '../data/scenesData';
import CursorFollower from '../components/CursorFollower';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import SkillsSection from '../components/SkillSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

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

  const scrollIndex = useTransform(smoothProgress, [0, 1], [0, scenesData.length - 1]);

  return (
    <>
    <div className='hidden md:block'>
      <CursorFollower />
    </div>

      <div ref={containerRef} className="bg-[#050505] relative h-[700vh] text-white selection:bg-white selection:text-black">
        <Navbar />

        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {scenesData.map((scene, i) => (
            <Scene
              key={scene.id}
              data={scene}
              index={i}
              scrollIndex={scrollIndex}
              totalScenes={scenesData.length}
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