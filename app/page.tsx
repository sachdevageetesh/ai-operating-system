type IconName =
  | "spark"
  | "book"
  | "code"
  | "agent"
  | "person"
  | "split"
  | "shield"
  | "lock"
  | "linkedin"
  | "github"
  | "mail";

const operatingModes = [
  {
    mode: "Decide",
    goal: "Clarify options, trade-offs, risks",
    tools: "Claude, ChatGPT Models",
    human: "I own judgment",
    rule: "Structured disagreement improves judgment.",
  },
  {
    mode: "Synthesize",
    goal: "Compress research and documents",
    tools: "Perplexity, Gemini, NotebookLM, Claude Cowork, Codex",
    human: "I verify sources",
    rule: "Source boundary determines the tool.",
  },
  {
    mode: "Build",
    goal: "Turn ideas into testable artifacts",
    tools: "Google Stitch, Claude Code, Codex, Supabase, GitHub, Playwright, Vercel",
    human: "I own acceptance criteria",
    rule: "The value is the loop: design, build, test, ship, learn.",
  },
  {
    mode: "Automate",
    goal: "Delegate repeatable workflows",
    tools: "n8n / CrewAI, Local LLMs running on edge",
    human: "I define bounds and review failures",
    rule: "Autonomy is earned by clarity: clear task, clear checks, clear owner.",
  },
  {
    mode: "Observe and Improve",
    goal: "Monitor I/O, run evals, and enforce guardrails",
    tools: "Arize Phoenix",
    human: "I define evaluation standards and oversee governance",
    rule: "Trust requires evidence - evals, traces, guardrails.",
  },
];

const SKILLS_REPO = "https://github.com/sachdevageetesh/pm-skills";

type SkillStage = "Discover" | "Decide" | "Ship";

const stageStyles: Record<SkillStage, string> = {
  Discover: "bg-blue-50 text-blue-800 ring-blue-200",
  Decide: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Ship: "bg-orange-50 text-orange-800 ring-orange-200",
};

const skillCatalogue: {
  stage: SkillStage;
  skill: string;
  whatItDoes: string;
  input: string;
  output: string;
  reviewRule: string;
}[] = [
  {
    stage: "Discover",
    skill: "analyze-feature-requests",
    whatItDoes:
      "Finds patterns across calls, reviews, tickets, support notes, and sales conversations.",
    input: "Raw customer evidence",
    output: "Pains, themes, objections, unmet needs",
    reviewRule: "Evidence before insight.",
  },
  {
    stage: "Discover",
    skill: "opportunity-solution-tree",
    whatItDoes:
      "Converts messy customer evidence into opportunity areas, assumptions, and discovery questions.",
    input: "Signals + product context",
    output: "Opportunity map + risks",
    reviewRule: "Separate facts from assumptions.",
  },
  {
    stage: "Discover",
    skill: "competitive-analysis",
    whatItDoes:
      "Tracks positioning, pricing, packaging, ICP shifts, feature moves, and whitespace.",
    input: "Market sources",
    output: "Competitor map + whitespace",
    reviewRule: "Source every claim.",
  },
  {
    stage: "Decide",
    skill: "identify-assumptions-existing",
    whatItDoes:
      "Stress-tests product choices, roadmap trade-offs, sequencing, and second-order effects.",
    input: "Strategic choice",
    output: "Trade-offs + decision risks",
    reviewRule: "AI argues; human decides.",
  },
  {
    stage: "Decide",
    skill: "value-proposition",
    whatItDoes:
      "Turns product capability into ICP, use case, category, value proposition, and sales narrative.",
    input: "Product + market context",
    output: "Positioning + narrative",
    reviewRule: "Clarity over cleverness.",
  },
  {
    stage: "Decide",
    skill: "prioritize-features",
    whatItDoes:
      "Scores ideas across customer pain, business value, effort, confidence, risk, and strategic fit.",
    input: "Ideas + constraints",
    output: "Ranked bets + rationale",
    reviewRule: "Expose scoring assumptions.",
  },
  {
    stage: "Ship",
    skill: "create-prd",
    whatItDoes:
      "Converts intent into problem statement, scope, user stories, acceptance criteria, and metrics.",
    input: "Product intent",
    output: "PRD + acceptance criteria",
    reviewRule: "Acceptance criteria must test.",
  },
  {
    stage: "Ship",
    skill: "brainstorm-experiments-new",
    whatItDoes:
      "Designs fake doors, concierge tests, landing pages, workflow demos, and validation plans.",
    input: "Hypothesis",
    output: "Prototype + test plan",
    reviewRule: "Test before building fully.",
  },
  {
    stage: "Ship",
    skill: "retro",
    whatItDoes:
      "Turns release data, bugs, feedback, usage signals, and sales notes into next actions.",
    input: "Launch signals",
    output: "Learnings + next decisions",
    reviewRule: "Learning must change action.",
  },
];

