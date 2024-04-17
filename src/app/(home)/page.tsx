import type { Metadata } from "next";

import ProjectsSection from "./_components/projects";
import ContactSection from "./_components/contact";
import AboutSection from "./_components/about";
import HeroSection from "./_components/hero";

export const metadata: Metadata = {
   title: "Home",
};

export default function Home() {
   return (
      <main>
         <HeroSection />
         <ProjectsSection />
         <AboutSection />
         <ContactSection />
      </main>
   );
}
