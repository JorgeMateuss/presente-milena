import { motion } from 'framer-motion';
import { ArrowDown, Gift, Sparkles } from 'lucide-react';

const sparks = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 19) % 100}%`,
  size: 5 + (index % 5) * 2,
  delay: `${(index % 10) * 0.22}s`,
  color: ['#e85d75', '#f2b84b', '#3f7c6b', '#7f1d4e'][index % 4],
}));

export default function Hero() {
  const scrollToFirstChapter = () => {
    document.getElementById('playlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_#fffaf2_0%,_#fff4ef_38%,_#dff3e4_100%)]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />

      <div className="pointer-events-none absolute inset-0">
        {sparks.map((spark) => (
          <motion.span
            key={spark.id}
            className="absolute rounded-full"
            style={{
              left: spark.left,
              top: spark.top,
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
            }}
            animate={{ y: [-10, 14, -10], opacity: [0.15, 0.8, 0.15], scale: [1, 1.4, 1] }}
            transition={{ duration: 4.5 + (spark.id % 4), repeat: Infinity, delay: Number.parseFloat(spark.delay) }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-plum/15 bg-white/70 px-4 py-2 text-sm font-extrabold text-plum shadow-soft backdrop-blur">
            <Sparkles size={17} />
            Presente digital
          </div>

          <h1 className="font-display text-5xl font-black leading-[0.92] text-ink min-[380px]:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
            Feliz
            <span className="block bg-[linear-gradient(90deg,_#7f1d4e,_#e85d75,_#f2b84b,_#7f1d4e)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              Aniversário
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
            Um lugar bonito para celebrar a Milena com memórias, fotos e uma carta que
            guarda carinho em cada detalhe.
          </p>

          <div className="mt-10 flex flex-col gap-4 min-[420px]:flex-row">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToFirstChapter}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink px-7 text-base font-extrabold text-white shadow-halo transition hover:bg-plum animate-pulseGlow"
            >
              <Gift size={20} />
              Começar
            </motion.button>

            <a
              href="#message"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-ink/15 bg-white/60 px-7 text-base font-extrabold text-ink shadow-soft backdrop-blur transition hover:border-plum/30 hover:text-plum"
            >
              <ArrowDown size={20} />
              Ver carta
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, duration: 0.85, ease: 'easeOut' }}
          className="relative mx-auto grid w-full max-w-xl grid-cols-[0.78fr_1fr] gap-3 min-[380px]:gap-4 sm:gap-5"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-10 overflow-hidden rounded-[1.5rem] border-[8px] border-white bg-white shadow-halo min-[420px]:mt-16 sm:rounded-[2rem] sm:border-[10px]"
          >
            <img
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85"
              alt="Balões de aniversário em uma celebração"
              className="h-full min-h-[260px] w-full object-cover min-[420px]:min-h-[360px]"
            />
          </motion.div>

          <div className="space-y-4 sm:space-y-5">
            <div className="overflow-hidden rounded-[1.5rem] border-[8px] border-white bg-white shadow-soft sm:rounded-[2rem] sm:border-[10px]">
              <img
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=85"
                alt="Bolo de aniversário decorado"
                className="h-44 w-full object-cover min-[420px]:h-56 sm:h-64"
              />
            </div>
            <div className="rounded-[1.5rem] bg-plum p-5 text-white shadow-crisp sm:rounded-[2rem] sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                Hoje é dela
              </p>
              <p className="mt-2 font-display text-3xl font-black sm:text-4xl">Milena</p>
              <p className="mt-3 leading-6 text-white/78">
                Uma celebração feita para ficar na memória.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
