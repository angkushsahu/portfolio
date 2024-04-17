"use client";

import { useEffect, useRef, type PropsWithChildren } from "react";

export default function ScrollTransition({ children }: PropsWithChildren) {
   const headerRef = useRef<HTMLElement>(null);

   useEffect(() => {
      function scrollShadow() {
         if (!headerRef.current) return;
         else if (globalThis.scrollY > 50) headerRef.current.classList.add("header-scroll-effects");
         else headerRef.current.classList.remove("header-scroll-effects");
      }

      document.addEventListener("scroll", scrollShadow);
      return () => document.removeEventListener("scroll", scrollShadow);
   }, [globalThis?.scrollY]);

   return (
      <header ref={headerRef} className="sticky top-0 z-50 py-5">
         {children}
      </header>
   );
}
