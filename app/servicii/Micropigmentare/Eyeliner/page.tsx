import Header from "../../../components/Header";
import Image from "next/image";
import Border from "../../../components/Footer";

export default function Eyeliner() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
                Micropigmentare Eyeliner
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ce este micropigmentarea eyelinerului?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Micropigmentarea eyelinerului este o procedură estetică semi-permanentă care presupune introducerea controlată a pigmentului la nivelul liniei genelor, cu scopul de a intensifica privirea și de a defini forma ochilor. Procedura este realizată cu precizie, respectând anatomia ochiului și proporțiile feței, pentru un rezultat armonios și adaptat fiecărei fizionomii.
Prin această tehnică, se poate crea un efect discret de densificare a genelor sau un contur mai definit, asemănător unui eyeliner clasic, în funcție de preferințe. Rezultatul este unul natural, elegant și durabil, reducând semnificativ timpul alocat machiajului zilnic.
Înainte de procedură, se stabilește forma și intensitatea dorită, astfel încât designul final să completeze echilibrat trăsăturile feței


                </p>
            </div>

            {/* Right Side - Images */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex justify-center">
                <Image
                  src="/micropigmentare_eyeliner.jpeg"
                  alt="micropigmentare_eyeliner.jpeg"
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
