import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function PlasmaPenPage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
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
                efect de lifting (blefaroplastie non-chirurgicală)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
               reducerea ridurilor și liniilor de expresie
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                corectarea excesului de piele (pleoape, gât, abdomen)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                estomparea cicatricilor (inclusiv post-acnee)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                diminuarea petelor pigmentare
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                îmbunătățirea texturii pielii
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                stimularea producției de colagen și elastină
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                regenerare și restructurare cutanată
              </li>
            </ul>
            
          </div>
          {/* Right Side - Images */}
                      <div className="flex flex-col gap-6 justify-center">
                        <div className="flex justify-center">
                          <Image
                            src="/plasma_pen3.PNG"
                            alt="Plasma Pen Treatment 1"
                            width={280}
                            height={280}
                            className="rounded-2xl shadow-lg object-contain"
                          />
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/plasma_pen2.png"
                            alt="Plasma Pen Treatment 2"
                            width={280}
                            height={280}
                            className="rounded-2xl shadow-lg object-contain"
                          />
                        </div>
                      </div>
          <div className="mt-10 p-6 bg-white rounded-lg ">
                <p className="text-lg text-[#002147] font-medium">
                   <a href="https://wa.me/0769057471" className="text-[#b87333] hover:text-[#d4a574] transition-colors">Contacteaza-ma pe Whatsapp</a>
                </p>
              </div>
        </div>
        </div>
      </section>
    </div>
  );
}
