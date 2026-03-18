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
                Consultul tricologic începe cu analiza scalpului prin intermediul tricocamerei, un dispozitiv care permite vizualizarea detaliată a pielii capului și a foliculilor de păr la nivel mărit.
Această etapă este esențială pentru:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  evaluarea densității firelor de păr
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  identificarea zonelor cu subțiere
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  observarea inflamației sau a excesului de sebum
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  analiza stării foliculilor
                </li>
              </ul>
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
