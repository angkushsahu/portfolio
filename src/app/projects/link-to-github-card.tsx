import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function LinkToGithubCard() {
   return (
      <Link
         href="https://github.com/angkushsahu"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Visit my github profile for more projects"
         className="group flex h-64 flex-col items-center justify-center gap-y-3 border border-box-border bg-box-color p-6 hover:border-gray-600 lg:h-auto lg:gap-y-6"
      >
         <span className="font-recoleta text-xl font-medium tracking-wide transition-transform duration-500 group-hover:scale-105 sm:text-2xl">
            Visit my Github Account
         </span>
         <MoveRight
            strokeWidth={1}
            className="size-8 -translate-x-24 duration-500 group-hover:translate-x-0 group-hover:text-center sm:size-10 sm:-translate-x-28"
         />
      </Link>
   );
}
