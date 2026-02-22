import { Globe } from "lucide-react";

const LanguagesSection = ({
  languages,
}: {
  languages: { language: string; level: string }[];
}) => {
  const getLevelWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case "native":
        return "100%";
      case "professional":
        return "85%";
      case "fluent":
        return "75%";
      case "intermediate":
        return "50%";
      case "basic":
        return "25%";
      default:
        return "50%";
    }
  };

  return (
    <section className="card-elevated p-6 md:p-8 mb-6 transition-shadow duration-300">
      <h2 className="section-title">Languages</h2>

      <div className="space-y-4">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-accent" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-foreground">
                  {lang.language}
                </span>
                <span className="text-sm text-muted-foreground">
                  {lang.level}
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: getLevelWidth(lang.level) }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
