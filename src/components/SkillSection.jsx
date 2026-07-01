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
            transition={{ delay: index * 0.05, duration: 0.4 }}
            onMouseEnter={onHover}
            // HAPUS: transition-all & blur-[3px] untuk meringankan beban render
            // GANTI: transition-opacity dan sekadar menurunkan opacity menjadi 30%
            className={`relative group cursor-pointer border-b border-white/5 py-6 md:py-10 transition-opacity duration-300 ease-out ${isAnyHovered && !isHovered ? 'opacity-30' : 'opacity-100'
                }`}
        >
            <div className="flex items-baseline justify-between relative z-10">
                <div className="flex items-baseline gap-3 md:gap-12">
                    {/* Index Number */}
                    <span className="font-mono text-[10px] md:text-xs text-neutral-600 w-6 md:w-8">
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Skill Name */}
                    <h3 className="text-base md:text-lg font-light tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2 md:group-hover:translate-x-4">
                        {data.name}
                    </h3>
                </div>

                {/* Right Side Info */}
                <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors duration-300">
                        {data.category}
                    </span>

                    {/* Percentage (Only fully visible on hover) */}
                    <div className="relative overflow-hidden h-8 md:h-12 flex items-center">
                        <motion.span
                            className="text-xl md:text-3xl font-light text-white tabular-nums block"
                            initial={{ y: "100%" }}
                            animate={{ y: isHovered ? "0%" : "100%" }}
                            // Memperingan kalkulasi easing
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {data.level}%
                        </motion.span>
                        {/* Default state dot when not hovered */}
                        <motion.div
                            animate={{ scale: isHovered ? 0 : 1, opacity: isHovered ? 0 : 1 }}
                            transition={{ duration: 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-neutral-700 absolute right-0 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            </div>

            {/* Progress Line Background */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-800 overflow-hidden">
                {/* OPTIMASI KRUSIAL: Menggunakan scaleX dari origin-left (GPU Accelerated)
                    daripada menggunakan width (Memaksa CPU Recalculate Layout)
                */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full w-full bg-white opacity-50 origin-left"
                />
                {/* Secondary thinner line for precision feel */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? (data.level / 100) : 0 }}
                    transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                    // Box-shadow dihapus karena sangat berat saat dikombinasikan dengan animasi panjang/lebar
                    className="absolute top-0 left-0 h-full w-full bg-white origin-left"
                />
            </div>

            {/* Hover Background Glow */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-900/0 via-neutral-900/40 to-neutral-900/0"
                // Hanya mainkan opacity, hapus animasi scaleX di sini karena layer terlalu besar
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section ref={ref} className="min-h-screen bg-[#050505] py-20 px-4 md:py-32 md:px-8 relative overflow-hidden flex flex-col justify-center">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12 md:mb-24 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 border-b border-white/10 pb-8 md:pb-12"
                >
                    <div>
                        <span className="text-xs font-mono text-neutral-500 mb-4 block tracking-widest uppercase">
                            // 02 — Competencies
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tighter text-white">
                            Technical<br />
                            <span className="text-neutral-600">Proficiency.</span>
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm text-sm leading-relaxed mb-2">
                        A curated list of technologies and tools used to engineer scalable digital solutions.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2 md:gap-5 px-0 md:px-16" onMouseLeave={() => setHoveredSkill(null)}>
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
export default SkillsSection;