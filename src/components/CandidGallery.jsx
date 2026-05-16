import { motion } from 'framer-motion';
import { Camera, Video } from 'lucide-react';

export default function CandidGallery({ moments }) {
  return (
    <section id="candid" className="relative bg-ivory px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,_rgba(232,93,117,0.16),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-plum">
            <Camera size={18} />
            Ela sendo ela
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            Fotos e vídeos espontâneos, naturais e cheios de personalidade
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.title}
              initial={{ opacity: 0.9, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.38, delay: index * 0.06 }}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft"
            >
              <img src={moment.src} alt={moment.title} className="h-80 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-black text-ink">{moment.title}</h3>
                <p className="mt-3 leading-7 text-ink/64">{moment.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0.9, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.42 }}
          className="mt-6 overflow-hidden rounded-[2rem] bg-ink text-white shadow-halo lg:grid lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="p-7 sm:p-9 lg:flex lg:flex-col lg:justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-marigold">
              <Video size={18} />
              Vídeo especial
            </span>
            <div className="mt-10">
              <h3 className="font-display text-4xl font-black leading-tight sm:text-5xl">
                Mimi em movimento
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
                Um cantinho para aquele vídeo que guarda mais do que uma foto consegue
                contar.
              </p>
            </div>
          </div>

          <video
            className="h-full min-h-[360px] w-full bg-black object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src="/videos/mimi.mp4" type="video/mp4" />
          </video>
        </motion.article>
      </div>
    </section>
  );
}
