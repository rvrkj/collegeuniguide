const Footer = () => {
  return (
    <footer className="bg-background py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center bg-accent font-display text-lg text-accent-foreground ink-border">
            C
          </div>
          <div className="leading-none">
            <div className="font-display text-sm text-foreground">College/Uni</div>
            <div className="font-mono text-[10px] tracking-widest text-muted-foreground">GUIDE.APP</div>
          </div>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} CollegeUniGuide · Real tasks. Real proof. Real jobs.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
