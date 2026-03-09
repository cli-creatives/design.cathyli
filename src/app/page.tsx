import Link from "next/link";
import Image from "next/image";
import GodRays from "@/components/GodRays";
import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
  const featured = getFeaturedProjects();
  // Layout: [0] full-width · [1] full-width · [2,3] 2-col · [4,5] 2-col
  const [p0, p1, p2, p3, p4, p5] = featured;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="gradient-bg min-h-screen flex flex-col relative">
        <GodRays />
        <div className="relative z-10 flex flex-1 items-center justify-center px-8 md:px-16 pt-32 pb-24">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight text-[var(--color-charcoal)] font-light tracking-tight">
              Making complex systems feel <em>human.</em>
            </h1>
            <p className="mt-6 text-sm md:text-base text-[var(--color-warm-grey)] max-w-xl mx-auto leading-relaxed">
              Currently building AI features @ Conductor as a full-stack Product and UX Designer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Selected Work ────────────────────────────────────── */}
      <section className="px-8 md:px-12 pt-20 pb-24 max-w-7xl mx-auto w-full">

        {/* Tiny section header */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-light-grey)] font-medium">
            Selected Work
          </span>
          <Link
            href="/projects"
            className="text-sm text-[var(--color-warm-grey)] hover:text-[var(--color-charcoal)] transition-colors duration-200"
          >
            All projects →
          </Link>
        </div>

        {/* ── Row 1: full-width ─────────────────────────────── */}
        <ProjectCard project={p0} aspectClass="aspect-[16/7]" className="mb-6" />

        {/* ── Row 2: full-width ─────────────────────────────── */}
        <ProjectCard project={p1} aspectClass="aspect-[16/7]" className="mb-6" />

        {/* ── Row 3: 2-col ─────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <ProjectCard project={p2} aspectClass="aspect-[4/3]" />
          <ProjectCard project={p3} aspectClass="aspect-[4/3]" />
        </div>

        {/* ── Row 4: 2-col ─────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <ProjectCard project={p4} aspectClass="aspect-[4/3]" />
          <ProjectCard project={p5} aspectClass="aspect-[4/3]" />
        </div>

      </section>

      {/* ── About preview ────────────────────────────────────── */}
      <section className="px-8 md:px-12 py-24 border-t border-[var(--color-border)]">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-[var(--color-light-grey)] mb-6">
            About
          </p>
          <p className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] leading-snug">
            I&apos;m a product and UX designer who believes the best
            technology feels <em>invisible</em> — intuitive, human, and
            quietly powerful.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 text-sm text-[var(--color-warm-grey)] hover:text-[var(--color-charcoal)] transition-colors duration-200 border-b border-[var(--color-border)] pb-0.5 hover:border-[var(--color-charcoal)]"
          >
            More about me →
          </Link>
        </div>
      </section>
    </>
  );
}

// ─── Inline card component ────────────────────────────────────────────────────
import { Project } from "@/data/projects";

function ProjectCard({
  project,
  aspectClass,
  className = "",
}: {
  project: Project;
  aspectClass: string;
  className?: string;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className={`group block ${className}`}>
      {/* Card — image or color fill, arrow appears on hover */}
      <div
        className={`w-full ${aspectClass} rounded-2xl overflow-hidden relative`}
        style={{ backgroundColor: project.coverColor }}
      >
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.04] transition-colors duration-300" />

        {/* ↗ arrow pill — bottom-left, fades in on hover */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--color-charcoal)] text-sm shadow-sm">
            ↗
          </div>
        </div>
      </div>

      {/* Labels below card */}
      <div className="mt-3.5 px-0.5">
        <p className="text-xs text-[var(--color-light-grey)] tracking-wide mb-1">
          {project.category} · {project.year}
        </p>
        <h3 className="font-serif text-lg md:text-xl text-[var(--color-charcoal)] leading-snug">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
