import { PropsWithChildren } from "react";
import { Header } from "..";

export default function BaseLayout({ children }: PropsWithChildren) {
   return (
      <>
         <Header />
         {children}
      </>
   );
}
