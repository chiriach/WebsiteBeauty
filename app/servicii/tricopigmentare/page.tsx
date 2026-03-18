import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function tricopigmentare() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Tricopigmentare
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este tricopigmentarea?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tricopigmentarea este o procedură estetică specializată care presupune introducerea controlată a pigmentului la nivelul scalpului, pentru a crea un efect vizual de densitate sau pentru a camufla zonele afectate de alopecie sau cicatrici. 
Procedura imită optic foliculii de păr, oferind un aspect natural, uniform si se efectuează atât la bărbați cat si la femei. Este o soluție non-chirurgicală pentru persoanele care se confruntă cu subțierea părului, chelie parțială sau cicatrici post-transplant.
Rezultatul este personalizat în funcție de nuanța naturală a părului, tipul de piele și gradul de pierdere a densității, pentru un efect realist și armonios.Se uitilizează pentru:

              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  alopecie androgenetică
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  subțiere difuză a părului
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  chelie parțială sau totală
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  cicatrici post-transplant
                </li>
              </ul>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/tricopigmentare2.png"
                  alt="tricopigmentare2.png"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/tricopigmentare1.png"
                  alt="tricopigmentare1.png"
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
