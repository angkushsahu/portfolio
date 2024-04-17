import type { HTMLAttributes } from "react";
import { cn } from "@/lib";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className }: LogoProps) {
   return (
      <div
         className={cn(
            "grid size-11 place-content-center rounded-full bg-white font-recoleta text-2xl font-black text-black",
            className
         )}
      >
         A
      </div>
   );
}
