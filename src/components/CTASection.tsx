import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="start" className="border-b-2 border-foreground bg-foreground py-20 text-background">
      <div className="container text-center">
        <h2 className="font-display text-5xl text-background sm:text-6xl lg:text-8xl">
          DON'T WAIT UNTIL{" "}
          <span className="inline-block bg-yellow px-3 text-foreground ink-border">GRADUATION.</span>
          <br />
          START <span className="text-accent">TODAY.</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#start"
            className="inline-flex items-center gap-2 bg-accent px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-accent-foreground border-2 border-background shadow-[6px_6px_0_0_hsl(var(--background))] transition-transform hover:-translate-x-1 hover:-translate-y-1"
          >
            Get Started Free <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#discover"
            className="inline-flex items-center gap-2 bg-background px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-foreground border-2 border-background shadow-[6px_6px_0_0_hsl(var(--accent))] transition-transform hover:-translate-x-1 hover:-translate-y-1"
          >
            Try First Simulation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
