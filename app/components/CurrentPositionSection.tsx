import { Briefcase, Calendar, Sparkles } from "lucide-react";
import { WorkExperience } from "../lib/profileData";

interface CurrentWorkSectionProps {
  experience: WorkExperience;
}

const CurrentPositionSection = ({ experience }: CurrentWorkSectionProps) => {
  return (
    <section className="card-elevated p-6 md:p-8 mb-6 transition-shadow duration-300 border-l-4 border-accent">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-5 h-5 text-accent" />
        <h2 className="section-title mb-0">Current Position</h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center gap-2 text-accent font-medium mb-1 md:mb-0">
          <Briefcase className="w-4 h-4" />
          <span className="text-lg">{experience.role}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Calendar className="w-4 h-4" />
          <span>{experience.period}</span>
        </div>
      </div>

      <h4 className="font-semibold text-foreground mb-4">{experience.company}</h4>

      {experience.projects && (
        <div className="space-y-3">
          {experience.projects.map((project, pIndex) => (
            <div
              key={pIndex}
              className="bg-muted/30 rounded-lg p-4 border-l-2 border-accent/40"
            >
              <h5 className="font-semibold text-foreground text-sm mb-1">
                {project.name}
              </h5>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIndex) => (
                  <span key={tIndex} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CurrentPositionSection;