'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      text: 'Rezultate vizibile după prima ședință. Atmosferă calmă și profesională.',
      author: 'Maria D.',
    },
    {
      text: 'Tratamentul pentru scalp a fost exact ce aveam nevoie. Recomand cu drag!',
      author: 'Elena P.',
    },
    {
      text: 'Consiliere personalizată și produse potrivite. M-am simțit ascultată.',
      author: 'Andreea S.',
    },
    {
      text: 'Servicii premium și rezultate superbe. Revin cu siguranță!',
      author: 'Ioana R.',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen bg-gradient-to-br from-[#002147] via-[#052c5c] to-[#1a1a1a] overflow-hidden">
      <div className={`mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>   
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#b87333]">Contact</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#b87333]">Doriți să faceți o rezervare <h1><span className="font-bold">sau</span> aveți o întrebare?</h1></h2>
          <p className="text-lg text-white mt-20">
            Sunați-ne la tel: <a href="tel:+40769057471" className="hover:text-[#b87333] transition-colors">
                  +40 769 057 471 
                </a>
              <a> </a>sau pur și simplu creati o rezervare
          </p>
        </div>
          
        </div>


        {/* Programeaza-te Button */}
        <div className="flex justify-center mt-0">
          <a
            href="https://stailer.ro/widget/mast-beauty/rnoazqdq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#b87333] text-white font-medium rounded-lg hover:bg-[#d4a574] transition-colors uppercase tracking-wider shadow-lg hover:shadow-xl"
          >
            Programează-te
          </a>
        </div>

        {/* Image and Text Below Button */}
        <div className="flex flex-col items-center gap-1 mt-10">
          <Image 
            src="/parere.png" 
            alt="Pareri" 
            width={40} 
            height={20} 
            className="rounded-2xl shadow-lg object-cover" 
          />
          <p className="text-white text-sm md:text-base text-center max-w-md">
            Clientii Multumiti sunt cea mai buna dovada a calitatii serviciilor oferite.
          </p>
        </div>
        <div className="w-full leading-none -mb-px mt-20">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0,64 C240,20 420,110 720,64 C1020,18 1200,100 1440,64 L1440,120 L0,120 Z" fill="#002147" />
          </svg>
        </div>
    </section>
  );
}
