import Header from "../../components/Header";

export default function ScalpServicePage() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <section className="min-h-screen bg-white dark:bg-black">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20">
          <h1 className="text-center text-4xl font-bold text-black dark:text-white">Scalp Therapy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Diagnostic complet, curățare profundă și tratamente personalizate pentru
            un scalp sănătos și echilibrat.
          </p>
        </div>
      </section>
    </div>
  );
}
