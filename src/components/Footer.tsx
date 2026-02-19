import { GraduationCap } from "lucide-react";

const footerLinks = {
  "Top Colleges": ["Engineering Colleges", "MBA Colleges", "Medical Colleges", "Law Colleges", "Arts Colleges"],
  "Top Exams": ["JEE Main", "NEET", "CAT", "GATE", "CLAT"],
  "Resources": ["College Rankings", "Course Finder", "Admission Alerts", "Scholarships", "Study Abroad"],
  "Company": ["About Us", "Contact", "Careers", "Blog", "Privacy Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-accent" />
              <span className="font-heading text-lg font-bold text-primary-foreground">
                College<span className="text-accent">Uni</span>Guide
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              Your trusted guide to finding the right college and building a brighter future.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 font-heading text-sm font-bold text-primary-foreground">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-accent">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} CollegeUniGuide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
