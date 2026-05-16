import { motion } from 'framer-motion';
import { BadgePlus, Coffee, Headphones, Smile, Star, Zap } from 'lucide-react';

const icons = [Coffee, Headphones, Smile, Zap, Star, BadgePlus];

export default function SurvivalKit({ items }) {
  return (
    <section id="kit" className="relative bg-mint px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,250,242,0.78),_transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-sage">
            <BadgePlus size={18} />
            Kit de sobrevivência
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            Tudo que a Milena merece levar para os dias bonitos
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={item.item}
                initial={{ opacity: 0.9, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.34, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-soft"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-plum text-white">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-3xl font-black text-ink">{item.item}</h3>
                <p className="mt-3 leading-7 text-ink/66">{item.use}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