const workShapeMap = [
  {
    shape: "Ambiguous",
    posture: "Sparring partner",
    concept: "Anchor bias",
    body: "Forces a better answer, not the first one",
  },
  {
    shape: "Research-heavy",
    posture: "Source-grounded synthesizer",
    concept: "Hallucination risk",
    body: "Trusted sources only for a solid foundation",
  },
  {
    shape: "Build/Prototype",
    posture: "Prototype accelerator",
    concept: "Spec stalemate",
    body: "A user clicking a prototype teaches more than any hypotheses can",
  },
  {
    shape: "Repeatable",
    posture: "Bounded agent",
    concept: "Repetition tax",
    body: "Traced & governed Bounded autonomy frees up time for leveraged work",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafd]">
      <section className="mx-auto w-full max-w-6xl px-4 pb-4 pt-4 sm:px-5 lg:px-6 lg:pb-5 lg:pt-6">
        <div className="rounded-[28px] border border-[#dfe3eb] bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex flex-wrap items-start gap-2">
            <span className="rounded-full border border-[#d2e3fc] bg-[#e8f0fe] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a73e8]">
              Operating system
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-[#dadce0] bg-white px-3 py-1.5 text-[11px] font-bold text-[#5f6368]">
              <span className="h-2 w-2 rounded-full bg-[#4285f4]" />
              <span className="h-2 w-2 rounded-full bg-[#ea4335]" />
              <span className="h-2 w-2 rounded-full bg-[#fbbc04]" />
              <span className="h-2 w-2 rounded-full bg-[#34a853]" />
            </span>
            <div className="w-full rounded-xl border border-[#b7dfc4] bg-[#e6f4ea] px-3 py-2 text-left sm:ml-auto sm:w-auto sm:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#188038]">
                Prepared for Rajesh Chandran @ <span className="normal-case">PwC</span>
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-[#0d652d]">
                Next.js · Claude Code · GitHub · Vercel
              </p>
            </div>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-[#202124] sm:text-5xl lg:text-[56px]">
            Geetesh&apos;s AI Operating System
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6368]">
            A system for deciding, learning, building, and automating faster; with <b>human judgment</b> preserved where it matters.
          </p>

          <div className="mt-6 border-t border-[#dfe3eb] pt-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
              Philosophy
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#202124]">
              Tool choice follows the shape of the work.
            </h2>

            <p className="mt-4 text-[10px] font-medium italic text-[#5f6368] sm:hidden">
              ← swipe to see all columns →
            </p>
            <div className="mt-2 overflow-x-auto rounded-2xl border border-[#dadce0] bg-white sm:mt-4">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#dadce0] bg-[#f8fafd]">
                    <th
                      scope="col"
                      className="w-[18%] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      Work shape
                    </th>
                    <th
                      scope="col"
                      className="w-[26%] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      AI posture
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      Why this posture
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workShapeMap.map((row, i) => (
                    <tr
                      key={row.shape}
                      className={
                        i < workShapeMap.length - 1
                          ? "border-b border-[#eaecf0]"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 align-top font-semibold tracking-[-0.01em] text-[#202124]">
                        {row.shape}
                      </td>
                      <td className="px-4 py-3 align-top text-[#5f6368]">
                        {row.posture}
                      </td>
                      <td className="px-4 py-3 align-top text-[13px] leading-5 text-[#5f6368]">
                        <span className="font-semibold text-[#202124]">
                          {row.concept}.
                        </span>{" "}
                        {row.body}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[#d2e3fc] bg-[#e8f0fe] px-4 py-2">
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a73e8]">
                Thumb rule
              </span>
              <span className="text-sm font-medium leading-5 text-[#174ea6]">
                Ambiguity and risk determine the level of human control.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-5 lg:px-6">
        <div className="mb-3 px-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
            The five modes
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#202124] sm:text-2xl">
            From decision to governance, mapped to the work I do.
          </h2>
        </div>

        <p className="mb-2 text-[10px] font-medium italic text-[#5f6368] sm:hidden">
          ← swipe to see all columns →
        </p>
        <div className="overflow-x-auto rounded-[24px] border border-[#dfe3eb] bg-white shadow-sm">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#dadce0] bg-[#f8fafd]">
                <th
                  scope="col"
                  className="w-[14%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                >
                  Mode
                </th>
                <th
                  scope="col"
                  className="w-[20%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                >
                  Goal
                </th>
                <th
                  scope="col"
                  className="w-[24%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                >
                  Tools
                </th>
                <th
                  scope="col"
                  className="w-[20%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                >
                  Human control
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a73e8]"
                >
                  Rule
                </th>
              </tr>
            </thead>
            <tbody>
              {operatingModes.map((row, i) => (
                <tr
                  key={row.mode}
                  className={
                    i < operatingModes.length - 1
                      ? "border-b border-[#eaecf0]"
                      : ""
                  }
                >
                  <td className="px-4 py-4 align-top font-semibold tracking-[-0.01em] text-[#202124]">
                    {row.mode}
                  </td>
                  <td className="px-4 py-4 align-top text-[#5f6368]">{row.goal}</td>
                  <td className="px-4 py-4 align-top">
                    <div className="flex flex-wrap gap-1.5">
                      {row.tools.split(",").map((tool) => {
                        const label = tool.trim();
                        return (
                          <span
                            key={label}
                            className="inline-flex rounded-md bg-[#f1f3f4] px-2 py-0.5 text-[12px] font-medium text-[#202124] ring-1 ring-[#dadce0]"
                          >
                            {label}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-4 py-4 align-top text-[#5f6368]">{row.human}</td>
                  <td className="px-4 py-4 align-top text-[13px] font-medium leading-5 text-[#174ea6]">
                    {row.rule}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-5 lg:px-6">
        <div className="mb-4 overflow-hidden rounded-[24px] border border-[#dfe3eb] bg-white shadow-sm">
          <div className="border-b border-[#dfe3eb] bg-white p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
              The Skills Layer
            </p>
            <div className="mt-2 grid gap-3 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <h2 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#202124] sm:text-2xl">
                Perform specialized tasks consistently and efficiently. Model Agnostic ✨</h2>
              
                        
              
            </div>

           
          </div>

          <div className="p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
                Skills by stage
              </p>
              <a
                href={SKILLS_REPO}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#e8f0fe] px-2.5 py-1 text-[11px] font-bold text-[#1a73e8] ring-1 ring-[#d2e3fc] transition hover:bg-[#d2e3fc]"
              >
                Browse all on GitHub →
              </a>
            </div>

            <p className="mb-2 text-[10px] font-medium italic text-[#5f6368] sm:hidden">
              ← swipe to see all columns →
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#dadce0] bg-white">
              <table className="w-full min-w-[1080px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#dadce0] bg-[#f8fafd]">
                    <th
                      scope="col"
                      className="w-[10%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      Stage
                    </th>
                    <th
                      scope="col"
                      className="w-[18%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      Skill
                    </th>
                    <th
                      scope="col"
                      className="w-[28%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      What it does
                    </th>
                    <th
                      scope="col"
                      className="w-[14%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      Input
                    </th>
                    <th
                      scope="col"
                      className="w-[16%] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f6368]"
                    >
                      Output
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a73e8]"
                    >
                      Review rule
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {skillCatalogue.map((row, i) => (
                    <tr
                      key={row.skill}
                      className={
                        i < skillCatalogue.length - 1
                          ? "border-b border-[#eaecf0]"
                          : ""
                      }
                    >
                      <td className="px-4 py-4 align-top">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ring-1 ${stageStyles[row.stage]}`}
                        >
                          {row.stage}
                        </span>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <code className="rounded bg-[#f1f3f4] px-1.5 py-0.5 font-mono text-[12px] font-semibold text-[#202124]">
                          /{row.skill}
                        </code>
                      </td>
                      <td className="px-4 py-4 align-top text-[#5f6368]">
                        {row.whatItDoes}
                      </td>
                      <td className="px-4 py-4 align-top text-[#5f6368]">
                        {row.input}
                      </td>
                      <td className="px-4 py-4 align-top text-[#5f6368]">
                        {row.output}
                      </td>
                      <td className="px-4 py-4 align-top text-[13px] font-medium leading-5 text-[#174ea6]">
                        {row.reviewRule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <div className="mb-4 rounded-[24px] border border-[#dfe3eb] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#188038]">
                Product build stack
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#202124] sm:text-2xl">
                Tools by layer.
              </h2>
            </div>
            <p className="text-xs font-medium text-[#5f6368] sm:text-sm">
              Nine layers, design through deployment.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            {operatingStack.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#dadce0] bg-[#f8fafd] p-3"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#188038]">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold tracking-[-0.01em] text-[#202124]">
                  {item.tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#dfe3eb] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
                Autonomy framework
              </p>
              <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-[-0.035em] text-[#202124] sm:text-3xl">
                More ambiguity, more human control. Clearer work, more AI autonomy.
              </h2>
            </div>
            <div className="rounded-2xl border border-[#dadce0] bg-[#f8fafd] p-3 text-xs font-semibold text-[#5f6368] sm:text-sm">
              Risk decreases <span className="px-2 text-[#1a73e8]">→</span> autonomy increases
            </div>
          </div>

          <div className="mt-5 grid gap-2 lg:grid-cols-3">
            {autonomyLevels.map((item, index) => (
              <article
                key={item.level}
                className={`relative overflow-hidden rounded-xl border p-4 ${item.tone}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-xl bg-white/80 p-2 shadow-sm">
                    <Icon name={item.icon as IconName} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-bold tracking-[0.14em]">
                    STEP {index + 1}
                  </span>
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] opacity-75">
                  {item.label}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em]">
                  {item.level}
                </h3>
                <p className="mt-2 text-xs font-semibold leading-5">{item.use}</p>
                <div className="mt-3 rounded-lg bg-white/70 p-2.5 text-xs font-semibold">
                  {item.cue}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-3 grid gap-2 lg:grid-cols-3">
            <GuardrailCard
              icon="lock"
              title="Private data"
              body="Use local LLMs when the information should not leave a controlled environment."
            />
            <GuardrailCard
              icon="spark"
              title="Shareable data"
              body="Use public frontier models when the material is safe to share and breadth matters."
            />
            <GuardrailCard
              icon="shield"
              title="Customer-touching data"
              body="Add testing, observability, review, and guardrails before increasing autonomy."
            />
          </div>
        </div> */}

        {/* <div className="mt-4 rounded-[24px] border border-[#d2e3fc] bg-[#e8f0fe] p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
            Where this lands
          </p>
          <p className="mt-2 max-w-3xl text-base font-medium leading-7 text-[#174ea6]">
            The framework travels; the stack adapts. Tell me how your team ships, and I&apos;ll swap the tools in this loop to match.
          </p>
        </div> */}
      </section>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-2 sm:px-5 lg:px-6">
        <div className="flex flex-col items-center gap-3 border-t border-[#dfe3eb] pt-6">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sachdevageetesh/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-[#dadce0] bg-white p-2.5 text-[#5f6368] transition hover:-translate-y-0.5 hover:border-[#c6dafc] hover:text-[#1a73e8] hover:shadow-md"
            >
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/sachdevageetesh?tab=repositories"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-[#dadce0] bg-white p-2.5 text-[#5f6368] transition hover:-translate-y-0.5 hover:border-[#c6dafc] hover:text-[#1a73e8] hover:shadow-md"
            >
              <Icon name="github" className="h-5 w-5" />
            </a>
            <a
              href="mailto:sachdevageetesh@gmail.com"
              aria-label="Email"
              className="rounded-full border border-[#dadce0] bg-white p-2.5 text-[#5f6368] transition hover:-translate-y-0.5 hover:border-[#c6dafc] hover:text-[#1a73e8] hover:shadow-md"
            >
              <Icon name="mail" className="h-5 w-5" />
            </a>
          </div>
          <p className="text-[11px] font-medium text-[#5f6368]">
            Geetesh Sachdeva · sachdevageetesh@gmail.com
          </p>
        </div>
      </footer>
    </main>
  );
}

function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const shared = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (name === "book") {
    return (
      <svg {...shared}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg {...shared}>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    );
  }

  if (name === "agent") {
    return (
      <svg {...shared}>
        <path d="M12 8V4" />
        <rect width="16" height="12" x="4" y="8" rx="3" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
        <path d="M10 17h4" />
      </svg>
    );
  }

  if (name === "person") {
    return (
      <svg {...shared}>
        <path d="M19 21a7 7 0 0 0-14 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }

  if (name === "split") {
    return (
      <svg {...shared}>
        <path d="M6 3v6a3 3 0 0 0 3 3h9" />
        <path d="M18 6v12" />
        <path d="m15 15 3 3 3-3" />
        <path d="M6 21v-6a3 3 0 0 1 3-3" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...shared}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...shared}>
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
    </svg>
  );
}
