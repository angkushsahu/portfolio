import { Tooltip } from "@/components";
import { languages } from "./data";

export default function Skills() {
   return (
      <section className="py-16 pt-8 sm:pt-16">
         <h1>Skills</h1>
         <div className="mt-8 flex flex-wrap items-center gap-8 sm:mt-12">
            {languages.map(({ Icon, tooltip }, idx) => (
               <Tooltip key={`Icon ${idx + 1}`} tooltip={tooltip}>
                  <Icon className="size-16 text-muted-foreground group-hover:text-white sm:size-20" />
               </Tooltip>
            ))}
         </div>
      </section>
   );
}
