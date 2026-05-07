import { motion } from 'framer-motion';
import { MapPinned, Navigation } from 'lucide-react';

export default function MemoryMap({ places }) {
  return (
    <section id="map" className="relative bg-ink px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-marigold">
            <MapPinned size={18} />
            Mapa de memórias
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">
            Lugares que viraram história
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.03))] p-6 shadow-halo">
            <div className="absolute inset-8 rounded-[1.5rem] border border-dashed border-white/18" />
            <div className="absolute left-1/2 top-10 h-[80%] w-px -rotate-12 bg-white/10" />
            <div className="absolute left-10 top-1/2 h-px w-[85%] bg-white/10" />
            <div className="absolute bottom-8 right-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-ink">
              <Navigation size={16} />
              Memórias
            </div>

            {places.map((place, index) => (
              <motion.div
                key={place.place}
                initial={{ opacity: 0.85, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`absolute ${place.position}`}
              >
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-marigold shadow-[0_0_0_10px_rgba(242,184,75,0.14)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink" />
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4">
            {places.map((place, index) => (
              <motion.article
                key={place.title}
                initial={{ opacity: 0.9, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-marigold">
                  {place.place}
                </p>
                <h3 className="mt-2 text-2xl font-black">{place.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{place.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
