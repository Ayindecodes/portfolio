// src/components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Copy,
} from "lucide-react";

const BRAND_BADGE =
  "bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-white/20";
const BRAND_SOFT =
  "bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-white/10";

const EMAIL = "techblazecodes@gmail.com";
const SOCIAL = [
  { href: "https://github.com/Ayindecodes", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/ayindecodes", label: "LinkedIn", Icon: Linkedin },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", hp: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const isValidEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // simple validations
    if (form.hp) return; // honeypot
    if (!form.name.trim() || !isValidEmail(form.email) || !form.message.trim()) {
      setError("Please fill your name, a valid email, and a short message.");
      return;
    }

    setSending(true);

    try {
      // --- OPTION A (no backend): open mail client ---
      const body = encodeURIComponent(
        `Hi AbdulRahman,\n\n${form.message}\n\nFrom: ${form.name} <${form.email}>`
      );
      const subj = encodeURIComponent(form.subject || "New message from TechBlaze portfolio");
      window.location.href = `mailto:${EMAIL}?subject=${subj}&body=${body}`;

      // simulate completion state for UX
      setTimeout(() => {
        setSent(true);
        setSending(false);
        setForm({ name: "", email: "", subject: "", message: "", hp: "" });
      }, 600);

      // --- OPTION B (server action / API) ---
      // Hook this up later if you want a real endpoint.
    } catch (err) {
      setSending(false);
      setError("Something went wrong. You can email me directly instead.");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* subtle brand glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] bg-[radial-gradient(30rem_12rem_at_10%_15%,#a855f7,transparent_60%),radial-gradient(30rem_12rem_at_90%_10%,#ec4899,transparent_60%)]"
      />

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            <Mail size={16} className="text-pink-400" />
            <span className="text-sm text-zinc-300">Get In Touch</span>
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Have an idea or a role in mind? I’d love to hear about it.
          </p>
        </motion.div>

        {/* contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          <div className={`rounded-2xl p-4 ${BRAND_SOFT}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="text-pink-400" size={18} />
                <div>
                  <div className="text-sm text-zinc-400">Email</div>
                  <a href={`mailto:${EMAIL}`} className="font-medium text-white">
                    {EMAIL}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs bg-white/10 border border-white/10 text-zinc-200 hover:bg-white/15"
              >
                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className={`rounded-2xl p-4 ${BRAND_SOFT}`}>
            <div className="flex items-center gap-3">
              <MapPin className="text-pink-400" size={18} />
              <div>
                <div className="text-sm text-zinc-400">Location</div>
                <div className="font-medium text-white">Lagos, Nigeria • Remote-ready</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          {SOCIAL.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </motion.div>

        {/* form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="rounded-3xl p-6 md:p-8 bg-black/35 backdrop-blur-xl border border-white/10"
        >
          {/* honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.hp}
            onChange={onChange("hp")}
            className="hidden"
            aria-hidden
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-300 mb-1.5">
                Name <span className="text-pink-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Your full name"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-zinc-300 mb-1.5">
                Email <span className="text-pink-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="subject" className="block text-sm text-zinc-300 mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={onChange("subject")}
              placeholder="What’s this about?"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block text-sm text-zinc-300 mb-1.5">
              Message <span className="text-pink-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange("message")}
              placeholder="Tell me about your project or role…"
              rows={6}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
              required
            />
          </div>

          {error && (
            <div className="mt-4 rounded-xl px-3 py-2 text-sm text-pink-300 bg-pink-500/10 border border-pink-500/20">
              {error}
            </div>
          )}

          {sent && !error && (
            <div className="mt-4 rounded-xl px-3 py-2 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center gap-2">
              <CheckCircle2 size={16} />
              Message ready in your mail client—thanks! I’ll get back to you soon.
            </div>
          )}

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={sending}
              className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium text-white transition ${
                sending
                  ? "bg-white/10 border border-white/15 cursor-not-allowed"
                  : "bg-[linear-gradient(135deg,theme(colors.purple.600),theme(colors.pink.600))] shadow-[0_12px_32px_-16px_rgba(236,72,153,.5)] hover:brightness-110"
              }`}
            >
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Sending…" : "Send Message"}
            </button>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium text-zinc-200 bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <Mail size={16} />
              Email Directly
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

