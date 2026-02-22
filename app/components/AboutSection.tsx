const AboutSection = ({ summary }: { summary: string }) => {
  return (
    <section className="card-elevated md:p-8 mb-4 transition-shadow duration-300 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="section-title">About Me</h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg italic pl-4 border-l-2 border-accent/40">
          {summary}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
