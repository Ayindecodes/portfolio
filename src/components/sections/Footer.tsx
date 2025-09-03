// src/components/sections/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-white font-semibold">TechBlaze</span>. All rights reserved.
        </p>

        {/* Quick Links */}
        <div className="flex items-center gap-6">
          <a 
            href="#about" 
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
