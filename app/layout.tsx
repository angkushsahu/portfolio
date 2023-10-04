import "@/styles/index.scss";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Toast } from "@/components";

/* importing splash screen with dynamic import and ssr false, because ssr imports create errors while using browser apis not available in the server global object

In this case, I am using sessionStorage to see if I shall show the splash screen or not, which creates error in the terminal where I run the development server as it is importing the page with server side rendering option
*/

import dynamic from "next/dynamic";
const Splash = dynamic(() => import("@/components/splash"), { ssr: false });

const pageDescription =
   "Hey there, I am Angkush, a dedicated penchant full-stack developer. This portfolio reflects my dedication to crafting seamless digital experiences. Let's start an amazing journey of creating exciting and user friendly applications today.";

export const metadata: Metadata = {
   title: "Angkush Sahu",
   description: pageDescription,
   viewport: "width=device-width, initial-scale=1.0",
   themeColor: "#000000",
   robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
   },
   keywords: "angkush, sahu, portfolio, website, web, developer, full, stack, engineer",
   manifest: "/site.webmanifest",
   // extra SEO optimisations
   colorScheme: "dark",
   creator: "Angkush Sahu",
   publisher: "Angkush Sahu",
   applicationName: "Angkush Sahu",
   generator: "Next.js and Vercel",
   referrer: "origin-when-cross-origin",
   metadataBase: new URL("https://angkushsahu.vercel.app"),
   authors: [{ name: "Angkush Sahu", url: "https://angkushsahu.vercel.app" }],
   openGraph: {
      title: "Angkush Sahu",
      description: pageDescription,
      images: [
         {
            url: "/og_image.png",
            width: 192,
            height: 192,
         },
      ],
   },
   verification: {
      google: "T_WCesBXsERla-yTedqacE3O1JiLe1oZSqMkARbcZ50",
   },
};

export default function RootLayout({ children }: PropsWithChildren) {
   return (
      <html lang="en">
         <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
