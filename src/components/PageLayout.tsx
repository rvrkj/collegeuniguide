import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  accent?: "pink" | "yellow" | "cyan";
  children?: ReactNode;
}

const accentClass = {
  pink: "bg-accent text-accent-foreground",
  yellow: "bg-yellow",
  cyan: "bg-cyan",
} as const;

const PageLayout = ({ eyebrow, title, description, accent = "pink", children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Marquee />
      <Navbar />

      <section className="border-b-2 border-foreground py-16 md:py-20">
        <div className="container">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>

          <div className={`mb-6 inline-block -rotate-2 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest ink-border shadow-brutal ${accentClass[accent]}`}>
            ✦ {eyebrow}
          </div>

          <h1 className="font-display text-foreground text-5xl sm:text-6xl lg:text-8xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl font-body text-base text-foreground/80 sm:text-lg">
            {description}
          </p>
        </div>
      </section>

      <main className="border-b-2 border-foreground py-16">
        <div className="container">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
