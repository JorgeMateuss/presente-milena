import { motion } from 'framer-motion';
import { Disc3, Music2, Play } from 'lucide-react';

export default function Playlist({ tracks }) {
  return (
    <section id="playlist" className="relative bg-ivory px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(242,184,75,0.2),_transparent_30%),radial-gradient(circle_at_82%_32%,_rgba(232,93,117,0.14),_transparent_28%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0.9, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-plum">
            <Music2 size={18} />
            Playlist
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-tight sm:text-6xl">
            A trilha sonora desse presente
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">
            Troque os nomes abaixo pelas músicas que lembram a Milena. Dá para usar essa
            seção como lista especial ou trocar o botão por um link do Spotify.
          </p>

          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink px-7 text-base font-extrabold text-white shadow-halo transition hover:bg-plum"
          >
            <Play fill="currentColor" size={18} />
            Abrir no Spotify
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.9, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-ink p-5 text-white shadow-halo sm:p-7"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-marigold">
                Mix da Milena
              </p>
              <p className="mt-2 text-white/60">4 faixas para personalizar</p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[conic-gradient(from_90deg,_#e85d75,_#f2b84b,_#dff3e4,_#7f1d4e,_#e85d75)] text-ink"
            >
              <Disc3 size={30} />
            </motion.div>
          </div>

          <div className="space-y-3">
            {tracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={{ opacity: 0.9, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-plum">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black">{track.title}</h3>
                  <p className="mt-1 text-sm text-white/58">{track.artist}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{track.note}</p>
                </div>
                <Play fill="currentColor" size={19} className="text-marigold" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
