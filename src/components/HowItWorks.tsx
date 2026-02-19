import { Upload, Brain, Route, Users } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Share Your Profile",
    description:
      "Upload your academic reports, share your interests, passions, and childhood activities that shaped who you are.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analyzes & Maps",
    description:
      "Our AI extracts your core qualities — analytical, creative, empathetic — and maps them to real-world career demands.",
  },
  {
    icon: Route,
    step: "03",
    title: "Get Career Roadmaps",
    description:
      "Receive 2-3 tailored career paths with detailed roadmaps: courses, skills needed, salary outlook, and day-in-the-life previews.",
  },
  {
    icon: Users,
    step: "04",
    title: "Connect with Mentors",
    description:
      "Get matched with verified industry professionals who'll guide you through your chosen path with personalized mentorship.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-section-alt py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            How <span className="text-gradient">WisdomPath AI</span> Works
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Our AI agent builds a holistic profile of you — then matches it with real career data and mentors
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-border lg:block" />

          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-card">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
