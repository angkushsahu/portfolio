import { MoveRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function CustomButton() {
   return (
      <Button type="button" variant="default" className="h-20 w-20 rounded-full">
         <MoveRight className="h-10 w-10" />
      </Button>
   );
}

export function LinkButton({ href }: { href?: string }) {
   return href ? (
      <Link href={href}>
         <CustomButton />
      </Link>
   ) : (
      <CustomButton />
   );
}
