"use server";

import type { ContactType } from "./form.validation";

export default async function contactAction(values: ContactType) {
   try {
      console.log(values);

      if (!process.env.MAIL_URL) throw new Error("Please specify MAIL_URL environment variable");

      const response = await fetch(process.env.MAIL_URL, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(values),
      });

      return response.ok;
   } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message);
      throw new Error("An error occurred while sending e-mail");
   }
}
