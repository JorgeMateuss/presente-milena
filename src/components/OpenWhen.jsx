import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function OpenWhen({ letters }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="open-when" className="relative bg-pearl px-5 py-24 sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-clay">
            <Mail size={18} />
            Abra quando...
          </span>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            Cartinhas para momentos específicos
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">
            Uma seção para ela voltar quando precisar de sorriso, força ou carinho.
          </p>
        </div>

        <div className="grid gap-4">
          {letters.map((letter, index) => (
            <button
              key={letter.trigger}
              type="button"
              onClick={() => setOpenIndex(index)}
              className={`rounded-[1.5rem] border p-5 text-left shadow-soft transition ${
                openIndex === index
                  ? 'border-plum bg-white'
                  : 'border-ink/10 bg-white/70 hover:border-plum/40'
              }`}
            >
              <p className="text-xl font-black text-ink">{letter.trigger}</p>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden leading-7 text-ink/66"
                  >
                    {letter.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
