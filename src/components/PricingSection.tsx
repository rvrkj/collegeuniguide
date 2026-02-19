import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Get started with basic career insights",
    features: [
      "Basic career report",
      "1 primary career recommendation",
      "Access to general career library",
      "Community forum access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₹499",
    period: "/month",
    description: "Detailed guidance with mentor access",
    features: [
      "Detailed AI career report",
      "Multiple tailored recommendations",
      "Realistic career roadmaps",
      "View mentor profiles",
      "Psychometric assessment",
      "Regional language output",
    ],
    cta: "Start Premium",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "Unlimited mentorship & career tools",
    features: [
      "Everything in Premium",
      "Unlimited mentor connections",
      "Live expert webinars",
      "Skill-gap analysis",
      "Resume & interview prep",
      "Priority support",
    ],
    cta: "Go Pro",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            Simple, <span className="text-gradient">Accessible Pricing</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Designed for Tier-2 & Tier-3 students — quality career guidance shouldn't depend on your city
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                tier.highlighted
                  ? "border-accent bg-card shadow-card-hover ring-2 ring-accent/20"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-card-foreground">{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-extrabold text-card-foreground">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mt-5 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "gradient-accent text-accent-foreground hover:shadow-lg"
                    : "border border-border bg-muted text-card-foreground hover:bg-muted/80"
                }`}
              >
                {tier.highlighted && <Sparkles className="h-4 w-4" />}
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          🏫 <strong className="text-card-foreground">Schools & Colleges:</strong> Contact us for bulk B2B plans for your students
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
