import { useInView, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { experiencesData } from "../data/personalData";

const ExperienceSection = () => {
  const [activeExp, setActiveExp] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] py-32 px-8 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">

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
              1+ Years
            </p>
          </div>
        </motion.div>

        {/* The Manifest List */}
        <div className="flex flex-col px-16">
          {experiencesData.map((exp, i) => {
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

export default ExperienceSection;