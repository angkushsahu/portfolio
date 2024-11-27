import { MoveRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components";

function CustomButton() {
   return (
      <Button variant="default" className="size-20 rounded-full">
         <MoveRight className="size-10" />
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
