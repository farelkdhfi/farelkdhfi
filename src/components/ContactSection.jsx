import { AnimatePresence, useInView, motion } from "framer-motion";
import { useRef, useState } from "react";
import { socialMediaLinks } from "../data/socialMedia";
import { personalData } from "../data/personalData";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("farelkadhafi34@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] pt-32 pb-12 relative overflow-hidden flex flex-col justify-between">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-[#050505] to-[#050505]" />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start"
        >
          {/* Left Side - The Hook */}
          <div>
            <span className="text-xs font-mono text-neutral-500 mb-6 block tracking-widest uppercase">
              // 05 — Initiate Collaboration
            </span>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tighter leading-[0.9] mb-12">
              Let's <br />
              <span className="text-neutral-600">Forge</span> <br />
              Future.
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-md border-l border-white/10 pl-6">
              Ready to engineer the next generation of digital experiences?
              The line is open. Let's discuss your vision.
            </p>
          </div>

          {/* Right Side - The Interface */}
          <div className="flex flex-col justify-end h-full space-y-12">

            {/* Interactive Email Card */}
            <div
              onClick={handleCopyEmail}
              className="group cursor-pointer bg-neutral-900/30 border border-white/10 p-8 hover:bg-neutral-900/50 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Primary Channel</span>
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-green-500 uppercase tracking-widest font-mono"
                    >
                      [ Copied to Clipboard ]
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-neutral-600 uppercase tracking-widest group-hover:text-white transition-colors"
                    >
                      [ Click to Copy ]
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-2xl md:text-4xl font-light text-white font-mono break-all relative z-10">
                farelkadhafi34@gmail.com
              </p>

              {/* Background Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            </div>

            {/* Social Matrix */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {socialMediaLinks.map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-white/5 group hover:border-white/20 transition-colors"
                >
                  <span className="text-neutral-500 group-hover:text-white transition-colors">{social.name}</span>
                  <span className="text-xs text-neutral-700 font-mono group-hover:text-neutral-400 transition-colors">↗</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer / System Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="  max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {personalData.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-mono">{stat.label}</span>
              <span className={`text-sm font-medium ${stat.color} flex items-center gap-2`}>
                {stat.label === 'System Status' && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />}
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default ContactSection;