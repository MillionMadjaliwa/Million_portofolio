import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Expertise } from "./components/Expertise";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Contact />
    </div>
  );
}
