import { skillsData } from '../data/personalData';

const About = () => {
  const categories = [
    'Frontend',
    'Language',
    'Backend',
    'Backend & Database',
    'Database',
    'AI/ML',
    '3D Graphics',
    'Tools',
    'UI Design',
  ];

  return (
    <section
      id="about"
      className="
        bg-[#f5f5f2]
        px-5
        py-20
        sm:px-8
        sm:py-28
        lg:px-10
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= ABOUT INTRO ================= */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-24
          "
        >
          {/* Left */}
          <div>
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-neutral-400
                sm:text-[10px]
                sm:tracking-[0.2em]
              "
            >
              03 — About
            </p>

            <div className="mt-4 max-w-xs sm:mt-6">
              <p
                className="
                  text-[12px]
                  leading-5
                  text-neutral-500
                  sm:text-sm
                  sm:leading-7
                "
              >
                I build thoughtful digital products with a strong focus on
                frontend development, interaction, and practical user
                experiences.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <h2
              className="
                max-w-4xl
                text-[clamp(2.15rem,8vw,3.5rem)]
                font-medium
                leading-[1]
                tracking-[-0.055em]
                text-neutral-950
                sm:text-5xl
                sm:leading-[1.05]
                lg:text-6xl
                lg:leading-[1.08]
              "
            >
              I’m a frontend-focused developer who enjoys turning complex
              ideas into{' '}
              <span className="text-neutral-400">
                useful digital products.
              </span>
            </h2>

            {/* Focus / Currently */}
            <div
              className="
                mt-9
                grid
                gap-8
                border-t
                border-black/[0.08]
                pt-6
                sm:mt-12
                sm:grid-cols-2
                sm:gap-10
                sm:pt-8
              "
            >
              {/* Focus */}
              <div>
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-neutral-400
                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                >
                  Focus
                </p>

                <p
                  className="
                    mt-2.5
                    text-[12px]
                    leading-5
                    text-neutral-600
                    sm:mt-3
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Frontend engineering, React and Next.js applications,
                  interactive interfaces, and modern web architecture.
                </p>
              </div>

              {/* Currently */}
              <div>
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-neutral-400
                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                >
                  Currently
                </p>

                <p
                  className="
                    mt-2.5
                    text-[12px]
                    leading-5
                    text-neutral-600
                    sm:mt-3
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Building with React, Next.js, TypeScript, Supabase, and
                  modern data-fetching tools while exploring AI-powered and
                  computer vision experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TECHNICAL TOOLKIT ================= */}
        <div
          className="
            mt-20
            border-t
            border-black/[0.08]
            pt-7
            sm:mt-32
            sm:pt-8
          "
        >
          {/* Toolkit Header */}
          <div
            className="
              mb-7
              flex
              items-center
              justify-between
              gap-4
              sm:mb-10
            "
          >
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-neutral-400
                sm:text-[10px]
                sm:tracking-[0.2em]
              "
            >
              Technical Toolkit
            </p>

            <p
              className="
                shrink-0
                text-[8px]
                uppercase
                tracking-[0.13em]
                text-neutral-400
                sm:text-[10px]
                sm:tracking-[0.15em]
              "
            >
              {skillsData.length} skills
            </p>
          </div>

          {/* Skills Grid */}
          <div
            className="
              grid
              grid-cols-1
              border-t
              border-black/[0.08]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {categories.map((category, index) => {
              const skill = skillsData.find(
                (item) => item.category === category
              );

              if (!skill) return null;

              return (
                <div
                  key={category}
                  className="
                    min-w-0
                    border-b
                    border-black/[0.08]
                    px-0
                    py-6
                    sm:border-r
                    sm:px-6
                    sm:py-7
                    lg:nth-[4n]:border-r-0
                  "
                >
                  {/* Number + Level */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.14em]
                        text-neutral-400
                        sm:text-[9px]
                        sm:tracking-[0.16em]
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.1em]
                        text-neutral-400
                        sm:text-[9px]
                        sm:tracking-[0.12em]
                      "
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill */}
                  <h3
                    className="
                      mt-5
                      text-base
                      font-medium
                      tracking-[-0.035em]
                      text-neutral-950
                      sm:mt-7
                      sm:text-lg
                    "
                  >
                    {skill.name}
                  </h3>

                  {/* Progress */}
                  <div
                    className="
                      mt-4
                      h-px
                      w-full
                      bg-neutral-200
                      sm:mt-5
                    "
                  >
                    <div
                      className="
                        h-px
                        bg-neutral-950
                        transition-all
                        duration-1000
                      "
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;