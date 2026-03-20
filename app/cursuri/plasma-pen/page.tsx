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
            <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Curs Plasma Pen
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif text-[#b87333] mt-8 mb-4">
                Despre curs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cursul de Plasma Pen este un program profesional de formare dedicat specialiștilor 
                care doresc să învețe această procedură într-un mod corect, structurat și sigur. 
                Accentul nu este pus doar pe „cum se face", ci pe „de ce se face" și „ce se întâmplă în piele".
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Participanții învață principiul de funcționare al dispozitivului, anatomia pielii, 
                rolul fibroblastelor, procesul de vindecare, indicațiile și contraindicațiile, 
                precum și protocoalele complete de lucru pentru zone faciale și corporale.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cursul este conceput pentru a forma specialiști care înțeleg mecanismul biologic 
                din spatele procedurii și pot adapta tehnica în funcție de fiecare caz.
              </p>

              <h2 className="text-2xl font-serif text-[#b87333] mt-8 mb-4">
                Ce include cursul
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Suport teoretic structurat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Anatomia pielii și procesele regenerative</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Parametrii corecți de lucru</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Indicații și contraindicații</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Tehnici pentru zone faciale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Tehnici pentru zone corporale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Protocol pre și post-procedural</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Practică pe model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Îndrumare personalizată</span>
                </li>
              </ul>

              <h2 className="text-2xl font-serif text-[#b87333] mt-8 mb-4">
                Cui se adresează
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Cosmeticienilor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Dermopigmentiștilor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Specialiștilor în estetică</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0 mt-2"></span>
                  <span>Persoanelor care doresc să se perfecționeze profesional</span>
                </li>
              </ul>

              <h2 className="text-2xl font-serif text-[#b87333] mt-8 mb-4">
                Obiectivul formării
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Formarea unor specialiști care lucrează responsabil, în siguranță și cu înțelegere reală a procedurii, 
                nu doar prin memorarea unor pași tehnici.
              </p>

              <div className="mt-10 p-6 bg-white rounded-lg ">
                <p className="text-lg text-[#002147] font-medium">
                   <a href="https://wa.me/0769057471" className="text-[#b87333] hover:text-[#d4a574] transition-colors">Contacteaza-ma pe Whatsapp</a>
                </p>
              </div>
            </div>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/curs_plasma_pen2.jpeg"
                  alt="curs_plasma_pen2"
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
