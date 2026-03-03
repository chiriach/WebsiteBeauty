import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import WaveDivider from './components/WaveDivider';
import DespreSection from './components/sections/DespreSection';
import ServiciiSection from './components/sections/ServiciiSection';
import CursuriSection from './components/sections/CursuriSection';
import RecenziiSection from './components/sections/RecenziiSection';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <WaveDivider fromColor="#0d284c" toColor="#fafaf9" />
      <DespreSection />
      <WaveDivider fromColor="#fafaf9" toColor="#002147" />
      <ServiciiSection />
      <CursuriSection />
      <WaveDivider fromColor="#5e3838" toColor="#fafaf9" />
      <RecenziiSection />
    </div>
  );
}
