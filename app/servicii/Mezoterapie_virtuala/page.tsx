import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function Mezoterapie_virtuala() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Mezoterapie Virtuală
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este Mezoterapie Virtuală?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este Mezoterapia virtuală
                Mezoterapia virtuală este o procedură estetică modernă care permite introducerea substanțelor active în piele fără injectare, prin tehnologii ce cresc temporar permeabilitatea cutanată. Această metodă oferă pielii hidratare, revitalizare și susținere metabolică, fără disconfort. Ingredientele active pătrund mai eficient în piele, contribuind la îmbunătățirea texturii, luminozității și elasticității. Procedura este ideală pentru întreținere, prevenție și revitalizare, fiind potrivită pentru majoritatea tipurilor de ten.
                Se utilizeaza pentru:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  hidratare intensă
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  revitalizare cutanată
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  îmbunătățirea texturii pielii
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Border />
    </div>
  );
}
