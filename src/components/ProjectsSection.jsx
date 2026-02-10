import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { additionalProjects, projectsData } from "../data/personalData";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    // UPDATE: py-20 px-4 (mobile) -> py-32 px-8 (desktop)
    <section ref={ref} className="min-h-screen bg-[#050505] py-20 px-4 md:py-32 md:px-8 relative overflow-hidden flex flex-col justify-center">

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

      {/* UPDATE: mb-20 (mobile) -> mb-32 (desktop), gap-12 (default) -> gap-12 lg:gap-20 */}
      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20 md:mb-32">

        {/* 2. Navigation / List (Left Side) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <span className="text-xs font-mono text-neutral-500 mb-4 block tracking-widest uppercase">
              // 03 — Selected Works
            </span>
            {/* UPDATE: text-4xl (mobile) -> text-6xl (desktop) */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-white mb-6">
              Case <span className="text-neutral-600">Studies.</span>
            </h2>
          </motion.div>

          <div className="space-y-2 relative">
            {/* Vertical Line Indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            {projectsData.map((project, i) => (
              // PERUBAHAN 1: Mengubah <a> menjadi <div>, menghapus href, mengubah onMouseEnter jadi onClick
              <div
                key={project.id}
                onClick={() => setActiveProject(i)}
                // UPDATE: pl-6 (mobile) -> pl-8 (desktop)
                className="group relative pl-6 md:pl-8 py-3 md:py-4 cursor-pointer transition-all duration-300 block"
              >
                {/* Active Indicator Line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-white origin-top"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeProject === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* UPDATE: text-xl (mobile) -> text-3xl (desktop) */}
                <h3 className={`text-xl md:text-3xl font-light transition-all duration-300 ${activeProject === i ? 'text-white translate-x-2' : 'text-neutral-600 group-hover:text-neutral-400'
                  }`}>
                  {project.title}
                </h3>
                <p className={`text-[10px] md:text-xs uppercase tracking-wider mt-1 transition-all duration-300 ${activeProject === i ? 'text-neutral-400 opacity-100 translate-x-2' : 'opacity-0 h-0 overflow-hidden'
                  }`}>
                  {project.category} — {project.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Showcase Area (Right Side) */}
        {/* UPDATE: h-[500px] (mobile fixed height) -> h-[70vh] (desktop fluid) */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[60vh] lg:h-[70vh] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              {/* PERUBAHAN 2: Link ahref tetap disini (Container Project) */}
              <a
                href={projectsData[activeProject].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {/* Main Image Card */}
                <div className="relative w-full h-full overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl shadow-black/50 cursor-pointer">
                  <img
                    src={projectsData[activeProject].image}
                    alt={projectsData[activeProject].title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                  {/* Floating Content within Image */}
                  {/* UPDATE: p-6 (mobile) -> p-12 (desktop) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* UPDATE: text-base (mobile) -> text-xl (desktop) */}
                      <p className="text-neutral-300 text-base md:text-xl leading-relaxed max-w-lg mb-6 md:mb-8 font-light line-clamp-3 md:line-clamp-none">
                        {projectsData[activeProject].desc}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                        {projectsData[activeProject].tech.map((tech, idx) => (
                          <span key={tech} className="px-2 py-1 md:px-3 md:py-1 bg-white/5 border border-white/10 text-[10px] md:text-xs text-neutral-300 uppercase tracking-wider backdrop-blur-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-white/10">
                        {Object.entries(projectsData[activeProject].metrics).map(([key, value], idx) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                          >
                            {/* UPDATE: text-xl (mobile) -> text-3xl (desktop) */}
                            <p className="text-xl md:text-3xl font-light text-white mb-1 tracking-tight">{value}</p>
                            <p className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest">{key}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* PERUBAHAN 3: UI Hint untuk memberitahu user harus klik gambar */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300"
                      >
                         <div className="h-[1px] w-8 bg-white/30 group-hover:bg-white/80 transition-colors" />
                         <span className="text-[10px] uppercase tracking-[0.2em]">Click frame to view website</span>
                      </motion.div>
                      
                    </motion.div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 border-t border-r border-white/20" />
                </div>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 4. ADDITIONAL PROJECTS (ARCHIVE) */}
      <div className="max-w-7xl mx-auto relative z-10 w-full border-t border-white/10 pt-12 md:pt-16">
        <h3 className="text-2xl font-light text-white mb-8 md:mb-10 tracking-tight">
          Other <span className="text-neutral-600">Experiments.</span>
        </h3>
        {/* UPDATE: grid-cols-1 (mobile) -> grid-cols-3 (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project, idx) => (
            <a key={idx} href={project.url} target="_blank" rel="noopener noreferrer" className="group p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 block">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 object-cover" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg md:text-xl text-neutral-200 font-light group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <span className="text-xs font-mono text-neutral-600 mt-1">{project.year}</span>
              </div>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed line-clamp-3">
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