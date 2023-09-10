"use client";

import { PropsWithChildren } from "react";
import { useSessionStorage } from "@/hooks";
import Animation from "./animation";

export default function SplashScreen({ children }: PropsWithChildren) {
   const { splash } = useSessionStorage("splashScreen", true);

   return splash ? <Animation /> : <div className="child_root">{children}</div>;
}
