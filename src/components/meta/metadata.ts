import type { Metadata } from "next";

export const page = {
   title: "Angkush Sahu",
   description:
      "Hey there, I am Angkush, a full-stack developer and programmer. I code websites which are performant and attractive. Here is my portfolio which contains information about my career so far and states what I like to do. Hope you like this website.",
};

export const webMeta: Metadata = {
   title: {
      default: page.title,
      template: `%s - ${page.title}`,
   },
   description: page.description,
   robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
   },
   keywords: "angkush, sahu, portfolio, website, web, developer, full, stack, engineer",
   // extra SEO optimisations
   creator: "Angkush Sahu",
   publisher: "Angkush Sahu",
   applicationName: page.title,
   generator: "Next.js and Vercel",
   referrer: "origin-when-cross-origin",
   metadataBase: new URL("https://angkushsahu.vercel.app"),
   authors: [{ name: "Angkush Sahu", url: "https://angkushsahu.vercel.app" }],
   verification: { google: process.env.GOOGLE_VERIFICATION },
   openGraph: {
      title: page.title,
      description: page.description,
      images: [
         {
            url: "/og_image.png",
            width: 192,
            height: 192,
         },
      ],
   },
};
