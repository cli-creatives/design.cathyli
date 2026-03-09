"use client";

import { useEffect, useState } from "react";

const DEFAULT_sections = [
  { id: "swarm-initiative",  label: "Swarm Initiative" },
  { id: "the-system",        label: "The System" },
  { id: "users",             label: "Users" },
  { id: "product-direction", label: "Product Direction" },
  { id: "the-pivot",         label: "The Pivot" },
  { id: "topic-map",         label: "Topic Map" },
  { id: "actionability",     label: "Actionability" },
  { id: "challenges",        label: "Challenges" },
  { id: "impact",            label: "Impact" },
  { id: "whats-next",        label: "What's Next" },
];

interface Section { id: string; label: string }

interface Props { sections?: Section[] }

export default function SidebarNav({ sections = DEFAULT_sections }: Props) {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Among all intersecting entries, pick the one nearest the top
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveId(topmost.target.id);
        }
      },
      {
        // Fire when a section enters the upper third of the viewport
        rootMargin: "-10% 0px -75% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Case study sections">
      <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-5 font-medium">
        Contents
      </p>
      <ul className="flex flex-col gap-0.5">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`
                  block text-sm py-1.5 pl-4 border-l-2 transition-all duration-200
                  ${isActive
                    ? "border-[var(--color-charcoal)] text-[var(--color-charcoal)] font-medium"
                    : "border-transparent text-[var(--color-light-grey)] hover:text-[var(--color-warm-grey)] hover:border-[var(--color-border)]"
                  }
                `}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
