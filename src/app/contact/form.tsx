"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea, toast } from "@/components";
import { type ContactType, contactSchema } from "./form.validation";
import contactAction from "./contactAction";

export default function ContactForm() {
   const [loading, setLoading] = useState(false);

   const contactForm = useForm<ContactType>({
      resolver: zodResolver(contactSchema),
      defaultValues: { name: "", email: "", subject: "", message: "" },
   });

   async function onContact(values: ContactType) {
      if (loading) return;
      setLoading(true);

      try {
         const sendMailAction = contactAction.bind(null, values);
         await sendMailAction();
         contactForm.reset();

         toast({
            title: "Success",
            description: "Your message has been successfully delivered. Expect a prompt response. Thank you for reaching out!",
         });
      } catch (error: unknown) {
         toast({
            title: "Oops !!",
            description: "Email not sent, please try again",
            variant: "destructive",
         });
      } finally {
         setLoading(false);
      }
   }

   return (
      <Form {...contactForm}>
         <form onSubmit={contactForm.handleSubmit(onContact)} className="w-full space-y-6">
            <FormField
               control={contactForm.control}
               name="name"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Enter your name</FormLabel>
                     <FormControl>
                        <Input placeholder="e.g. John Doe" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={contactForm.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Enter your email</FormLabel>
                     <FormControl>
                        <Input placeholder="e.g. john.doe@gmail.com" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={contactForm.control}
               name="subject"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Enter subject</FormLabel>
                     <FormControl>
                        <Input placeholder="e.g. Awesome work" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={contactForm.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Enter message</FormLabel>
                     <FormControl>
                        <Textarea
                           placeholder="e.g. I appreciate your awesome work in the field of development"
                           className="h-40 resize-none"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button
               type="submit"
               className="ml-auto flex w-32 overflow-hidden font-semibold"
               aria-label="Send mail"
               disabled={loading}
            >
               {loading ? <LoaderCircle className="size-6 animate-spin" /> : "Send Message"}
            </Button>
         </form>
      </Form>
   );
}
