const steps = [
  {
    n: "01",
    title: "Discover your interests",
    desc: "Pick what excites you. We map careers — not test you.",
    color: "bg-cyan",
  },
  {
    n: "02",
    title: "Try real simulations",
    desc: "Solve actual on-the-job tasks, not textbook quizzes.",
    color: "bg-yellow",
  },
  {
    n: "03",
    title: "Build a portfolio",
    desc: "Every simulation becomes proof recruiters can see.",
    color: "bg-accent text-accent-foreground",
  },
  {
    n: "04",
    title: "Get matched with jobs",
    desc: "Based on your performance, not just your resume.",
    color: "bg-background",
  },
];

const outcomes = [
  {
    title: "Action over advice",
    desc: "Stop reading career articles. Try the role for 10 minutes.",
  },
  {
    title: "Outcome-driven",
    desc: "Every screen tied to jobs, not lessons or grades.",
  },
  {
    title: "Honest scores",
    desc: "Brutal but useful. You'll know exactly where you stand.",
  },
];

const HowItWorks = () => {
  return (
    <section id="discover" className="border-b-2 border-foreground bg-section-alt py-20">
      <div className="container">
        <div className="mb-4 inline-block -rotate-1 bg-accent px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground ink-border">
          ✦ The 4-step climb
        </div>
        <h2 className="font-display text-foreground text-5xl sm:text-6xl lg:text-7xl">
          BUILD PROOF.<br />
          GET <span className="bg-yellow px-2 ink-border">MATCHED</span>.<br />
          SKIP THE WAIT.
        </h2>
        <p className="mt-5 max-w-xl font-body text-foreground/70">
          Most career advice ends at "pick a stream". We start where that ends.
        </p>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`${s.color} p-6 ink-border shadow-brutal transition-transform hover:-translate-x-1 hover:-translate-y-1`}
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-70">
                Step {s.n} of 04
              </div>
              <div className="mt-2 font-display text-5xl">{s.n}</div>
              <h3 className="mt-4 font-display text-xl">{s.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Outcome cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {outcomes.map((o, i) => (
            <div
              key={o.title}
              className="bg-background p-6 ink-border shadow-brutal"
            >
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-2xl text-foreground">{o.title}</h3>
              <p className="mt-2 font-body text-sm text-foreground/70">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
