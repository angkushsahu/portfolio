import styles from "./_home-styles/home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BaseLayout } from "@/components";
import githubIcon from "@/assets/github.svg";
import linkedInIcon from "@/assets/linkedin.svg";
import showwCaseIcon from "@/assets/showwcase.svg";
import { contactUrl, projectsUrl } from "@/constants/routes";

export const metadata: Metadata = {
   title: "Home - Angkush Sahu",
};

export default function Home() {
   return (
      <BaseLayout>
         <main>
            <section className={styles.home}>
               {/* section - 1 ----- start */}
               <div>
                  <h1 className={styles.doc_heading}>
                     <span className={styles.subheading}>Hey, this is</span>
                     <span className={styles.heading}>Angkush Sahu</span>
                  </h1>
                  <h2 className={styles.thirdheading}>
                     A dedicated full-stack developer with a talent for optimization and aptitude for problem-solving.
                  </h2>
                  {/* social links section ----- start */}
                  <div className={styles.links}>
                     <Link
                        href="https://www.linkedin.com/in/angkush-sahu-0409311bb"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit my Linked-in account"
                        title="Visit my Linked-in account"
                     >
                        <Image src={linkedInIcon} alt="Link to my Linked-in Profile" />
                     </Link>
                     <Link
                        href="https://github.com/angkushsahu"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit my Github account"
                        title="Visit my Github account"
                     >
                        <Image src={githubIcon} alt="Link to my Github Profile" />
                     </Link>
                     <Link
                        href="https://www.showwcase.com/angkushsahu"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit my Showwcase account"
                        title="Visit my Showwcase account"
                     >
                        <Image src={showwCaseIcon} alt="Link to my Showwcase Profile" />
                     </Link>
                  </div>
                  {/* social links section ----- end */}
                  {/* buttons section ----- start */}
                  <div className={styles.button_section}>
                     <Link href={projectsUrl} title="Visit projects page">
                        <button type="button">Projects</button>
                     </Link>
                     <Link
                        href="https://drive.google.com/file/d/10sPB1KvlbEG0QWgZqcdCgODKqZj5J7WV/view"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Download My Resume"
                        title="Download My Resume"
                        className={styles.resume_button}
                     >
                        <button className="cta_button" type="button">
                           Resume
                        </button>
                     </Link>
                     <Link href={contactUrl} title="Contact me">
                        <button type="button">Contact</button>
                     </Link>
                  </div>
                  {/* buttons section ----- end */}
               </div>
               {/* section - 1 ----- end */}
               {/* section - 2 ----- start */}
               <div>
                  {/* animated ball ----- start */}
                  <div className={styles.circle_container}>
                     <div className={styles.circle}></div>
                  </div>
                  {/* animated ball ----- end */}
               </div>
               {/* section - 2 ----- end */}
            </section>
         </main>
      </BaseLayout>
   );
}
