import { Award, Briefcase, MapPin, MessageSquare } from "lucide-react";

const mentors = [
  { name: "Priya Sharma", role: "Senior Data Scientist", company: "Microsoft", location: "Pune", speciality: "AI/ML, Python" },
  { name: "Rahul Verma", role: "Product Manager", company: "Flipkart", location: "Bengaluru", speciality: "Strategy, B2B SaaS" },
  { name: "Dr. Anita Desai", role: "Cardiologist", company: "AIIMS", location: "Delhi", speciality: "MBBS, NEET Prep" },
  { name: "Karan Mehta", role: "Founding Engineer", company: "Razorpay", location: "Jaipur", speciality: "Full-Stack, Startups" },
];

const MentorshipSection = () => {
  return (
    <section className="bg-section-alt py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            Learn from <span className="text-gradient">Real Professionals</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Our AI matches you with verified mentors based on your recommended career path, industry, and location
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="group rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-card-foreground">{m.name}</h3>
              <p className="text-sm text-accent">{m.role}</p>

              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5" />
                  {m.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {m.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-3.5 w-3.5" />
                  {m.speciality}
                </div>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-accent bg-transparent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground">
                <MessageSquare className="h-4 w-4" />
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
