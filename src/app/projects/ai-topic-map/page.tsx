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
const bodyText =
  "text-[var(--color-warm-grey)] leading-[1.85] text-[17px]";
const sectionClass =
  "scroll-mt-32";

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
          Designing a semantic intelligence system for AI-driven search
        </p>

        {/* Metadata row */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-[var(--color-border)]">
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Product
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">
              Conductor Intelligence
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Timeline
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">Q1–Q2 2025 · 8-week swarm</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Role
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">
              Product Designer
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-1.5 font-medium">
              Team
            </p>
            <p className="text-sm text-[var(--color-charcoal)]">
              PM, ML engineers, data platform engineers
            </p>
          </div>
        </div>
      </header>

      {/* ── Cover ─────────────────────────────────────────────────────────── */}
      <div className="w-full aspect-[16/9] mb-20 relative overflow-hidden">
        <Image
          src="/images/ai-topic-map-cover.png"
          alt="AI Topic Map interface showing a spatial bubble map of topic clusters with a Content Opportunities panel"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Body: Sidebar + Content ────────────────────────────────────────── */}
      <div className="px-8 md:px-12 max-w-6xl mx-auto w-full">
        <div className="flex gap-16 xl:gap-20 items-start">

          {/* Sidebar — sticky, desktop only */}
          <aside className="hidden lg:block w-48 xl:w-52 shrink-0">
            <div className="sticky top-28">
              <SidebarNav />
            </div>
          </aside>

          {/* ── Article content ──────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 max-w-2xl">
            <div className="space-y-20">

              {/* ── Introduction ─────────────────────────────────────────── */}
              <div className="space-y-8">
                <p className={`${bodyText} text-[18px] text-[var(--color-charcoal)]`}>
                  As search increasingly shifts toward AI-driven discovery, content
                  visibility is no longer determined purely by keyword rankings. Large
                  language models interpret and synthesize information based on semantic
                  understanding — and this creates a new challenge for enterprise content
                  teams: how do we understand our website in terms of topics, not just keywords?
                </p>
                <p className={bodyText}>
                  AI Topic Maps explores this problem by transforming a website into a
                  semantic topic landscape. By combining embedding-based clustering with
                  LLM-generated labels, the system organizes thousands of pages into
                  interpretable topic clusters, revealing topical coverage, content gaps,
                  and strategic opportunities.
                </p>

                {/* My Role */}
                <div className="pt-2">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-light-grey)] mb-4 font-medium">
                    My Role
                  </p>
                  <p className={`${bodyText} mb-5`}>
                    I was the product designer on this project, working with high-level
                    supervision from my design manager. I owned all UX decisions day-to-day,
                    from early concept exploration through to the shipped interface. My work
                    spanned three interconnected responsibilities:
                  </p>
                  <ul className="space-y-3">
                    {[
                      ["System comprehension", "working closely with ML engineers to understand the clustering pipeline, data structure, and its constraints before designing a single screen"],
                      ["Interaction model definition", "identifying the right visualization paradigm and defining how users would explore, select, and act on topic clusters"],
                      ["Design advocacy", "using early wireframes to align the team around a spatial map model when the product direction was still undecided"],
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

                {/* Data note */}
                <div className="border-l-2 border-[var(--color-border)] pl-5">
                  <p className={`${bodyText} text-[15px]`}>
                    <span className="text-[var(--color-charcoal)] font-medium">A note on data: </span>
                    Because this was a swarm-phase MVP, the system used keyword, traffic, and
                    MSV data as sample inputs to validate the methodology. AI-specific traffic
                    and AEO signals were being developed in parallel by a separate team. The
                    goal of this phase was not to build a complete AI data product, but to test
                    whether the semantic clustering approach was viable and valuable — with real
                    AI data to follow in future iterations.
                  </p>
                </div>
              </div>

              <hr className="border-[var(--color-border)]" />

              {/* ── Section 1: Swarm Initiative ──────────────────────────── */}
              <section id="swarm-initiative" className={sectionClass}>
                <h2 className={sectionHeading}>The Swarm Initiative</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    In early 2025, Conductor launched a company-wide Product Swarm initiative
                    to rapidly explore new product capabilities in response to the accelerating
                    shift toward AI-driven search.
                  </p>
                  <p>
                    Unlike traditional product cycles, the swarm model prioritized small
                    cross-functional pods, time-bound delivery, and rapid MVP experimentation.
                    The goal was not to perfect a solution, but to quickly test new directions
                    for the future of the platform. The swarm ran for 8 weeks (March to May
                    2025) and focused on delivering exploratory features aligned with the
                    company's AI search strategy.
                  </p>
                  <p>
                    One of the swarm pods explored a concept called Topic Clustering and
                    Content Gap Identification. The goal was to enable users to understand how
                    their website content clusters into thematic groups, identify gaps in
                    topical coverage, and explore relationships between pages across their
                    site — rather than analyzing individual keywords or URLs in isolation.
                    This exploration eventually evolved into the AI Topic Map concept.
                  </p>
                </div>
              </section>

              {/* ── Section 2: The System ────────────────────────────────── */}
              <section id="the-system" className={sectionClass}>
                <h2 className={sectionHeading}>The System</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    The underlying system processes large website datasets through a
                    multi-stage pipeline: pages are converted into vector embeddings,
                    clustered by semantic similarity, and then labeled by an LLM to produce
                    human-readable topic names. Each cluster represents a potential topic
                    area within the website.
                  </p>
                  <p>
                    During the swarm phase, keyword, traffic, and MSV data served as the
                    input signals. This was a deliberate proxy choice that let the team
                    validate the clustering methodology quickly without waiting for AI search
                    data infrastructure to be ready. The semantic clustering logic itself was
                    independent of the input data type — which meant the approach could be
                    validated with available data and upgraded later.
                  </p>
                  <p>
                    The engineering pipeline could produce clusters reliably, but the outputs
                    were not yet usable as a product. Raw cluster data meant nothing to a
                    content strategist staring at a table of page IDs. My challenge as the
                    designer was to build an interface that would allow users to interpret
                    and act on these clusters, transforming ML outputs into strategic decisions.
                  </p>
                  <p>
                    Before sketching a single screen, I worked closely with the ML and data
                    platform engineers to understand how the clustering system actually
                    behaved. I needed answers to questions with direct design implications:
                    what exactly does a cluster represent — is it deterministic or
                    probabilistic? How consistent are clusters across different runs? What
                    metadata is available per cluster? How large can clusters become for
                    enterprise-scale websites? This step directly shaped what interactions
                    were feasible, what constraints I had to design around, and how I would
                    explain the system to users without misrepresenting it.
                  </p>
                </div>
              </section>

              {/* ── Section 3: Users ─────────────────────────────────────── */}
              <section id="users" className={sectionClass}>
                <h2 className={sectionHeading}>Users</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <h3 className={subHeading}>Primary user: Content Strategist</h3>
                  <p>
                    To define the right product direction, I conducted user interviews and
                    worked with the PM to synthesize findings from existing customer research.
                    Content strategists at enterprise organizations consistently surfaced
                    the same friction:
                  </p>
                  <ul className="space-y-3 mt-2">
                    {[
                      "They managed large content ecosystems — often hundreds or thousands of pages — but had no structural view of what topics they actually covered",
                      "They relied on keyword rankings as a proxy for topical strength, but found this an incomplete picture",
                      "Content planning decisions (what to write next, what to consolidate, what to cut) were largely intuition-driven due to lack of structural insight",
                      "They struggled to identify when multiple pages were competing for the same topic, leading to cannibalization they could not easily detect",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[var(--color-light-grey)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    These findings anchored the design direction: users needed both
                    high-level structural insight (how is our content organized as a
                    landscape?) and page-level actionability (which specific pages do
                    I act on?).
                  </p>
                </div>
              </section>

              {/* ── Section 4: Product Direction ─────────────────────────── */}
              <section id="product-direction" className={sectionClass}>
                <h2 className={sectionHeading}>Product Direction</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    At the start of the project, the product direction was genuinely open.
                    The engineering team had produced clustering outputs, but how to present
                    this information to users was an unresolved design question. Our
                    exploration ran through two directions before arriving at the topic map.
                  </p>

                  <h3 className={subHeading}>Direction 1: Topic Cluster Dashboard</h3>
                  <p>
                    Our initial concept followed familiar enterprise analytics patterns. Each
                    topic cluster was represented as a card showing cluster health, pages
                    requiring optimization, and suggested new topics. This was consistent
                    with existing B2B design conventions and felt safe.
                  </p>
                  <p>
                    During internal testing, a key limitation emerged: the dashboard
                    summarized individual topics well, but completely obscured relationships
                    between them. Users could understand a topic in isolation but could not
                    perceive the structure of their content ecosystem.
                  </p>

                  <h3 className={subHeading}>Direction 2: Performance-Based Topic Reports</h3>
                  <p>
                    To align with existing SEO workflows, we explored a version that
                    emphasized performance metrics: modeled traffic over time, keyword
                    rankings, and cluster health indicators. This format was familiar to
                    enterprise users.
                  </p>
                  <p>
                    However, this approach created a conceptual mismatch: the underlying
                    system was semantic, yet the interface was still forcing the data through
                    keyword performance frames. We were dressing new thinking in old clothes.
                  </p>
                </div>
              </section>

              {/* Image: Dashboard direction explorations */}
              <CaseStudyImage
                label="Dashboard direction explorations"
                aspectRatio="16/9"
              />

              {/* ── Section 5: The Pivot ─────────────────────────────────── */}
              <section id="the-pivot" className={sectionClass}>
                <h2 className={sectionHeading}>The Pivot</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    Both earlier directions tried to adapt the clustering output to familiar
                    patterns. Through this process, the team began to recognize that the
                    system was revealing something fundamentally different from traditional
                    SEO tools — revealing not ranking performance but the topical structure
                    of a website itself.
                  </p>
                  <p>
                    This insight raised a new design question: if a website can be understood
                    as a semantic landscape, should the interface represent that structure
                    spatially?
                  </p>
                  <p>
                    The team was open to exploring this, but the concept was abstract. To
                    ground the discussion, I created a set of rough wireframes showing what
                    a spatial bubble map could look like — not as a final proposal but as a
                    thinking tool. Seeing a concrete visualization of topic clusters arranged
                    spatially helped the team align around the idea faster than any verbal
                    description had. The wireframes became the anchor for moving forward.
                  </p>
                </div>
              </section>

              {/* Image: First bubble map wireframe */}
              <CaseStudyImage
                label="First spatial bubble map wireframe"
                aspectRatio="4/3"
              />

              {/* ── Section 6: Topic Map ─────────────────────────────────── */}
              <section id="topic-map" className={sectionClass}>
                <h2 className={sectionHeading}>Topic Map</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    In the spatial bubble map model, each bubble represents a topic cluster,
                    bubble size encodes cluster size or traffic potential, and spatial
                    proximity reflects semantic similarity between topics.
                  </p>
                  <p>
                    This visualization allows users to quickly understand which topics
                    dominate their website, how topics relate to and cluster around each
                    other, and where white space or potential content gaps exist in
                    the landscape.
                  </p>
                  <p>
                    I also considered alternative visualization approaches before committing
                    to the bubble map. A tree map would have shown hierarchical structure
                    well but implied a fixed taxonomy that the clustering system did not
                    actually produce. A force-directed graph would have shown relationships
                    more precisely but at the cost of interpretability — too visually noisy
                    for non-technical content teams. A hierarchical list would have been
                    familiar but would have entirely lost the spatial, relational quality
                    that made the clustering output meaningful.
                  </p>
                  <p>
                    The bubble map struck the right balance: visually immediate, intuitively
                    relational, and scalable to enterprise-level data with appropriate
                    aggregation.
                  </p>
                </div>
              </section>

              {/* Image: Final topic map UI */}
              <CaseStudyImage
                label="Final topic map UI"
                aspectRatio="16/9"
              />

              {/* ── Section 7: Actionability ─────────────────────────────── */}
              <section id="actionability" className={sectionClass}>
                <h2 className={sectionHeading}>Actionability</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    Early user testing showed that people could quickly understand and
                    explore the bubble map, but a new problem emerged. Users found the
                    visualization compelling but were unsure what to do next. The map made
                    the data visible, but not actionable.
                  </p>

                  <h3 className={subHeading}>Designing the insight panel</h3>
                  <p>
                    To bridge exploration and action, I designed a contextual insights panel
                    that surfaces structured guidance when a user selects a cluster. The
                    panel operates at three levels:
                  </p>
                  <ul className="space-y-3">
                    {[
                      ["Topic-level insights", "a summary of the cluster's topical coverage and performance signals"],
                      ["Content opportunities", "suggested new topics or pages that could strengthen coverage in this area"],
                      ["Page-level actions", "specific pages that should be optimized, expanded, or consolidated"],
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
                  <p>
                    This interaction model connects the exploratory visualization with
                    concrete, prioritized actions — turning the map from a discovery tool
                    into a workflow entry point.
                  </p>

                  <h3 className={subHeading}>Final interaction model</h3>
                  <p>
                    The final system combines spatial exploration with structured insights
                    in a four-step workflow: explore the topic landscape, providing a
                    structural overview of the entire website's semantic coverage; select
                    a topic cluster to focus on a specific area of interest; review topic
                    insights and opportunities, understanding performance and identifying
                    gaps; and take action on specific pages to optimize, expand, or
                    create content.
                  </p>
                </div>
              </section>

              {/* Image: Insight panel detail */}
              <CaseStudyImage
                label="Insight panel detail"
                aspectRatio="16/9"
              />

              {/* ── Section 8: Challenges ────────────────────────────────── */}
              <section id="challenges" className={sectionClass}>
                <h2 className={sectionHeading}>Challenges</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <h3 className={subHeading}>Visualizing high-density data</h3>
                  <p>
                    Enterprise websites often contain thousands of pages. Rendering all
                    clusters simultaneously would create an unreadable visual field. I
                    addressed this through cluster aggregation at the top level, zoom-based
                    exploration to reveal sub-clusters, and progressive detail disclosure —
                    showing summary data first with depth on demand.
                  </p>

                  <h3 className={subHeading}>Representing semantic relationships without overwhelming users</h3>
                  <p>
                    The spatial positioning of bubbles needed to communicate semantic
                    proximity without requiring users to understand how embeddings work.
                    The design relied on the visual metaphor of distance: nearby topics
                    feel related, distant topics feel distinct. This let users build correct
                    mental models without any technical explanation.
                  </p>

                  <h3 className={subHeading}>Clarifying the designer's role versus the engineer's</h3>
                  <p>
                    Throughout the project, I was careful to communicate clearly which
                    decisions were design decisions versus engineering outputs. The
                    clustering algorithm, embedding model, and LLM labeling were built by
                    the engineering team. My role was to decide how those outputs were
                    presented, what interactions they afforded, and how they mapped to user
                    goals. Making that boundary visible helped the team collaborate without
                    confusion about ownership.
                  </p>
                </div>
              </section>

              {/* ── Section 9: Impact ────────────────────────────────────── */}
              <section id="impact" className={sectionClass}>
                <h2 className={sectionHeading}>Impact</h2>
                <div className={`space-y-5 ${bodyText} mb-10`}>
                  <h3 className={subHeading}>Alpha launch</h3>
                  <p>
                    The swarm MVP shipped in May 2025. When the feature entered alpha
                    release in June 2025, the response was immediate: more than 200
                    customers enrolled in the alpha program within the first weeks — a
                    signal that the concept resonated well beyond our internal assumptions
                    about demand.
                  </p>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                  <StatCard
                    value="200+"
                    label="Customers enrolled in alpha within weeks of launch"
                  />
                  <StatCard
                    value="400+"
                    label="Customer interactions generating consistent positive signal"
                  />
                  <StatCard
                    value="Jun 2025"
                    label="Alpha release date"
                  />
                </div>

                <div className={`space-y-5 ${bodyText} mt-10`}>
                  <h3 className={subHeading}>Customer feedback</h3>
                  <p>
                    As the alpha expanded, the customer success team ran structured sessions
                    with enrolled customers. Across 400+ customer interactions, the design
                    received consistently positive feedback. Customers highlighted that the
                    spatial map made it immediately clear how their content was structured —
                    something no previous tool had given them; that the insight panel helped
                    them translate a visual observation into a concrete next action; and that
                    the experience felt meaningfully different from traditional SEO dashboards.
                  </p>
                  <p>
                    This volume and consistency of positive signal was unusual for an
                    alpha-stage feature, and validated the core design decisions around
                    spatial exploration and contextual actionability.
                  </p>

                  <h3 className={subHeading}>Internal impact</h3>
                  <p>
                    The project also introduced a new conceptual model within Conductor
                    Intelligence: evaluating websites through topic structure rather than
                    keyword rankings alone. This shift became the shared foundation for
                    both the AEO design work that followed and the parallel team's AI
                    traffic data infrastructure.
                  </p>
                </div>
              </section>

              {/* ── Section 10: What's Next ──────────────────────────────── */}
              <section id="whats-next" className={sectionClass}>
                <h2 className={sectionHeading}>What's Next</h2>
                <div className={`space-y-5 ${bodyText}`}>
                  <p>
                    The swarm ended in May 2025, but the design work continued. Between
                    June and October 2025, I completed the AEO design for the next phase
                    of the product, building on the same spatial map framework to
                    incorporate AI search performance signals.
                  </p>
                  <p>
                    Running in parallel throughout the swarm, a separate team had been
                    building the infrastructure for AI traffic and AEO signal collection.
                    The two workstreams converged as intended: once real AI search data
                    became available, it plugged directly into the clustering framework
                    this project had validated.
                  </p>
                  <p>
                    This evolution enabled a shift from SEO-proxy topic maps toward true
                    AEO topic intelligence — allowing organizations to understand not just
                    what topics their website covers, but how effectively their content is
                    being interpreted and cited by AI-driven search systems. The design
                    foundation established in the swarm phase made that next chapter possible.
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
