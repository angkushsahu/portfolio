import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import imageNotFound from "@/assets/no_image.svg";
import type { IProjectData } from "@/utils/projectData";

export interface ProjectDataProps {
   project: IProjectData;
}

export default function ProjectCard({ project }: ProjectDataProps) {
   return (
      <Link
         href={project.goLive}
         rel="noopener noreferrer"
         target="_blank"
         aria-label={`Visit ${project.title}`}
         title={`Visit ${project.title}`}
         key={project.title}
      >
         <article className={styles.project_card}>
            <div className={styles.image_card}>
               <Image
                  src={project.image ? project.image : imageNotFound}
                  alt={`Go to ${project.title}`}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={project.blurredUrl}
                  fill
               />
            </div>
            <div className={styles.data_card}>
               <p>{project.title}</p>
               <Link
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Visit github repository"
                  title="Visit github repository"
                  key={project.title}
               >
                  <VscGithub className={styles.github_icon} title="Visit github repository" />
               </Link>
            </div>
         </article>
      </Link>
   );
}
