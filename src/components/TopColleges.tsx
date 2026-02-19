import { Star, MapPin, ArrowRight } from "lucide-react";

const colleges = [
  { name: "IIT Bombay", location: "Mumbai, Maharashtra", rating: 4.9, rank: "#1", type: "Engineering", fees: "₹2.2L/yr" },
  { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", rating: 4.8, rank: "#1", type: "Management", fees: "₹23L/yr" },
  { name: "AIIMS Delhi", location: "New Delhi", rating: 4.9, rank: "#1", type: "Medical", fees: "₹1.6K/yr" },
  { name: "NLU Delhi", location: "New Delhi", rating: 4.7, rank: "#1", type: "Law", fees: "₹2.4L/yr" },
  { name: "SRCC Delhi", location: "New Delhi", rating: 4.6, rank: "#1", type: "Commerce", fees: "₹38K/yr" },
  { name: "IIT Delhi", location: "New Delhi", rating: 4.8, rank: "#2", type: "Engineering", fees: "₹2.2L/yr" },
];

const TopColleges = () => {
  return (
    <section className="bg-section-alt py-16">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Top <span className="text-gradient">Colleges</span> in India
            </h2>
            <p className="mt-2 text-muted-foreground">Handpicked institutions ranked by experts</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-accent transition-colors hover:underline md:flex">
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college, idx) => (
            <div
              key={idx}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between p-5">
                <div className="flex-1">
                  <div className="mb-2 inline-block rounded-md bg-badge px-2 py-0.5 text-xs font-semibold text-badge-foreground">
                    {college.type}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground">{college.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {college.location}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-md bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                    {college.rank}
                  </span>
                  <div className="flex items-center gap-0.5 text-sm">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="font-semibold text-card-foreground">{college.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border bg-muted/50 px-5 py-3">
                <span className="text-sm text-muted-foreground">
                  Avg. Fees: <span className="font-semibold text-card-foreground">{college.fees}</span>
                </span>
                <a href="#" className="text-sm font-semibold text-accent transition-colors hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopColleges;
