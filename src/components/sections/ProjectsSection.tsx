// src/components/sections/ProjectsSection.tsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderOpen,
  Code2,
  Server,
  Database,
  Layers,
  Globe,
  Zap,
  Sparkles,
  Star,
  ExternalLink,
  Github,
  Users,
  Clock,
  ArrowUpRight,
} from "lucide-react";

type Tag =
  | "React"
  | "Django"
  | "API"
  | "Dashboard"
  | "Full-stack"
  | "Mobile"
  | "AI"
  | "E-commerce";

type Status = "Live" | "In Development" | "Beta" | "Archived";

type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  demo?: string;
  repo?: string;
  image?: string; // /projects/*.jpg
  tags: Tag[];
  featured?: boolean;
  status: Status;
  year: string;
  metrics?: {
    users?: string;
    performance?: string;
  };
};

const ALL_TAGS = [
  "All",
  "React",
  "Django",
  "API",
  "Dashboard",
  "Full-stack",
  "Mobile",
  "AI",
  "E-commerce",
] as const;

const TAG_ICONS: Record<Tag, React.ComponentType<{ size?: number; className?: string }>> = {
  React: Code2,
  Django: Server,
  API: Database,
  Dashboard: Layers,
  "Full-stack": Globe,
  Mobile: Zap,
  AI: Sparkles,
  "E-commerce": Star,
};

const STATUS_BADGE: Record<Status, string> = {
  Live: "bg-emerald-500/12 text-emerald-400 border-emerald-500/25",
  Beta: "bg-blue-500/12 text-blue-400 border-blue-500/25",
  "In Development": "bg-amber-500/12 text-amber-400 border-amber-500/25",
  Archived: "bg-zinc-500/12 text-zinc-400 border-zinc-500/25",
};

