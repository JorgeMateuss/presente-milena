import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Heart, Menu, X } from 'lucide-react';

export default function NavBar({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex min-h-14 items-center justify-between gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-[0_16px_55px_rgba(29,24,22,0.12)] backdrop-blur-xl sm:px-5">
          <a href="#top" className="shrink-0 font-display text-xl font-black text-plum">
            Milena
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-black text-white shadow-soft transition hover:bg-plum"
              aria-expanded={isOpen}
              aria-controls="chapter-menu"
            >
              {isOpen ? <X size={17} /> : <Menu size={17} />}
              Capítulos
            </button>

            <a
              href="#message"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 text-sm font-black text-ink transition hover:border-plum/25 hover:text-plum"
            >
              <Heart size={17} />
              <span className="hidden sm:inline">Carta</span>
            </a>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="chapter-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-[4.5rem] w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/92 p-3 shadow-halo backdrop-blur-xl"
            >
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => {
                  const Icon = item.icon ?? BookOpen;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 rounded-2xl p-3 text-left transition hover:bg-pearl"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint text-sage transition group-hover:bg-plum group-hover:text-white">
                        <Icon size={19} />
                      </span>
                      <span>
                        <span className="block font-black text-ink">{item.label}</span>
                        <span className="mt-0.5 block text-sm text-ink/55">{item.description}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
