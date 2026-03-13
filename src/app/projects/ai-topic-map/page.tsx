import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SidebarNav from "@/components/case-study/SidebarNav";
import CaseStudyImage from "@/components/case-study/CaseStudyImage";
import StatCard from "@/components/case-study/StatCard";

export const metadata: Metadata = {
  title: "AI Topic Mapping for LLM Visibility — Cathy Chenxu Li",
  description:
    "Designing a semantic intelligence system for AI-driven search at Conductor.",
};

// ─── Typography helpers ────────────────────────────────────────────────────────
const sectionHeading =
  "font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] leading-tight mb-6";
const subHeading =
  "font-serif text-xl text-[var(--color-charcoal)] leading-snug mb-3 mt-10";
const bodyText = "text-[var(--color-warm-grey)] leading-[1.85] text-[17px]";
const sectionClass = "scroll-mt-32";

const sidebarSections = [
  { id: "swarm-initiative",     label: "Swarm Initiative" },
  { id: "understanding-system", label: "Understanding the System" },
  { id: "users",                label: "Users" },
  { id: "product-direction",    label: "Product Direction" },
  { id: "the-pivot",            label: "The Pivot" },
  { id: "visualization",        label: "Visualization" },
  { id: "actionability",        label: "Actionability" },
  { id: "workflow",             label: "Workflow" },
  { id: "challenges",           label: "Challenges" },
  { id: "impact",               label: "Impact" },
  { id: "whats-next",           label: "What's Next" },
];

