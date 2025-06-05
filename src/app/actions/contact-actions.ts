"use server";

import type { ContactFormValues } from "@/lib/schemas/contact-schema";

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
