
'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
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
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#002147] via-[#052c5c] to-[#1a1a1a] overflow-hidden">
      <div className={`relative z-10 px-6 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="mb-4 font-serif text-6xl md:text-8xl text-[#b87333] drop-shadow-sm">
          Alexandra Mărcuț
        </h1>
        <p className="text-xl tracking-[0.2em] uppercase text-slate-300">
          Beauty & Scalp Expert
        </p>
      
      </div>
      
      {/* Wave transition to Despre section */}
      <div className="absolute bottom-0 w-full leading-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-24 w-full">
          <path d="M0,64 C240,20 420,110 720,64 C1020,18 1200,100 1440,64 L1440,120 L0,120 Z" fill="#fafaf9" />
        </svg>
      </div>
    </section>
    
  );
}
