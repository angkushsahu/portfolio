import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export interface HereLogoProps extends HTMLAttributes<HTMLElement> {}

export function HeroLogo({ className }: HereLogoProps) {
   const circledText = "–DEVELOPER".toUpperCase();

   return (
      <section
         className={cn(
            "pointer-events-none flex size-[17rem] select-none items-center justify-center rounded-full border-2 border-muted-foreground",
            className
         )}
      >
         <div className="relative flex size-60 items-center justify-center rounded-full">
            <div className="absolute flex size-32 items-center justify-center rounded-full font-recoleta text-8xl">A</div>
            <div className="absolute size-full animate-logo">
               <p>
                  {circledText.split("").map((character, idx) => (
                     <span
                        style={{ transform: `rotate(${idx * 36}deg)` }}
                        className="absolute left-1/2 origin-[0_120px] text-xl"
                        key={`character-${idx + 1}`}
                     >
                        {character}
                     </span>
                  ))}
               </p>
            </div>
         </div>
      </section>
   );
}
