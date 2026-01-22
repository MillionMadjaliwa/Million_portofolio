import { Code2, Server, Palette, Database } from "lucide-react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Langages de Programmation",
      color: "bg-blue-100 text-blue-600",
      skills: ["JavaScript", "PHP", "Python", "Windev", "Dart"]
    },
    {
      icon: Server,
      title: "Frameworks Backend",
      color: "bg-green-100 text-green-600",
      skills: ["Laravel", "Django", "Flask"]
    },
    {
      icon: Palette,
      title: "Frameworks Frontend",
      color: "bg-purple-100 text-purple-600",
      skills: ["React.js", "Tailwind CSS", "Flutter-mobile"]
    },
    {
      icon: Database,
      title: "Autres Compétences",
      color: "bg-orange-100 text-orange-600",
      skills: ["Analyse de Données", "Réseaux Informatiques", "Formation Technologique"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Compétences Techniques
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une expertise diversifiée couvrant l'ensemble du cycle de développement logiciel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-lg ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-white hover:bg-blue-50 border border-slate-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
