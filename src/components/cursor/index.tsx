"use client";

import { type MouseEvent as ReactMouseEvent, type PropsWithChildren, useRef } from "react";

export function Cursor({ children }: PropsWithChildren) {
   const cursorRef = useRef<HTMLDivElement>(null);

   function onCursorFollow(event: ReactMouseEvent<HTMLBodyElement, MouseEvent>) {
      setTimeout(function () {
         if (!cursorRef.current) return;
         cursorRef.current.style.top = `${event.clientY}px`;
         cursorRef.current.style.left = `${event.clientX}px`;
      }, 100);
   }

   return (
      <body className="min-h-screen antialiased" onMouseMove={onCursorFollow}>
         {children}
         <div
            ref={cursorRef}
            className="pointer-events-none fixed left-0 top-0 z-[1] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-neutral-200 mix-blend-exclusion transition-transform"
         >
            <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-black">
               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200"></div>
            </div>
         </div>
      </body>
   );
}