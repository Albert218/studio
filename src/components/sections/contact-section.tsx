
// src/components/sections/contact-section.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact-actions";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact-schema";


export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center text-primary mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send me a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-secondary/50 focus:bg-card"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-secondary/50 focus:bg-card"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." rows={5} {...field} className="bg-secondary/50 focus:bg-card"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6 mt-8 md:mt-0">
            <h3 className="text-2xl font-headline font-semibold text-primary mb-4">Contact Information</h3>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
              <Mail className="h-6 w-6 text-accent mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a href="mailto:essilfiealbert71@gmail.com" className="text-muted-foreground hover:text-primary smooth-transition">
                  essilfiealbert71@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
              <Phone className="h-6 w-6 text-accent mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <a href="tel:+233542370880" className="text-muted-foreground hover:text-primary smooth-transition">
                  +233 54 237 0880
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
              <MapPin className="h-6 w-6 text-accent mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-muted-foreground">Takoradi, Ghana (Remote-friendly)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
