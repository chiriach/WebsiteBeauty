import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function Tratamente_faciale() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Tratamente faciale
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce sunt tratamentele faciale cosmetice?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tratamentele faciale cosmetice sunt proceduri profesionale personalizate, realizate pentru menținerea sănătății pielii și îmbunătățirea aspectului acesteia. Acestea combină curățarea corectă, aplicarea substanțelor active și tehnici specifice fiecărui tip de ten. Tratamentele contribuie la refacerea barierei cutanate, la echilibrarea sebumului și la calmarea pielii, oferind un aspect mai curat, mai luminos și mai uniform. Alegerea tratamentului se face în urma evaluării pielii, pentru rezultate sigure și eficiente.
Se utilizează pentru:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  curățare profundă
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  acnee
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  hidratare
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  anti-aging
                </li>
              </ul>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/tratamente_faciale.png"
                  alt="tratamente_faciale.png
"
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
