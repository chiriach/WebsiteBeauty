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
                Tratamentele pentru scalp sunt realizate în funcție de rezultatele obținute în urma analizei cu tricocameră, având ca scop restabilirea echilibrului scalpului și stimularea sănătății foliculilor de păr.
                În funcție de necesități, se folosesc terapii avansate precum mezoterapia scalpului și aplicarea/ introducerea substanțelor active cu rol regenerativ și nutritiv.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              Acestea pot include:  
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  complexe de vitamine și minerale esențiale
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  acid hialuronic pentru hidratare profundă
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  aminoacizi și factori de creștere
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  exozomi (în protocoale avansate)
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  ingrediente active pentru reglarea sebumului și calmarea inflamației
                </li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">
              Substanțele sunt introduse la nivelul scalpului prin tehnici adaptate, pentru o absorbție eficientă și un efect direct asupra foliculului. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              Se recomandă în caz de:              
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  cădere accentuată a părului
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  subțierea firului de păr
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  alopecie
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  scalp seboreic sau dezechilibrat
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  alte afecțiuni
                </li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">
              Fără un tratament adaptat cauzei reale, rezultatele sunt temporare sau inexistente.
              Printr-un protocol corect ales, putem susține regenerarea, îmbunătăți calitatea firului de păr și crea un mediu sănătos pentru creștere. 
              </p>
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
              <div className="flex justify-center">
                <Image
                  src="/Tratamente_scalp2.png"
                  alt="Tratament_scalp2.png"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 p-6 bg-white rounded-lg ">
                <p className="text-lg text-[#002147] font-medium">
                   <a href="https://wa.me/0769057471" className="text-[#b87333] hover:text-[#d4a574] transition-colors">Contacteaza-ma pe Whatsapp</a>
                </p>
              </div>
        </div>
      </section>
      <Border />
    </div>
  );
}