const PROJECTS: Project[] = [
  {
    title: "TaskMaster Pro",
    description: "AI-assisted task management with real-time collaboration and advanced analytics.",
    longDescription:
      "Next.js front-end with a Django REST API. AI prioritization, presence/WS updates, and a polished analytics suite.",
    tech: ["Next.js", "TypeScript", "Django", "PostgreSQL", "Redis", "WebSocket"],
    demo: "#",
    repo: "#",
    image: "/projects/task.png",
    tags: ["React", "Django", "Full-stack", "AI"],
    featured: true,
    status: "Live",
    year: "2024",
    metrics: { users: "2.5K+", performance: "99.8% uptime" },
  },
  {
    title: "FinanceFlow Dashboard",
    description: "Real-time financial analytics with risk, portfolios, and reporting.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "D3.js", "WebSocket"],
    demo: "#",
    repo: "#",
    image: "/projects/financeflow.png",
    tags: ["React", "Dashboard", "Full-stack"],
    status: "Live",
    year: "2024",
    metrics: { users: "5K+", performance: "99.9% uptime" },
  },
  {
    title: "E-commerce API Suite",
    description: "Production-ready commerce APIs with caching, auth, and scaling.",
    tech: ["Django REST", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe"],
    demo: "#",
    repo: "#",
    image: "/projects/ecom.png",
    tags: ["Django", "API", "E-commerce"],
    status: "Live",
    year: "2023",
  },
  {
    title: "AI Content Studio",
    description: "Multi-model content generation with team workspaces and templates.",
    tech: ["Next.js", "TypeScript", "Prisma", "OpenAI", "Stripe"],
    demo: "#",
    repo: "#",
    image: "/projects/multimodel.png",
    tags: ["React", "AI", "Full-stack"],
    status: "Beta",
    year: "2024",
  },
  {
    title: "Mobile Banking App",
    description: "Secure banking with biometric auth and real-time transactions.",
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    demo: "#",
    image: "/projects/bank.png",
    tags: ["Mobile", "Full-stack"],
    status: "In Development",
    year: "2024",
  },
  {
    title: "Analytics Intelligence",
    description: "BI with predictive analytics and automated insights.",
    tech: ["React", "Python", "FastAPI", "PostgreSQL", "Plotly"],
    demo: "#",
    repo: "#",
    image: "/projects/analy.png",
    tags: ["React", "Dashboard", "AI"],
    status: "Live",
    year: "2023",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof ALL_TAGS)[number]>("All");

  const featured = useMemo(
    () => PROJECTS.find((p) => p.featured),
    []
  );

  const projects = useMemo(() => {
    const pool = PROJECTS.filter((p) => (featured ? p.title !== featured.title : true));
    if (filter === "All") return pool;
    return pool.filter((p) => p.tags.includes(filter as Tag));
  }, [filter, featured]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* very soft brand backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(50rem_20rem_at_20%_10%,hsl(var(--brand))_10%,transparent_60%),radial-gradient(50rem_20rem_at_80%_0%,#a78bfa_8%,transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <FolderOpen size={16} className="text-[hsl(var(--brand))]" />
            <span className="text-sm text-zinc-300">Selected Work</span>
          </div>
          <h2 className="section-title mt-3">Projects</h2>
          <p className="section-sub mt-2">
            A focused set of builds—quality over quantity.
          </p>
        </motion.div>

        {/* featured */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black/35 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,.6)]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image ?? "/projects/placeholder.jpg"}
                  alt={`${featured.title} screenshot`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm
                                border-white/15 bg-white/10">
                  <span className={`rounded-full px-2 py-0.5 border ${STATUS_BADGE[featured.status]}`}>
                    {featured.status}
                  </span>
                  <span className="text-zinc-300">{featured.year}</span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                  {featured.metrics?.users && (
                    <span className="inline-flex items-center gap-2">
                      <Users size={14} /> {featured.metrics.users}
                    </span>
                  )}
                  {featured.metrics?.performance && (
                    <>
                      <span className="opacity-50">•</span>
                      <span className="inline-flex items-center gap-2">
                        <Clock size={14} /> {featured.metrics.performance}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="mt-3 text-2xl md:text-3xl font-semibold">{featured.title}</h3>
                {featured.longDescription ? (
                  <p className="mt-3 text-zinc-300">{featured.longDescription}</p>
                ) : (
                  <p className="mt-3 text-zinc-300">{featured.description}</p>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/8 border border-white/10 text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {featured.demo && (
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white
                                 bg-[linear-gradient(135deg,hsl(var(--brand)),theme(colors.fuchsia.600))] shadow-[0_10px_30px_-10px_rgba(124,58,237,.6)]
                                 hover:brightness-110 transition"
                    >
                      View live
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {featured.repo && (
                    <a
                      href={featured.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-200
                                 bg-white/5 border border-white/15 hover:bg-white/10 transition"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {ALL_TAGS.map((t) => {
            const Icon = t === "All" ? FolderOpen : TAG_ICONS[t as Tag];
            const active = filter === t;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={[
                  "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition",
                  active
                    ? "text-white bg-white/10 border border-white/20"
                    : "text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10",
                ].join(" ")}
                aria-pressed={active}
              >
                <Icon size={14} /> {t}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl hover:border-white/20 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image ?? "/projects/placeholder.jpg"}
                  alt={`${p.title} screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium
                                border-white/15 bg-white/10">
                  <span className={`rounded-full px-2 py-0.5 border ${STATUS_BADGE[p.status]}`}>
                    {p.status}
                  </span>
                  <span className="text-zinc-300">{p.year}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((tag) => {
                    const Icon = TAG_ICONS[tag];
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/8 px-2 py-1 text-[11px] text-zinc-300"
                      >
                        <Icon size={12} /> {tag}
                      </span>
                    );
                  })}
                  {p.tags.length > 3 && (
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-400">
                      +{p.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
                  {p.metrics?.users && (
                    <span className="inline-flex items-center gap-1.5">
                      <Users size={12} /> {p.metrics.users}
                    </span>
                  )}
                  {p.metrics?.performance && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {p.metrics.performance}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex gap-2">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white
                                 bg-[linear-gradient(135deg,hsl(var(--brand)),theme(colors.fuchsia.600))] hover:brightness-110 transition"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-200
                                 bg-white/5 border border-white/15 hover:bg-white/10 transition"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
