import { motion } from 'framer-motion';
import { GraduationCap, Quote } from 'lucide-react';

export default function Lessons({ lessons }) {
  return (
    <section id="lessons" className="relative bg-pearl px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,_rgba(127,29,78,0.14),_transparent_28%),radial-gradient(circle_at_88%_24%,_rgba(242,184,75,0.2),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-plum">
              <GraduationCap size={19} />
              Aprendi com você
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
              Lições bonitas que você deixa pelo caminho
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/66 lg:justify-self-end">
            Uma seção para transformar admiração em palavras. Troque os textos por coisas
            reais que a Milena te ensinou.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson, index) => (
            <motion.article
              key={lesson.title}
              initial={{ opacity: 0.9, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft sm:p-8"
            >
              <Quote className="absolute right-7 top-7 text-coral/18" size={58} />
              <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-sage">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 max-w-md text-3xl font-black leading-tight text-ink">
                {lesson.title}
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink/66">{lesson.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
