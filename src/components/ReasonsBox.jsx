import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Gift, HeartHandshake } from 'lucide-react';

export default function ReasonsBox({ reasons }) {
  const [reasonIndex, setReasonIndex] = useState(0);

  const revealReason = () => {
    setReasonIndex((current) => (current + 1) % reasons.length);
  };

  return (
    <section id="reasons" className="relative bg-ivory px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(232,93,117,0.16),_transparent_30%),radial-gradient(circle_at_80%_24%,_rgba(63,124,107,0.16),_transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-plum">
            <HeartHandshake size={18} />
            Caixinha de motivos
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-tight sm:text-6xl">
            Um motivo novo sempre que ela abrir
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">
            Clique no presente para revelar frases. Você pode trocar cada motivo no
            arquivo de dados.
          </p>
        </div>

        <motion.button
          type="button"
          onClick={revealReason}
          whileHover={{ y: -8, rotate: -1 }}
          whileTap={{ scale: 0.98 }}
          className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-plum p-8 text-left text-white shadow-halo focus:outline-none focus:ring-4 focus:ring-coral/35"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.14),_transparent_45%)]" />
          <div className="relative flex h-full min-h-[300px] flex-col justify-between">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-plum shadow-soft">
              <Gift size={28} />
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={reasons[reasonIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="font-display text-4xl font-black leading-tight sm:text-5xl"
              >
                {reasons[reasonIndex]}
              </motion.p>
            </AnimatePresence>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-marigold">
              Clique para revelar outro
            </span>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
