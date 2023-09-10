import styles from "./notFound.module.scss";
import Link from "next/link";
import { Metadata } from "next";
import { homeUrl } from "@/constants/routes";

export const metadata: Metadata = {
   title: "Error - Page not found",
};

export default function Notfound() {
   return (
      <section className={styles.error}>
         <h1>404</h1>
         <h2>Looks like you are lost&#44; let's get you back on track</h2>
         <Link href={homeUrl} replace title="Back to home">
            <button type="button" className="cta_button">
               Back to home
            </button>
         </Link>
      </section>
   );
}
