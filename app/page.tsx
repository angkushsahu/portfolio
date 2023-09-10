import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BaseLayout } from "@/components";
import githubIcon from "@/assets/github.svg";
import linkedInIcon from "@/assets/linkedin.svg";
import { contactUrl, projectsUrl } from "@/constants/routes";

export const metadata: Metadata = {
   title: "Home - Angkush Sahu",
};

export default function Home() {
   return (
      <BaseLayout>
         <main>
            <section className={styles.home}>
               <div>
                  <h1 className={styles.doc_heading}>
                     <span className={styles.subheading}>Hey, this is</span>
                     <span className={styles.heading}>Angkush Sahu</span>
                  </h1>
                  <h2 className={styles.thirdheading}>
                     A dedicated full-stack developer with a talent for optimization and aptitude for problem-solving.
                  </h2>
                  <div className={styles.links}>
                     <a
                        href="https://www.linkedin.com/in/angkush-sahu-0409311bb"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit my Linked-in account"
                        title="Visit my Linked-in account"
                     >
                        <Image src={linkedInIcon} alt="Link to my Linked-in Profile" />
                     </a>
                     <a
                        href="https://github.com/angkushsahu"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit my Github account"
                        title="Visit my Github account"
                     >
                        <Image src={githubIcon} alt="Link to my Github Profile" />
                     </a>
                  </div>
                  <div className={styles.button_section}>
                     <Link href={projectsUrl} title="Visit projects page">
                        <button type="button">Projects</button>
                     </Link>
                     <a
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
                     </a>
                     <Link href={contactUrl} title="Contact me">
                        <button type="button">Contact</button>
                     </Link>
                  </div>
               </div>
               <div>
                  <div className={styles.circle_container}>
                     <div className={styles.circle}></div>
                  </div>
               </div>
            </section>
         </main>
      </BaseLayout>
   );
}
