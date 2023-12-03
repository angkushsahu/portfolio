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
                  <div className={styles.avatar_container}>
                     <Image
                        src={avatar}
                        alt="Hi there, I am Angkush"
                        title="Hi there, I am Angkush"
                        loading="lazy"
                        placeholder="blur"
                     />
                  </div>
                  <div className={styles.about_text_section}>
                     <p>
                        Angkush Sahu is a wizard among the full-stack developers and has garnered years of experience in
                        constructing web applications. Proficient in a range of programming languages, including{" "}
                        <span className={styles.highlight}>JavaScript, Typescript, and C++</span>, he exhibits a robust
                        comprehension of front-end technologies such as{" "}
                        <span className={styles.highlight}>HTML, CSS, ReactJS, and NextJS</span>, alongside back-end technologies
                        like <span className={styles.highlight}>NodeJS, NestJS, Express, TRPC and Mongoose</span>. He demonstrates
                        adeptness in working with databases, including{" "}
                        <span className={styles.highlight}>MongoDB and Firebase</span>.
                     </p>
                     <p>
                        Known for a proven ability to collaborate with cross-functional teams, he consistently delivers{" "}
                        <span className={styles.highlight}>high-quality and scalable web applications</span>. Well-versed in Agile
                        and Scrum methodologies, he actively seeks opportunities to enhance the development process. With{" "}
                        <span className={styles.highlight}>strong analytical and problem-solving skills</span>, he quickly adapts
                        to new technologies and programming languages. A rapid learner, he continually seeks to broaden his
                        skillset and eagerly embraces complex problem-solving challenges. Possessing a strong work ethic, he is
                        dedicated to deliver quality work within{" "}
                        <span className={styles.highlight}>established timelines and budget constraints</span>.
                     </p>
                     <p>
                        Fueled by a passion for crafting{" "}
                        <span className={styles.highlight}>aesthetically pleasing and user-friendly web applications</span>, he is
                        driven to learn new technologies and expand his expertise. Excited about contributing to a dynamic and
                        innovative company, he aspires to apply his knowledge while continuing to evolve as a developer.{" "}
                        <span className={styles.highlight}>A team player</span>, he thrives in collaborative environments but is
                        equally comfortable working independently and managing his time effectively.
                     </p>
                     <p className={styles.contact_para}>
                        Feel free to{" "}
                        <Link href={contactUrl} title="Contact me from here" className={styles.link}>
                           contact
                        </Link>{" "}
                        him if you have any idea in your mind. He would love to hear from you 😄.
                     </p>
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
                        <p className={styles.education_course}>{data.course}</p>
                        <p className={styles.education_institute}>{data.institute}</p>
                        <p className={styles.education_period}>{data.period}</p>
                     </li>
                  ))}
               </ul>
            </div>
            {/* education section ----- end */}
         </main>
      </BaseLayout>
   );
}
