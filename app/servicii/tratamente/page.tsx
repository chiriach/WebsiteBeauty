import Header from "../../components/Header";
import Border from "../../components/Footer";

export default function TratamenteServicePage() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20">
          <h1 className="text-center text-4xl font-bold text-black">Tratamente Beauty</h1>
          <p className="text-lg text-gray-600">
            Ritualuri de îngrijire, regenerare și hidratare pentru un aspect luminos
            și o piele sănătoasă.
          </p>
        </div>
      </section>
      <Border />
    </div>
  );
}
