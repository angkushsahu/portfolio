import Link from "next/link";

import { contactUrl } from "@/constants";

export default function AboutSection() {
   return (
      <section className="py-16 pt-8 sm:pt-16">
         <h1>About Me</h1>
         <div className="mt-8 space-y-8 font-gordita-light text-xl leading-relaxed tracking-wider sm:mt-12 md:text-2xl">
            <p>
               Angkush Sahu is a full-stack developer and has garnered years of experience in constructing web applications.
               Proficient in a range of programming languages, he exhibits a robust comprehension of front-end, back-end and
               database technologies.
            </p>
            <p>
               Known for a proven ability to collaborate with cross-functional teams, he consistently delivers high-quality and
               scalable web applications. With strong analytical and problem-solving skills, he quickly adapts to new technologies
               and expand his expertise.
            </p>
            <p>
               Feel free to{" "}
               <Link className="font-gordita text-white underline underline-offset-4" href={contactUrl} aria-label="Contact me">
                  reach out
               </Link>
               .
            </p>
         </div>
      </section>
   );
}
