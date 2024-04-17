import "@/styles/globals.css";

import type { PropsWithChildren } from "react";
import localFont from "next/font/local";

import { Cursor, Header, viewportMeta, webMeta } from "@/components";

const recoletaLight = localFont({
   src: "./recoleta/Recoleta-Light.woff2",
   weight: "300",
   style: "normal",
   display: "swap",
   variable: "--font-recoleta-light",
});
const recoletaRegular = localFont({
   src: "./recoleta/Recoleta-Regular.woff2",
   weight: "400",
   style: "normal",
   display: "swap",
   variable: "--font-recoleta",
});

const gorditaLight = localFont({
   src: "./gordita/Gordita-Light.woff2",
   weight: "300",
   style: "normal",
   display: "swap",
   variable: "--font-gordita-light",
});
const gorditaRegular = localFont({
   src: "./gordita/Gordita-Regular.woff2",
   weight: "400",
   style: "normal",
   display: "swap",
   variable: "--font-gordita",
});
const gorditaItalic = localFont({
   src: "./gordita/Gordita-Italic.woff2",
   weight: "400",
   style: "italic",
   display: "swap",
   variable: "--font-gordita-italic",
});
const gorditaMedium = localFont({
   src: "./gordita/Gordita-Medium.woff2",
   weight: "500",
   style: "normal",
   display: "swap",
   variable: "--font-gordita-medium",
});

export const viewport = viewportMeta;
export const metadata = webMeta;

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
   const fonts = `${recoletaLight.variable} ${recoletaRegular.variable} ${gorditaItalic.variable} ${gorditaLight.variable} ${gorditaMedium.variable} ${gorditaRegular.variable}`;

   return (
      <html lang="en" className={fonts}>
         <Cursor>
            <Header />
            {children}
         </Cursor>
      </html>
   );
}
