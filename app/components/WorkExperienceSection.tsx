import { Briefcase, Calendar } from "lucide-react";
import { WorkExperience } from "../lib/profileData";

const WorkExperienceSection = ({workExperience}: {workExperience: WorkExperience[]}) => {
     return (
    <section className="card-elevated p-6 md:p-8 mb-6 transition-shadow duration-300">
      <h2 className="section-title">Work Experience</h2>

      <div className="space-y-4">
        {workExperience.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div className="flex items-center gap-2 text-accent font-medium mb-1 md:mb-0">
                <Briefcase className="w-4 h-4" />
                <span className="text-lg">{exp.role}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>

            <h4 className="font-semibold text-foreground mb-3">{exp.company}</h4>

            {exp.projects && (
              <div className="space-y-3 mt-4">
                {exp.projects.map((project, pIndex) => (
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

            {exp.technologies && !exp.projects && (
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech, tIndex) => (
                  <span key={tIndex} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
     )
}   

export default WorkExperienceSection;   