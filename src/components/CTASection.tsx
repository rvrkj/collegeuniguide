import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/10" />

          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
                Not sure which college is right for you?
              </h2>
              <p className="mt-3 max-w-lg text-primary-foreground/70">
                Get free expert counselling from our team. We'll help you find the perfect college based on your profile.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="gradient-accent inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-accent-foreground transition-shadow hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Get Free Counselling
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Compare Colleges <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
