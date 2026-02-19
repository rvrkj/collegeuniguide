import { Cpu, Briefcase, BarChart3, Palette, Stethoscope, Scale, BookOpen, Wrench } from "lucide-react";

const goals = [
  { icon: Cpu, title: "Engineering", count: "6,345", courses: ["BE/B.Tech", "Diploma", "ME/M.Tech"] },
  { icon: Briefcase, title: "Management", count: "8,008", courses: ["MBA/PGDM", "BBA/BMS", "Executive MBA"] },
  { icon: BarChart3, title: "Commerce", count: "5,087", courses: ["B.Com", "M.Com", "CA"] },
  { icon: Palette, title: "Arts", count: "5,714", courses: ["BA", "MA", "BFA"] },
  { icon: Stethoscope, title: "Medical", count: "2,503", courses: ["MBBS", "BDS", "BAMS"] },
  { icon: Scale, title: "Law", count: "1,890", courses: ["BA LLB", "LLM", "BL/LLB"] },
  { icon: BookOpen, title: "Science", count: "4,120", courses: ["B.Sc", "M.Sc", "BCA"] },
  { icon: Wrench, title: "Design", count: "1,250", courses: ["B.Des", "M.Des", "BArch"] },
];

const StudyGoals = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-foreground">
          Select Your <span className="text-gradient">Study Goal</span>
        </h2>
        <p className="mt-2 text-muted-foreground">Browse colleges by your preferred field of study</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <div
                key={goal.title}
                className="group cursor-pointer rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-badge">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-card-foreground">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground">{goal.count} Colleges</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {goal.courses.map((course) => (
                    <li key={course}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                        {course}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyGoals;
