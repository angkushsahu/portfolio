import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: "Angkush Sahu",
      short_name: "Angkush",
      description:
         "Hey there, I am Angkush, a full-stack developer and programmer. I code websites which are performant and attractive. Here is my portfolio which contains information about my career so far and states what I like to do. Hope you like this website.",
      start_url: "/",
      scope: "/",
      id: "/",
      display: "standalone",
      background_color: "#09090b",
      theme_color: "#fafafa",
      icons: [
         {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
         },
         {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
         },
         {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
         },
         {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
         },
      ],
   };
}
