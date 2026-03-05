import Header from "../components/Header";
import Border from "../components/Border";

export default function DespreMinePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20">
          <h1 className="text-center text-4xl font-bold text-black">Despre Mine</h1>
          <p className="text-lg text-gray-600">
            Sunt Alexandra Mărcuț, specialistă în scalp și beauty. Aici poți descoperi
            povestea mea, valorile după care mă ghidez și modul în care lucrez cu fiecare clientă.
          </p>
          <p className="text-lg text-gray-600">
            Îmbin tehnici moderne, produse profesionale și o atenție deosebită la nevoile tale,
            pentru rezultate vizibile și o experiență premium.
          </p>
        </div>
      </section>
      <Border />
    </div>
  );
}
