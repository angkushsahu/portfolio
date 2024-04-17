import Image from "next/image";

import contactBg from "@/assets/contact_bg.webp";
import { Toaster } from "@/components";
import ContactForm from "./form";

export default function ContactPage() {
   return (
      <>
         <main className="relative before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:bg-contact-gradient">
            <Image
               src={contactBg}
               alt="Contact Background"
               loading="lazy"
               placeholder="empty"
               className="absolute left-0 top-0 -z-20 size-full"
            />
            <section className="center-layout flex flex-col items-center justify-center py-6 pb-12 md:py-10">
               <div className="w-full max-w-xl">
                  <h1 className="mb-6">Contact Me</h1>
                  <ContactForm />
               </div>
            </section>
         </main>
         <Toaster />
      </>
   );
}
