const stats = [
  { value: "25,000+", label: "Colleges Listed" },
  { value: "1,500+", label: "Exams Covered" },
  { value: "50 Lakh+", label: "Students Guided" },
  { value: "10,000+", label: "Expert Reviews" },
];

const StatsBar = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-heading text-3xl font-extrabold text-accent md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-primary-foreground/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
