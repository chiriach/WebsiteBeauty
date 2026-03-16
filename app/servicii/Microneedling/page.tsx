import Header from "../../components/Header";

export default function MicroneedlingPage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Microneedling
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Microneedling este o procedură de rejuvenare a pielii care utilizează micro-ace fine pentru a crea micro-canale la nivelul pielii, stimulând astfel producția naturală de colagen și elastină.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tratamentul îmbunătățește textura pielii, reduce ridurile fine, cicatricile de acnee și petele, oferind un ten mai uniform și mai luminos.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                regenerarea colagenului
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                reducerea cicatricilor de acnee
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                îmbunătățirea texturii pielii
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
