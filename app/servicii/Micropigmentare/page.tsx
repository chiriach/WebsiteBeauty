import Border from "@/app/components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function MicropigmentarePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Micropigmentare
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Micropigmentarea este o tehnică semi-permanentă de machiaj care implică introducerea pigmentului în straturile superioare ale pielii pentru a obține un aspect estetic îmbunătățit.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Procedura este utilizată pentru definirea sprâncenelor, a buzelor și a altor zone faciale, oferind un look natural și îngrijit ce durează ani întregi.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                <Link
                  href="/servicii/Micropigmentare/sprancene"
                  className="text-[#002147] underline-offset-4 hover:underline"
                >
                  micropigmentare Sprancene  (vezi detaliile)
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                <Link
                  href="/servicii/Micropigmentare/Buze"
                  className="text-[#002147] underline-offset-4 hover:underline"
                >
                  micropigmentare buze  (vezi detaliile)
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                <Link
                  href="/servicii/Micropigmentare/Eyeliner"
                  className="text-[#002147] underline-offset-4 hover:underline"
                >
                  micropigmentare Eyeliner  (vezi detaliile)
                </Link>
              </li>
            </ul>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/micro3.jpg"
                  alt="micro1"
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
