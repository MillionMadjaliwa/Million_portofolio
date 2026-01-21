import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4OTAyMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Ir Millionnaire Madjaliwa
          </h1>
          <div className="h-1 w-32 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            Ingénieur Logiciel & Formateur Technologique
          </p>
          <p className="text-lg text-slate-400">
           Avec experience en développement full-stack, analyse de données et réseaux informatiques
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Me Contacter
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-black hover:bg-white hover:text-slate-900"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Mes compétences
          </Button>
        </div>

        <div className="flex gap-6 justify-center mt-12">
          <a 
            href="https://github.com/MillionMadjaliwa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/millionaire-madjaliwa-86879b286/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
