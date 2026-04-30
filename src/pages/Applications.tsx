import PageLayout from "@/components/PageLayout";

const apps = [
  { role: "Junior Data Analyst", company: "Razorpay", stage: "Interview", date: "Apr 28" },
  { role: "Growth Intern", company: "CRED", stage: "Submitted", date: "Apr 22" },
  { role: "Associate PM", company: "Flipkart", stage: "Shortlisted", date: "Apr 18" },
  { role: "Marketing Analyst", company: "Zepto", stage: "Rejected", date: "Apr 10" },
];

const stageColor: Record<string, string> = {
  Interview: "bg-cyan",
  Submitted: "bg-yellow",
  Shortlisted: "bg-accent text-accent-foreground",
  Rejected: "bg-background",
};

const Applications = () => {
  return (
    <PageLayout
      eyebrow="Applications"
      title={<>TRACK EVERY<br/><span className="bg-yellow px-2 ink-border">APPLICATION</span>.</>}
      description="One dashboard for every job you've applied to — with status, next steps, and recruiter notes."
      accent="yellow"
    >
      <div className="ink-border bg-background shadow-brutal">
        <div className="grid grid-cols-12 gap-4 border-b-2 border-foreground bg-foreground px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-background">
          <div className="col-span-5">Role</div>
          <div className="col-span-3">Company</div>
          <div className="col-span-2">Stage</div>
          <div className="col-span-2">Applied</div>
        </div>
        {apps.map((a, i) => (
          <div
            key={a.role}
            className={`grid grid-cols-12 items-center gap-4 px-6 py-5 ${i !== apps.length - 1 ? "border-b-2 border-foreground" : ""}`}
          >
            <div className="col-span-5 font-display text-lg text-foreground">{a.role}</div>
            <div className="col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{a.company}</div>
            <div className="col-span-2">
              <span className={`inline-block px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ink-border ${stageColor[a.stage]}`}>
                {a.stage}
              </span>
            </div>
            <div className="col-span-2 font-mono text-xs text-muted-foreground">{a.date}</div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Applications;
