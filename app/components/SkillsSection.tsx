import { Code, Wrench, Layers, Cloud } from "lucide-react"
import { SkillCategory } from "../lib/profileData";

const categoryIcons: Record<string, React.ReactNode> = {
  Fundamentals: <Code className="w-5 h-5" />,
  Ecosystem: <Layers className="w-5 h-5" />,
  Tools: <Wrench className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};

const SkillsSection = ({ skills }: { skills: SkillCategory[] }) => {
    return (
          <section className="card-elevated p-6 md:p-8 mb-6 transition-shadow duration-300">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="space-y-6">
        {skills.map((category, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-accent">
                {categoryIcons[category.name] || <Code className="w-5 h-5" />}
              </span>
              <h4 className="font-semibold text-foreground">{category.name}</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIndex) => (
                <span
                  key={sIndex}
                  className={
                    sIndex < 3 && index === 0
                      ? "skill-badge-accent"
                      : "skill-badge"
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    );
}   

export default SkillsSection;   