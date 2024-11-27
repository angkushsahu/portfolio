import Image from "next/image";

import { Separator } from "@/components";
import { experienceArr } from "./data";
import { dataUrl } from "@/lib";

export default async function Experience() {
   return (
      <section className="py-16 pt-0 sm:pt-16 md:pt-32">
         <h1>Experience</h1>
         <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-2">
            {experienceArr.map((experience) => (
               <article
                  key={experience.companyName}
                  className="flex flex-col flex-wrap justify-between gap-x-12 gap-y-6 border border-box-border bg-box-color p-6 hover:border-gray-600 xs:flex-row"
               >
                  <div>
                     <Image
                        src={experience.companyLogo}
                        alt={experience.companyName}
                        placeholder="blur"
                        loading="lazy"
                        blurDataURL={dataUrl({ height: 100, width: 100 })}
                        width={100}
                        height={100}
                        className="grayscale"
                     />
                  </div>
                  <div className="mt-3 flex-1 space-y-1 text-right">
                     <p className="font-recoleta text-2xl">{experience.role}</p>
                     <p className="font-recoleta text-2xl text-muted-foreground">{experience.companyName}</p>
                     <div className="py-2">
                        <Separator className="ml-auto w-40 bg-muted-foreground/30" />
                     </div>
                     <p className="text-muted-foreground">{experience.duration}</p>
                     <div className="flex items-center justify-end gap-x-4 text-muted-foreground">
                        <span>{experience.location}</span>
                        <Separator className="h-4 bg-muted-foreground/30" orientation="vertical" />
                        <span>{experience.jobType}</span>
                     </div>
                  </div>
               </article>
            ))}
         </div>
      </section>
   );
}
