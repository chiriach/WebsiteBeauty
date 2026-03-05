import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Border";

export default function HyaluronPenPage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Hyaluron Pen
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este Hyaluron Pen?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hyaluron Pen este o procedură estetică non-invazivă, fără ace, 
                care permite introducerea substanțelor active prin presiune controlată la nivelul pielii. 
                Această tehnologie este utilizată în special pentru hidratare profundă și volumizare delicată, 
                oferind rezultate naturale, fără disconfort major. Substanța este dispersată uniform, susținând țesutul din interior și îmbunătățind aspectul pielii și al buzelor. 
                Procedura este apreciată pentru recuperarea rapidă și pentru faptul că nu presupune injectare, fiind o opțiune modernă pentru persoanele care își doresc un look armonios și echilibrat.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  volumizare buze
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  hidratare buze
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  estomparea ridurilor (zone selectate)
                </li>
              </ul>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/h1.png"
                  alt="Hyaluron Pen Treatment 1"
                  width={280}
                  height={280}
                  className="rounded-2xl shadow-lg object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/h2.png"
                  alt="Hyaluron Pen Treatment 2"
                  width={280}
                  height={280}
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
