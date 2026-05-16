import { motion } from 'framer-motion';
import { Heart, RotateCcw } from 'lucide-react';

export default function Dedication() {
  const scrollToStart = () => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-plum px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.09]" />
      <motion.div
        initial={{ opacity: 0.9, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-plum shadow-soft">
          <Heart fill="currentColor" size={26} />
        </span>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-marigold">
          Dedicatória
        </p>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">
          Feito com carinho para Milena
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
          Um presente digital para lembrar que algumas pessoas merecem ser celebradas
          com tempo, cuidado e beleza.
        </p>
        <p className="mt-10 font-display text-3xl font-black">Com amor, de quem te ama.</p>

        <motion.button
          type="button"
          onClick={scrollToStart}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-base font-black text-plum shadow-halo transition hover:bg-marigold hover:text-ink"
        >
          <RotateCcw size={20} />
          Rever desde o começo
        </motion.button>
      </motion.div>
    </footer>
  );
}
