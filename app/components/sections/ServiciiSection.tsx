import Link from 'next/link';

export default function ServiciiSection() {
  const services = [
    {
      title: 'Scalp Therapy',
      href: '/servicii/scalp',
      description: 'Diagnostic, curățare profundă și tratamente personalizate pentru scalp sănătos.',
    },
    {
      title: 'Tratamente Beauty',
      href: '/servicii/tratamente',
      description: 'Ritualuri de îngrijire, regenerare și hidratare pentru un look radiant.',
    },
    {
      title: 'Consultanță',
      href: '/servicii/consultanta',
      description: 'Plan personalizat de îngrijire și recomandări profesionale adaptate ție.',
    },
  ];

  return (
    <section id="servicii" className="min-h-screen bg-gradient-to-br from-[#002147] via-[#052c5c] to-[#1a1a1a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#b87333]">Servicii</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border-2 border-[#b87333] bg-[#0d1929] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#d4a574] hover:shadow-md hover:bg-[#1a2a3a]"
            >
              <h3 className="text-xl font-semibold text-slate-100">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[#b87333] group-hover:text-[#d4a574]">
                Vezi detalii →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
