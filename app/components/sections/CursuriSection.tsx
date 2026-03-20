'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function CursuriSection() {
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
    <section ref={sectionRef} id="cursuri" className="min-h-screen bg-[#fafaf9]">
      <div className={`mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#b87333]">Cursuri</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-serif text-[#002147]">
              Cursuri de Specializare
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cursul de Plasma Pen este un program profesional de formare dedicat specialiștilor care doresc să învețe această procedură într-un mod corect, structurat și sigur. 
              Accentul nu este pus doar pe „cum se face”, ci pe „de ce se face” și „ce se întâmplă în piele”.
            </p>            <Link
              href="/cursuri/plasma-pen"
              className="mt-4 inline-flex items-center gap-2 text-[#b87333] font-medium hover:text-[#d4a574] transition-colors uppercase tracking-wider text-sm group"
            >
              Vezi detalii
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src="/the_plasma_pen.jpeg"
              alt="Cursuri"
              width={400}
              height={250}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
