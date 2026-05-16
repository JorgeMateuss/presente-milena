import {
  Archive,
  BadgePlus,
  Award,
  Camera,
  Fingerprint,
  Gift,
  GraduationCap,
  Heart,
  Images,
  Music2,
  ScrollText,
  Sparkles,
} from 'lucide-react';
import Certificate from './components/Certificate.jsx';
import Dedication from './components/Dedication.jsx';
import CandidGallery from './components/CandidGallery.jsx';
import FinalSurprise from './components/FinalSurprise.jsx';
import Gallery from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';
import Lessons from './components/Lessons.jsx';
import MemoryBook from './components/MemoryBook.jsx';
import MessageCard from './components/MessageCard.jsx';
import MilenaOnly from './components/MilenaOnly.jsx';
import NavBar from './components/NavBar.jsx';
import NeverForget from './components/NeverForget.jsx';
import OpenWhen from './components/OpenWhen.jsx';
import Playlist from './components/Playlist.jsx';
import Qualities from './components/Qualities.jsx';
import ReasonsBox from './components/ReasonsBox.jsx';
import SecretArchive from './components/SecretArchive.jsx';
import SurvivalKit from './components/SurvivalKit.jsx';
import Timeline from './components/Timeline.jsx';
import {
  galleryImages,
  letterPages,
  lessons,
  moments,
  candidMoments,
  certificate,
  milenaOnly,
  musicMoments,
  openWhenLetters,
  playlist,
  qualities,
  reasons,
  reminders,
  secretArchive,
  survivalKit,
} from './data/moments.js';

const navItems = [
  { href: '#playlist', label: 'Playlist', icon: Music2, description: 'Músicas para o dia dela' },
  { href: '#book', label: 'Mini livro', icon: ScrollText, description: 'Cartas em páginas' },
  { href: '#gallery', label: 'Galeria', icon: Images, description: 'Fotos para trocar depois' },
  { href: '#candid', label: 'Ela sendo ela', icon: Camera, description: 'Momentos espontâneos' },
  { href: '#only-milena', label: 'Só a Milena', icon: Fingerprint, description: 'Jeitos únicos dela' },
  { href: '#archive', label: 'Arquivo secreto', icon: Archive, description: 'Pastas de memórias' },
  { href: '#reasons', label: 'Motivos', icon: Gift, description: 'Frases para revelar' },
  { href: '#qualities', label: 'Brilhos', icon: Sparkles, description: 'Qualidades da Milena' },
  { href: '#lessons', label: 'Lições', icon: GraduationCap, description: 'O que ela ensinou' },
  { href: '#kit', label: 'Kit especial', icon: BadgePlus, description: 'Itens para dias bonitos' },
  { href: '#certificate', label: 'Certificado', icon: Award, description: 'Prêmio da aniversariante' },
  { href: '#message', label: 'Carta final', icon: Heart, description: 'Mensagem principal' },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-ink">
      <NavBar items={navItems} />

      <Hero />
      <Playlist musicMoments={musicMoments} tracks={playlist} />
      <MemoryBook pages={letterPages} />
      <Timeline moments={moments} />
      <Gallery images={galleryImages} />
      <CandidGallery moments={candidMoments} />
      <MilenaOnly items={milenaOnly} />
      <OpenWhen letters={openWhenLetters} />
      <SecretArchive files={secretArchive} />
      <ReasonsBox reasons={reasons} />
      <Qualities qualities={qualities} />
      <Lessons lessons={lessons} />
      <NeverForget reminders={reminders} />
      <SurvivalKit items={survivalKit} />
      <Certificate certificate={certificate} />

      <section id="message" className="relative px-5 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#fffaf2_0%,_#f3fbf7_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <MessageCard />
        </div>
      </section>

      <FinalSurprise />
      <Dedication />
    </main>
  );
}
