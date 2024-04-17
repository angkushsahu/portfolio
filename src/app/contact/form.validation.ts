import { z } from "zod";

export const contactSchema = z.object({
   name: z.string().min(1, { message: "Please enter your name" }),
   email: z.string().min(1, { message: "Please enter your name" }).email({ message: "Please enter a valid e-mail" }),
   subject: z.string(),
   message: z.string().min(1, { message: "Please leave a message for me" }),
});

export type ContactType = z.infer<typeof contactSchema>;
