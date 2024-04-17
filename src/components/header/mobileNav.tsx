"use client";

import { FiExternalLink } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Grip } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { socialLinks } from "@/constants";
import { navlinks } from "./links";
import { Logo } from "../logo";
import { cn } from "@/lib";

function IconLink({ href, Icon }: { href: string; Icon: IconType }) {
   return (
      <Link
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className={cn(
            buttonVariants({
               className: "h-12 w-12 rounded-full bg-transparent p-3",
               variant: "outline",
            })
         )}
      >
         <Icon className="h-5 w-5 text-muted-foreground" />
      </Link>
   );
}

export default function MobileNav() {
   const [open, setOpen] = useState(false);

   return (
      <div className="flex items-center gap-x-4 md:hidden">
         <IconLink Icon={FiExternalLink} href="https://drive.google.com/file/d/10sPB1KvlbEG0QWgZqcdCgODKqZj5J7WV/view" />
         <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
               <Button type="button" variant="outline" size="icon" className="rounded-full">
                  <Grip className="h-5 w-5" />
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
                        <Link href={href} key={title} className="flex items-center gap-3 text-lg" onClick={() => setOpen(false)}>
                           <Icon strokeWidth={1} className="h-6 w-6 text-muted-foreground" />
                           {title}
                        </Link>
                     ))}
                  </nav>
                  <div className="mt-12 flex items-center justify-center gap-x-6">
                     {socialLinks.map((link) => (
                        <IconLink {...link} key={link.href} />
                     ))}
                  </div>
               </section>
            </SheetContent>
         </Sheet>
      </div>
   );
}
