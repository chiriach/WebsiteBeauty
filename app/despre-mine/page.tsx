import Header from "../components/Header";

export default function DespreMinePage() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <section className="min-h-screen bg-white dark:bg-black">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20">
          <h1 className="text-center text-4xl font-bold text-black dark:text-white">Despre Mine</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sunt Alexandra Mărcuț, specialistă în scalp și beauty. Aici poți descoperi
            povestea mea, valorile după care mă ghidez și modul în care lucrez cu fiecare clientă.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Îmbin tehnici moderne, produse profesionale și o atenție deosebită la nevoile tale,
            pentru rezultate vizibile și o experiență premium.
          </p>
        </div>
      </section>
    </div>
  );
}
