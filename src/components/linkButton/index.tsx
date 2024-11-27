import { MoveRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components";

interface LinkButtonProps {
   href?: string;
   ariaLabel: string;
}

type CustomButtonProps = Pick<LinkButtonProps, "ariaLabel">;

function CustomButton({ ariaLabel }: CustomButtonProps) {
   return (
      <Button variant="default" className="size-20 rounded-full" aria-label={ariaLabel}>
         <MoveRight className="size-10" />
      </Button>
   );
}

export function LinkButton({ href, ariaLabel }: LinkButtonProps) {
   return href ? (
      <Link href={href} aria-label={ariaLabel}>
         <CustomButton ariaLabel={ariaLabel} />
      </Link>
   ) : (
      <CustomButton ariaLabel={ariaLabel} />
   );
}
