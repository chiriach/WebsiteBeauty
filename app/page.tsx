import type { Metadata } from 'next';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import DespreSection from './components/sections/DespreSection';
import ServiciiSection from './components/sections/ServiciiSection';
import CursuriSection from './components/sections/CursuriSection';
import RecenziiSection from './components/sections/RecenziiSection';
import Border from './components/Footer';

export const metadata: Metadata = {
  title: 'Alexandra Marcut - Beauty & Scalp Expert',
  description:
    'Alexandra Marcut ofera servicii de beauty, scalp si micropigmentare, plus cursuri profesionale. Programari online pe alexandramarcut.ro.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexandra Marcut',
    alternateName: ['Alexandra Mărcuț'],
    url: 'https://alexandramarcut.ro',
    jobTitle: 'Beauty & Scalp Expert',
    knowsAbout: [
      'Tricologie',
      'Tricopigmentare',
      'Dermopigmentare',
      'Micropigmentare',
      'Tratamente Scalp',
    ],
    sameAs: ['https://alexandramarcut.ro'],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <HeroSection />
      <DespreSection />
      <ServiciiSection />
      <CursuriSection />
      <RecenziiSection />
      <Border />
    </div>
  );
}
