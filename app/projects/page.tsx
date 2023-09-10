import styles from "./styles.module.scss";
import { Metadata } from "next";
import { projectData } from "@/utils";
import ProjectCard from "./projectCard";
import { BaseLayout } from "@/components";

export const metadata: Metadata = {
   title: "Projects - Angkush Sahu",
};

export default function Projects() {
   return (
      <BaseLayout>
         <main className={styles.projects}>
            <h1>My Projects</h1>
            <div className={styles.project_wrapper}>
               {projectData.map((project) => (
                  <ProjectCard key={project.title} project={{ ...project }} />
               ))}
            </div>
         </main>
      </BaseLayout>
   );
}
