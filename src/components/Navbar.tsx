import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = ["Discover", "Colleges", "Portfolio", "Score", "Jobs", "Applications"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center bg-accent font-display text-xl text-accent-foreground ink-border">
            C
          </div>
          <div className="leading-none">
            <div className="font-display text-base text-foreground">College/Uni</div>
            <div className="font-mono text-[10px] tracking-widest text-muted-foreground">GUIDE.APP</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="px-3 py-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right action */}
        <div className="flex items-center gap-3">
          <a
            href="#start"
            className="hidden bg-accent px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground ink-border shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 md:inline-flex"
          >
            Get Started Free
          </a>
          <button
            className="p-2 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t-2 border-foreground bg-background px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="block py-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Link>
          ))}
          <a
            href="#start"
            className="mt-2 block bg-accent px-5 py-3 text-center font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground ink-border"
          >
            Get Started Free
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
