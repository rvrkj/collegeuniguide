import { FileText, Sparkles, TrendingUp, Globe, ShieldCheck, Languages } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Academic Analysis",
    description:
      "Upload mark sheets — our AI parses subject-wise strengths and identifies disciplines where you naturally excel.",
  },
  {
    icon: Sparkles,
    title: "Quality Extraction",
    description:
      'Share your interests freely. Our NLP engine extracts core qualities like "analytical", "creative", or "empathetic" from your story.',
  },
  {
    icon: TrendingUp,
    title: "Market-Aware Paths",
    description:
      "Career recommendations backed by real Indian job market data — salary ranges, growth trends, and Tier-2/3 city demand.",
  },
  {
    icon: Globe,
    title: "Day-in-the-Life Previews",
    description:
      "Not just career titles — realistic descriptions of what professionals actually do, so you know what you're signing up for.",
  },
  {
    icon: ShieldCheck,
    title: "Psychometric Boost",
    description:
      "Optional 15-minute psychometric assessment adds scientific rigor and helps refine AI recommendations further.",
  },
  {
    icon: Languages,
    title: "Regional Language Support",
    description:
      "Outputs available in Hindi, Marathi, Tamil, Telugu, and more — making guidance accessible across India.",
  },
];

const AIFeatures = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left intro */}
          <div className="lg:w-5/12">
            <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
              AI-Powered <span className="text-gradient">Career Guidance</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Traditional counselling misses the full picture. Our AI agent combines your academic record, passions,
              personality traits, and real market data to build a career roadmap that's uniquely yours.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Designed for students in <strong className="text-card-foreground">Tier-2 & Tier-3 cities</strong> who
              deserve the same quality guidance as metro students — at an accessible price.
            </p>
            <a
              href="#pricing"
              className="gradient-accent mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-accent-foreground transition-shadow hover:shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              Try WisdomPath AI
            </a>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-7/12">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-badge">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-bold text-card-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
