"use client";

import { FiExternalLink } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Grip } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Button, buttonVariants, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components";
import { socialLinks } from "@/constants";
import { navlinks } from "./links";
import { Logo } from "../logo";
import { cn } from "@/lib";

interface IconLinkProps {
   href: string;
   Icon: IconType;
   ariaLabel: string;
}

function IconLink({ Icon, ariaLabel, href }: IconLinkProps) {
   return (
      <Link
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         aria-label={ariaLabel}
         className={cn(
            buttonVariants({
               className: "size-12 rounded-full bg-transparent p-3",
               variant: "outline",
            })
         )}
      >
         <Icon className="size-5 text-muted-foreground" />
      </Link>
   );
}

export default function MobileNav() {
   const [open, setOpen] = useState(false);

   return (
      <div className="flex items-center gap-x-4 md:hidden">
         <IconLink
            Icon={FiExternalLink}
            href="https://drive.google.com/file/d/10sPB1KvlbEG0QWgZqcdCgODKqZj5J7WV/view"
            ariaLabel="Link to my resume"
         />
         <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
               <Button variant="outline" size="icon" className="rounded-full" aria-label="Hamburger menu">
                  <Grip className="size-5" />
               </Button>
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <SheetTitle>
                     <Logo />
                  </SheetTitle>
               </SheetHeader>
               <section className="mt-8">
                  <nav className="flex flex-col gap-5">
                     {navlinks.map(({ Icon, href, title }) => (
                        <Link
                           href={href}
                           key={title}
                           aria-label={`Go to ${title} page`}
                           className="flex items-center gap-3 text-lg"
                           onClick={() => setOpen(false)}
                        >
                           <Icon strokeWidth={1} className="size-6 text-muted-foreground" />
                           {title}
                        </Link>
                     ))}
                  </nav>
                  <div className="mt-12 flex items-center justify-center gap-x-6">
                     {socialLinks.map((link) => (
                        <IconLink {...link} key={link.href} ariaLabel={`Link to ${link.title}`} />
                     ))}
                  </div>
               </section>
            </SheetContent>
         </Sheet>
      </div>
   );
}
