import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function Microneedling() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Microneedling
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este Microneedling-ul?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Microneedling este o terapie estetică de regenerare cutanată care utilizează micro-ace foarte fine pentru a crea microcanale controlate în piele. Aceste microcanale declanșează un răspuns natural de vindecare, stimulând producția de colagen și elastină. Procedura îmbunătățește structura pielii din interior și permite absorbția profundă a substanțelor active aplicate în timpul tratamentului. În funcție de protocol, microneedlingul poate fi combinat cu cocktailuri personalizate sau exozomi, pentru susținerea regenerării, uniformizarea pielii și recuperarea post-procedurală. Rezultatele sunt progresive, naturale și de durată.
Se utilizează pentru:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  cicatrici post-acnee
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  pori dilatați
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  riduri fine
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                  textură neuniformă
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
                  src="/microneedling.jpeg"
                  alt="microneedling.jpeg"
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
