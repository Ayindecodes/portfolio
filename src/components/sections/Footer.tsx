// src/components/sections/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import React from "react";

type Social = {
  href: string;
  label: string;
  Icon: React.ElementType; // safe for Lucide types on Vercel
};

const SOCIALS: Social[] = [
  { href: "https://github.com/Ayindecodes", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/ayindecodes", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:techblazecodes@gmail.com", label: "Email", Icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section
      id="footer"
      aria-label="Site footer"
      className="relative mt-20"
    >
      {/* Brand gradient divider */}
      <div className="h-px bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500 to-cyan-400/0" />

      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between py-8">

            {/* Left: Copyright + Built with */}
            <div className="space-y-1 text-sm">
              <p className="text-zinc-400">
                © {year} <span className="font-semibold text-white">TechBlaze</span>. All rights reserved.
              </p>
              <p className="text-zinc-500">
                Built with{" "}
                <span className="text-white">Next.js</span> &{" "}
                <span className="text-white">Tailwind CSS</span> • Deployed on{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400 font-medium">
                  Vercel
                </span>
              </p>
            </div>

            {/* Middle: Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Right: Build with me / Back to top */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="text-sm font-medium rounded-lg px-3 py-2 text-white bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:brightness-110 transition"
              >
                Build with me
              </a>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ArrowUp size={16} />
                Top
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
