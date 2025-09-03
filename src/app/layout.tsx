// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TechBlaze – Full Stack Developer",
    template: "%s | TechBlaze",
  },
  description:
    "Portfolio of AbdulRahman Ayinde Ojikutu (TechBlaze) – Full Stack Developer. Python, React, Tailwind, Django and more.",
  openGraph: {
    type: "website",
    title: "TechBlaze – Full Stack Developer",
    description:
      "Premium, modern portfolio for AbdulRahman Ayinde Ojikutu (TechBlaze).",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "TechBlaze Portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  icons: { icon: "/projects/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-to-b from-[#0B0F19] to-[#0A0D14] text-zinc-200 antialiased`}>
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-black/80 focus:text-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
