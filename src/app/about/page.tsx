import Experience from "./_components/experience";
import Education from "./_components/education";
import Skills from "./_components/skills";
import About from "./_components/about";

export default function AboutPage() {
   return (
      <main className="center-layout">
         <About />
         <Skills />
         <Experience />
         <Education />
      </main>
   );
}
