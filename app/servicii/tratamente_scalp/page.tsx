import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function tratamente_scalp() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Tratamente pentru scalp
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce sunt tratamentele pentru scalp?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tratamentele pentru scalp sunt realizate în funcție de rezultatele obținute în urma consultului cu tricocamera și au rolul de a restabili echilibrul scalpului și de a susține sănătatea foliculilor de păr. În cadrul procedurilor, se utilizează cocktailuri special formulate pentru afecțiunea prezentă.
Substanțele active sunt introduse la nivelul scalpului prin tehnici adaptate, în funcție de necesitate, pentru a asigura o absorbție eficientă și un efect direcționat asupra foliculilor. În anumite protocoale, tratamentele pot include exozomi, recunoscuți pentru rolul lor în susținerea regenerării și stimularea comunicării celulare, contribuind la revitalizarea scalpului și la îmbunătățirea mediului folicular. Procedura nu este dureroasă!
Scopul tratamentelor nu este doar reducerea simptomelor, ci susținerea unui proces de regenerare reală și crearea unui mediu optim pentru creșterea
sănătoasă a părului.
Se utilizează pentru:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  cădere accentuată a părului
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  subțierea firului
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  alopecie 
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  scalp seboreic
                </li>
              </ul>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/tratament_scalp.png"
                  alt="tratament_scalp.png"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Border />
    </div>
  );
}
