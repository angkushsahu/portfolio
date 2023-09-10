"use client";

import { useEffect, useState } from "react";

export default function useSessionStorage(key: string, fallbackValue: boolean) {
   const [splash, setSplash] = useState(fallbackValue);

   useEffect(
      function () {
         const stored = sessionStorage.getItem(key);
         setSplash(stored ? false : true);
      },
      [fallbackValue, key]
   );

   const timeout = setTimeout(function () {
      if (!splash) {
         clearTimeout(timeout);
         return;
      }
      setSplash(false);
      sessionStorage.setItem(key, "true");
   }, 3500);

   useEffect(
      function () {
         sessionStorage.setItem(key, JSON.stringify(true));
      },
      [key, splash]
   );

   return { splash, setSplash } as const;
}
