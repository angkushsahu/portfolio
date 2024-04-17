import Image from "next/image";

import contactBg from "@/assets/contact_bg.webp";
import { LinkButton } from "@/components";
import { contactUrl } from "@/constants";

export default function ContactSection() {
   return (
      <section
         id="contact"
         className="relative pb-40 pt-16 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-contact-gradient md:pt-32"
      >
         <Image
            src={contactBg}
            alt="Contact Background"
            loading="lazy"
            placeholder="empty"
            className="absolute left-0 top-0 -z-20 size-full"
         />
         <div className="center-layout flex flex-col items-center justify-center">
            <h2 className="text-center text-2xl text-muted-foreground xl:text-4xl">Project,&nbsp; Job or any other enquiry</h2>
            <h1 className="mb-10 mt-8 text-center sm:mb-16">Contact Me</h1>
            <LinkButton href={contactUrl} />
         </div>
      </section>
   );
}
