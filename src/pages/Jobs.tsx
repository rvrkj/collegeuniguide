import PageLayout from "@/components/PageLayout";
import { Briefcase, MapPin, Building2 } from "lucide-react";

const jobs = [
  { title: "Junior Data Analyst", company: "Razorpay", location: "Bengaluru", match: 92, type: "Full-time" },
  { title: "Associate Product Manager", company: "Flipkart", location: "Bengaluru", match: 84, type: "Full-time" },
  { title: "Marketing Analyst", company: "Zepto", location: "Mumbai", match: 78, type: "Full-time" },
  { title: "Growth Intern", company: "CRED", location: "Remote", match: 88, type: "Internship" },
];

const Jobs = () => {
  return (
    <PageLayout
      eyebrow="Jobs"
      title={<>JOBS THAT MATCH<br/>WHAT YOU <span className="text-accent">CAN DO</span>.</>}
      description="No keyword games. We match by simulation performance, not buzzwords on your resume."
    >
      <div className="space-y-5">
        {jobs.map((j) => (
          <div key={j.title} className="flex flex-col items-start gap-4 bg-background p-6 ink-border shadow-brutal md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-yellow ink-border">
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-foreground">{j.title}</h3>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Building2 className="h-3.5 w-3.5" /> {j.company}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                <span>{j.type}</span>
              </div>
            </div>
            <div className="text-center bg-cyan px-4 py-2 ink-border">
              <div className="font-display text-2xl">{j.match}%</div>
              <div className="font-mono text-[10px] uppercase tracking-widest">match</div>
            </div>
            <button className="bg-accent px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground ink-border shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">
              Apply
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Jobs;
