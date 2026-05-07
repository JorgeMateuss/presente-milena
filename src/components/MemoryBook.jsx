import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MemoryBook({ pages }) {
  const [pageIndex, setPageIndex] = useState(0);
  const page = pages[pageIndex];

  const previousPage = () => {
    setPageIndex((current) => (current === 0 ? pages.length - 1 : current - 1));
  };

  const nextPage = () => {
    setPageIndex((current) => (current === pages.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="book" className="relative bg-pearl px-5 py-24 sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-clay">
            <BookOpen size={18} />
            Mini livro
          </span>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-black leading-tight sm:text-6xl">
            Uma carta em pequenas páginas
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">
            Um formato mais íntimo para dividir a mensagem em partes. Edite os textos em
            `src/data/moments.js`.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0.9, rotateX: 8, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-ink/10 bg-ivory p-5 shadow-halo sm:p-8"
        >
          <div className="min-h-[330px] rounded-[1.5rem] border border-clay/15 bg-white p-7 shadow-crisp sm:p-10">
            <AnimatePresence mode="wait">
              <motion.article
                key={page.title}
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -22 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-sm font-black uppercase tracking-[0.22em] text-plum">
                  Página {pageIndex + 1} de {pages.length}
                </p>
                <h3 className="mt-8 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
                  {page.title}
                </h3>
                <p className="mt-6 text-xl leading-9 text-ink/70">{page.body}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={previousPage}
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-soft transition hover:text-plum"
              aria-label="Página anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="flex gap-2">
              {pages.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setPageIndex(index)}
                  aria-label={`Abrir página ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === pageIndex ? 'w-8 bg-plum' : 'w-2.5 bg-ink/18'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextPage}
              className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-soft transition hover:bg-plum"
              aria-label="Próxima página"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
