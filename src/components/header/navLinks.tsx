"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navlinks } from "./links";
import { cn } from "@/lib";

export default function NavLinks() {
   const pathname = usePathname();

   return (
      <nav className="hidden items-center gap-x-6 font-gordita md:flex">
         {navlinks.map(({ href, title }) => (
            <Link
               href={href}
               key={title}
               className={cn(
                  pathname === href ? "text-white hover:text-white" : "text-muted-foreground/80 hover:text-neutral-400"
               )}
            >
               {title}
            </Link>
         ))}
         <Link
            href="https://drive.google.com/file/d/10sPB1KvlbEG0QWgZqcdCgODKqZj5J7WV/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-4 py-1.5 text-black"
         >
            Resume
         </Link>
      </nav>
   );
}
