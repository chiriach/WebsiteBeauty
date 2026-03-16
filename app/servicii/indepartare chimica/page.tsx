import Header from "../../components/Header";

export default function IndepartareChimicaPage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-[#002147]">
              Îndepărtare Chimică
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Îndepărtarea chimică (peeling chimic) este o procedură estetică care utilizează substanțe chimice pentru a exfolia straturile superficiale ale pielii și a stimula regenerarea celulară.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tratamentul este eficient pentru uniformizarea tonului pielii, reducerea petelor pigmentare, a ridurilor fine și a cicatricilor superficiale, dezvăluind o piele mai tânără și mai luminoasă.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                uniformizarea tonului pielii
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                reducerea petelor pigmentare
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333] flex-shrink-0"></span>
                exfoliere profundă
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
