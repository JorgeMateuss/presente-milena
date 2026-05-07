import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function MessageCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="perspective-card">
      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        onMouseEnter={() => setIsOpen(true)}
        className="group block w-full text-left focus:outline-none focus:ring-4 focus:ring-rose-300"
        aria-pressed={isOpen}
      >
        <motion.div
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="message-card-inner relative min-h-[330px] w-full rounded-2xl shadow-glow"
        >
          <div className="message-card-front absolute inset-0 rounded-2xl border border-rose-100 bg-white p-8 sm:p-10">
            <div className="flex h-full flex-col items-start justify-between">
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-rose-100 text-berry">
                  <Heart fill="currentColor" size={24} />
                </span>
                <h2 className="mt-8 font-display text-4xl font-bold text-rosewood sm:text-5xl">
                  Uma mensagem especial
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-rosewood/70">
                Passe o mouse ou toque no cartão para revelar.
              </p>
            </div>
          </div>

          <div className="message-card-back absolute inset-0 rounded-2xl bg-rosewood p-8 text-white sm:p-10">
            <div className="flex h-full flex-col justify-center">
              <p className="text-lg font-semibold text-rose-100">Milena,</p>
              <p className="mt-5 max-w-4xl text-2xl font-bold leading-relaxed sm:text-3xl">
                Que seu novo ciclo seja cheio de paz, amor, descobertas bonitas e
                motivos sinceros para sorrir. Obrigado por ser essa presença tão
                especial. Feliz aniversário!
              </p>
            </div>
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
