import {
  motion,
  useTransform,
} from 'framer-motion';

const getImageLayout = (position) => {
  const layouts = {
    right: {
      container: "flex-col md:flex-row-reverse",
      imageWrap: "w-full md:w-[50%] h-[50vh] md:h-[85vh]",
      contentWrap: "w-full md:w-[50%] px-6 md:pl-24 md:pr-12",
      align: "items-start md:items-center text-left"
    },
    left: {
      container: "flex-col md:flex-row",
      imageWrap: "w-full md:w-[50%] h-[50vh] md:h-[85vh]",
      contentWrap: "w-full md:w-[50%] px-6 md:pr-24 md:pl-12",
      align: "items-start md:items-center text-left"
    },
    center: {
      container: "flex-col",
      imageWrap: "w-full md:w-[70%] h-[40vh] md:h-[65vh] mx-auto",
      contentWrap: "w-full px-6 mt-8 md:mt-12 text-center",
      align: "items-center justify-center"
    },
    'right-top': {
      container: "flex-col md:flex-row-reverse",
      imageWrap: "w-full md:w-[45%] h-[45vh] md:h-[70vh]",
      contentWrap: "w-full md:w-[55%] px-6 md:pl-20 md:pr-12 pt-0 md:pt-32",
      align: "items-start justify-start text-left"
    },
    'left-bottom': {
      container: "flex-col md:flex-row",
      imageWrap: "w-full md:w-[45%] h-[45vh] md:h-[75vh]",
      contentWrap: "w-full md:w-[55%] px-6 md:pr-20 md:pl-12 pb-0 md:pb-32",
      align: "items-end justify-end text-right"
    }
  };
  return layouts[position] || layouts.right;
};

const Scene = ({ data, index, scrollIndex, totalScenes }) => {
  const layout = getImageLayout(data.position);
  const isLastScene = index === totalScenes - 1;

  // -- ANIMATION HOOKS --
  const opacity = useTransform(
    scrollIndex,
    [index - 0.5, index, index + 0.5],
    [0, 1, isLastScene ? 1 : 0]
  );

  // Container Movement
  const yContainer = useTransform(scrollIndex, [index - 1, index + 1], [100, -100]);

  // Deep Parallax
  const yImageInner = useTransform(scrollIndex, [index - 1, index + 1], ["-15%", "15%"]);

  // Image Scale
  const scaleImage = useTransform(scrollIndex, [index - 1, index, index + 1], [1.3, 1, 1.3]);

  // Text Stagger
  const yTitle = useTransform(scrollIndex, [index - 1, index + 1], [150, -150]);
  const ySubtitle = useTransform(scrollIndex, [index - 1, index + 1], [50, -50]);
  const yDesc = useTransform(scrollIndex, [index - 1, index + 1], [100, -100]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#050505]"
      style={{ zIndex: index, opacity }}
    >
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className={`relative w-full h-full flex ${layout.container} ${layout.align} justify-center gap-0 z-10 max-w-[1920px] mx-auto p-4 md:p-0`}>

        {/* --- IMAGE BLOCK --- */}
        <motion.div
          className={`relative ${layout.imageWrap} overflow-hidden shadow-2xl shadow-black/50`}
          style={{ y: yContainer }}
        >
          <div className="w-full h-full relative overflow-hidden bg-neutral-900 border-x border-white/5">
            <motion.img
              src={data.img}
              alt={data.title}
              className="w-full h-[140%] object-cover absolute top-[-20%] left-0 opacity-80"
              style={{
                y: yImageInner,
                scale: scaleImage,
                filter: isLastScene ? "grayscale(100%) contrast(1.2) brightness(0.8)" : "saturate(0.8) contrast(1.1)"
              }}
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>

        {/* --- CONTENT BLOCK --- */}
        <div className={`relative ${layout.contentWrap} flex flex-col justify-center z-20`}>

          <motion.div style={{ y: ySubtitle }} className="mb-4 overflow-hidden flex items-center gap-4 justify-center md:justify-start">
            <span className="text-xs font-mono text-neutral-500">
              {String(data.id).padStart(2, '0')}
            </span>
            <div className="h-px bg-white/30 w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              {data.subtitle}
            </span>
          </motion.div>

          <motion.div style={{ y: yTitle }} className="relative text-center md:text-left">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white mix-blend-difference mb-6">
              {data.title}
            </h2>
          </motion.div>

          <motion.div style={{ y: yDesc }} className={`max-w-md ${layout.align.includes('center') ? 'mx-auto' : ''}`}>
            <p className="text-neutral-400 text-sm md:text-lg font-light leading-relaxed whitespace-pre-line tracking-wide border-l-2 border-white/10 pl-6 text-left">
              {data.desc}
            </p>
          </motion.div>

          {/* KHUSUS UNTUK SCENE TERAKHIR: INDIKATOR SCROLL KE BAWAH */}
          {isLastScene && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
              className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">Dive In</span>
              <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
          )}

        </div>
      </div>
    </motion.div>
  );
};
export default Scene;