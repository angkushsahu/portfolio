import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { dataUrl } from "@/lib";

export interface ProjectCardProps {
   href: string;
   image: string;
   projectTitle: string;
   projectType: string;
}

export function ProjectCard({ href, image, projectType, projectTitle }: ProjectCardProps) {
   return (
      <Link
         href={href}
         aria-label={`Know more about ${projectTitle} project`}
         className="group relative overflow-hidden transition-transform ease-project-hover hover:scale-[0.99]"
      >
         <article className="flex items-center justify-center bg-gradient-to-br from-neutral-600 to-neutral-800 p-4 pb-24">
            <Image
               src={image}
               alt={`Project`}
               loading="lazy"
               placeholder="blur"
               blurDataURL={dataUrl({ height: 297, width: 572 })}
               className="shadow-project-img"
               height={297}
               width={572}
            />
         </article>
         <div className="absolute left-0 top-0 z-10 flex size-full -translate-x-4 flex-col items-center justify-center bg-black/60 text-center opacity-0 transition duration-500 ease-project-hover group-hover:translate-x-0 group-hover:opacity-100">
            <span className="flex items-center gap-x-4 font-gordita text-xl">
               Know More <MoveRight />
            </span>
         </div>
         <div className="absolute bottom-0 w-full bg-project-gradient p-4">
            <p className="font-recoleta text-xl font-medium tracking-wide sm:text-2xl">{projectTitle}</p>
            <p className="font-gordita text-muted-foreground sm:text-lg">{projectType}</p>
         </div>
      </Link>
   );
}
