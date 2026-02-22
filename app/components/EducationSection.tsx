import { Calendar, GraduationCap } from "lucide-react";
import { Education } from "../lib/profileData";

const EducationSection = ({ education }: { education: Education[] }) => {
  return (
    <section className="card-elevated p-6 md:p-8 mb-4">
      <h2 className="section-title">
        Education
      </h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-4 p-4 bg-secondary/30 rounded-lg border border-border/30"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="flex-1">
              {edu.degree && (
                <h4 className="font-semibold text-foreground text-lg mb-2">
                  {edu.degree}
                </h4>
              )}
              <p className="text-accent font-medium">{edu.institution}</p>
              {edu.field && (
                <p className="text-muted-foreground text-sm mt-1">
                  {edu.field}
                </p>
              )}
            </div>

            <div className="flex-shrink-0 flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span>{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
