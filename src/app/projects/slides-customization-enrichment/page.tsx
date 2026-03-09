import { Metadata } from "next";
import Link from "next/link";
import SidebarNav from "@/components/case-study/SidebarNav";
import CaseStudyImage from "@/components/case-study/CaseStudyImage";
import StatCard from "@/components/case-study/StatCard";

export const metadata: Metadata = {
  title: "Slides Customization Enrichment — Cathy Chenxu Li",
  description:
    "Empowering AI-driven suggestions to enrich the slides customization feature, boosting user autonomy in creating slideshows with 10,000+ users.",
};

// ─── Typography helpers ────────────────────────────────────────────────────────
const sectionHeading =
  "font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] leading-tight mb-6";
const subHeading =
  "font-serif text-xl text-[var(--color-charcoal)] leading-snug mb-3 mt-10";
const bodyText =
  "text-[var(--color-warm-grey)] leading-[1.85] text-[17px]";
const sectionClass = "scroll-mt-32";

const SECTIONS = [
  { id: "the-challenge",      label: "The Challenge" },
  { id: "research",           label: "Research" },
  { id: "synthesis",          label: "Synthesis" },
  { id: "design-exploration", label: "Design Exploration" },
  { id: "ui-design",          label: "UI Design" },
  { id: "impact",             label: "Impact" },
];

