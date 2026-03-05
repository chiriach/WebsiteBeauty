import Link from 'next/link';

export default function ServiceCard() {
  return (
    <div className="flex flex-col items-center p-8 bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 max-w-sm">
      
      {/* 1. Logoul / Iconița din mijloc */}
      {/* Aici poți pune o imagine reală folosind <img src="..."> mai târziu */}
      <div className="w-16 h-16 mb-5 bg-rose-50 rounded-full flex items-center justify-center text-rose-400">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* 2. Numele Serviciului */}
      <h3 className="text-2xl font-serif text-gray-800 mb-4 text-center">
        Micropigmentare
      </h3>

      {/* 3. Cele 3 puncte (Pentru cine este destinat) */}
      <ul className="text-gray-600 mb-8 space-y-2 w-full text-sm list-disc marker:text-rose-300 pl-4">
        <li>Pentru sprâncene rare, asimetrice sau fără formă</li>
        <li>Efect natural, pudrat, de lungă durată (1-2 ani)</li>
        <li>Economisești timp cu machiajul în fiecare dimineață</li>
      </ul>

      {/* 4. Butonul "Vezi detalii ->" */}
      {/* Folosim mt-auto pentru a împinge butonul mereu jos, chiar dacă textul diferă */}
      <Link 
        href="/servicii/micropigmentare" 
        className="mt-auto group flex items-center text-rose-500 font-medium hover:text-rose-700 transition-colors uppercase tracking-wider text-sm"
      >
        Vezi detalii
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
          -&gt;
        </span>
      </Link>
      
    </div>
  );
}