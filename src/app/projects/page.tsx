import type { Metadata } from "next";
import Link from "next/link";

import { Button, ProjectCard } from "@/components";
import { projects } from "@/lib";

export const metadata: Metadata = {
   title: "Projects",
};

export default function ProjectsPage() {
   return (
      <main className="center-layout py-6 pb-16 md:py-10">
         <h1>Recent Projects</h1>
         <section className="my-12 grid justify-center gap-x-16 gap-y-16 lg:grid-cols-2">
            {projects.map((project) => (
               <ProjectCard
                  key={project.title}
                  href={project.url}
                  image={project.coverImg}
                  projectTitle={project.title}
                  projectType={project.type}
               />
            ))}
         </section>
         <Link href="https://github.com/angkushsahu" target="_blank" rel="noopener noreferrer">
            <Button type="button" className="ml-auto block font-semibold">
               Visit my Github Account
            </Button>
         </Link>
      </main>
   );
}
