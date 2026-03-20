import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function Lipoliza_non_injectabila() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Lipoza non-injectabila
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este Lipoza non-injectabila?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lipoliza non-injectabilă este o procedură estetică de remodelare corporală, 
                realizată fără ace, care vizează reducerea depozitelor de grăsime localizată.
                Substanțele cu efect lipolitic sunt administrate cu ajutorul Hyaluron Pen, acționând controlat asupra țesutului adipos. 
                Procedura sprijină procesul de reducere a grăsimii în zonele problematice și contribuie la îmbunătățirea conturului corporal.
                Nu este o metodă de slăbire generală, ci o soluție complementară pentru remodelare și definire, atunci când este integrată într-un stil de viață echilibrat.
                Se utilizeaza pentru:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  bărbie dublă
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  abdomen
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  coapse
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  brațe
                </li>
              </ul>
              <div className="mt-10 p-6 bg-white rounded-lg ">
                <p className="text-lg text-[#002147] font-medium">
                   <a href="https://wa.me/0769057471" className="text-[#b87333] hover:text-[#d4a574] transition-colors">Contacteaza-ma pe Whatsapp</a>
                </p>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/lipoza.png"
                  alt="lipoza.png"
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
