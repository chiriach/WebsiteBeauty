import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import DespreSection from './components/sections/DespreSection';
import ServiciiSection from './components/sections/ServiciiSection';
import CursuriSection from './components/sections/CursuriSection';
import RecenziiSection from './components/sections/RecenziiSection';
import Border from './components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
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
