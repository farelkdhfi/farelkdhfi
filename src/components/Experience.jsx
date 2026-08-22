import {
  experiencesData,
  awardsData,
} from '../data/personalData';

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        bg-[#f5f5f2]
        px-5
        pb-20
        sm:px-8
        sm:pb-28
        lg:px-10
        lg:pb-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        {/* Section Header */}
        <div
          className="
            border-t
            border-black/[0.08]
            pt-7
            sm:pt-8
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
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
              04 — Experience
            </p>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.14em]
                text-neutral-400
                sm:text-[9px]
              "
            >
              Professional
            </span>
          </div>
        </div>

        {/* Experience List */}
        <div
          className="
            mt-12
            sm:mt-16
          "
        >
          {experiencesData.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="
                grid
                gap-6
                border-t
                border-black/[0.08]
                py-8
                sm:grid-cols-[120px_1fr_180px]
                sm:gap-10
                sm:py-12
              "
            >
              {/* Mobile / Date */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  sm:block
                "
              >
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.12em]
                    text-neutral-400
                    sm:text-[10px]
                  "
                >
                  {experience.period}
                </span>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.13em]
                    text-neutral-400
                    sm:hidden
                  "
                >
                  {experience.location}
                </span>
              </div>

              {/* Main Content */}
              <div>
                <h3
                  className="
                    text-lg
                    font-medium
                    tracking-[-0.04em]
                    text-neutral-950
                    sm:text-2xl
                  "
                >
                  {experience.role}
                </h3>

                <p
                  className="
                    mt-1
                    text-[11px]
                    text-neutral-400
                    sm:text-xs
                  "
                >
                  {experience.company}
                </p>

                <ul
                  className="
                    mt-5
                    max-w-2xl
                    space-y-2
                    sm:mt-6
                  "
                >
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="
                        flex
                        gap-2.5
                        text-[12px]
                        leading-5
                        text-neutral-500
                        sm:gap-3
                        sm:text-[13px]
                        sm:leading-6
                      "
                    >
                      <span
                        className="
                          mt-[8px]
                          h-1
                          w-1
                          shrink-0
                          rounded-full
                          bg-neutral-300
                          sm:mt-[9px]
                        "
                      />

                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop Location */}
              <div className="hidden sm:block sm:text-right">
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-neutral-400
                  "
                >
                  {experience.location}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            AWARDS & RECOGNITION
        ====================================================== */}

        <div
          className="
            mt-20
            border-t
            border-black/[0.08]
            pt-7
            sm:mt-28
            sm:pt-8
          "
        >
          {/* Awards Header */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
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
              Recognition
            </p>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.14em]
                text-neutral-400
                sm:text-[9px]
              "
            >
              Awards & Honors
            </span>
          </div>

          {/* Awards List */}
          <div
            className="
              mt-10
              sm:mt-12
            "
          >
            {awardsData.map((award) => (
              <article
                key={`${award.event}-${award.title}`}
                className="
                  grid
                  gap-6
                  border-t
                  border-black/[0.08]
                  py-8
                  sm:grid-cols-[120px_1fr_180px]
                  sm:gap-10
                  sm:py-12
                "
              >
                {/* Date */}
                <div>
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-neutral-400
                      sm:text-[10px]
                    "
                  >
                    {award.year}
                  </span>
                </div>

                {/* Main Content */}
                <div>
                  <h3
                    className="
                      text-lg
                      font-medium
                      tracking-[-0.04em]
                      text-neutral-950
                      sm:text-2xl
                    "
                  >
                    {award.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      text-neutral-400
                      sm:text-xs
                    "
                  >
                    {award.event}
                  </p>

                  <p
                    className="
                      mt-5
                      max-w-2xl
                      text-[12px]
                      leading-5
                      text-neutral-500
                      sm:mt-6
                      sm:text-[13px]
                      sm:leading-6
                    "
                  >
                    {award.desc}
                  </p>
                </div>

                {/* Desktop Location */}
                <div className="hidden sm:block sm:text-right">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      leading-5
                      tracking-[0.15em]
                      text-neutral-400
                    "
                  >
                    {award.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;