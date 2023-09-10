"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import * as routes from "@/constants/routes";

export default function Header() {
   const [toggleNavigation, setToggleNavigation] = useState(false);
   const pathname = usePathname();

   const links = [
      { title: "Home", path: routes.homeUrl },
      { title: "About", path: routes.aboutUrl },
      // { title: "Experience", path: routes.experienceUrl },
      { title: "Projects", path: routes.projectsUrl },
      { title: "Contact", path: routes.contactUrl },
   ];

   return (
      <>
         <header className={styles.header} id="header">
            <div className={styles.logo}>
               <Link href={routes.homeUrl} title="Go to home page">
                  <span>&lt;AS &#47;&gt;</span>
               </Link>
            </div>
            <nav className={styles.navbar}>
               {links.map(({ path, title }) => (
                  <Link
                     key={title}
                     href={path}
                     title={`Go to ${title} page`}
                     className={pathname === path ? styles.active_link : ""}
                  >
                     {title}
                  </Link>
               ))}
            </nav>
            <RxHamburgerMenu className={styles.hamburger} onClick={() => setToggleNavigation(true)} />
         </header>
         <nav className={`${styles.mobile_nav} ${toggleNavigation ? styles.show : ""}`}>
            <IoMdClose className={styles.cancel} onClick={() => setToggleNavigation(false)} />
            {links.map(({ path, title }) => (
               <Link
                  key={title}
                  href={path}
                  title={`Go to ${title} page`}
                  className={pathname === path ? styles.active_link : ""}
               >
                  {title}
               </Link>
            ))}
         </nav>
      </>
   );
}
