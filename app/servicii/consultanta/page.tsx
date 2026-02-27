import Header from "../../components/Header";

export default function ConsultantaServicePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20">
          <h1 className="text-center text-4xl font-bold text-black">Consultanță</h1>
          <p className="text-lg text-gray-600">
            Recomandări profesionale și un plan personalizat de îngrijire adaptat
            nevoilor tale.
          </p>
        </div>
      </section>
    </div>
  );
}
