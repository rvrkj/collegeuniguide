import PageLayout from "@/components/PageLayout";

const skills = [
  { label: "Analytical thinking", value: 88 },
  { label: "Communication", value: 74 },
  { label: "Technical fluency", value: 82 },
  { label: "Problem solving", value: 91 },
  { label: "Collaboration", value: 70 },
];

const Score = () => {
  return (
    <PageLayout
      eyebrow="Score"
      title={<>HONEST <span className="bg-yellow px-2 ink-border">SCORES</span>.<br/>NO GRADES.</>}
      description="Brutal but useful. Here's exactly where you stand against the role you're targeting."
      accent="cyan"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="rotate-1 bg-cyan p-8 ink-border shadow-brutal-lg">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest">Career Readiness</div>
          <div className="mt-2 font-display text-8xl leading-none">82</div>
          <div className="mt-2 font-mono text-xs">/ 100 — close to job-ready</div>
          <div className="mt-6 border-t-2 border-foreground pt-4 font-mono text-xs">
            Target role · <span className="font-bold">Junior Data Analyst</span>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-5">
          {skills.map((s) => (
            <div key={s.label}>
              <div className="mb-2 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest">
                <span>{s.label}</span>
                <span>{s.value}/100</span>
              </div>
              <div className="h-5 ink-border bg-background">
                <div
                  className="h-full bg-accent"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Score;
