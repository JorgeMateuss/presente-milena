import Hero from './components/Hero.jsx';
import Timeline from './components/Timeline.jsx';
import Gallery from './components/Gallery.jsx';
import MessageCard from './components/MessageCard.jsx';
import { galleryImages, moments } from './data/moments.js';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-champagne text-rosewood">
      <Hero />
      <Timeline moments={moments} />
      <Gallery images={galleryImages} />
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <MessageCard />
        </div>
      </section>
    </main>
  );
}
