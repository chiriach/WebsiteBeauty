'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#fdfbf9] shadow-md py-3' // Fundal crem deschis după scroll
          : 'bg-transparent py-6'       // Complet transparent la început
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <h1 
          onClick={() => scrollToSection('hero')} 
          className={`text-2xl font-serif cursor-pointer transition-colors duration-300 ${
            isScrolled ? 'text-[#002147]' : 'text-white'
          }`}
        >
          Alexandra <span className="font-bold">Mărcuț</span>
        </h1>
        
        {/* NAVIGARE */}
        <ul className="flex gap-8">
          {['despreMine', 'servicii', 'cursuri', 'recenzii'].map((item) => (
            <li key={item} className="relative group">
              <button
                type="button"
                onClick={() => scrollToSection(item)}
                className={`
                  text-sm uppercase tracking-[0.2em] font-medium transition-colors duration-300
                  ${isScrolled ? 'text-[#002147]' : 'text-white'}
                  group-hover:text-[#002147] 
                `}
              >
                {/* Traducere nume secțiuni */}
                {item === 'despreMine' ? 'Despre Mine' : 
                 item === 'servicii' ? 'Servicii' : 
                 item === 'cursuri' ? 'Cursuri' : 'Recenzii'}
              </button>
              
              {/* Linia de sub buton (Aramie) */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#002147] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}