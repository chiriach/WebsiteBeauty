import Header from "../../components/Header";

export default function MicropigmentarePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 max-w-2xl">
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
                micropigmentare sprâncene
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                micropigmentare buze
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                look natural de lungă durată
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
