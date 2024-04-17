import { Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components";
import { homeUrl } from "@/constants";

export default function NotFoundPage() {
   return (
      <main className="center-layout flex min-h-page flex-col items-center justify-center">
         <h1 className="mb-8 text-center font-recoleta">Page does not exist</h1>
         <Link href={homeUrl} replace>
            <Button type="button" className="font-semibold">
               <Home className="mr-2 size-5" /> Back to Home
            </Button>
         </Link>
      </main>
   );
}
