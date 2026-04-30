import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground">
      <div className="container relative grid grid-cols-1 gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {/* Tag */}
          <div className="mb-8 inline-block -rotate-2 bg-cyan px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest ink-border shadow-brutal">
            ★ A Career-Tech Prototype
          </div>

          {/* Headline */}
          <h1 className="font-display text-foreground animate-fade-in-up">
            <span className="block text-[15vw] leading-[0.9] sm:text-[12vw] lg:text-[9.5vw]">
              DON'T WAIT
            </span>
            <span className="block text-[15vw] leading-[0.9] sm:text-[12vw] lg:text-[9.5vw]">
              UNTIL{" "}
              <span className="inline-block bg-yellow px-3 ink-border">
                GRADUATION
              </span>
            </span>
            <span className="mt-3 block text-[15vw] leading-[0.9] sm:text-[12vw] lg:text-[9.5vw]">
              <span className="inline-block align-top text-accent">●</span> START
            </span>
            <span className="block text-accent text-[15vw] leading-[0.9] sm:text-[12vw] lg:text-[9.5vw]">
              BUILDING
            </span>
            <span className="block text-[15vw] leading-[0.9] sm:text-[12vw] lg:text-[9.5vw]">
              TODAY.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-body text-base text-foreground/80 sm:text-lg">
            Skip the brochures. Try real roles in 10 minutes, build a portfolio from
            actual work, and get matched to jobs that match what you can do — not
            just where you studied.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="inline-flex items-center gap-2 bg-accent px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-accent-foreground ink-border shadow-brutal transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#discover"
              className="inline-flex items-center gap-2 bg-background px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-foreground ink-border shadow-brutal transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              Explore Careers
            </a>
          </div>

          {/* meta row */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> No signup needed</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> 10-min simulations</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Free forever</span>
          </div>
        </div>

        {/* Score card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-5">
            <div className="rotate-3 bg-cyan p-6 ink-border shadow-brutal-lg">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest">Career Readiness</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-7xl leading-none">82</span>
                <span className="mb-2 font-mono text-xs">/ 100</span>
              </div>
              <div className="mt-1 font-mono text-xs">close to job-ready</div>

              <div className="mt-5 border-t-2 border-foreground pt-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest">You match</div>
                <div className="mt-1 font-display text-3xl">82%</div>
                <div className="font-mono text-xs">required skills · Junior Data Analyst</div>
              </div>
            </div>

            <div className="-rotate-2 bg-yellow p-5 ink-border shadow-brutal">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest">Latest unlock</div>
              <div className="mt-1 font-display text-lg">Marketing Funnel Audit</div>
              <div className="font-mono text-xs">Completed ✓</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { n: "9", l: "guided flows" },
                { n: "20+", l: "real-task sims" },
                { n: "₹0", l: "to start building" },
                { n: "1×", l: "click to begin" },
              ].map((s) => (
                <div key={s.l} className="bg-background p-3 ink-border">
                  <div className="font-display text-2xl text-foreground">{s.n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
