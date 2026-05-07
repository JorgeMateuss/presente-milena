import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

const confettiPieces = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  delay: `${(index % 9) * 0.35}s`,
  duration: `${5 + (index % 6)}s`,
  color: ['#e11d48', '#f97316', '#0f766e', '#facc15', '#be185d'][index % 5],
}));

export default function Hero() {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-16 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.22),_transparent_34%),linear-gradient(135deg,_#fff7ed_0%,_#fff1f2_48%,_#f0fdfa_100%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="absolute -top-8 h-3 w-2 rounded-sm opacity-80"
            style={{
              left: piece.left,
              backgroundColor: piece.color,
              animation: `confettiFall ${piece.duration} linear ${piece.delay} infinite`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-semibold text-berry shadow-sm backdrop-blur"
          >
            <Sparkles size={17} />
            Para Milena
          </motion.div>

          <h1 className="max-w-4xl font-display text-6xl font-extrabold leading-[0.95] text-rosewood sm:text-7xl lg:text-8xl">
            Feliz Aniversário
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-rosewood/78 sm:text-xl">
            Um web app feito para guardar memórias, fotos e uma mensagem especial
            para celebrar a pessoa incrível que você é.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToTimeline}
            className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-berry px-7 text-base font-bold text-white shadow-glow transition-colors hover:bg-rose-800 animate-pulseGlow"
          >
            <Gift size={20} />
            Começar
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -4, scale: 0.94 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85"
              alt="Celebração de aniversário com balões"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -left-7 rounded-3xl bg-white px-6 py-5 shadow-soft">
            <p className="text-sm font-semibold text-berry">Hoje é o seu dia</p>
            <p className="mt-1 text-2xl font-black">Milena</p>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(18px, 112vh, 0) rotate(720deg);
          }
        }
      `}</style>
    </section>
  );
}
