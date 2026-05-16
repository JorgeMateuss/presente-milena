import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';

const confetti = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  color: ['#e85d75', '#f2b84b', '#3f7c6b', '#ffffff'][index % 4],
}));

export default function FinalSurprise() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="final" className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      <AnimatePresence>
        {isOpen &&
          confetti.map((piece) => (
            <motion.span
              key={piece.id}
              initial={{ y: -60, opacity: 0, rotate: 0 }}
              animate={{ y: 560, opacity: [0, 1, 1, 0], rotate: 540 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, delay: (piece.id % 8) * 0.05 }}
              className="absolute top-0 h-3 w-2 rounded-sm"
              style={{ left: piece.left, backgroundColor: piece.color }}
            />
          ))}
      </AnimatePresence>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-marigold">
          Antes de fechar o site
        </p>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">
          Ainda tem um último presente
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
          Um fechamento com cara de surpresa, para deixar a última tela tão especial
          quanto a primeira.
        </p>

        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 font-black text-ink shadow-halo transition hover:text-plum"
        >
          <PartyPopper size={21} />
          Abrir último presente
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24 }}
              className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-halo backdrop-blur"
            >
              <p className="font-display text-4xl font-black leading-tight">
                Milena, que a vida te encontre com amor, saúde, coragem e muitos
                motivos para sorrir.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
