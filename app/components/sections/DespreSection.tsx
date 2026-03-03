
export default function DespreSection() {
  return (
    <section id="despreMine" className="min-h-screen bg-[#fafaf9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#002147]">Despre Mine</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col items-center gap-16 mt-10 md:flex-row">
          <div className="relative w-full md:w-1/2 flex justify-center">
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
              proprii de lucru <span className="font-semibold text-[#b87333]">MAST Method</span> - o abordare structurată, construită din
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

            
          </div>
        </div>
      </div>
    </section>
  );
}
