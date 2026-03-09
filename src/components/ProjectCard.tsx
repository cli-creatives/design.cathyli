import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      {/* Cover image / placeholder */}
      <div
        className="w-full aspect-[4/3] rounded-2xl mb-4 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundColor: project.coverColor }}
      >
        {/* Real images will replace this placeholder */}
        <div className="w-full h-full flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-white/70 font-sans tracking-widest uppercase">
            View case study →
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl text-[var(--color-charcoal)] leading-snug group-hover:opacity-70 transition-opacity duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-warm-grey)] mt-1">
            {project.category}
          </p>
        </div>
        <span className="text-xs text-[var(--color-light-grey)] mt-1 shrink-0">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
