import { motion } from 'framer-motion';
import { Fingerprint } from 'lucide-react';

export default function MilenaOnly({ items }) {
  return (
    <section id="only-milena" className="relative bg-mint px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(255,250,242,0.9),_transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-sage">
            <Fingerprint size={18} />
            Só a Milena
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            Coisas que só ela faz desse jeito
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/66">
            Um espaço para colocar manias, frases, reações e detalhes que tornam a Milena
            impossível de copiar.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, index) => {
            const isLastOddItem = items.length % 2 === 1 && index === items.length - 1;

            return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0.9, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.36, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className={`rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft ${
                isLastOddItem ? 'md:col-span-2' : ''
              }`}
            >
              <span className="text-sm font-black uppercase tracking-[0.2em] text-plum">
                Detalhe {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-3xl font-black leading-tight text-ink">{item.title}</h3>
              <p className="mt-4 text-lg leading-8 text-ink/66">{item.detail}</p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
