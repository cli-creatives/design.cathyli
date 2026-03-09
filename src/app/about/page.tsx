import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Cathy Chenxu Li",
  description:
    "Learn more about Cathy Chenxu Li — product and UX designer focused on AI and emerging technologies.",
};

export default function AboutPage() {
  const experience = [
    {
      company: "Conductor",
      role: "Full-stack Product & UX Designer",
      period: "2023 — Present",
    },
    {
      company: "Previous Role",
      role: "UX Designer",
      period: "2021 — 2023",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-8 md:px-12 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {/* Photo placeholder */}
        <div
          className="aspect-[3/4] rounded-2xl gradient-bg max-w-sm"
          aria-hidden="true"
        />

        {/* Bio */}
        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-widest uppercase text-[var(--color-light-grey)] mb-6">
            About me
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] leading-snug mb-6">
            Cathy <em>Chenxu Li</em>
          </h1>
          <div className="space-y-4 text-[var(--color-warm-grey)] leading-relaxed">
            <p>
              I&apos;m a product and UX designer currently at Conductor, where I
              create AI-powered experiences that help marketers understand
              content performance at scale.
            </p>
            <p>
              My work lives at the intersection of complex systems and human
              intuition — making powerful tools feel effortless to use.
            </p>
            <p>
              I believe good design isn&apos;t about aesthetics alone. It&apos;s
              about clarity, confidence, and creating moments that feel
              genuinely <em className="font-serif text-[var(--color-charcoal)]">right</em>.
            </p>
          </div>

          <div className="flex gap-6 mt-10">
            <Link
              href="mailto:hello@cathyli.design"
              className="text-sm border-b border-[var(--color-border)] pb-0.5 text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors duration-200"
            >
              Get in touch →
            </Link>
            <Link
              href="https://read.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border-b border-[var(--color-border)] pb-0.5 text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] transition-colors duration-200"
            >
              Resume →
            </Link>
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="border-t border-[var(--color-border)] pt-16 mb-16">
        <h2 className="font-serif text-3xl text-[var(--color-charcoal)] mb-10">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.company}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <p className="font-serif text-xl text-[var(--color-charcoal)]">
                  {item.company}
                </p>
                <p className="text-sm text-[var(--color-warm-grey)]">
                  {item.role}
                </p>
              </div>
              <span className="text-sm text-[var(--color-light-grey)]">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-[var(--color-border)] pt-16">
        <h2 className="font-serif text-3xl text-[var(--color-charcoal)] mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "UX Research",
            "Product Strategy",
            "Interaction Design",
            "Design Systems",
            "Prototyping",
            "AI Experience Design",
            "User Testing",
            "Information Architecture",
            "Figma",
          ].map((skill) => (
            <div
              key={skill}
              className="text-sm text-[var(--color-warm-grey)] py-3 border-b border-[var(--color-border)]"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
