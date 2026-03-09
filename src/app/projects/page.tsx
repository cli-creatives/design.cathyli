import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Cathy Chenxu Li",
  description: "A collection of product and UX design projects by Cathy Chenxu Li.",
};

export default function ProjectsPage() {
  return (
    <div className="px-8 md:px-12 pt-40 pb-24 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-16 max-w-xl">
        <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] leading-tight">
          Work
        </h1>
        <p className="mt-4 text-[var(--color-warm-grey)] leading-relaxed">
          Selected projects spanning product design, UX research, and AI
          experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
