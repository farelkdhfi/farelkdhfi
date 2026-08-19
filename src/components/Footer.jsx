import { ArrowUpRight } from 'lucide-react';
import { socialMediaLinks } from '../data/personalData';
import me from '../assets/me2.jpg';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-neutral-950
        px-5
        pb-5
        pt-20
        text-white
        sm:px-8
        sm:pb-6
        sm:pt-28
        lg:px-10
        lg:pt-32
      "
    >
      {/* Ambient light */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[12%]
          h-64
          w-64
          rounded-full
          bg-blue-400/[0.05]
          blur-[100px]
          sm:right-[8%]
          sm:top-[18%]
          sm:h-72
          sm:w-72
          sm:blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= MAIN CONTACT ================= */}
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1fr_280px_0.4fr]
            lg:gap-16
          "
        >
          {/* ================= HEADING ================= */}
          <div className="order-1">
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-neutral-600
                sm:text-[10px]
                sm:tracking-[0.2em]
              "
            >
              05 — Contact
            </p>

            <h2
              className="
                mt-5
                max-w-4xl
                text-[clamp(2.9rem,12vw,5rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.065em]
                sm:mt-6
                sm:text-[clamp(4.2rem,8vw,7rem)]
                sm:leading-[0.88]
                sm:tracking-[-0.075em]
                lg:text-[clamp(5rem,8vw,8rem)]
              "
            >
              Let’s build
              <br />
              <span className="text-neutral-600">
                something good.
              </span>
            </h2>
          </div>

          {/* ================= PORTRAIT ================= */}
          <div
            className="
              order-2
              flex
              items-end
              lg:justify-center
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[190px]
                sm:max-w-[220px]
                lg:max-w-[250px]
              "
            >
              {/* Ambient glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-6
                  rounded-full
                  bg-pink-400/[0.035]
                  blur-[60px]
                  sm:-inset-8
                  sm:blur-[70px]
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-full
                "
              >
                <img
                  src={me}
                  alt="Setia Farel Muamar Kadhafi"
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    grayscale-[15%]
                    opacity-90
                    transition-all
                    duration-700
                    hover:scale-[1.02]
                    hover:opacity-100
                    rounded-full
                  "
                />

                {/* Bottom gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* Caption */}
              <div className="mt-2.5 flex items-center justify-between sm:mt-3">
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-neutral-600
                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                >
                  Setia Farel
                </span>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-neutral-700
                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                >
                  2026
                </span>
              </div>
            </div>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div
            className="
              order-3
              lg:pt-12
            "
          >
            <p
              className="
                max-w-sm
                text-[12px]
                leading-5
                text-neutral-500
                sm:text-sm
                sm:leading-7
              "
            >
              Open to frontend engineering opportunities, collaborative
              projects, and interesting digital products.
            </p>

            <a
              href="mailto:farelkadhafi34@gmail.com"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                border-b
                border-white/20
                pb-1.5
                text-[11px]
                text-white
                transition-colors
                hover:border-white
                sm:mt-8
                sm:pb-2
                sm:text-sm
              "
            >
              <span className="break-all sm:break-normal">
                farelkadhafi34@gmail.com
              </span>

              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="
                  shrink-0
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  sm:h-[14px]
                  sm:w-[14px]
                "
              />
            </a>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-20
            border-t
            border-white/[0.08]
            pt-5
            sm:mt-32
            sm:pt-6
            lg:mt-40
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-6
            "
          >
            {/* Copyright */}
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.13em]
                text-neutral-600
                sm:text-[10px]
                sm:tracking-[0.15em]
              "
            >
              © 2026 Setia Farel Muamar Kadhafi
            </p>

            {/* Social */}
            <div
              className="
                flex
                flex-wrap
                gap-x-5
                gap-y-2
                sm:gap-6
              "
            >
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.13em]
                    text-neutral-500
                    transition-colors
                    hover:text-white
                    sm:text-[10px]
                    sm:tracking-[0.15em]
                  "
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Back to top */}
            <a
              href="#"
              className="
                w-fit
                text-[8px]
                uppercase
                tracking-[0.13em]
                text-neutral-600
                transition-colors
                hover:text-white
                sm:text-[10px]
                sm:tracking-[0.15em]
              "
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;