export default function AITopicMapPage() {
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
          Product Design · AI
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-[var(--color-charcoal)] leading-[1.08] mb-6">
          AI Topic Mapping<br />
          <em>for LLM Visibility</em>
        </h1>

        <p className="text-xl text-[var(--color-warm-grey)] max-w-lg leading-relaxed mb-12">
          Designing a semantic intelligence system that transforms websites into
          topic landscapes, helping enterprise content teams understand and act
          on AI-driven search visibility
        </p>

        {/* ── Metadata row ────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-[var(--color-border)] mb-0">
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              My Role
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">Product Designer</p>
            <p className="text-sm text-[var(--color-warm-grey)] mt-0.5 leading-relaxed">
              UX exploration, visualization design,<br />
              interaction design, internal user validation
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Timeline
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">Q1–Q2 2025</p>
            <p className="text-sm text-[var(--color-warm-grey)] mt-0.5">8-week swarm, March to May 2025</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Team
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">
              PM, ML engineers,<br />data platform engineers
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Product
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">Conductor Creator</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Deliverable
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">Web App</p>
            <p className="text-sm text-[var(--color-warm-grey)] mt-0.5">Alpha shipped June 2025</p>
          </div>
        </div>

      </header>

      {/* ── Cover image ───────────────────────────────────────────────────── */}
      <div className="w-full aspect-[16/9] my-16 relative overflow-hidden">
        <Image
          src="/images/ai-topic-map-cover.png"
          alt="AI Topic Map interface showing a spatial bubble map of topic clusters with a Content Opportunities panel"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── 30 Second Insight / Highlight / Impact ────────────────────────── */}
      <div className="px-8 md:px-12 max-w-4xl mx-auto w-full mb-16">

        {/* ── 30 Second Insight ───────────────────────────────────────────── */}
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-4 font-medium">
            30 Second Insight
          </p>
          <p className={`${bodyText} text-[18px] text-[var(--color-charcoal)]`}>
            Conductor Creator is an enterprise SEO and content performance
            platform. As search increasingly shifts toward AI-driven discovery,
            the platform needed to help users understand their content visibility
            in the context of large language models — rather than only through
            keyword rankings.
          </p>
        </div>

        {/* ── Project Highlight ───────────────────────────────────────────── */}
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-4 font-medium">
            Project Highlight
          </p>
          <ul className="space-y-3">
            {[
              "Designed a semantic topic mapping system that transforms a website's pages into an interactive spatial landscape of topic clusters.",
              "Built a contextual insight panel that connects visual exploration to concrete prioritized content actions.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.55em] w-1 h-1 rounded-full bg-[var(--color-charcoal)] shrink-0" />
                <span className={`${bodyText} text-[var(--color-charcoal)]`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Impact summary ──────────────────────────────────────────────── */}
        <div>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-4 font-medium">
            Impact
          </p>
          <ul className="space-y-3">
            {[
              "200+ enterprise customer accounts enrolled in the alpha program within weeks of launch.",
              "More than 400 structured feedback interactions collected through internal strategist sessions and Slack feedback channels.",
              "Established a new conceptual model for evaluating website content through topic structure rather than keyword rankings.",
              "Helped inform the design direction for the company's emerging AEO initiatives.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.55em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                <span className={bodyText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>{/* end 30s insight / highlight / impact wrapper */}

      {/* ── Body: Sidebar + Content ────────────────────────────────────────── */}
      <div className="px-8 md:px-12 max-w-6xl mx-auto w-full">
        <div className="flex gap-16 xl:gap-20 items-start">

          {/* Sidebar — sticky, desktop only */}
          <aside className="hidden lg:block w-48 xl:w-52 shrink-0">
            <div className="sticky top-28">
              <SidebarNav sections={sidebarSections} />
            </div>
          </aside>

          {/* ── Article content ──────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 max-w-2xl">
            <div className="space-y-20">

              {/* ── Context: The Swarm Initiative ────────────────────────── */}
              <section id="swarm-initiative" className={sectionClass}>
                <h2 className={sectionHeading}>Context: The Swarm Initiative</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    In early 2025, Conductor launched a company-wide Product Swarm
                    initiative — a time-bound rapid MVP experimentation program designed
                    to explore new product directions in response to the accelerating
                    shift toward AI-driven search.
                  </p>
                  <p>
                    Unlike traditional product cycles, the swarm model used small
                    cross-functional pods with eight-week delivery windows. The goal was
                    not to ship a perfect product but to quickly test whether new
                    directions were viable and valuable.
                  </p>
                  <p>
                    One pod explored a concept called Topic Clustering and Content Gap
                    Identification. The goal was to enable users to understand how their
                    website content clusters into thematic groups, identify gaps in
                    topical coverage, and explore relationships across their entire site
                    — rather than analyzing individual keywords or URLs in isolation.
                  </p>
                  <p>This exploration eventually evolved into the AI Topic Map concept.</p>
                </div>
              </section>

              <CaseStudyImage
                label="Swarm timeline diagram — 8-week sprint structure and team pod composition"
                aspectRatio="16/7"
              />

              {/* ── Understanding the System ─────────────────────────────── */}
              <section id="understanding-system" className={sectionClass}>
                <h2 className={sectionHeading}>Understanding the System</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    Before designing the interface, I worked closely with ML and data
                    platform engineers to understand how the clustering pipeline
                    functioned. The clustering pipeline itself was designed and
                    implemented by the engineering team.
                  </p>
                  <p>
                    The underlying system processes large website datasets through a
                    multi-stage pipeline:
                  </p>
                  <ol className="space-y-4 mt-2">
                    {[
                      ["Embedding", "Pages are converted into vector representations based on semantic content."],
                      ["Clustering", "Pages are grouped by semantic similarity using an unsupervised algorithm."],
                      ["Labeling", "A large language model generates human-readable names for each cluster."],
                    ].map(([title, desc], i) => (
                      <li key={title} className="flex gap-4">
                        <span className="shrink-0 w-6 h-6 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[11px] text-[var(--color-light-grey)] font-medium mt-0.5">
                          {i + 1}
                        </span>
                        <span>
                          <span className="text-[var(--color-charcoal)] font-medium">{title}. </span>
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p>Each cluster represents a potential topic area within the website.</p>
                  <p>Key questions I needed to answer before designing included:</p>
                  <ul className="space-y-2">
                    {[
                      "What exactly does a cluster represent — is it deterministic or probabilistic?",
                      "How consistent are clusters across different runs?",
                      "What metadata is available per cluster?",
                      "How large can clusters become for enterprise-scale websites?",
                    ].map((q) => (
                      <li key={q} className="flex gap-3">
                        <span className="mt-[0.55em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    These answers shaped what interactions were feasible, what
                    constraints I had to design around, and how I would communicate
                    the system to users without misrepresenting it.
                  </p>
                </div>

                <div className="border-l-2 border-[var(--color-border)] pl-5 mt-8">
                  <p className={`${bodyText} text-[15px]`}>
                    <span className="text-[var(--color-charcoal)] font-medium">A note on data. </span>
                    During the swarm phase, keyword, traffic, and MSV data served as
                    proxy input signals. This allowed the team to validate the clustering
                    methodology quickly without waiting for AI search data infrastructure
                    to be ready. The clustering logic itself was independent of the input
                    data type, meaning it could later incorporate AI search signals.
                  </p>
                </div>
              </section>

              <CaseStudyImage
                label="System pipeline diagram — Embedding → Clustering → LLM Labeling, with pages going in and topic clusters coming out"
                aspectRatio="16/7"
              />

              {/* ── Users ────────────────────────────────────────────────── */}
              <section id="users" className={sectionClass}>
                <h2 className={sectionHeading}>Users</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <h3 className={subHeading}>Primary User: Content Strategist</h3>
                  <p>
                    To define the right product direction, I worked with the PM to
                    review existing customer research and conducted internal validation
                    sessions with Conductor content strategists using pre-alpha customer
                    accounts.
                  </p>
                  <p>
                    Content strategists at enterprise organizations consistently surfaced
                    the same frustrations:
                  </p>
                </div>

                <div className="space-y-7 mt-7">
                  {[
                    ["01", "No structural view of their content", "They managed ecosystems of hundreds or thousands of pages but had no way to see what topics they actually covered as a whole."],
                    ["02", "Keyword rankings as an incomplete proxy", "Rankings told them which pages were performing but not whether they had strong topical coverage in any given area."],
                    ["03", "Intuition-driven planning", "Decisions about what to write, what to consolidate, or what to remove were largely based on intuition because structural insight was missing."],
                    ["04", "Hidden cannibalization", "Multiple pages competing for the same topic were extremely difficult to identify without a structural overview of the content ecosystem."],
                  ].map(([num, title, desc]) => (
                    <div key={num} className="flex gap-5">
                      <span className="shrink-0 text-[11px] tracking-[0.08em] text-[var(--color-light-grey)] font-medium pt-[3px]">
                        {num}
                      </span>
                      <div>
                        <p className="text-[var(--color-charcoal)] font-medium text-[17px] mb-1.5">{title}</p>
                        <p className={bodyText}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`space-y-5 ${bodyText} mt-10`}>
                  <h3 className={subHeading}>Research synthesis</h3>
                  <p>
                    These findings established a two-level design requirement: users
                    needed high-level structural insight into how their content was
                    organized as a landscape, and page-level actionability that would
                    help them determine which pages required action.
                  </p>
                </div>
              </section>

              <CaseStudyImage
                label="User research synthesis — affinity map, persona card, or key insight quotes from user interviews"
                aspectRatio="4/3"
              />
              <CaseStudyImage
                label="User journey map — content strategist's current workflow, pain points, and opportunity areas"
                aspectRatio="16/7"
              />

              {/* ── Product Direction ────────────────────────────────────── */}
              <section id="product-direction" className={sectionClass}>
                <h2 className={sectionHeading}>Product Direction: What We Explored First</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    At the start of the project, the product direction was open. The
                    engineering team had clustering outputs, but how to present this
                    information to users was an unresolved design question.
                  </p>
                  <p>I explored two initial directions before arriving at the Topic Map.</p>
                </div>

                {/* Direction 1 */}
                <div className="mt-12">
                  <h3 className="font-serif text-xl text-[var(--color-charcoal)] leading-snug mb-4">
                    Direction 1: Topic Cluster Dashboard
                  </h3>
                  <p className={`${bodyText} mb-6`}>
                    Our initial concept followed familiar enterprise analytics patterns.
                    Each topic cluster was represented as a card showing cluster health,
                    pages requiring optimization, and suggested new topics.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      ["What worked", "Consistent with existing B2B analytics patterns. Easy to scan individual topics."],
                      ["What did not work", "The dashboard summarized individual topics well but completely obscured relationships between them. Users could understand a topic in isolation but could not perceive the structure of their content ecosystem."],
                    ].map(([label, text]) => (
                      <div key={label} className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)]">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--color-light-grey)] font-medium mb-3">{label}</p>
                        <p className={`${bodyText} text-[15px]`}>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <CaseStudyImage
                label="Direction 1 explorations — dashboard wireframes showing topic cluster cards with health indicators and page lists"
                aspectRatio="16/9"
              />

              {/* Direction 2 */}
              <div>
                <h3 className="font-serif text-xl text-[var(--color-charcoal)] leading-snug mb-4">
                  Direction 2: Performance-Based Topic Reports
                </h3>
                <p className={`${bodyText} mb-6`}>
                  To align with existing SEO workflows, we explored a version that
                  emphasized performance metrics such as modeled traffic over time,
                  keyword rankings, and cluster health indicators.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["What worked", "Familiar to enterprise users and aligned with existing reporting models."],
                    ["What did not work", "The underlying system was semantic, but the interface still forced the data into traditional keyword performance frames. This limited the system's ability to reveal the structure of a website's content."],
                  ].map(([label, text]) => (
                    <div key={label} className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)]">
                      <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--color-light-grey)] font-medium mb-3">{label}</p>
                      <p className={`${bodyText} text-[15px]`}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <CaseStudyImage
                label="Direction 2 explorations — performance report wireframes showing traffic trends, ranking charts, and cluster health metrics per topic"
                aspectRatio="16/9"
              />

              {/* ── The Pivot ────────────────────────────────────────────── */}
              <section id="the-pivot" className={sectionClass}>
                <h2 className={sectionHeading}>The Pivot</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    Through this exploration, I identified that the system was revealing
                    the topical structure of a website rather than traditional ranking
                    performance.
                  </p>
                  <p>
                    This raised a new design question: if a website can be understood
                    as a semantic landscape, should the interface represent that
                    structure spatially?
                  </p>
                  <p>
                    To ground this idea, I created rough wireframes that illustrated a
                    spatial bubble map concept. These wireframes were not intended as
                    final designs but as tools for thinking and discussion.
                  </p>
                  <p>
                    Seeing a concrete visualization helped the team align around the
                    idea quickly. The wireframes became the foundation for the direction
                    we pursued.
                  </p>
                </div>
              </section>

              <CaseStudyImage
                label="First rough wireframe — low-fidelity sketch showing clusters as circles arranged spatially on a canvas"
                aspectRatio="4/3"
              />

              {/* ── Visualization: Choosing the Bubble Map ───────────────── */}
              <section id="visualization" className={sectionClass}>
                <h2 className={sectionHeading}>Visualization: Choosing the Bubble Map</h2>
                <div className={`space-y-5 ${bodyText} mb-8`}>
                  <p>
                    Before committing to the spatial bubble map, I evaluated several
                    visualization approaches.
                  </p>
                </div>

                {/* Comparison table */}
                <div className="space-y-3 mb-12">
                  {[
                    {
                      name: "Tree map",
                      strength: "Shows hierarchy clearly.",
                      limitation: "Implies a fixed taxonomy that the clustering system does not produce.",
                    },
                    {
                      name: "Force-directed graph",
                      strength: "Precise relationship mapping.",
                      limitation: "Too visually dense for non-technical content teams.",
                    },
                    {
                      name: "Hierarchical list",
                      strength: "Familiar and easy to scan.",
                      limitation: "Removes the spatial relationships that make clustering meaningful.",
                    },
                    {
                      name: "Spatial bubble map",
                      strength: "Visually immediate, intuitively relational, and scalable.",
                      limitation: null,
                    },
                  ].map(({ name, strength, limitation }) => (
                    <div
                      key={name}
                      className={`grid grid-cols-[1fr_1fr_1fr] gap-4 p-5 rounded-xl border ${
                        !limitation
                          ? "border-[var(--color-charcoal)] bg-[var(--color-cream)]"
                          : "border-[var(--color-border)] bg-[var(--color-cream)]"
                      }`}
                    >
                      <p className="text-[var(--color-charcoal)] font-medium text-[15px]">{name}</p>
                      <div>
                        <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-light-grey)] font-medium mb-1.5">
                          Strength
                        </p>
                        <p className={`${bodyText} text-[14px]`}>{strength}</p>
                      </div>
                      <div>
                        {limitation ? (
                          <>
                            <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-light-grey)] font-medium mb-1.5">
                              Limitation
                            </p>
                            <p className={`${bodyText} text-[14px]`}>{limitation}</p>
                          </>
                        ) : (
                          <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-charcoal)] font-medium">
                            Selected ↑
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`space-y-5 ${bodyText}`}>
                  <h3 className={subHeading}>Why the bubble map worked</h3>
                  <p>In the spatial bubble map model:</p>
                  <ul className="space-y-2">
                    {[
                      "Each bubble represents one topic cluster.",
                      "Bubble size reflects cluster size or traffic potential.",
                      "Spatial proximity represents semantic similarity between topics.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.55em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    This allows users to quickly understand which topics dominate their
                    website, how topics relate to each other, and where potential content
                    gaps exist.
                  </p>
                </div>
              </section>

              <CaseStudyImage
                label="Visualization comparison sketches — tree map, force-directed graph, and bubble map side by side with annotations on trade-offs"
                aspectRatio="16/9"
              />
              <CaseStudyImage
                label="Final topic map UI — full screenshot of the spatial bubble map with labeled clusters, showing size variation and spatial groupings"
                aspectRatio="16/9"
              />

              {/* ── Designing for Actionability ──────────────────────────── */}
              <section id="actionability" className={sectionClass}>
                <h2 className={sectionHeading}>Designing for Actionability</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    During internal strategist testing with real customer accounts,
                    people could quickly understand and explore the bubble map. However,
                    another problem appeared.
                  </p>
                  <p>
                    Users found the visualization compelling but were unsure what to do
                    next. The map made the structure visible but did not immediately
                    suggest actions.
                  </p>

                  <h3 className={subHeading}>The insight panel</h3>
                  <p>
                    To bridge exploration and action, I designed a contextual insight
                    panel that surfaces structured guidance when a user selects a cluster.
                  </p>
                  <p>The panel operates at three levels:</p>
                </div>

                <div className="space-y-7 mt-7">
                  {[
                    ["01", "Topic-level insights", "A summary of the cluster's topical coverage and performance signals."],
                    ["02", "Content opportunities", "Suggested topics or pages that could strengthen coverage in this area."],
                    ["03", "Page-level actions", "Specific pages that could be optimized, expanded, or consolidated."],
                  ].map(([num, title, desc]) => (
                    <div key={num} className="flex gap-5">
                      <span className="shrink-0 text-[11px] tracking-[0.08em] text-[var(--color-light-grey)] font-medium pt-[3px]">
                        {num}
                      </span>
                      <div>
                        <p className="text-[var(--color-charcoal)] font-medium text-[17px] mb-1.5">{title}</p>
                        <p className={bodyText}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className={`${bodyText} mt-8`}>
                  This connected the exploratory visualization with concrete prioritized
                  actions, turning the map from a discovery tool into a workflow entry point.
                </p>
              </section>

              <CaseStudyImage
                label="Insight panel design explorations — early wireframes showing different information hierarchies tested"
                aspectRatio="16/9"
              />
              <CaseStudyImage
                label="Final interaction model — annotated UI showing the 4-step workflow: Explore → Select → Review → Act"
                aspectRatio="16/9"
              />
              <CaseStudyImage
                label="Insight panel detail — close-up of the final panel UI showing topic summary, content opportunities list, and page-level action items"
                aspectRatio="16/9"
              />

              {/* ── The End-to-End Workflow ──────────────────────────────── */}
              <section id="workflow" className={sectionClass}>
                <h2 className={sectionHeading}>The End-to-End Workflow</h2>
                <p className={bodyText}>
                  The final system combines spatial exploration with structured insights
                  in a four-step workflow.
                </p>
              </section>

              <CaseStudyImage
                label="Full workflow walkthrough — 4-panel visual or annotated flow showing each step of the interaction end to end"
                aspectRatio="16/7"
              />

              {/* ── Design Challenges ────────────────────────────────────── */}
              <section id="challenges" className={sectionClass}>
                <h2 className={sectionHeading}>Design Challenges</h2>

                {/* Challenge 01 */}
                <div>
                  <div className="flex gap-5 mb-4">
                    <span className="shrink-0 text-[11px] tracking-[0.08em] text-[var(--color-light-grey)] font-medium pt-[3px]">
                      01
                    </span>
                    <h3 className="font-serif text-xl text-[var(--color-charcoal)] leading-snug">
                      Visualizing high-density data
                    </h3>
                  </div>
                  <p className={`${bodyText} mb-6`}>
                    Enterprise websites often contain thousands of pages. Rendering all
                    clusters simultaneously would create an unreadable visual field.
                  </p>
                  <div className="border-l-2 border-[var(--color-border)] pl-5">
                    <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--color-light-grey)] font-medium mb-2">
                      Solution
                    </p>
                    <p className={`${bodyText} text-[15px]`}>
                      Cluster aggregation at the top level combined with zoom-based
                      exploration and progressive detail disclosure. Users see summary
                      information first and access deeper information on demand.
                    </p>
                  </div>
                </div>
              </section>

              <CaseStudyImage
                label="Zoom interaction — top-level aggregated view versus zoomed-in sub-cluster view"
                aspectRatio="16/9"
              />

              {/* Challenge 02 */}
              <div>
                <div className="flex gap-5 mb-4">
                  <span className="shrink-0 text-[11px] tracking-[0.08em] text-[var(--color-light-grey)] font-medium pt-[3px]">
                    02
                  </span>
                  <h3 className="font-serif text-xl text-[var(--color-charcoal)] leading-snug">
                    Representing semantic relationships clearly
                  </h3>
                </div>
                <p className={`${bodyText} mb-6`}>
                  The spatial positioning of bubbles needed to communicate semantic
                  proximity without requiring users to understand embedding models.
                </p>
                <div className="border-l-2 border-[var(--color-border)] pl-5">
                  <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--color-light-grey)] font-medium mb-2">
                    Solution
                  </p>
                  <p className={`${bodyText} text-[15px]`}>
                    The interface relied on the visual metaphor of distance. Nearby
                    clusters feel related while distant clusters feel distinct. This
                    allowed users to build an intuitive mental model without technical
                    explanation.
                  </p>
                </div>
              </div>

              {/* ── Impact ───────────────────────────────────────────────── */}
              <section id="impact" className={sectionClass}>
                <h2 className={sectionHeading}>Impact</h2>

                <div className={`space-y-5 ${bodyText} mb-10`}>
                  <h3 className={subHeading}>Alpha Launch · June 2025</h3>
                  <p>
                    The swarm MVP shipped in May 2025. When the feature entered alpha
                    in June 2025, feedback began to arrive quickly through strategist
                    sessions and customer feedback channels.
                  </p>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                  <StatCard
                    value="200+"
                    label="Customer accounts enrolled in alpha"
                  />
                  <StatCard
                    value="400+"
                    label="Feedback interactions collected"
                  />
                  <StatCard
                    value="Jun 2025"
                    label="Alpha launch date"
                  />
                </div>

                <div className={`space-y-5 ${bodyText} mt-10`}>
                  <h3 className={subHeading}>Customer Feedback</h3>
                  <p>
                    Across more than 400 feedback interactions captured through
                    strategist sessions and Slack feedback channels, several patterns
                    emerged:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "The spatial map made it immediately clear how their content was structured.",
                      "The insight panel helped translate visual exploration into concrete next steps.",
                      "The experience felt meaningfully different from traditional SEO dashboards.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.55em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>This consistent feedback validated the core design direction.</p>
                </div>
              </section>

              <CaseStudyImage
                label="Alpha launch metrics — 200+ customers and 400+ interactions"
                aspectRatio="16/7"
              />

              {/* ── What's Next ──────────────────────────────────────────── */}
              <section id="whats-next" className={sectionClass}>
                <h2 className={sectionHeading}>What's Next</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>The swarm ended in May 2025, but the design work continued.</p>
                  <p>
                    Between June and October 2025, I designed the next phase of
                    AEO-related features that build on the spatial map framework and
                    incorporate emerging AI search performance signals.
                  </p>
                  <p>
                    During the swarm, another team had been developing infrastructure
                    for AI traffic and AEO signal collection. As those signals became
                    available, they could be integrated into the clustering framework
                    established in this project.
                  </p>
                  <p>
                    This enables organizations to understand not only what topics their
                    website covers but also how effectively their content is interpreted
                    and cited by AI-driven search systems.
                  </p>
                  <p>
                    The design foundation established during the swarm phase made this
                    next stage possible.
                  </p>
                </div>
              </section>

              <CaseStudyImage
                label="AEO next phase preview — how the topic map evolves to incorporate AI search signals"
                aspectRatio="16/9"
              />

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
                    href="/projects/crawling-configurations"
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
