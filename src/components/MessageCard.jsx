import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, MailOpen } from 'lucide-react';

const letterParagraphs = [
  'Milena, feliz aniversário.',
  'Eu amo muito você e, sem você, sinceramente eu não estaria vivo hoje. Eu sei que falo isso todo ano e praticamente todo dia, mas é porque eu preciso que você nunca esqueça o quanto é importante pra mim. Acho que você nem imagina o tamanho disso.',
  'Eu fiz esse aplicativo pra tentar demonstrar um pouco de todo o carinho e amor que tenho por você, porque sem você eu não seria nada. Mesmo hoje, casada, com sua vida corrida, trabalhando, estudando, estagiando e vivendo tanta coisa, você ainda faz questão de cuidar de mim e me ajudar.',
  'Você é literalmente o amor da minha vida em forma de amizade. Ninguém nunca vai conseguir te substituir, nem que eu quisesse, porque você está em um lugar que ninguém alcança.',
  'E eu fico muito feliz de ver você vivendo coisas lindas, encontrando alguém que te ama de verdade, construindo sua vida e formando sua família. O jeito que o Leandro olha pra você é uma das coisas que mais me deixa feliz, porque você merece ser amada desse jeito.',
  'Sou muito grato pela sua amizade, porque sem ela eu estaria muito mais triste e perdido. Às vezes eu ainda me sinto sozinho, mas aí eu lembro que você está comigo independente do horário, do momento ou da distância. Você é tipo meu anjo da guarda mesmo.',
  'Mesmo trabalhando, estudando, estagiando, vivendo sua vida e passando pelos seus próprios momentos difíceis, você nunca me abandonou. E isso significa muito pra mim.',
  'Quem diria que aquele mlk que tinha medo de você faria tudo isso por você hoje. E pensar que a gente começou a se aproximar por causa dos bombons e da Thaís, você tirando print das fotos dela só pra puxar assunto comigo.',
  'Você é uma pessoa tão incrível que chega a ser absurdo. Quando eu estou triste, vejo vídeos seus cantando, escuto seus áudios rindo, falando besteira, porque, de algum jeito, você está em literalmente tudo da minha vida.',
  'Sem brincadeira nenhuma, se Deus falasse hoje pra eu escolher um nome pra minha filha, seria o seu, e eu não trocaria por nada. Porque você é a melhor pessoa que eu conheço.',
  'Eu falo de você pra literalmente todo mundo no trabalho como se você fosse minha irmã de sangue mesmo. Pro meu chefe, pra Jojo, pra Mayara, pra todo mundo você é minha irmã.',
  'Todo mundo aqui em casa ama você. Você já foi professora da Lara, já foi conselheira, amiga, irmã, apoio, já foi de tudo um pouco pra mim.',
  'E o mais absurdo é pensar que de 2019 até hoje a gente praticamente conversou todo santo dia. Sempre tinha assunto. Filme, série, call de madrugada, vídeos aleatórios, a gente vendo La Casa de Papel junto mesmo longe. Então, Milena, você literalmente faz parte de mim.',
  'O tanto que eu amo você não está escrito. E qualquer coisa que eu faça por você ainda parece pouco perto do que você merece. Eu ainda vou te mimar tanto num nível que você vai enjoar.',
  'Obrigado por existir. Obrigado por nunca desistir de mim. E obrigado por ser minha pessoa favorita nesse mundo.',
  'Eu amo muito você, meu verdadeiro amor em forma de amizade.',
  'Espero de verdade que você tenha gostado do aplicativo. E se der algum erro, pelo amor de Deus, me avisa.',
];

export default function MessageCard() {
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (isReading) {
      document.getElementById('letter-screen')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isReading]);

  if (isReading) {
    return (
      <motion.article
        id="letter-screen"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative min-h-[100svh] overflow-hidden rounded-[1.5rem] bg-ivory text-ink shadow-halo sm:rounded-[2rem]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,_rgba(223,243,228,0.95),_transparent_32%),radial-gradient(circle_at_0%_100%,_rgba(255,244,239,0.95),_transparent_35%)]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.07]" />

        <div className="relative mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14">
          <button
            type="button"
            onClick={() => setIsReading(false)}
            className="inline-flex h-12 items-center gap-3 rounded-full bg-white px-5 text-sm font-black text-ink shadow-soft transition hover:text-plum"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>

          <p className="mt-12 text-sm font-black uppercase tracking-[0.22em] text-plum">
            Carta para Milena
          </p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-7xl">
            Uma carta inteira pra você
          </h2>

          <div className="mt-10 rounded-[1.75rem] bg-white/82 p-6 shadow-soft backdrop-blur sm:p-10">
            <div className="space-y-6 text-lg leading-8 text-ink/76 sm:text-xl sm:leading-9">
              {letterParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-plum text-white shadow-halo">
      <img
        src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=85"
        alt="Decoração colorida de festa"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(33,24,22,0.82),_rgba(127,29,78,0.86))]" />

      <div className="relative p-6 min-[380px]:p-8 sm:p-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-plum shadow-soft">
              <MailOpen size={27} />
            </span>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-marigold">
              Carta final
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight sm:text-7xl">
              Um pedacinho do que você significa
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Abra uma tela só para a carta, com calma, espaço e um fundo bonito para ler
              tudo.
            </p>
          </div>

          <motion.button
            type="button"
            onClick={() => setIsReading(true)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-7 text-base font-black text-plum shadow-soft transition hover:bg-marigold hover:text-ink sm:w-fit"
          >
            <Heart fill="currentColor" size={18} />
            Abrir carta
          </motion.button>
        </div>
      </div>
    </div>
  );
}
