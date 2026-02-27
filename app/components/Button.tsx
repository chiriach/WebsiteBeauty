"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'primary' | 'outline'; // Am adăugat variante pentru flexibilitate
}

export default function Button({ children, onClick, className = "", href, variant = 'primary' }: ButtonProps) {
  
  // Stiluri de bază: font elegant (Serif), tracking (spațiere între litere) și tranziție fină
  const baseClasses = `inline-block px-8 py-3 font-serif tracking-widest uppercase text-sm transition-all duration-300 rounded-sm cursor-pointer border ${className}`;
  
  // Variante de culori
  const variants = {
    primary: "bg-[#002147] border-[#002147] text-white hover:bg-[#c5a059] hover:border-[#c5a059]",
    outline: "bg-transparent border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}