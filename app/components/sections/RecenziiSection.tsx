export default function RecenziiSection() {
  const reviews = [
    {
      text: 'Rezultate vizibile după prima ședință. Atmosferă calmă și profesională.',
      author: 'Maria D.',
    },
    {
      text: 'Tratamentul pentru scalp a fost exact ce aveam nevoie. Recomand cu drag!',
      author: 'Elena P.',
    },
    {
      text: 'Consiliere personalizată și produse potrivite. M-am simțit ascultată.',
      author: 'Andreea S.',
    },
    {
      text: 'Servicii premium și rezultate superbe. Revin cu siguranță!',
      author: 'Ioana R.',
    },
  ];

  return (
    <section id="recenzii" className="min-h-screen bg-[#fafaf9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#002147]">Recenzii</h2>
          <div className="h-1 w-16 bg-[#b87333] mx-auto mt-4"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-2xl border-2 border-[#b87333] bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">„{review.text}"</p>
              <p className="mt-4 text-sm font-semibold text-[#002147]">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
