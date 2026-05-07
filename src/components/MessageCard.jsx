import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MailOpen } from 'lucide-react';

export default function MessageCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="perspective-card">
      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="block w-full text-left focus:outline-none focus:ring-4 focus:ring-coral/35"
        aria-pressed={isOpen}
      >
        <motion.div
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="message-card-inner relative min-h-[460px] w-full rounded-[2rem] shadow-halo"
        >
          <div className="message-card-front absolute inset-0 overflow-hidden rounded-[2rem] bg-plum text-white">
            <img
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=85"
              alt="Decoração colorida de festa"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(33,24,22,0.78),_rgba(127,29,78,0.78))]" />
            <div className="relative flex min-h-[460px] flex-col justify-between p-8 sm:p-12">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-plum shadow-soft">
                <MailOpen size={27} />
              </span>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-marigold">
                  Carta final
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-5xl font-black leading-tight sm:text-7xl">
                  Um pedacinho do que você significa
                </h2>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-5 py-3 text-sm font-extrabold backdrop-blur">
                <Heart fill="currentColor" size={17} />
                Abrir carta
              </span>
            </div>
          </div>

          <div className="message-card-back absolute inset-0 overflow-hidden rounded-[2rem] bg-white p-8 text-ink sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-pearl" />

            <div className="relative flex min-h-[364px] flex-col justify-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-plum">Milena</p>
              <p className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
                Que seu novo ciclo seja cheio de paz, amor, descobertas bonitas e
                motivos sinceros para sorrir.
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-ink/68">
                Obrigado por ser essa presença tão especial. Que a vida te encontre com
                cuidado, alegria e coragem em todos os caminhos. Feliz aniversário!
              </p>
            </div>
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
