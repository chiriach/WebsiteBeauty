import Header from "../../components/Header";

export default function PlasmaPenPage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Plasma Pen
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Plasma Pen este o tehnologie avansată de rejuvenare a pielii care utilizează energia plasmei pentru a stimula regenerarea celulară și producția de colagen.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tratamentul este eficient pentru îndepărtarea petelor pigmentare, ridurilor fine, excesului de piele și altor imperfecțiuni, oferind rezultate vizibile și de lungă durată fără intervenție chirurgicală.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                îndepărtarea petelor pigmentare
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                reducerea ridurilor fine
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                tensionarea pielii
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
