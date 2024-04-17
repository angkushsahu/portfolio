import type { PropsWithChildren } from "react";
import { cn } from "@/lib";

export function Tooltip({ children, tooltip, className }: PropsWithChildren & { tooltip: string; className?: string }) {
   return (
      <div className={cn("group relative isolate inline-block", className)}>
         {children}
         <span className="invisible absolute left-1/2 top-0 min-w-max -translate-x-1/2 -translate-y-5 scale-95 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground opacity-0 shadow-md transition duration-300 group-hover:visible group-hover:-translate-y-10 group-hover:scale-100 group-hover:opacity-100">
            {tooltip}
         </span>
      </div>
   );
}
