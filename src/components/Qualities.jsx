import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Qualities({ qualities }) {
  return (
    <section id="qualities" className="relative bg-mint px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,250,242,0.85),_transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-sage">
            <Sparkles size={18} />
            Coisas que amo em você
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">
            Pequenas palavras para um brilho enorme
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {qualities.map((quality, index) => (
            <motion.span
              key={quality}
              initial={{ opacity: 0.9, y: 24, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? 2 : -2 }}
              className="rounded-full border border-ink/10 bg-white px-6 py-4 text-lg font-black text-ink shadow-soft sm:text-2xl"
            >
              {quality}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
