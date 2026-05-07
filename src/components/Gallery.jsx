import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Image, X } from 'lucide-react';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-champagne px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-berry">
              <Image size={18} />
              Galeria
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-rosewood sm:text-5xl">
              Fotos para trocar depois
            </h2>
          </div>
          <p className="max-w-md leading-7 text-rosewood/70">
            Clique em qualquer imagem para abrir em tela cheia. Depois é só substituir os
            links por fotos reais.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((photo, index) => (
            <motion.button
              key={photo.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImage(photo)}
              className={`group relative overflow-hidden rounded-2xl bg-rose-100 text-left shadow-soft focus:outline-none focus:ring-4 focus:ring-rose-300 ${
                index === 0 || index === 5 ? 'lg:row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rosewood/78 to-transparent p-5 pt-16 text-lg font-bold text-white">
                {photo.title}
              </span>
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
            className="fixed inset-0 z-50 grid place-items-center bg-rosewood/85 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ type: 'spring', stiffness: 230, damping: 24 }}
              className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-glow"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar imagem"
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-rosewood shadow-md transition hover:bg-white"
              >
                <X size={22} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[78vh] w-full object-cover"
              />
              <div className="px-5 py-4">
                <h3 className="text-xl font-extrabold text-rosewood">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
