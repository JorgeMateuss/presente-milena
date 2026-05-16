import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FolderHeart, LockKeyhole } from 'lucide-react';

export default function SecretArchive({ files }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFile = files[activeIndex];

  return (
    <section id="archive" className="relative bg-ink px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-marigold">
            <LockKeyhole size={18} />
            Arquivo secreto
          </span>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-black leading-tight sm:text-6xl">
            Pastas confidenciais da Milena
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
            Uma seção para guardar piadas internas, conquistas e lembranças que só fazem
            sentido para vocês.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-halo backdrop-blur sm:p-7">
          <div className="mb-5 flex flex-wrap gap-3">
            {files.map((file, index) => (
              <button
                key={file.tab}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-black transition ${
                  activeIndex === index
                    ? 'bg-marigold text-ink'
                    : 'bg-white/[0.08] text-white/72 hover:bg-white/[0.14] hover:text-white'
                }`}
              >
                <FolderHeart size={17} />
                {file.tab}
              </button>
            ))}
          </div>

          <div className="min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink p-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeFile.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.26 }}
              >
                <p className="text-sm font-black uppercase tracking-[0.22em] text-coral">
                  Acesso liberado
                </p>
                <h3 className="mt-8 font-display text-4xl font-black leading-tight sm:text-5xl">
                  {activeFile.title}
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  {activeFile.text}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
