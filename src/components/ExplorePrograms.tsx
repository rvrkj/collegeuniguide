import { useState } from "react";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

const tabs = ["All", "BE/B.Tech", "MBA/PGDM", "MBBS", "B.Sc", "BA", "B.Com", "BCA", "BBA"];

const programs = [
  { name: "B.Tech Computer Science", colleges: 3420, avgFees: "₹1.5L - 4L/yr", duration: "4 Years", demand: "High" },
  { name: "MBA (General)", colleges: 5200, avgFees: "₹2L - 25L/yr", duration: "2 Years", demand: "High" },
  { name: "MBBS", colleges: 612, avgFees: "₹50K - 20L/yr", duration: "5.5 Years", demand: "Very High" },
  { name: "B.Com (Honours)", colleges: 2800, avgFees: "₹20K - 1.5L/yr", duration: "3 Years", demand: "Medium" },
  { name: "BA English", colleges: 4100, avgFees: "₹10K - 80K/yr", duration: "3 Years", demand: "Medium" },
  { name: "BCA", colleges: 2150, avgFees: "₹40K - 2L/yr", duration: "3 Years", demand: "High" },
];

const ExplorePrograms = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bg-background py-16">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-foreground">
          Explore <span className="text-gradient">Programs</span>
        </h2>
        <p className="mt-2 text-muted-foreground">Discover the right course for your career goals</p>

        {/* Tabs */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-accent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Program grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((prog) => (
            <div
              key={prog.name}
              className="group cursor-pointer rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <h3 className="font-heading text-lg font-bold text-card-foreground">{prog.name}</h3>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-accent" />
                  <span>{prog.colleges.toLocaleString()} Colleges</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>{prog.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span>Demand: <span className="font-semibold text-card-foreground">{prog.demand}</span></span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-sm text-muted-foreground">Fees: <span className="font-semibold text-card-foreground">{prog.avgFees}</span></span>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorePrograms;
