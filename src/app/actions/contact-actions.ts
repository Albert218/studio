// src/app/actions/contact-actions.ts
"use server";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormValues): Promise<{success: boolean, message?: string}> {
  console.log("Contact form submitted:", data);
  // Here you would typically send an email or save to a database
  // For now, we'll simulate a successful submission.
  // In a real app, you might have error handling:
  // if (error) {
  //   return { success: false, message: "Something went wrong." };
  // }
  return { success: true, message: "Your message has been sent successfully!" };
}
