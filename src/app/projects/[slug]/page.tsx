import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Cathy Chenxu Li`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="pt-32 pb-24">
      {/* Hero */}
      <div className="px-8 md:px-12 max-w-4xl mx-auto w-full mb-12">
        <Link
          href="/projects"
          className="inline-block text-sm text-[var(--color-warm-grey)] hover:text-[var(--color-charcoal)] transition-colors duration-200 mb-10"
        >
          ← Back to work
        </Link>

        <p className="text-xs tracking-widest uppercase text-[var(--color-light-grey)] mb-4">
          {project.category} · {project.year}
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--color-charcoal)] leading-tight mb-6">
          {project.title}
        </h1>
        <p className="text-lg text-[var(--color-warm-grey)] max-w-xl leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-warm-grey)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Cover placeholder */}
      <div
        className="w-full aspect-[16/7] mb-16"
        style={{ backgroundColor: project.coverColor }}
      />

      {/* Case study content placeholder */}
      <div className="px-8 md:px-12 max-w-3xl mx-auto w-full">
        <div className="space-y-16">
          {/* Overview */}
          <section>
            <h2 className="font-serif text-3xl text-[var(--color-charcoal)] mb-4">
              Overview
            </h2>
            <p className="text-[var(--color-warm-grey)] leading-relaxed">
              This case study is coming soon. Check back for the full write-up
              including research, design process, and outcomes.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-[var(--color-border)]" />

          {/* Next project */}
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="font-serif text-2xl text-[var(--color-charcoal)] hover:opacity-70 transition-opacity duration-200"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
