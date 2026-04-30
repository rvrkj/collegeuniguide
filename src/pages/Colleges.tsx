import PageLayout from "@/components/PageLayout";
import { Star, MapPin } from "lucide-react";

const colleges = [
  { name: "IIT Bombay", location: "Mumbai", rating: 4.8, fee: "₹2.2L/yr", tag: "Engineering" },
  { name: "IIM Ahmedabad", location: "Ahmedabad", rating: 4.9, fee: "₹23L total", tag: "MBA" },
  { name: "AIIMS Delhi", location: "New Delhi", rating: 4.9, fee: "₹6K/yr", tag: "Medical" },
  { name: "NLSIU", location: "Bengaluru", rating: 4.7, fee: "₹2.8L/yr", tag: "Law" },
  { name: "BITS Pilani", location: "Pilani", rating: 4.6, fee: "₹4.5L/yr", tag: "Engineering" },
  { name: "St. Xavier's", location: "Mumbai", rating: 4.5, fee: "₹25K/yr", tag: "Arts" },
];

const Colleges = () => {
  return (
    <PageLayout
      eyebrow="Colleges"
      title={<>BROWSE <span className="bg-yellow px-2 ink-border">25,000+</span><br/>COLLEGES.</>}
      description="Real fees. Real rankings. Real reviews. Filter by what actually matters for the job you want."
      accent="yellow"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {colleges.map((c) => (
          <div key={c.name} className="bg-background p-6 ink-border shadow-brutal transition-transform hover:-translate-x-1 hover:-translate-y-1">
            <div className="inline-block bg-cyan px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest ink-border">
              {c.tag}
            </div>
            <h3 className="mt-4 font-display text-2xl text-foreground">{c.name}</h3>
            <div className="mt-2 flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {c.location}
            </div>
            <div className="mt-4 flex items-center justify-between border-t-2 border-foreground pt-4">
              <span className="inline-flex items-center gap-1 font-mono text-sm font-bold">
                <Star className="h-4 w-4 fill-accent text-accent" /> {c.rating}
              </span>
              <span className="font-mono text-sm font-bold text-foreground">{c.fee}</span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Colleges;
