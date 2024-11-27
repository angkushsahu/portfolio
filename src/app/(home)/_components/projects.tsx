import { LinkButton, ProjectCard } from "@/components";
import { projectsUrl } from "@/constants";
import { projects } from "@/lib";

export default function ProjectsSection() {
   return (
      <section className="center-layout grid justify-center gap-x-6 gap-y-16 py-32 pt-16 md:pt-32 lg:grid-cols-2">
         <div>
            <h1>My Recent Work</h1>
         </div>
         {projects.slice(0, 2).map((project) => (
            <ProjectCard
               key={project.title}
               href={project.url}
               image={project.coverImg}
               projectTitle={project.title}
               projectType={project.type}
            />
         ))}
         <div className="place-self-center text-center">
            <h2 className="mb-10 text-3xl leading-tight text-muted-foreground sm:mb-16 xl:text-5xl">See More Projects</h2>
            <LinkButton href={projectsUrl} ariaLabel="See more projects" />
         </div>
      </section>
   );
}
