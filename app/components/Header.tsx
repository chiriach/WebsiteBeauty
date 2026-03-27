'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Check if we're on a subpage
  const isSubpage = pathname !== '/';

  const navTextClass = `text-sm uppercase tracking-[0.2em] font-small transition-colors duration-300 ${
    isSubpage ? 'text-white' : isScrolled ? 'text-[#002147]' : 'text-white'
  }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

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
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsMobileServicesOpen(false);
            isSubpage ? router.push('/') : scrollToSection('hero');
          }} 
          className={`text-2xl font-serif cursor-pointer transition-colors duration-300 ${
            isSubpage ? 'text-white' : isScrolled ? 'text-[#002147]' : 'text-white'
          }`}
        >
          Alexandra <span className="font-bold">Mărcuț</span>
        </h1>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`md:hidden flex h-10 w-10 items-center justify-center ${
            isSubpage ? 'text-white' : isScrolled ? 'text-[#002147]' : 'text-white'
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-main-menu"
        >
          <span className="sr-only">Open menu</span>
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''
              }`}
            ></span>
            <span
              className={`absolute left-0 top-[8px] h-[2px] w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`absolute left-0 top-4 h-[2px] w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''
              }`}
            ></span>
          </span>
        </button>
        
        {/* NAVIGARE */}
        <ul className="hidden md:flex gap-8 items-center">
          {['despreMine'].map((item) => (
            <li key={item} className="relative group">
              <button
                type="button"
                onClick={() => scrollToSection(item)}
                className={`${navTextClass} group-hover:text-[#b87333]`}
              >
                {/* Traducere nume secțiuni */}
                {item === 'despreMine' ? 'Despre Mine' : 
                 item === 'cursuri' ? 'Cursuri' : 'contact'}
              </button>
              
              {/* Linia de sub buton */}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                isSubpage ? 'bg-[#b87333]' : 'bg-black'
              }`}></span>
            </li>
          ))}

          <li
            className="relative group"
            ref={servicesMenuRef}
            onMouseEnter={() => {
              setIsServicesOpen(true);
            }}
            onMouseLeave={() => {
              setIsServicesOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => {
                // Keep click support for touch devices and subpages.
                setIsServicesOpen((prev) => !prev);
              }}
              className={`${navTextClass} group-hover:text-[#b87333]`}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
            >
              Servicii
            </button>

            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
              isSubpage ? 'bg-[#b87333]' : 'bg-black'
            }`}></span>

            <ul
              className={`absolute left-1/2 top-full z-50 mt-0 w-80 -translate-x-1/2 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/10 transition-all duration-200 ${
                isServicesOpen
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                  : 'opacity-0 invisible translate-y-2 pointer-events-none'
              }`}
            >
              <li className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b87333]">
                Scalp & Tricologie
              </li>
              <li>
                <Link href="/servicii/consult_scalp" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Consult cu Tricocamera
                </Link>
              </li>
              <li>
                <Link href="/servicii/tratamente_scalp" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Tratamente pt Scalp
                </Link>
              </li>
              <li>
                <Link href="/servicii/tricopigmentare" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Tricopigmentare
                </Link>
              </li>

              <li className="mt-1 px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b87333]">
                Estetica
              </li>
              <li>
                <Link href="/servicii/Microneedling" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Microneedling
                </Link>
              </li>
              <li>
                <Link href="/servicii/Mezoterapie_virtuala" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Mezoterapie virtuală
                </Link>
              </li>
              <li>
                <Link href="/servicii/plasma-pen" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  PlasmaPen
                </Link>
              </li>
              <li>
                <Link href="/servicii/hyaluronpen" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  HyaluronPen
                </Link>
              </li>
              <li>
                <Link href="/servicii/Lipoliza_non_injectabila" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Lipoliză non-injectabilă
                </Link>
              </li>
              <li>
                <Link href="/servicii/Tratamente_faciale" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Tratamente cosmetice
                </Link>
              </li>

              <li className="mt-1 px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b87333]">
                Dermopigmentare
              </li>
              <li>
                <Link href="/servicii/Micropigmentare/sprancene" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Sprâncene
                </Link>
              </li>
              <li>
                <Link href="/servicii/Micropigmentare/Buze" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Buze
                </Link>
              </li>
              <li>
                <Link href="/servicii/Micropigmentare/Eyeliner" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Eyeliner
                </Link>
              </li>
              <li>
                <Link href="/servicii/indepartare_chimica" className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]" onClick={() => setIsServicesOpen(false)}>
                  Îndepărtare chimică
                </Link>
              </li>
            </ul>
          </li>

          {['cursuri', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <button
                type="button"
                onClick={() => scrollToSection(item)}
                className={`${navTextClass} group-hover:text-[#b87333]`}
              >
                {item === 'cursuri' ? 'Cursuri' : 'contact'}
              </button>

              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                isSubpage ? 'bg-[#b87333]' : 'bg-black'
              }`}></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div
        id="mobile-main-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[56rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-lg bg-white/95 p-4 shadow-lg ring-1 ring-black/10 backdrop-blur-sm">
          <ul className="flex flex-col gap-1">
            <li>
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm uppercase tracking-[0.2em] text-[#002147] hover:bg-[#f4eee8]"
                aria-expanded={isMobileServicesOpen}
                aria-controls="mobile-services-submenu"
              >
                Servicii
                <span className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              <ul
                id="mobile-services-submenu"
                className={`overflow-hidden pl-3 transition-all duration-200 ${
                  isMobileServicesOpen ? 'max-h-[52rem] py-1' : 'max-h-0'
                }`}
              >
                <li className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b87333]">
                  Scalp & Tricologie
                </li>
                {[
                  { href: '/servicii/consult_scalp', label: 'Consult cu Tricocamera' },
                  { href: '/servicii/tratamente_scalp', label: 'Tratamente pt Scalp' },
                  { href: '/servicii/tricopigmentare', label: 'Tricopigmentare' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-md px-3 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}

                <li className="mt-1 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b87333]">
                  Estetica
                </li>
                {[
                  { href: '/servicii/Microneedling', label: 'Microneedling' },
                  { href: '/servicii/Mezoterapie_virtuala', label: 'Mezoterapie virtuală' },
                  { href: '/servicii/plasma-pen', label: 'PlasmaPen' },
                  { href: '/servicii/hyaluronpen', label: 'HyaluronPen' },
                  { href: '/servicii/Lipoliza_non_injectabila', label: 'Lipoliză non-injectabilă' },
                  { href: '/servicii/Tratamente_faciale', label: 'Tratamente cosmetice' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-md px-3 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}

                <li className="mt-1 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b87333]">
                  Dermopigmentare
                </li>
                {[
                  { href: '/servicii/Micropigmentare/sprancene', label: 'Sprâncene' },
                  { href: '/servicii/Micropigmentare/Buze', label: 'Buze' },
                  { href: '/servicii/Micropigmentare/Eyeliner', label: 'Eyeliner' },
                  { href: '/servicii/indepartare_chimica', label: 'Îndepărtare chimică' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-md px-3 py-2 text-sm text-[#002147] hover:bg-[#f4eee8]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileServicesOpen(false);
                  scrollToSection('despreMine');
                }}
                className="w-full rounded-md px-3 py-2 text-left text-sm uppercase tracking-[0.2em] text-[#002147] hover:bg-[#f4eee8]"
              >
                Despre Mine
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileServicesOpen(false);
                  scrollToSection('cursuri');
                }}
                className="w-full rounded-md px-3 py-2 text-left text-sm uppercase tracking-[0.2em] text-[#002147] hover:bg-[#f4eee8]"
              >
                Cursuri
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileServicesOpen(false);
                  scrollToSection('contact');
                }}
                className="w-full rounded-md px-3 py-2 text-left text-sm uppercase tracking-[0.2em] text-[#002147] hover:bg-[#f4eee8]"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}