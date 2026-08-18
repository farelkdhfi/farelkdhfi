import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { additionalProjects, projectsData } from '../data/personalData';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const active = projectsData[activeProject];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#050505] px-4 py-20 md:px-8 md:py-32"
    >
      {/* -------------------------------------------------
          BACKGROUND
          ------------------------------------------------- */}

      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Static ambient image */}
        <div
          key={activeProject}
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage: `url(${active.image})`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/70" />
      </div>

      {/* -------------------------------------------------
          MAIN CONTENT
          ------------------------------------------------- */}

      <div className="relative z-10 mx-auto mb-20 grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:mb-32 lg:grid-cols-12 lg:gap-20">
        {/* -------------------------------------------------
            LEFT / NAVIGATION
            ------------------------------------------------- */}

        <div className="flex flex-col justify-center lg:col-span-5">
          {/* Header */}
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
            className="mb-8 md:mb-12"
          >
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-neutral-500">
              // 03 — Selected Works
            </span>

            <h2 className="mb-6 text-4xl font-light tracking-tighter text-white sm:text-5xl md:text-6xl">
              Case <span className="text-neutral-600">Studies.</span>
            </h2>
          </motion.div>

          {/* Project List */}
          <div className="relative space-y-1">
            {/* Static vertical line */}
            <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" />

            {projectsData.map((project, i) => {
              const isActive = activeProject === i;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProject(i)}
                  className={`group relative block w-full cursor-pointer py-3 pl-6 text-left md:py-4 md:pl-8 ${
                    isActive ? 'text-white' : 'text-neutral-600'
                  }`}
                >
                  {/* Active line */}
                  <span
                    className={`absolute bottom-0 left-0 top-0 w-[2px] origin-top bg-white transition-transform duration-200 ease-out ${
                      isActive ? 'scale-y-100' : 'scale-y-0'
                    }`}
                  />

                  {/* Title */}
                  <span
                    className={`block text-xl font-light tracking-tight transition-transform duration-200 ease-out md:text-3xl ${
                      isActive
                        ? 'translate-x-1 md:translate-x-2'
                        : 'translate-x-0 group-hover:text-neutral-400'
                    }`}
                  >
                    {project.title}
                  </span>

                  {/* Meta */}
                  <span
                    className={`block overflow-hidden text-[10px] uppercase tracking-wider transition-[height,opacity,transform] duration-200 md:text-xs ${
                      isActive
                        ? 'mt-1 h-4 translate-x-1 opacity-100 md:translate-x-2'
                        : 'mt-0 h-0 translate-x-0 opacity-0'
                    }`}
                  >
                    {project.category} — {project.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------
            SHOWCASE
            ------------------------------------------------- */}

        <div className="relative h-[500px] w-full md:h-[60vh] lg:col-span-7 lg:h-[70vh]">
          <motion.div
            key={activeProject}
            initial={{
              opacity: 0,
              x: 12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
            className="relative h-full w-full"
            style={{
              willChange: 'transform, opacity',
            }}
          >
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full w-full"
            >
              {/* Main Card */}
              <div className="relative h-full w-full cursor-pointer overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-black/40">
                {/* Image */}
                <img
                  src={active.image}
                  alt={active.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-80 transition-[opacity,transform] duration-500 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                  <div>
                    {/* Description */}
                    <p className="mb-6 line-clamp-3 max-w-lg text-base font-light leading-relaxed text-neutral-300 md:mb-8 md:text-xl md:line-clamp-none">
                      {active.desc}
                    </p>

                    {/* Tech */}
                    <div className="mb-6 flex flex-wrap gap-2 md:mb-8 md:gap-3">
                      {active.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-neutral-300 md:px-3"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link Hint */}
                    <div className="flex items-center gap-2 text-white/50 transition-colors duration-150 group-hover:text-white">
                      <span className="h-px w-8 bg-white/30 transition-colors duration-150 group-hover:bg-white/80" />

                      <span className="text-[10px] uppercase tracking-[0.2em]">
                        Click frame to view website
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner */}
                <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-white/20 md:h-12 md:w-12" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* -------------------------------------------------
          ADDITIONAL PROJECTS
          ------------------------------------------------- */}

      <div className="relative z-10 mx-auto w-full max-w-7xl border-t border-white/10 pt-12 md:pt-16">
        <h3 className="mb-8 text-2xl font-light tracking-tight text-white md:mb-10">
          Other <span className="text-neutral-600">Experiments.</span>
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/5 bg-white/[0.02] p-6 transition-colors duration-200 hover:bg-white/[0.04]"
            >
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover brightness-75 transition-[transform,filter] duration-400 ease-out group-hover:scale-[1.02] group-hover:brightness-100"
                />
              </div>

              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <h4 className="text-lg font-light text-neutral-200 transition-colors duration-150 group-hover:text-white md:text-xl">
                  {project.title}
                </h4>

                <span className="mt-1 font-mono text-xs text-neutral-600">
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-neutral-400">
                {project.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/5 px-2 py-1 text-[10px] text-neutral-500"
                  >
                    {tech}
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