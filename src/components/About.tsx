import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Award,
      title: "Expertise Technique",
      description: "Maîtrise approfondie du développement logiciel avec plusieurs langages et frameworks"
    },
    {
      icon: Users,
      title: "Formation",
      description: "Formateur passionné en technologie, transmettant connaissances et compétences"
    },
    {
      icon: BookOpen,
      title: "Apprentissage Continu",
      description: "Toujours à jour avec les dernières technologies et meilleures pratiques"
    },
    {
      icon: TrendingUp,
      title: "Motivation & Développement",
      description: "Accompagnement et motivation des équipes vers l'excellence"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            À Propos
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ingénieur logiciel passionné avec une expertise multidisciplinaire en développement 
            full-stack, analyse de données, réseaux informatiques et formation technologique. 
            Je combine compétences techniques de pointe et aptitudes pédagogiques pour créer 
            des solutions innovantes et accompagner les professionnels dans leur développement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
