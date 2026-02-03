import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { additionalProjects, projectsData } from "../data/personalData";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] py-32 px-8 relative overflow-hidden flex flex-col justify-center">

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
            style={{ backgroundImage: `url(${projectsData[activeProject].image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">

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

            {projectsData.map((project, i) => (
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
                  src={projectsData[activeProject].image}
                  alt={projectsData[activeProject].title}
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
                      {projectsData[activeProject].desc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {projectsData[activeProject].tech.map((tech, idx) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] md:text-xs text-neutral-300 uppercase tracking-wider backdrop-blur-md">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                      {Object.entries(projectsData[activeProject].metrics).map(([key, value], idx) => (
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

      {/* 4. ADDITIONAL PROJECTS (ARCHIVE) */}
      <div className="max-w-7xl mx-auto relative z-10 w-full border-t border-white/10 pt-16">
        <h3 className="text-2xl font-light text-white mb-10 tracking-tight">
          Other <span className="text-neutral-600">Experiments.</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project, idx) => (
            <a key={idx} href={project.url} target="_blank" rel="noopener noreferrer" className="group p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
              <div>
                <img src={project.image} alt={project.title} className="w-full h-48 brightness-75 hover:brightness-80 transition-all duration-300 object-cover rounded-lg" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl text-neutral-200 font-light group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <span className="text-xs font-mono text-neutral-600">{project.year}</span>
              </div>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] text-neutral-500 border border-white/5 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};
export default ProjectsSection;