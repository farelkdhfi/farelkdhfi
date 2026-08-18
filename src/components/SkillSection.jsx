import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skillsData } from '../data/personalData';

const SkillRow = ({
  data,
  index,
  isHovered,
  isAnyHovered,
  onHover,
  isInView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        delay: Math.min(index * 0.035, 0.25),
        duration: 0.35,
        ease: 'easeOut',
      }}
      onMouseEnter={onHover}
      className={`group relative cursor-pointer border-b border-white/5 py-6 md:py-10 transition-opacity duration-200 ${
        isAnyHovered && !isHovered ? 'opacity-35' : 'opacity-100'
      }`}
      style={{
        willChange: isInView ? 'opacity, transform' : 'auto',
      }}
    >
      <div className="relative z-10 flex items-baseline justify-between">
        {/* LEFT */}
        <div className="flex items-baseline gap-3 md:gap-12">
          <span className="w-6 font-mono text-[10px] text-neutral-600 md:w-8 md:text-xs">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3
            className={`text-base font-light tracking-tight text-white transition-transform duration-200 ease-out md:text-lg ${
              isHovered
                ? 'translate-x-1 md:translate-x-2'
                : 'translate-x-0'
            }`}
          >
            {data.name}
          </h3>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-1">
          <span
            className={`text-[10px] font-mono uppercase tracking-wider transition-colors duration-150 md:text-xs ${
              isHovered ? 'text-white' : 'text-neutral-500'
            }`}
          >
            {data.category}
          </span>

          {/* LEVEL */}
          <div className="relative flex h-8 items-center overflow-hidden md:h-12">
            <motion.span
              className="block text-xl font-light tabular-nums text-white md:text-3xl"
              initial={false}
              animate={{
                y: isHovered ? '0%' : '100%',
              }}
              transition={{
                duration: 0.22,
                ease: 'easeOut',
              }}
              style={{
                willChange: 'transform',
              }}
            >
              {data.level}%
            </motion.span>

            {/* Default dot */}
            <span
              className={`absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-neutral-700 transition-opacity duration-150 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden bg-neutral-800">
        <motion.div
          className="h-full w-full origin-left bg-white/30"
          initial={false}
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
          style={{
            willChange: 'transform',
          }}
        />

        <motion.div
          className="absolute left-0 top-0 h-full w-full origin-left bg-white"
          initial={false}
          animate={{
            scaleX: isHovered ? data.level / 100 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: 'easeOut',
          }}
          style={{
            willChange: 'transform',
          }}
        />
      </div>

      {/* Static hover background */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-neutral-900/30 to-transparent transition-opacity duration-150 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#050505] px-4 py-20 md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.45,
            ease: 'easeOut',
          }}
          className="mx-auto mb-12 flex max-w-6xl flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:mb-24 md:flex-row md:items-end md:gap-8 md:pb-12"
        >
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-neutral-500">
              // 02 — Competencies
            </span>

            <h2 className="text-4xl font-light tracking-tighter text-white sm:text-5xl md:text-7xl">
              Technical
              <br />
              <span className="text-neutral-600">Proficiency.</span>
            </h2>
          </div>

          <p className="mb-2 max-w-sm text-sm leading-relaxed text-neutral-500">
            A curated list of technologies and tools used to engineer scalable
            digital solutions.
          </p>
        </motion.div>

        {/* SKILLS */}
        <div
          className="grid grid-cols-1 gap-x-12 gap-y-2 px-0 md:grid-cols-2 md:gap-5 md:px-16"
          onMouseLeave={() => setHoveredSkill(null)}
        >
          {skillsData.map((skill, i) => (
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

export default SkillsSection;