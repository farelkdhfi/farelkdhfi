import { motion } from 'framer-motion';
import { socialMediaLinks } from "../data/socialMedia";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // UPDATE: px-6 (mobile) -> md:px-16 (desktop). Padding atas/bawah disesuaikan sedikit.
        <footer className="bg-[#050505] pt-16 pb-8 px-6 md:pt-20 md:pb-10 md:px-16 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Top Section: Navigation & Actions */}
                {/* UPDATE: grid-cols-2 (mobile) -> grid-cols-4 (desktop).
                    Ini agar link Explore & Connect bersebelahan di HP, tidak menumpuk panjang ke bawah. */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-12 mb-16 md:mb-20">

                    {/* Column 1: Brand Identity */}
                    {/* UPDATE: col-span-2 di mobile & desktop (Full width di mobile row 1) */}
                    <div className="col-span-2">
                        <a href="#" onClick={scrollToTop} className="text-2xl font-bold tracking-tighter text-white mb-6 block w-fit">
                            SFMK<span className="text-neutral-600">.</span>
                        </a>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-8">
                            Crafting scalable digital ecosystems with precision engineering and aesthetic intelligence.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono border border-white/10 w-fit px-3 py-1 rounded-full">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>Systems Normal</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    {/* UPDATE: col-span-1 (mobile & desktop) */}
                    <div className="col-span-1">
                        <h4 className="text-white font-medium mb-4 md:mb-6">Explore</h4>
                        <ul className="space-y-3 md:space-y-4">
                            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-neutral-500 hover:text-white transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal & Social */}
                    {/* UPDATE: col-span-1 (mobile & desktop) */}
                    <div className="col-span-1">
                        <h4 className="text-white font-medium mb-4 md:mb-6">Connect</h4>
                        <ul className="space-y-3 md:space-y-4">
                            {socialMediaLinks.map((item) => (
                                <li key={item.name}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Middle Section: Big Signature */}
                <div className="relative border-t border-white/10 pt-12 mb-16 md:mb-20">
                    {/* UPDATE: text-[13vw] (mobile) -> text-[7vw] (desktop) agar tulisan tetap besar di HP */}
                    <h1 className="text-[13vw] md:text-[7vw] uppercase leading-none tracking-tighter mx-auto text-white/5 select-none text-center font-bold md:font-normal">
                        Life Long Learner
                    </h1>

                    {/* Floating Back To Top Button */}
                    <motion.button
                        whileHover={{ y: -5 }}
                        onClick={scrollToTop}
                        // UPDATE: Ukuran button disesuaikan w-12 (mobile) -> w-16 (desktop)
                        className="absolute right-0 top-0 -mt-6 md:-mt-8 bg-neutral-900 border border-white/10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 z-20 group"
                    >
                        <span className="text-lg md:text-xl group-hover:-translate-y-1 transition-transform">↑</span>
                    </motion.button>
                </div>

                {/* Bottom Section: Copyright & Meta */}
                {/* UPDATE: gap-6 (mobile stack) -> gap-6 (desktop row). Text center di mobile. */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-neutral-600 font-mono uppercase tracking-wider text-center md:text-left">
                    <p>© 2026 Setia Farel MK. All Rights Reserved.</p>

                    <div className="flex gap-6 md:gap-8">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
                    </div>

                    <p className="text-neutral-700">
                        v2.5.0 — West Java, ID
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;