import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { educationData } from "@/utils";
import avatar from "@/assets/avatar.png";
import { BaseLayout } from "@/components";
import { contactUrl } from "@/constants/routes";

export const metadata: Metadata = {
   title: "About - Angkush Sahu",
};

export default function About() {
   return (
      <BaseLayout>
         <main className={styles.about}>
            {/* about section ----- start */}
            <div className={styles.about_me_section}>
               <h1>About Me</h1>
               <div>
                  <div className={styles.about_text_section}>
                     <p>
                        Hey there, this is Angkush Sahu. I am a full-stack developer and use MERN stack technologies to code
                        high-performant and smooth websites. I am also proficient in DSA and attend regular coding competitions.
                     </p>
                     <p>Apart from coding, I like to watch anime.</p>
                     <p>Currently, I am looking for internship opportunities.</p>
                     <p>
                        Feel free to{" "}
                        <Link href={contactUrl} title="Contact me from here" className={styles.link}>
                           contact
                        </Link>{" "}
                        me if you have any idea in your mind. I would love to here from you 😄.
                     </p>
                  </div>
                  <div className={styles.avatar_container}>
                     <Image
                        src={avatar}
                        alt="Hi there, I am Angkush"
                        title="Hi there, I am Angkush"
                        loading="lazy"
                        placeholder="blur"
                     />
                  </div>
               </div>
            </div>
            {/* about section ----- end */}
            {/* education section ----- start */}
            <div className={styles.education}>
               <h2>Education</h2>
               <ul className={styles.education_details}>
                  {educationData.map((data) => (
                     <li key={data.institute} className={styles.education_section}>
                        <p>{data.institute}</p>
                        <p>{data.period}</p>
                     </li>
                  ))}
               </ul>
            </div>
            {/* education section ----- end */}
         </main>
      </BaseLayout>
   );
}
