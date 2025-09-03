// src/components/layout/Header.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sparkles,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

type NavLink = { href: `#${string}`; label: string; emoji?: string };
type IconComp = React.ComponentType<{ size?: number; className?: string }>;
type SocialLink = { href: string; label: string; Icon: IconComp };

const LINKS: NavLink[] = [
  { href: "#about", label: "About", emoji: "👨‍💻" },
  { href: "#skills", label: "Skills", emoji: "⚡" },
  { href: "#projects", label: "Projects", emoji: "🚀" },
  { href: "#experience", label: "Experience", emoji: "💼" },
  { href: "#contact", label: "Contact", emoji: "📬" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/Ayindecodes", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/ayindecodes", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:techblazecodes@gmail.com", label: "Email", Icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Scroll + section spy
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      // pick the section whose top is closest but not greater than current scroll
      const candidates = LINKS.map((l) => l.href.slice(1));
      let current = "#hero";
      const yPlus = y + 100; // offset for header
      for (const id of candidates) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (yPlus >= top) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse radial glow (only when scrolled to avoid full-page repaints at top)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrolled) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Desktop nav links with active state
  const DesktopNav = useMemo(
    () => (
      <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
        {LINKS.map((l, i) => {
          const isActive = active === l.href;
          return (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              aria-current={isActive ? "page" : undefined}
              className={[
                "relative px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                isActive
                  ? "text-white bg-white/7.5 border border-white/10"
                  : "text-zinc-300 hover:text-white hover:bg-white/5",
              ].join(" ")}
            >
              {l.emoji && <span className="mr-2">{l.emoji}</span>}
              {l.label}
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-3 right-3 -bottom-[2px] h-px bg-gradient-to-r from-fuchsia-500 to-cyan-400"
                />
              )}
            </motion.a>
          );
        })}
      </nav>
    ),
    [active]
  );

  return (
    <header
      aria-label="Primary"
      onMouseMove={handleMouseMove}
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
      style={
        scrolled
          ? {
              backgroundImage: `radial-gradient(600px 200px at ${mouse.x}px ${mouse.y}px, rgba(124,58,237,0.09), transparent 40%)`,
            }
          : undefined
      }
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 font-semibold rounded-xl px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <motion.span
              initial={{ rotate: -8, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Sparkles className="text-fuchsia-400 drop-shadow" />
            </motion.span>
            <span className="hidden sm:inline text-lg bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300">
              TechBlaze
            </span>
          </a>

          {/* Desktop nav */}
          {DesktopNav}

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ href, label, Icon }, idx) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="/resume/resume.pdf"
              download
              whileHover={{ y: -1, scale: 1.02 }}
              className="relative overflow-hidden px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-fuchsia-600 to-cyan-600 shadow-[0_10px_30px_-12px_rgba(124,58,237,.5)] hover:brightness-110"
            >
              <span className="inline-flex items-center gap-2">
                <Download size={16} /> Resume
              </span>
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="md:hidden mx-4 mb-3 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl shadow-lg overflow-hidden"
          >
            <div className="p-2">
              {LINKS.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "text-white bg-white/7.5 border border-white/10"
                        : "text-zinc-200 hover:text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    {l.emoji && <span className="text-lg">{l.emoji}</span>}
                    {l.label}
                  </a>
                );
              })}

              <div className="mt-2 flex items-center justify-center gap-3 border-t border-white/10 pt-3">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="p-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              <a
                href="/resume.pdf"
                download
                className="mt-3 mb-2 mx-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-600 to-cyan-600"
                onClick={() => setOpen(false)}
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
