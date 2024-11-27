"use client";

import { RotateCcwIcon } from "lucide-react";
import { Button } from "@/components";

export interface ErrorProps {
   error: Error & { digest?: string };
   reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
   return (
      <main className="flex min-h-page flex-col items-center justify-center p-5 pt-0">
         <h1 className="mt-5 text-center leading-[3.75rem]">An error Occurred</h1>
         <h2 className="mb-8 mt-6 text-center text-2xl leading-tight tracking-widest text-muted-foreground xl:text-4xl">
            {error.name} - {error.message}
         </h2>
         <Button onClick={reset} className="w-40 font-semibold">
            <RotateCcwIcon className="mr-2 size-4" /> Try again
         </Button>
      </main>
   );
}
