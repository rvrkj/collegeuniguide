import { GraduationCap, Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Colleges", "Exams", "Courses", "Rankings", "Careers"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-accent" />
          <span className="font-heading text-xl font-bold tracking-tight">
            College<span className="text-accent">Uni</span>Guide
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-md p-2 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 md:inline-flex">
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#counselling"
            className="hidden gradient-accent rounded-lg px-4 py-2 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-lg md:inline-flex"
          >
            Get Counselling
          </a>
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#counselling"
            className="mt-2 block gradient-accent rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground"
          >
            Get Counselling
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
