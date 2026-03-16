import Header from "../../components/Header";

export default function MezoterapiePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Mezoterapie Virtuală
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mezoterapia virtuală este o alternativă non-invazivă la mezoterapia clasică, care utilizează curenți electrici sau ultrasunete pentru a transporta substanțe active în profunzimea pielii fără ace.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tratamentul stimulează producția de colagen, hidratează în profunzime și revitalizează tenul, oferind un efect de lifting vizibil și o strălucire naturală.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                hidratare profundă fără ace
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                stimularea colagenului
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                efect de lifting vizibil
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
