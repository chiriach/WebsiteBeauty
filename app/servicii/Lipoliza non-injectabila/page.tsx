import Header from "../../components/Header";

export default function LipolizaPage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Lipoliză Non-injectabilă
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lipoliza non-injectabilă este o procedură estetică modernă ce reduce depozitele de grăsime localizată fără ace sau intervenție chirurgicală, prin tehnologii non-invazive avansate.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tratamentul este ideal pentru modelarea siluetei, reducerea celulitei și tonifierea pielii, cu rezultate vizibile după mai multe ședințe și fără recuperare.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                reducerea grăsimii localizate
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                modelare siluetă
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                procedură non-invazivă
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
