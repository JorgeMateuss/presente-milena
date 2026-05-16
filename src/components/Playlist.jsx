import { motion } from 'framer-motion';
import { Disc3, Music2, Play, Quote } from 'lucide-react';

export default function Playlist({ musicMoments = [] }) {
  const spotifyUrl = musicMoments[0]?.spotifyUrl ?? 'https://open.spotify.com/';

  return (
    <section id="playlist" className="relative bg-ivory px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(242,184,75,0.2),_transparent_30%),radial-gradient(circle_at_82%_32%,_rgba(232,93,117,0.14),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0.9, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-plum">
              <Music2 size={18} />
              Trechos da música
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-tight sm:text-6xl">
              Partes das músicas para mostrar pra ela
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">
              Cada card pode ter um áudio, um trecho escrito e uma mensagem explicando
              por que aquela parte combina com a Milena.
            </p>
          </motion.div>

          <a
            href={spotifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-ink px-7 text-base font-extrabold text-white shadow-halo transition hover:bg-plum sm:w-fit lg:justify-self-end"
          >
            <Play fill="currentColor" size={18} />
            Abrir no Spotify
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {musicMoments.map((musicMoment, index) => {
            const hasAudio = Boolean(musicMoment.audioSrc);

            return (
              <motion.article
                key={`${musicMoment.title}-${index}`}
                initial={{ opacity: 0.9, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
                className="overflow-hidden rounded-[1.5rem] bg-ink text-white shadow-halo sm:rounded-[2rem]"
              >
                <div className="relative p-6 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,_rgba(232,93,117,0.28),_transparent_34%),radial-gradient(circle_at_80%_70%,_rgba(242,184,75,0.2),_transparent_34%)]" />
                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.22em] text-marigold">
                        Música {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-4 font-display text-3xl font-black leading-tight sm:text-4xl">
                        {musicMoment.title}
                      </h3>
                      <p className="mt-3 font-bold text-white">{musicMoment.song}</p>
                      <p className="mt-1 text-white/62">{musicMoment.artist}</p>
                    </div>

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                      className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[conic-gradient(from_90deg,_#e85d75,_#f2b84b,_#dff3e4,_#7f1d4e,_#e85d75)] text-ink shadow-soft"
                    >
                      <Disc3 size={30} />
                    </motion.div>
                  </div>
                </div>

                <div className="bg-white p-6 text-ink sm:p-7">
                  {hasAudio ? (
                    <audio className="w-full" controls preload="metadata">
                      <source src={musicMoment.audioSrc} type="audio/mpeg" />
                    </audio>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-plum/30 bg-pearl p-5">
                      <p className="font-black text-plum">Áudio ainda não adicionado</p>
                      <p className="mt-2 leading-7 text-ink/64">
                        Coloque o MP3 em <strong>public/audio/</strong> e preencha o
                        <strong> audioSrc</strong> no arquivo de dados.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 rounded-[1.5rem] bg-ivory p-6">
                    <Quote className="text-plum/35" size={34} />
                    <p className="mt-4 text-xl font-black leading-snug sm:text-2xl">
                      {musicMoment.excerpt}
                    </p>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-ink/66">{musicMoment.message}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
