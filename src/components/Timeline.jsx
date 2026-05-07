import { motion } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';

export default function Timeline({ moments }) {
  return (
    <section id="timeline" className="relative bg-ink px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-marigold">
              <CalendarHeart size={18} />
              Linha do tempo
            </span>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-black leading-tight sm:text-6xl">
              Capítulos que brilham quando a gente lembra
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/68 lg:justify-self-end">
            Cada ano aqui é um marcador de carinho. Troque os textos depois pelos seus
            momentos reais com a Milena.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.year}
              initial={{ opacity: 0.85, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-soft backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.1]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,_#e85d75,_#f2b84b,_#dff3e4)]" />
              <div className="flex items-start justify-between gap-5">
                <p className="font-display text-6xl font-black text-white">{moment.year}</p>
                <span className="rounded-full bg-marigold px-3 py-1 text-xs font-black uppercase text-ink">
                  {moment.label}
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-black leading-tight text-white">
                {moment.title}
              </h3>
              <p className="mt-4 leading-7 text-white/68">{moment.description}</p>

              <div className="absolute bottom-6 right-6 h-16 w-16 rounded-full border border-white/15 bg-white/[0.04] transition group-hover:scale-125 group-hover:border-marigold/50" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
