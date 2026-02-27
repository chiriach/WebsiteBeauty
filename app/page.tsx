import Link from 'next/link';
import Header from './components/Header';
import Button from './components/Button';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-black">
        <div className="text-center px-6">
          <h1 className="text-5xl font-serif text-black dark:text-white mb-4">Alexandra Mărcuț</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Scalb & Beauty Expert</p>
        </div>
      </section>

      //Todo when I press the Home button on the Header to redirect me on the main page
      {/* Despre Mine Section */}
      <section id="despreMine" className="min-h-screen bg-stone-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
          <h2 className="text-center text-4xl font-bold text-black dark:text-white">Despre Mine</h2>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            <div className="w-full md:w-1/2">
              <img
                src="/despre-mine.jpg"
                alt="Alexandra Mărcuț"
                className="h-96 w-96 rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Sunt Alexandra Mărcuț, specialistă în scalp și beauty. Misiunea mea
                este să ofer soluții personalizate, cu rezultate vizibile și o
                experiență premium pentru fiecare clientă.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-gray-600 dark:text-gray-400">
                <li>• Consultanță dedicată și planuri personalizate</li>
                <li>• Tehnici moderne și produse profesionale</li>
                <li>• Abordare blândă, orientată pe rezultate</li>
              </ul>
              <Button href="/despre-mine">Vezi Serviciile Mele</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="min-h-screen bg-white dark:bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
          <h2 className="text-center text-4xl font-bold text-black dark:text-white">Servicii</h2>
          <div className="grid grid-cols-3 gap-6">
            <Link
              href="/servicii/scalp"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md dark:border-pink-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">Scalp Therapy</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Diagnostic, curățare profundă și tratamente personalizate pentru scalp sănătos.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700 dark:text-pink-400">
                Vezi detalii →
              </span>
            </Link>
            <Link
              href="/servicii/tratamente"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md dark:border-pink-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">Tratamente Beauty</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Ritualuri de îngrijire, regenerare și hidratare pentru un look radiant.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700 dark:text-pink-400">
                Vezi detalii →
              </span>
            </Link>
            <Link
              href="/servicii/consultanta"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md dark:border-pink-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">Consultanță</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Plan personalizat de îngrijire și recomandări profesionale adaptate ție.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700 dark:text-pink-400">
                Vezi detalii →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cursuri Section */}
      <section id="cursuri" className="min-h-screen bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
          <h2 className="text-center text-4xl font-serif text-black dark:text-white">Cursuri</h2>
          <div className="grid grid-cols-3 gap-6">
            <Link
              href="/servicii/consultanta"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md dark:border-pink-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">Consultanță</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Plan personalizat de îngrijire și recomandări profesionale adaptate ție.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700 dark:text-pink-400">
                Vezi detalii →
              </span>
            </Link>
          </div>
          
        </div>
      </section>

      //TODO get the reviews from a screenshot same as the Friend website from the email with reviews
      {/* Recenzii Section */}
      <section id="recenzii" className="min-h-screen bg-white dark:bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
          <h2 className="text-center text-4xl font-bold text-black dark:text-white">Recenzii</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm dark:border-pink-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                „Rezultate vizibile după prima ședință. Atmosferă calmă și profesională.”
              </p>
              <p className="mt-4 text-sm font-semibold text-black dark:text-white">— Maria D.</p>
            </div>
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm dark:border-pink-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                „Tratamentul pentru scalp a fost exact ce aveam nevoie. Recomand cu drag!”
              </p>
              <p className="mt-4 text-sm font-semibold text-black dark:text-white">— Elena P.</p>
            </div>
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm dark:border-pink-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                „Consiliere personalizată și produse potrivite. M-am simțit ascultată.”
              </p>
              <p className="mt-4 text-sm font-semibold text-black dark:text-white">— Andreea S.</p>
            </div>
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm dark:border-pink-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                „Servicii premium și rezultate superbe. Revin cu siguranță!”
              </p>
              <p className="mt-4 text-sm font-semibold text-black dark:text-white">— Ioana R.</p>
            </div>
            //TODO add Programari button
          </div>
        </div>
        //TODO add border at the end of the pages 
      </section>
    </div>
  );
}
