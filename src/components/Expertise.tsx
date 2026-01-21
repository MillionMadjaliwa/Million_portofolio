import { Code, BarChart3, Network, GraduationCap, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Génie Logiciel",
      description: "Conception et développement d'applications robustes et évolutives avec JavaScript, PHP, Python et Windev. Expertise en architecture logicielle et bonnes pratiques de développement.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Analyse de Données",
      description: "Extraction, traitement et visualisation de données pour générer des insights exploitables. Utilisation de Python et outils d'analyse avancés.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Réseaux Informatiques",
      description: "Configuration, sécurisation et optimisation d'infrastructures réseau. Expertise en protocoles, administration système et cybersécurité.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Formation Technologique",
      description: "Formation et accompagnement de professionnels et étudiants en technologies de l'information. Pédagogie adaptée et transmission de compétences pratiques.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Motivation & Développement",
      description: "Coaching et accompagnement d'équipes techniques. Développement des compétences soft skills et motivation des talents vers l'excellence.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Domaines d'Expertise
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des solutions complètes alliant expertise technique et accompagnement humain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index}
              className="border-none shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
