import Header from "../../components/Header";
import Border from "../../components/Border";

export default function ScalpServicePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20">
          <h1 className="text-center text-4xl font-bold text-black">Scalp Therapy</h1>
          <p className="text-lg text-gray-600">
            Diagnostic complet, curățare profundă și tratamente personalizate pentru
            un scalp sănătos și echilibrat.
          </p>
        </div>
      </section>
      <Border />
    </div>
  );
}
