import { ArrowUpRight } from 'lucide-react';
import {
  additionalProjects,
  projectsData,
} from '../data/personalData';

const ProjectImage = ({ project, large = false }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-[1.25rem] bg-neutral-100 sm:rounded-[1.5rem]"
    >
      <div
        className={`relative overflow-hidden ${
          large ? 'aspect-[4/3] sm:aspect-[16/9]' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />

        <div
          className="
            absolute bottom-3 right-3
            flex h-9 w-9
            translate-y-1
            items-center justify-center
            rounded-full
            bg-white
            opacity-100
            shadow-xl
            transition-all duration-500
            sm:bottom-4 sm:right-4
            sm:h-10 sm:w-10
            sm:translate-y-2
            sm:opacity-0
            sm:group-hover:translate-y-0
            sm:group-hover:opacity-100
          "
        >
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="sm:h-[15px] sm:w-[15px]"
          />
        </div>
      </div>
    </a>
  );
};

const ProjectMeta = ({ project }) => {
  return (
    <div className="mt-4 sm:mt-5">
      <div className="flex items-start justify-between gap-3 sm:gap-6">
        <div className="min-w-0">
          <p className="mb-1.5 text-[8px] font-medium uppercase tracking-[0.18em] text-neutral-400 sm:mb-2 sm:text-[9px]">
            {project.category}
          </p>

          <h3 className="break-words text-lg font-medium tracking-[-0.045em] text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <span className="shrink-0 pt-0.5 text-[9px] text-neutral-400 sm:pt-1 sm:text-[10px]">
          {project.year}
        </span>
      </div>

      <p className="mt-2.5 max-w-xl text-[12px] leading-5 text-neutral-500 sm:mt-3 sm:text-[13px] sm:leading-6">
        {project.desc}
      </p>

      <div className="mt-3 flex flex-wrap gap-x-2.5 gap-y-1.5 sm:mt-4 sm:gap-x-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-[8px] uppercase tracking-[0.1em] text-neutral-400 sm:text-[9px]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="work"
      className="
        overflow-hidden
        bg-neutral-950
        px-5 py-20
        text-white
        sm:px-8 sm:py-28
        lg:px-10 lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          className="
            mb-14
            flex flex-col
            gap-6
            sm:mb-20
            lg:mb-24
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-[10px]">
              01 — Selected Work
            </p>

            <h2
              className="
                mt-3
                text-[2.75rem]
                font-medium
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                sm:mt-4
                sm:text-6xl
              "
            >
              Selected
              <br />
              <span className="text-neutral-600">work.</span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[12px]
              leading-5
              text-neutral-500
              sm:max-w-xs
              sm:text-sm
              sm:leading-6
              lg:pb-1
          "
          >
            A curated selection of products, experiments, and systems built
            across different areas of web technology.
          </p>
        </div>

        {/* SELECTED PROJECTS */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-8
            gap-y-14
            sm:grid-cols-2
            sm:gap-y-16
            lg:gap-x-10
            lg:gap-y-20
          "
        >
          {projectsData.map((project, index) => (
            <article key={project.id} className="min-w-0">
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <span className="text-[9px] font-medium tracking-[0.15em] text-neutral-600 sm:text-[10px]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-600 sm:text-[10px]">
                  {project.label}
                </span>
              </div>

              <ProjectImage project={project} large />
              <ProjectMeta project={project} />
            </article>
          ))}
        </div>

        {/* MORE WORK */}
        <div className="mt-24 border-t border-white/[0.08] pt-8 sm:mt-32 sm:pt-10 lg:mt-40">
          {/* MORE WORK HEADER */}
          <div
            className="
              mb-8
              flex flex-col
              gap-4
              sm:mb-10
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-600 sm:text-[10px]">
                02 — More Work
              </p>

              <h3 className="mt-2 text-2xl font-medium tracking-[-0.05em] text-white sm:mt-3 sm:text-3xl">
                More experiments.
              </h3>
            </div>

            <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-600 sm:text-[10px]">
              {String(additionalProjects.length).padStart(2, '0')} projects
            </span>
          </div>

          {/* ADDITIONAL PROJECTS */}
          <div
            className="
              grid
              grid-cols-1
              gap-x-5
              gap-y-12
              sm:grid-cols-2
              sm:gap-y-14
              lg:grid-cols-3
              lg:gap-y-16
            "
          >
            {additionalProjects.map((project, index) => (
              <article key={project.title} className="min-w-0">
                <div className="mb-3 flex justify-between text-[8px] uppercase tracking-[0.15em] text-neutral-600 sm:text-[9px]">
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span>{project.year}</span>
                </div>

                <ProjectImage project={project} />

                <div className="mt-3 flex items-start justify-between gap-4 sm:mt-4 sm:gap-5">
                  <div className="min-w-0">
                    <h4 className="break-words text-base font-medium tracking-[-0.04em] text-white sm:text-lg">
                      {project.title}
                    </h4>

                    <p className="mt-1.5 max-w-md text-[11px] leading-5 text-neutral-500 sm:mt-2 sm:text-xs">
                      {project.desc}
                    </p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-0.5
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-neutral-500
                      transition-colors
                      hover:bg-white/[0.06]
                      hover:text-white
                      sm:h-auto
                      sm:w-auto
                      sm:rounded-none
                    "
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.4}
                      className="sm:h-4 sm:w-4"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;