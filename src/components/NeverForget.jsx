import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

export default function NeverForget({ reminders }) {
  return (
    <section id="remember" className="relative bg-pearl px-5 py-24 sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-clay">
            <Bookmark size={18} />
            Nunca esqueça
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            O que eu quero que você nunca esqueça
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {reminders.map((reminder, index) => (
            <motion.article
              key={reminder}
              initial={{ opacity: 0.9, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.36, delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft sm:p-8"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em] text-plum">
                Lembrete {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-5 text-3xl font-black leading-tight text-ink">{reminder}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
