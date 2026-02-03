import {
    motion,
    useInView,
} from 'framer-motion';
import { useRef, useState } from "react";
import { skillsData } from "../data/personalData";

const SkillRow = ({ data, index, isHovered, isAnyHovered, onHover, isInView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            onMouseEnter={onHover}
            className={`relative group cursor-pointer border-b border-white/5 py-10 transition-all duration-500 ease-out ${isAnyHovered && !isHovered ? 'opacity-20 blur-[3px]' : 'opacity-100'
                }`}
        >
            <div className="flex items-baseline justify-between relative z-10">
                <div className="flex items-baseline gap-4 md:gap-12">
                    {/* Index Number */}
                    <span className="font-mono text-xs text-neutral-600 w-8">
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Skill Name */}
                    <h3 className="text-lg font-light tracking-tight text-white transition-transform duration-500 group-hover:translate-x-4">
                        {data.name}
                    </h3>
                </div>

                {/* Right Side Info */}
                <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">
                        {data.category}
                    </span>

                    {/* Percentage (Only fully visible on hover) */}
                    <div className="relative overflow-hidden h-8 md:h-12 flex items-center">
                        <motion.span
                            className="text-xl md:text-3xl font-light text-white tabular-nums block"
                            initial={{ y: "100%" }}
                            animate={{ y: isHovered ? "0%" : "100%" }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                        >
                            {data.level}%
                        </motion.span>
                        {/* Default state dot when not hovered */}
                        <motion.div
                            animate={{ scale: isHovered ? 0 : 1, opacity: isHovered ? 0 : 1 }}
                            className="w-1.5 h-1.5 rounded-full bg-neutral-700 absolute right-0 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            </div>

            {/* Progress Line Background */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-800 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-white opacity-50"
                />
                {/* Secondary thinner line for precision feel */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? `${data.level}%` : "0%" }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
            </div>

            {/* Hover Background Glow */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-900/0 via-neutral-900/40 to-neutral-900/0"
                initial={{ opacity: 0, scaleX: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
};

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section ref={ref} className="min-h-screen bg-[#050505] py-32 px-8 relative overflow-hidden flex flex-col justify-center">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12"
                >
                    <div>
                        <span className="text-xs font-mono text-neutral-500 mb-4 block tracking-widest uppercase">
              // 02 — Competencies
                        </span>
                        <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
                            Technical<br />
                            <span className="text-neutral-600">Proficiency.</span>
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm text-sm leading-relaxed mb-2">
                        A curated list of technologies and tools used to engineer scalable digital solutions.
                    </p>
                </motion.div>

                {/* The Elegant List */}
                <div className="grid grid-cols-2 gap-5 px-16" onMouseLeave={() => setHoveredSkill(null)}>
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
export default SkillsSection