export default function SlidesCustomizationPage() {
  return (
    <article className="pt-32 pb-28">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="px-8 md:px-12 max-w-4xl mx-auto w-full mb-16">
        <Link
          href="/projects"
          className="inline-block text-sm text-[var(--color-warm-grey)] hover:text-[var(--color-charcoal)] transition-colors duration-200 mb-10"
        >
          ← Back to work
        </Link>

        <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-5 font-medium">
          Product Design
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-[var(--color-charcoal)] leading-[1.08] mb-6">
          Slides Customization<br />
          <em>Enrichment</em>
        </h1>

        <p className="text-xl text-[var(--color-warm-grey)] max-w-lg leading-relaxed mb-12">
          Empowering AI-driven suggestions to enrich the slides customization feature, boosting user autonomy in presentation creation
        </p>

        {/* Metadata row */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-[var(--color-border)]">
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Company
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">
              DrLambda.ai
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Timeline
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">Oct – Dec 2023</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Role
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">
              Full-stack UX Designer
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Team
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">
              1 PM · 5 UX Designers · Engineering Team
            </p>
          </div>
        </div>
      </header>

      {/* ── Cover ─────────────────────────────────────────────────────────── */}
      <div
        className="w-full aspect-[16/9] mb-20"
        style={{ backgroundColor: "#B5C9A8" }}
      />

      {/* ── Body: Sidebar + Content ────────────────────────────────────────── */}
      <div className="px-8 md:px-12 max-w-6xl mx-auto w-full">
        <div className="flex gap-16 xl:gap-20 items-start">

          {/* Sidebar — sticky, desktop only */}
          <aside className="hidden lg:block w-48 xl:w-52 shrink-0">
            <div className="sticky top-28">
              <SidebarNav sections={SECTIONS} />
            </div>
          </aside>

          {/* ── Article content ──────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 max-w-2xl">
            <div className="space-y-20">

              {/* ── Introduction ─────────────────────────────────────────── */}
              <div className="space-y-8">
                <p className={`${bodyText} text-[18px] text-[var(--color-charcoal)]`}>
                  DrLambda.ai is a B2C SaaS startup built around an AI-driven knowledge
                  remix engine — converting PDFs, web pages, and video content into
                  polished slideshows for researchers, educators, students, and professionals.
                </p>
                <p className={bodyText}>
                  Despite a compelling core product, less than 3% of users were converting
                  to premium after trial. Users felt constrained by limited editing tools
                  and found the customization experience unintuitive. The challenge was
                  clear: to keep users engaged and make the case for premium, the platform
                  needed to give them more creative control — powered by AI, not just by
                  manual editing.
                </p>

                {/* My Role */}
                <div className="pt-2">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-4 font-medium">
                    My Role
                  </p>
                  <p className={`${bodyText} mb-5`}>
                    I was a full-stack UX designer on this project, owning end-to-end design
                    across research, ideation, prototyping, and UI execution. My responsibilities
                    spanned three areas:
                  </p>
                  <ul className="space-y-3">
                    {[
                      ["Research & synthesis", "led 30+ qualitative user research sessions and 5 in-depth competitor analyses to surface actionable design directions"],
                      ["Ideation & validation", "brainstormed 10+ AI-driven feature concepts and ran wireframe-based usability tests to identify the strongest solution"],
                      ["Design system & UI", "established the design system for the customization feature and owned interface designs for 2 AI-driven use cases"],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span className={bodyText}>
                          <span className="text-[var(--color-charcoal)] font-medium">{title}:</span>{" "}
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr className="border-[var(--color-border)]" />

              {/* ── Section 1: The Challenge ──────────────────────────────── */}
              <section id="the-challenge" className={sectionClass}>
                <h2 className={sectionHeading}>The Challenge</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    The project was shaped by three converging pressure points — from users,
                    the product, and the business — all pointing to the same gap in the
                    slides customization experience.
                  </p>

                  <h3 className={subHeading}>Users felt restricted</h3>
                  <ul className="space-y-3">
                    {[
                      "Editing slides felt constrained — the available tools didn't give users enough control over the final result",
                      "The customization process was unintuitive, creating friction that slowed down an otherwise fast AI workflow",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className={subHeading}>The product struggled to convert</h3>
                  <ul className="space-y-3">
                    {[
                      "Less than 3% of users were willing to pay for premium AI features after the trial period",
                      "The platform lacked a compelling differentiator in an increasingly crowded AI tools market",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className={subHeading}>The business needed traction</h3>
                  <p>
                    As an early-stage startup, DrLambda needed to demonstrate market
                    differentiation, grow its user base, and improve retention — all
                    without a large engineering team. Any solution had to be impactful
                    and shippable within a focused sprint.
                  </p>
                </div>
              </section>

              {/* ── Section 2: Research ──────────────────────────────────── */}
              <section id="research" className={sectionClass}>
                <h2 className={sectionHeading}>Research</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    To ground the design in real user needs, the team ran a mixed-methods
                    research program using affinity mapping to synthesize findings
                    across primary and secondary sources.
                  </p>

                  <h3 className={subHeading}>Research goals</h3>
                  <ul className="space-y-3">
                    {[
                      "Identify opportunities for DrLambda to differentiate from competitors in the AI slides space",
                      "Discover user needs and pain points in the slide creation and customization process",
                      "Evaluate how users currently adopt and trust AI in their workflows",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className={subHeading}>Competitor analysis</h3>
                  <p>
                    Five in-depth competitor analyses revealed three consistent patterns
                    across the AI slides landscape:
                  </p>
                  <ul className="space-y-3">
                    {[
                      ["Clean interfaces with low learning curves", "all competitors prioritized quick onboarding and minimal UI complexity"],
                      ["Variety and flexibility in templates", "users expected diverse, customizable starting points rather than rigid designs"],
                      ["A growing shift toward AI-driven experiences", "competitors were embedding AI into slide creation, not just as a conversion tool but as a core workflow component"],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>
                          <span className="text-[var(--color-charcoal)] font-medium">{title}: </span>
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h3 className={subHeading}>User interviews</h3>
                  <p>
                    From 23 valid screening survey responses, the team selected 10 participants
                    for in-depth interviews. Two primary user groups emerged: educators and
                    students with academic presentation needs, and professionals who typically
                    work from pre-designed company templates.
                  </p>
                  <p>
                    Across sessions, a consistent theme surfaced: users spent significant
                    time refining aesthetics and content quality, but productivity remained
                    low and results often fell short of their expectations. Users were more
                    likely to adopt AI if it offered them greater control over the final
                    output — not less.
                  </p>
                </div>
              </section>

              {/* Image: Research synthesis / affinity map */}
              <CaseStudyImage
                label="Research synthesis and affinity mapping"
                aspectRatio="16/9"
              />

              {/* ── Section 3: Synthesis ─────────────────────────────────── */}
              <section id="synthesis" className={sectionClass}>
                <h2 className={sectionHeading}>Synthesis</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    Research findings were synthesized through an affinity map and translated
                    into a user persona representing DrLambda's core target group. A user
                    journey map traced each step of the customization experience, revealing
                    key friction points and opportunity areas.
                  </p>

                  <h3 className={subHeading}>How Might We</h3>
                  <div className="border-l-2 border-[var(--color-border)] pl-5 my-6">
                    <p className={`${bodyText} text-[16px] italic`}>
                      "How might we design the slides customization feature for DrLambda.ai
                      that allows users to customize their presentations while maintaining
                      an efficient workflow and personalization through AI integration?"
                    </p>
                  </div>

                  <p>
                    This HMW statement captured the core design tension: users wanted more
                    control, but the AI-native context meant that control needed to feel
                    effortless — not like adding complexity on top of an already-built
                    automated output. The design had to make AI feel like a collaborator,
                    not a constraint.
                  </p>
                </div>
              </section>

              {/* ── Section 4: Design Exploration ────────────────────────── */}
              <section id="design-exploration" className={sectionClass}>
                <h2 className={sectionHeading}>Design Exploration</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    The team generated 10+ AI-driven feature concepts before narrowing
                    to the most promising directions. Three distinct wireframe concepts
                    were created and tested with a small group of users to validate
                    interaction flows before moving into high-fidelity design.
                  </p>

                  <h3 className={subHeading}>Wireframe validation</h3>
                  <p>
                    Usability testing across the three options revealed a clear preference.
                    Users responded most positively to the third design iteration, citing
                    its clarity and lightweight interface layout. Two core patterns emerged
                    from testing:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Users wanted AI suggestions to feel optional and non-disruptive — the interface needed to surface AI help without making it feel mandatory",
                      "Content and visual customization were treated as separate concerns — users wanted to edit text and imagery through distinct, focused tools",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Image: Wireframe iterations */}
              <CaseStudyImage
                label="Wireframe iterations and usability test feedback"
                aspectRatio="4/3"
              />

              {/* ── Section 5: UI Design ──────────────────────────────────── */}
              <section id="ui-design" className={sectionClass}>
                <h2 className={sectionHeading}>UI Design</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    The final design concentrated on the Slides Customization Page, where
                    users edit slides after the AI has generated an initial output. I
                    established a design system for the customization feature that became
                    the foundational UI language across all features delivered by the team.
                  </p>

                  <h3 className={subHeading}>AI Suggestion Text</h3>
                  <p>
                    Inline AI content suggestions allow users to refine slide copy without
                    leaving the editing context. Rather than replacing user-written content,
                    the feature presents contextually relevant alternatives — putting
                    the user in control of whether and how AI input is applied.
                  </p>

                  <h3 className={subHeading}>AI Generated Image</h3>
                  <p>
                    A dedicated image generation tool lets users create visuals through
                    natural language prompts directly within the slide editor. This closes
                    the gap between having a well-structured slide and having one that
                    looks polished — without requiring users to source imagery externally.
                  </p>

                  <p>
                    Together, the two features address the core user need identified in
                    research: greater control over both content and aesthetics, delivered
                    through AI that assists rather than automates.
                  </p>
                </div>
              </section>

              {/* Image: Final UI — customization page */}
              <CaseStudyImage
                label="Final UI — Slides Customization Page with AI features"
                aspectRatio="16/9"
              />

              {/* ── Section 6: Impact ─────────────────────────────────────── */}
              <section id="impact" className={sectionClass}>
                <h2 className={sectionHeading}>Impact</h2>
                <div className={`space-y-5 ${bodyText} mb-10`}>
                  <p>
                    The designs were presented to the company in December 2023 and the
                    feature launched in April 2024. The reception exceeded expectations —
                    the release contributed to a top 2 ranking on Product Hunt on launch
                    day, and the platform reached 10,000+ beta users within the first
                    month.
                  </p>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                  <StatCard
                    value="#2"
                    label="Product of the Day on Product Hunt at launch"
                  />
                  <StatCard
                    value="10K+"
                    label="Beta users acquired within the first month of launch"
                  />
                  <StatCard
                    value="+58%"
                    label="Increase in customization interactions post-release"
                  />
                </div>

                <div className={`space-y-5 ${bodyText} mt-10`}>
                  <p>
                    The 58% increase in customization interactions was a direct signal
                    that users were engaging more deeply with the product — not just
                    generating slides, but refining them. For an early-stage startup
                    where user depth is as important as user volume, this was a meaningful
                    outcome.
                  </p>
                  <p>
                    The design system established during this project also created a
                    consistent visual foundation that the broader team extended to other
                    features — making this project's contribution larger than the two
                    features it shipped.
                  </p>
                </div>
              </section>

              {/* ── Footer nav ───────────────────────────────────────────── */}
              <div className="pt-4">
                <hr className="border-[var(--color-border)] mb-12" />
                <div className="flex items-center justify-between">
                  <Link
                    href="/projects"
                    className="text-sm text-[var(--color-warm-grey)] hover:text-[var(--color-charcoal)] transition-colors duration-200"
                  >
                    ← All projects
                  </Link>
                  <Link
                    href="/projects/new-school-app-redesign"
                    className="font-serif text-2xl text-[var(--color-charcoal)] hover:opacity-60 transition-opacity duration-200"
                  >
                    Next project →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
