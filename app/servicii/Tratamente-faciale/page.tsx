import Header from "../../components/Header";

export default function TratamenteFaciálePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Tratamente Faciale
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tratamentele faciale sunt proceduri personalizate concepute pentru a îmbunătăți starea pielii feței, adaptate nevoilor fiecărui client.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              De la curățare profundă și hidratare intensă până la proceduri anti-aging și tratamente pentru acnee, oferim soluții complete pentru un ten sănătos și radios.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                curățare profundă
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                hidratare intensă
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                tratamente anti-aging
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
