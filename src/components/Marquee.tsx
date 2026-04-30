const items = [
  "Don't wait until graduation",
  "Start building your career today",
  "Real tasks. Real proof. Real jobs.",
  "Skip the fluff. Skip ahead.",
];

const Marquee = () => {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="border-b-2 border-ink bg-ink overflow-hidden" style={{ background: "hsl(var(--ink))" }}>
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {loop.map((t, i) => (
          <span key={i} className="mx-6 font-mono text-xs font-bold uppercase tracking-widest text-background">
            {t} <span className="ml-6 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
