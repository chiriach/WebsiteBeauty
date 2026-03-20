import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function consult_scalp_cu_tricocamera() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Consultul cu tricocamera
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este Consultul cu tricocamera?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Consultul trichologic începe cu o analiză detaliată a scalpului, realizată cu ajutorul tricocamerei — un dispozitiv profesional care permite vizualizarea în profunzime a pielii capului și a foliculilor de păr.
                Această evaluare este esențială pentru a înțelege cauza reală a problemelor și pentru a stabili un plan de tratament personalizat.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce putem observa?
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  densitatea și grosimea firului de păr
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  zonele cu subțiere sau început de cădere
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  excesul de sebum sau scalpul uscat
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  inflamații sau foliculi blocați
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  nivelul de sănătate al scalpului
                </li>
              
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fără o analiză corectă, orice tratament este doar o presupunere.

                Prin această etapă, putem interveni țintit și eficient, evitând proceduri inutile sau rezultate slabe.
              </p>
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
                  src="/consult_camera2.png"
                  alt="consult_camera2.png"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/consult_camera1.png"
                  alt="consult_camera1.png"
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
