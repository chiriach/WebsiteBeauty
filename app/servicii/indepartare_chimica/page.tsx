import Header from "../../components/Header";
import Image from "next/image";
import Border from "../../components/Footer";

export default function indepartare_chimica() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Indepartare chimica a pigmentului
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este Indepartarea chimica a pigmentului?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Îndepărtarea chimică soft este o procedură utilizată pentru estomparea sau eliminarea lucrărilor de dermopigmentare realizate anterior, atunci când forma, culoarea sau rezultatul final nu mai corespund dorințelor clientei. Procedura presupune utilizarea unei soluții speciale care ajută la extragerea controlată a pigmentului din stratul superficial al pielii.
Această metodă este mai delicată comparativ cu tehnicile agresive și este aleasă în special pentru corecții graduale, estomparea culorilor nedorite sau pregătirea zonei pentru o nouă procedură. Tratamentul este realizat controlat, cu evaluare prealabilă, pentru a proteja integritatea pielii și pentru a obține un rezultat sigur.
              </p>
              
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/indepartare_chimica.png"
                  alt="indepartare_chimica.png"
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
