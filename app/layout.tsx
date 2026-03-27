import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexandramarcut.ro"),
  title: {
    default: "Alexandra Marcut | Beauty, Scalp si Micropigmentare",
    template: "%s | Alexandra Marcut",
  },
  description:
    "Alexandra Marcut este specialist in estetica, tricologie, tricopigmentare si dermopigmentare. Servicii profesionale, rezultate naturale si cursuri acreditate.",
  keywords: [
    "Alexandra Marcut",
    "Alexandra Mărcuț",
    "Alexandra Marcut beauty",
    "beauty expert",
    "tricologie",
    "tricopigmentare",
    "micropigmentare",
    "tratamente scalp",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://alexandramarcut.ro",
    title: "Alexandra Marcut | Beauty, Scalp si Micropigmentare",
    description:
      "Specialist in estetica, tricologie, tricopigmentare si dermopigmentare. Descopera serviciile si cursurile Alexandra Marcut.",
    siteName: "Alexandra Marcut",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Marcut | Beauty, Scalp si Micropigmentare",
    description:
      "Servicii profesionale de beauty, scalp si micropigmentare oferite de Alexandra Marcut.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
