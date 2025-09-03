// src/components/sections/Footer.tsx
"use client";

import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="footer"
      className="relative border-t border-white/10 py-12 md:py-16"
    >
      {/* gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-cyan-500/40" />

      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-8 text-center">
        {/* copyright */}
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            TechBlaze
          </span>{" "}
          – All rights reserved.
        </p>

        {/* build with me CTA */}
        <a
          href="mailto:abdulrahman@techblaze.dev?subject=Let’s%20build%20something"
          className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 px-5 py-2.5 text-sm font-medium text-white hover:from-purple-600/30 hover:via-pink-600/30 hover:to-cyan-600/30 transition-all"
        >
          <Sparkles size={16} className="text-purple-300" />
          Build with me
          <span className="ml-0.5 inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>

        {/* socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/techblaze"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/techblaze"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:abdulrahman@techblaze.dev"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
