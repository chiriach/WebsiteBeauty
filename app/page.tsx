import Link from 'next/link';
import Header from './components/Header';
import Button from './components/Button';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#002147] via-[#052c5c] to-[#1a1a1a] overflow-hidden">
        <div className="relative z-10 px-6 text-center">
          {/* Titlul cu font Serif și culoare Aramiu */}
          <h1 className="mb-4 font-serif text-6xl md:text-8xl text-[#b87333] drop-shadow-sm">
            Alexandra Mărcuț
          </h1>
          <p className="text-xl tracking-[0.2em] uppercase text-slate-300">
            Scalp & Beauty Expert
          </p>
        </div>

        {/* SVG Divider - Creează trecerea cursivă spre secțiunea albă */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-[#fafaf9]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C47.45,4.9,95.21,14.05,142,24.32,201.21,37.35,260.65,48.68,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>



      {/* Despre Mine Section */}
      <section id="despreMine" className="min-h-screen bg-[#fafaf9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#002147]">Despre Mine</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col items-center gap-16 mt-10 md:flex-row">
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Design Element: Un fundal decorativ în spatele pozei */}
            <div className="absolute -top-4 -left-4 w-72 h-96 border-2 border-[#b87333]/20 rounded-2xl hidden md:block"></div>
            <img
              src="/despre-mine.jpg"
              alt="Alexandra Mărcuț"
              className="relative z-10 h-[500px] w-full max-w-sm rounded-2xl object-cover shadow-2xl"
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            <p className="text-xl leading-relaxed text-slate-700 font-light">
              Sunt <span className="font-semibold text-[#002147]">Alexandra Mărcuț</span>, specialist în Dermopigmentare, Cosmetică, Estetică,
              Tricologie și Tricopigmentare, trainer în formare și creator al unei metode
              proprii de lucru – MAST Method – o abordare structurată, construită din
              experiență practică, studiu continuu și protocoale testate.
            </p>
            
            <ul className="mt-8 space-y-4 text-lg text-slate-600">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333]"></span>
                Consultanță dedicată și planuri personalizate
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333]"></span>
                Tehnici moderne și produse profesionale
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b87333]"></span>
                Abordare blândă, orientată pe rezultate
              </li>
            </ul>

            <div className="mt-10">
                {/* Asigură-te că butonul are culorile tale tematice */}
                <Button href="#servicii" className="bg-black hover:bg-red-600 transition-all">
                    Vezi mai mult
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>





      {/* Servicii Section */}
      <section id="servicii" className="min-h-screen bg-orange-700">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
          <h2 className="text-center text-4xl font-bold text-black ">Servicii</h2>
          <div className="grid grid-cols-3 gap-6">
            <Link
              href="/servicii/scalp"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-black">Scalp Therapy</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Diagnostic, curățare profundă și tratamente personalizate pentru scalp sănătos.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700">
                Vezi detalii →
              </span>
            </Link>
            <Link
              href="/servicii/tratamente"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-black">Tratamente Beauty</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Ritualuri de îngrijire, regenerare și hidratare pentru un look radiant.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700">
                Vezi detalii →
              </span>
            </Link>
            <Link
              href="/servicii/consultanta"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-black">Consultanță</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Plan personalizat de îngrijire și recomandări profesionale adaptate ție.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700">
                Vezi detalii →
              </span>
            </Link>
          </div>
        </div>
      </section>





      {/* Cursuri Section */}
      <section id="cursuri" className="min-h-screen bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
          <h2 className="text-center text-4xl font-serif text-black">Cursuri</h2>
          <div className="grid grid-cols-3 gap-6">
            <Link
              href="/servicii/consultanta"
              className="group rounded-2xl border-2 border-pink-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-400 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-black">Consultanță</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Plan personalizat de îngrijire și recomandări profesionale adaptate ție.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-pink-600 group-hover:text-pink-700">
                Vezi detalii →
              </span>
            </Link>
          </div>
          
        </div>
      </section>





      //TODO get the reviews from a screenshot same as the Friend website from the email with reviews
      {/* Recenzii Section */}
      <section id="recenzii" className="min-h-screen bg-stone-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
          <h2 className="text-center text-4xl font-bold text-black">Recenzii</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm">
              <p className="text-sm text-zinc-600">
                „Rezultate vizibile după prima ședință. Atmosferă calmă și profesională.”
              </p>
              <p className="mt-4 text-sm font-semibold text-black">— Maria D.</p>
            </div>
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm">
              <p className="text-sm text-zinc-600">
                „Tratamentul pentru scalp a fost exact ce aveam nevoie. Recomand cu drag!”
              </p>
              <p className="mt-4 text-sm font-semibold text-black">— Elena P.</p>
            </div>
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm">
              <p className="text-sm text-zinc-600">
                „Consiliere personalizată și produse potrivite. M-am simțit ascultată.”
              </p>
              <p className="mt-4 text-sm font-semibold text-black">— Andreea S.</p>
            </div>
            <div className="rounded-2xl border border-pink-200 bg-zinc-50 p-6 shadow-sm">
              <p className="text-sm text-zinc-600">
                „Servicii premium și rezultate superbe. Revin cu siguranță!”
              </p>
              <p className="mt-4 text-sm font-semibold text-black">— Ioana R.</p>
            </div>
            //TODO add Programari button
          </div>
        </div>
        //TODO add border at the end of the pages 
      </section>
    </div>
  );
}
