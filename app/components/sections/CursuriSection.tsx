import Link from 'next/link';

export default function CursuriSection() {
  return (
    <section id="cursuri" className="min-h-screen bg-gradient-to-br from-[#002147] via-[#052c5c] to-[#1a1a1a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#b87333]">Cursuri</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Link
            href="/servicii/consultanta"
            className="group rounded-2xl border-2 border-[#b87333] bg-[#0d1929] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#d4a574] hover:shadow-md hover:bg-[#1a2a3a]"
          >
            <h3 className="text-xl font-semibold text-slate-100">Consultanță</h3>
            <p className="mt-3 text-sm text-slate-300">
              Plan personalizat de îngrijire și recomandări profesionale adaptate ție.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-[#b87333] group-hover:text-[#d4a574]">
              Vezi detalii →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
