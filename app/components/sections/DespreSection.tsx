'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';
export default function DespreSection() {
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
  
  return (
    <section ref={sectionRef} id="despreMine" className="min-h-screen bg-[#fafaf9] overflow-hidden">
      <div className={`mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#002147]">Despre Mine</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col items-center gap-16 mt-10 md:flex-row">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute -top-4 -left-4 w-72 h-96 border-2 border-[#b87333]/20 rounded-2xl hidden md:block"></div>
            <img
              src="/despre-mine.jpg"
              alt="Alexandra Mărcuț"
              className="relative z-10 h-[500px] w-full max-w-sm rounded-2xl object-cover shadow-2xl"
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            <p className="text-xl leading-relaxed text-slate-700 font-light">
              Sunt <span className="font-semibold text-[#002147]">Alexandra Mărcuț</span>, specialist în Dermopigmentare, Cosmetică, Estetică, Tricologie și Tricopigmentare, precum și creator al <span className="font-semibold text-[#b87333]">MAST Method</span> – metoda proprie de lucru, bazată pe siguranță, rigoare și protocoale testate.
              După 9 ani de experiență în mediul corporate, am adus rigoarea și gândirea structurată în lumea esteticii. Pasiunea mea pentru sănătatea pielii și a scalpului m-a ghidat spre specializări complexe, obținând recunoaștere în domeniu (Locul III la Campionatul Beauty 2024) și devenind speaker și trainer.
            </p>
            
            <ul className="mt-8 space-y-4 text-lg text-slate-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333]"></span>
                Consultanță dedicată și planuri personalizate
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333]"></span>
                Tehnici moderne și produse profesionale
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333]"></span>
                Abordare blândă, orientată pe rezultate
              </li>
            </ul>

            
          </div>
        </div>
      </div>
      {/* <div className="w-full leading-none -mb-px">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-24 w-full">
          <defs>
            <linearGradient id="despreToServicii" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#052c5c" />
              <stop offset="100%" stopColor="#052c5c" />
            </linearGradient>
          </defs>
          <path d="M0,64 C240,20 420,110 720,64 C1020,18 1200,100 1440,64 L1440,120 L0,120 Z" fill="url(#despreToServicii)" />
        </svg>
      </div> */}
    </section>
  );
}