import { motion, useTransform } from 'framer-motion';

const getImageLayout = (position) => {
  const layouts = {
    right: {
      container: 'flex-col md:flex-row-reverse',
      imageWrap: 'w-full md:w-[50%] h-[50vh] md:h-[85vh]',
      contentWrap: 'w-full md:w-[50%] px-6 md:pl-24 md:pr-12',
      align: 'items-start md:items-center text-left',
    },
    left: {
      container: 'flex-col md:flex-row',
      imageWrap: 'w-full md:w-[50%] h-[50vh] md:h-[85vh]',
      contentWrap: 'w-full md:w-[50%] px-6 md:pr-24 md:pl-12',
      align: 'items-start md:items-center text-left',
    },
    center: {
      container: 'flex-col',
      imageWrap: 'w-full md:w-[70%] h-[40vh] md:h-[65vh] mx-auto',
      contentWrap: 'w-full px-6 mt-8 md:mt-12 text-center',
      align: 'items-center justify-center',
    },
    'right-top': {
      container: 'flex-col md:flex-row-reverse',
      imageWrap: 'w-full md:w-[45%] h-[45vh] md:h-[70vh]',
      contentWrap:
        'w-full md:w-[55%] px-6 md:pl-20 md:pr-12 pt-0 md:pt-32',
      align: 'items-start justify-start text-left',
    },
    'left-bottom': {
      container: 'flex-col md:flex-row',
      imageWrap: 'w-full md:w-[45%] h-[45vh] md:h-[75vh]',
      contentWrap:
        'w-full md:w-[55%] px-6 md:pr-20 md:pl-12 pb-0 md:pb-32',
      align: 'items-end justify-end text-right',
    },
  };

  return layouts[position] || layouts.right;
};

const Scene = ({ data, index, scrollIndex, totalScenes }) => {
  const layout = getImageLayout(data.position);
  const isLastScene = index === totalScenes - 1;

  /**
   * ---------------------------------------------------------
   * OPACITY
   * ---------------------------------------------------------
   *
   * Tetap smooth, tapi transition dibuat lebih pendek
   * supaya scene tidak terasa berat.
   */
  const opacity = useTransform(
    scrollIndex,
    [index - 0.6, index, index + 0.6],
    [0, 1, isLastScene ? 1 : 0]
  );

  /**
   * ---------------------------------------------------------
   * LIGHT PARALLAX
   * ---------------------------------------------------------
   *
   * Sebelumnya:
   * 100 -> -100
   *
   * Sekarang:
   * 32 -> -32
   *
   * Ini jauh lebih ringan dan tetap memberikan depth.
   */
  const yContainer = useTransform(
    scrollIndex,
    [index - 1, index + 1],
    [32, -32]
  );

  /**
   * Image bergerak sedikit lebih jauh daripada container.
   *
   * Jangan gunakan scale animation di sini.
   * Scale + transform pada image besar cukup mahal di device mobile.
   */
  const yImageInner = useTransform(
    scrollIndex,
    [index - 1, index + 1],
    ['-6%', '6%']
  );

  /**
   * Text movement dibuat sangat kecil.
   * Tujuannya hanya memberikan sedikit depth,
   * bukan membuat text terasa terpisah dari scene.
   */
  const yTitle = useTransform(
    scrollIndex,
    [index - 1, index + 1],
    [36, -36]
  );

  const ySubtitle = useTransform(
    scrollIndex,
    [index - 1, index + 1],
    [16, -16]
  );

  const yDesc = useTransform(
    scrollIndex,
    [index - 1, index + 1],
    [24, -24]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#050505]"
      style={{
        zIndex: index,
        opacity,
        willChange: 'opacity',
      }}
    >
      {/* Static noise layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`relative z-10 mx-auto flex h-full w-full max-w-[1920px] ${layout.container} ${layout.align} justify-center gap-0 p-4 md:p-0`}
      >
        {/* IMAGE */}
        <motion.div
          className={`relative ${layout.imageWrap} overflow-hidden shadow-2xl shadow-black/50`}
          style={{
            y: yContainer,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        >
          <div className="relative h-full w-full overflow-hidden border-x border-white/5 bg-neutral-900">
            <motion.img
              src={data.img}
              alt={data.title}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute left-0 top-[-10%] h-[120%] w-full object-cover opacity-80"
              style={{
                y: yImageInner,
                willChange: 'transform',
                transform: 'translateZ(0)',
                filter: 'saturate(0.8) contrast(1.1)',
              }}
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div
          className={`relative z-20 ${layout.contentWrap} flex flex-col justify-center`}
        >
          {/* Subtitle */}
          <motion.div
            style={{
              y: ySubtitle,
              willChange: 'transform',
            }}
            className="mb-4 flex items-center justify-center gap-4 overflow-hidden md:justify-start"
          >
            <span className="font-mono text-xs text-neutral-500">
              {String(data.id).padStart(2, '0')}
            </span>

            <div className="h-px w-10 bg-white/30" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              {data.subtitle}
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.div
            style={{
              y: yTitle,
              willChange: 'transform',
            }}
            className="relative text-center md:text-left"
          >
            <h2 className="mb-6 text-6xl font-medium leading-[0.9] tracking-tighter text-white mix-blend-difference md:text-8xl lg:text-9xl">
              {data.title}
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            style={{
              y: yDesc,
              willChange: 'transform',
            }}
            className={`max-w-md ${
              layout.align.includes('center') ? 'mx-auto' : ''
            }`}
          >
            <p className="border-l-2 border-white/10 pl-6 text-left text-sm font-light leading-relaxed tracking-wide text-neutral-400 md:text-lg">
              {data.desc}
            </p>
          </motion.div>

          {/* LAST SCENE */}
          {isLastScene && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, 6, 0],
              }}
              transition={{
                delay: 0.5,
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-[-15vh] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                Dive In
              </span>

              <div className="h-12 w-px bg-gradient-to-b from-white to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Scene;