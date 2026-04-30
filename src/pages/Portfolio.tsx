import PageLayout from "@/components/PageLayout";
import { FileCheck2, FolderOpen, Share2 } from "lucide-react";

const projects = [
  { title: "Marketing Funnel Audit", role: "Growth Analyst", status: "Completed" },
  { title: "SQL Cohort Retention", role: "Data Analyst", status: "Completed" },
  { title: "Product Spec: Onboarding", role: "Associate PM", status: "In progress" },
  { title: "Brand Style Guide", role: "Visual Designer", status: "Completed" },
];

const Portfolio = () => {
  return (
    <PageLayout
      eyebrow="Portfolio"
      title={<>YOUR WORK,<br/><span className="text-accent">RECRUITER-READY</span>.</>}
      description="Every simulation you complete becomes a shareable proof-of-skill. No fluff resumes — just real artifacts."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="flex items-start gap-4 bg-background p-6 ink-border shadow-brutal">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-yellow ink-border">
              <FolderOpen className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.role}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-accent">
                  <FileCheck2 className="h-4 w-4" /> {p.status}
                </span>
                <button className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Portfolio;
