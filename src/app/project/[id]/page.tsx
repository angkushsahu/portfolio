import { FiExternalLink } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { dataUrl, getProjectById } from "@/lib";
import { Button } from "@/components";

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
   let project = getProjectById(params.id);
   return { title: project?.title ? `${project.title} | Project` : "Project" };
}

export default function Project({ params }: { params: { id: string } }) {
   let project = getProjectById(params.id);
   if (!project) notFound();

   return (
      <main className="center-layout py-6 pb-12 md:py-10">
         <h1 className="mb-6">{project.title}</h1>
         <p className="font-gordita-light text-xl leading-relaxed tracking-wider md:text-2xl">{project.description}</p>
         <div className="mt-10">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
               <Button variant="secondary">
                  Visit <FiExternalLink className="ml-4 size-4" />
               </Button>
            </Link>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
               <Button variant="outline">
                  Github <VscGithubAlt className="ml-4 size-4" />
               </Button>
            </Link>
         </div>
         <section className="flex flex-col gap-x-16 gap-y-10 pb-6 pt-16 lg:flex-row">
            <div>
               <Image
                  src={project.coverImg}
                  alt={project.title}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={dataUrl({ height: 532, width: 1024 })}
                  height={532}
                  width={1024}
               />
               <div className="mt-10 flex flex-wrap gap-4">
                  {project.technologies.map((tech) => (
                     <span
                        key={`${project?.title} - ${tech}`}
                        className="rounded-full border-[1px] border-box-border bg-box-color px-4 py-1"
                     >
                        {tech}
                     </span>
                  ))}
               </div>
            </div>
            <div className="lg:max-w-lg xl:max-w-2xl">
               <h2 className="mb-6 text-4xl tracking-wide text-muted-foreground sm:mb-8">Features</h2>
               <ul className="ml-4 space-y-4">
                  {project.features.map((feature, idx) => (
                     <li
                        key={`${project?.title} Feature - ${idx + 1}`}
                        className="list-disc font-gordita-light text-lg leading-relaxed tracking-wider"
                     >
                        {feature}
                     </li>
                  ))}
               </ul>
            </div>
         </section>
      </main>
   );
}
