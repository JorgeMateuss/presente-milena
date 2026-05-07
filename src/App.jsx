import { Heart, Images, MapPinned, Music2, ScrollText, Sparkles } from 'lucide-react';
import Dedication from './components/Dedication.jsx';
import Gallery from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';
import MemoryBook from './components/MemoryBook.jsx';
import MemoryMap from './components/MemoryMap.jsx';
import MessageCard from './components/MessageCard.jsx';
import Playlist from './components/Playlist.jsx';
import Qualities from './components/Qualities.jsx';
import Timeline from './components/Timeline.jsx';
import {
  galleryImages,
  letterPages,
  memoryPlaces,
  moments,
  playlist,
  qualities,
} from './data/moments.js';

const navItems = [
  { href: '#playlist', label: 'Playlist', icon: Music2 },
  { href: '#book', label: 'Livro', icon: ScrollText },
  { href: '#gallery', label: 'Fotos', icon: Images },
  { href: '#map', label: 'Mapa', icon: MapPinned },
  { href: '#qualities', label: 'Brilhos', icon: Sparkles },
  { href: '#message', label: 'Carta', icon: Heart },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-ink">
      <nav className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-3 rounded-full border border-white/70 bg-white/75 px-3 py-2 shadow-[0_16px_55px_rgba(29,24,22,0.12)] backdrop-blur-xl sm:px-5">
          <a href="#top" className="shrink-0 font-display text-xl font-black text-plum">
            Milena
          </a>

          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-3 text-sm font-bold text-ink/70 transition hover:bg-clay/10 hover:text-plum lg:px-4"
                  title={item.label}
                >
                  <Icon size={17} />
                  <span className="hidden lg:inline">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <Hero />
      <Playlist tracks={playlist} />
      <MemoryBook pages={letterPages} />
      <Timeline moments={moments} />
      <Gallery images={galleryImages} />
      <MemoryMap places={memoryPlaces} />
      <Qualities qualities={qualities} />

      <section id="message" className="relative px-5 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#fffaf2_0%,_#f3fbf7_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <MessageCard />
        </div>
      </section>

      <Dedication />
    </main>
  );
}
