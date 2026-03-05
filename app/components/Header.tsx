'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home with the section hash
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Check if we're on a subpage
  const isSubpage = pathname !== '/';

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isSubpage 
          ? 'bg-[#002147] shadow-md py-3' // Blue background on subpages
          : isScrolled 
            ? 'bg-[#fdfbf9] shadow-md py-3' // Cream background after scroll on home
            : 'bg-transparent py-6'       // Transparent at top on home
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <h1 
          onClick={() => isSubpage ? router.push('/') : scrollToSection('hero')} 
          className={`text-2xl font-serif cursor-pointer transition-colors duration-300 ${
            isSubpage ? 'text-white' : isScrolled ? 'text-[#002147]' : 'text-white'
          }`}
        >
          Alexandra <span className="font-bold">Mărcuț</span>
        </h1>
        
        {/* NAVIGARE */}
        <ul className="flex gap-8">
          {['despreMine', 'servicii', 'cursuri', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <button
                type="button"
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-[0.2em] font-small transition-colors duration-300 ${
                  isSubpage ? 'text-white' : isScrolled ? 'text-[#002147]' : 'text-white'
                } group-hover:text-[#b87333]`}
              >
                {/* Traducere nume secțiuni */}
                {item === 'despreMine' ? 'Despre Mine' : 
                 item === 'servicii' ? 'Servicii' : 
                 item === 'cursuri' ? 'Cursuri' : 'contact'}
              </button>
              
              {/* Linia de sub buton */}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                isSubpage ? 'bg-[#b87333]' : 'bg-black'
              }`}></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}