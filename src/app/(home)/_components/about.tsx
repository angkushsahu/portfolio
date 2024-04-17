import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import quoteImg from "@/assets/about_quote.svg";
import workingImg from "@/assets/working.webp";
import { aboutUrl } from "@/constants";
import { Button } from "@/components";

export default function AboutSection() {
   return (
      <section className="center-layout flex flex-col items-center justify-between gap-x-20 gap-y-20 py-10 pt-0 sm:pt-10 lg:flex-row">
         <div>
            <Image src={workingImg} alt="Working Image" placeholder="blur" loading="lazy" width="400" height="400" />
         </div>
         <div className="-order-1 max-w-xl lg:order-none">
            <h1>Hello, This is Angkush.</h1>
            <div className="relative my-12">
               <Image
                  src={quoteImg}
                  alt="Working Image"
                  width="50"
                  height="50"
                  className="absolute size-6 sm:size-8 md:size-10 xl:size-[3.2rem]"
               />
               <p className="pl-10 font-gordita-light text-2xl font-light leading-normal text-muted-foreground sm:pl-16 lg:pl-24 xl:max-w-[20ch] xl:text-4xl xl:leading-normal">
                  A dedicated full-stack developer with a talent for optimization.
               </p>
            </div>
            <div className="pl-10 sm:pl-16 lg:pl-24">
               <Link href={aboutUrl}>
                  <Button type="button" className="font-semibold">
                     Know more <MoveRight strokeWidth={2} className="ml-4 size-4" />
                  </Button>
               </Link>
            </div>
         </div>
      </section>
   );
}
