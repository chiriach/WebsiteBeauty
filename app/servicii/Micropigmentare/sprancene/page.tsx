import Header from "../../../components/Header";
import Image from "next/image";
import Border from "../../../components/Footer";

export default function sprancene() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Micropigmentare Sprâncene
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este micropigmentarea sprâncenelor?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Micropigmentarea sprâncenelor este o procedură estetică semi-permanentă care presupune introducerea controlată a pigmentului în stratul superficial al pielii, cu scopul de a defini forma, de a corecta asimetriile și de a oferi densitate vizuală sprâncenelor. Procedura este personalizată în funcție de fizionomie, tipul de piele și preferințele clientei, pentru a obține un rezultat natural și armonios.
Înainte de procedură, se realizează o etapă de design și măsurare, astfel încât forma finală să fie proporțională cu trăsăturile feței.


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
                  src="/micropigmentare_sprancene1.png"
                  alt="micropigmentare_sprancene1.png"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/micropigmentare_sprancene12.png"
                  alt="micropigmentare_sprancene2.png"
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
