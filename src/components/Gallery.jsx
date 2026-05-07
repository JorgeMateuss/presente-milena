import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, X } from 'lucide-react';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative bg-ivory px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(232,93,117,0.16),_transparent_28%),radial-gradient(circle_at_82%_34%,_rgba(63,124,107,0.18),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-sage">
              <Camera size={18} />
              Galeria
            </span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
              Um mural com cara de revista afetiva
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-ink/65">
            Seis espaços prontos para substituir por fotos reais e transformar o presente
            em algo só de vocês.
          </p>
        </div>

        <div className="grid auto-rows-[210px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((photo, index) => (
            <motion.button
              key={photo.id}
              type="button"
              initial={{ opacity: 0.85, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -8, scale: 1.01 }}
              onClick={() => setSelectedImage(photo)}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-pearl text-left shadow-soft focus:outline-none focus:ring-4 focus:ring-coral/35 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${index === 3 ? 'lg:row-span-2' : ''} ${index === 5 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/12 to-transparent opacity-85" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                  Foto {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-2xl font-black">{photo.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-ink/88 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 18 }}
              transition={{ type: 'spring', stiffness: 230, damping: 24 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-halo"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar imagem"
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition hover:bg-white"
              >
                <X size={22} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[82vh] w-full object-cover"
              />
              <div className="px-6 py-5">
                <h3 className="text-2xl font-black text-ink">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
