import { motion } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';

export default function Timeline({ moments }) {
  return (
    <section id="timeline" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-tealink">
            <CalendarHeart size={18} />
            Nossa linha do tempo
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-rosewood sm:text-5xl">
            Momentos que merecem ficar guardados
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-rose-200 sm:left-1/2" />

          <div className="space-y-10">
            {moments.map((moment, index) => (
              <motion.article
                key={moment.year}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative grid gap-6 pl-12 sm:grid-cols-2 sm:pl-0 ${
                  index % 2 === 0 ? '' : 'sm:[&>div:first-child]:col-start-2'
                }`}
              >
                <span className="absolute left-[9px] top-8 z-10 h-4 w-4 rounded-full border-4 border-white bg-berry shadow-md sm:left-1/2 sm:-translate-x-1/2" />
                <div
                  className={`rounded-2xl border border-rose-100 bg-blush/70 p-6 shadow-soft ${
                    index % 2 === 0 ? 'sm:mr-10' : 'sm:ml-10'
                  }`}
                >
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-berry">
                    {moment.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold">{moment.title}</h3>
                  <p className="mt-3 leading-7 text-rosewood/72">{moment.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
