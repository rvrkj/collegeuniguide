import { Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const quickLinks = ["B.Tech", "MBA", "MBBS", "B.Com", "BA", "B.Sc", "BCA", "BBA"];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Students on campus"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div className="gradient-hero absolute inset-0" />

      <div className="container relative z-10 py-16 text-center">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
          Find Your Perfect{" "}
          <span className="text-gradient">College</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Explore 25,000+ colleges, compare courses, and get expert counselling — all in one place.
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-8 flex max-w-2xl items-center overflow-hidden rounded-xl bg-card shadow-card-hover animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-1 items-center gap-3 px-5">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search colleges, exams, courses..."
              className="w-full bg-transparent py-4 text-card-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button className="gradient-accent m-1.5 rounded-lg px-6 py-3 font-semibold text-accent-foreground transition-shadow hover:shadow-lg">
            Search
          </button>
        </div>

        {/* Quick links */}
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <span className="text-sm text-primary-foreground/60">Popular:</span>
          {quickLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="rounded-full border border-primary-foreground/20 px-3 py-1 text-sm text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
