'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ServiciiSection() {
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
  const services = [
    {
      title: 'Microneedling',
      href: '/servicii/scalp',
      description: (
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Consultanță dedicată 
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Umplere buze și contur facial natural
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Fără ace, fără durere, rezultate imediate
          </li>
        </ul>
      ),
      image: '/Icon 3.png',
    },
    {
      title: 'Micropigmentare',
      href: '/servicii/tratamente',
      description: (
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Consultanță dedicată 
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Umplere buze și contur facial natural
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Fără ace, fără durere, rezultate imediate
          </li>
        </ul>
      ),
      image: '/Icon 3.png',
    },
    {
      title: 'Hyaluron Pen',
      href: '/servicii/hyaluronpen',
      description: (
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Consultanță dedicată 
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Umplere buze și contur facial natural
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
            Fără ace, fără durere, rezultate imediate
          </li>
        </ul>
      ),
      image: '/Icon 3.png',
    },
  ];

  return (
    <section ref={sectionRef} id="servicii" className="min-h-screen bg-gradient-to-br from-[#002147] via-[#052c5c] to-[#1a1a1a] overflow-hidden">
      <div className={`mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#b87333]">Servicii</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center p-8 bg-white border border-[#b87333]-200 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-[#b87333] transition-all duration-300"
            >
              {/* Service Image */}
              <div className="w-24 h-24 mb-5 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-serif text-gray-800 mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 text-center text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Details Link */}
              <Link
                href={service.href}
                className="mt-auto group flex items-center text-[#b87333] font-medium hover:text-black transition-colors uppercase tracking-wider text-sm"
              >
                Vezi detalii
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                  -&gt;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
