import PageLayout from "@/components/PageLayout";
import { Compass, Sparkles, Target } from "lucide-react";

const items = [
  { icon: Compass, title: "Interest mapping", desc: "Tell us what excites you. We map careers — not test you." },
  { icon: Sparkles, title: "Hidden strengths", desc: "Surface qualities you didn't know employers value." },
  { icon: Target, title: "Career shortlist", desc: "Get a focused shortlist of paths worth exploring next." },
];

const Discover = () => {
  return (
    <PageLayout
      eyebrow="Discover"
      title={<>FIND THE WORK<br/>THAT <span className="bg-yellow px-2 ink-border">FITS YOU</span>.</>}
      description="A 5-minute discovery flow that maps your interests to real careers and the simulations that prove you can do them."
      accent="cyan"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-background p-6 ink-border shadow-brutal">
            <div className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground ink-border">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-xl text-foreground">{title}</h3>
            <p className="mt-2 font-body text-sm text-foreground/70">{desc}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Discover;
