import Link from "next/link";

import ScrollTransition from "./scrollTransition";
import { homeUrl } from "@/constants";
import MobileNav from "./mobileNav";
import NavLinks from "./navLinks";
import { Logo } from "../logo";

export function Header() {
   return (
      <ScrollTransition>
         <div className="center-layout flex items-center justify-between">
            <Link href={homeUrl} aria-label="Go to home page">
               <Logo className="size-10" />
            </Link>
            <NavLinks />
            <MobileNav />
         </div>
      </ScrollTransition>
   );
}
