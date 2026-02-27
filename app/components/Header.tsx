'use client';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-black dark:text-white cursor-pointer">Alexandra Mărcuț</h1>
        <ul className="flex gap-8">
          
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('despreMine')}
              className="px-4 py-2 text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/20 rounded transition-colors cursor-pointer"
            >
              Despre Mine
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('servicii')}
              className="px-4 py-2 text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/20 rounded transition-colors cursor-pointer"
            >
              Servicii
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('cursuri')}
              className="px-4 py-2 text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/20 rounded transition-colors cursor-pointer"
            >
              Cursuri
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('recenzii')}
              className="px-4 py-2 text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/20 rounded transition-colors cursor-pointer"
            >
              Recenzii
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
