import "@/styles/index.scss";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Toast } from "@/components";

/* importing splash screen with dynamic import and ssr false, because ssr imports create errors while using browser apis not available in the server global object

In this case, I am using sessionStorage to see if I shall show the splash screen or not, which creates error in the terminal where I run the development server as it is importing the page with server side rendering option
*/

import dynamic from "next/dynamic";
const Splash = dynamic(() => import("@/components/splash"), { ssr: false });

export const metadata: Metadata = {
   title: "Angkush Sahu",
   description:
      "Hey there, I am Angkush, a dedicated penchant full-stack developer. This portfolio reflects my dedication to crafting seamless digital experiences. Let's start an amazing journey of creating exciting and user friendly applications today.",
   viewport: "width=device-width, initial-scale=1.0",
   themeColor: "#000000",
   icons: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      { rel: "shortcut icon", url: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
   ],
   robots: "index, follow",
   keywords: "angkush, sahu, portfolio, website, web, developer, full, stack",
   manifest: "site.webmanifest",
};

export default function RootLayout({ children }: PropsWithChildren) {
   return (
      <html lang="en">
         <meta name="google-site-verification" content="vPaQc-oOuZAlm6kTARCjuHjnap45EALorP_ELfBVk-Y" />
         <body>
            <main className="parent_root">
               <div className="shape_1"></div>
               <div className="shape_2"></div>
               <Splash>{children}</Splash>
               <Toast />
            </main>
         </body>
      </html>
   );
}
