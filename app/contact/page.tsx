import styles from "./styles.module.scss";
import { Metadata } from "next";
import ContactForm from "./contactForm";
import { BaseLayout } from "@/components";

export const metadata: Metadata = {
   title: "Contact - Angkush Sahu",
};

export default function Contact() {
   return (
      <BaseLayout>
         <main className={styles.contact}>
            <h1>Contact Me</h1>
            <div>
               <ContactForm />
               <section className={styles.side_animation}>
                  <div className={styles.circle_container}>
                     <div className={styles.circle}></div>
                  </div>
               </section>
            </div>
         </main>
      </BaseLayout>
   );
}
