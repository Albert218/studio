// src/components/sections/elevator-pitch-generator.tsx
"use client";

import { useState } from 'react';
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { generateElevatorPitch, type GenerateElevatorPitchInput, type GenerateElevatorPitchOutput } from '@/ai/flows/generate-elevator-pitch';
import { Loader2, PlusCircle, Trash2, Sparkles } from 'lucide-react';

const projectSchema = z.object({
  title: z.string().min(1, "Project title is required").max(100, "Title too long"),
  description: z.string().min(1, "Project description is required").max(500, "Description too long"),
});

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name too long"),
  desiredJobTitle: z.string().min(1, "Desired job title is required").max(100, "Job title too long"),
  projects: z.array(projectSchema).min(1, "At least one project is required").max(3, "Maximum 3 projects"),
});

type FormData = z.infer<typeof formSchema>;

export default function ElevatorPitchGenerator() {
  const [generatedPitch, setGeneratedPitch] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      desiredJobTitle: "",
      projects: [{ title: "", description: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedPitch(null);
    try {
      const input: GenerateElevatorPitchInput = {
        name: data.name,
        desiredJobTitle: data.desiredJobTitle,
        projects: data.projects.map(p => ({ title: p.title, description: p.description })),
      };
      const result: GenerateElevatorPitchOutput = await generateElevatorPitch(input);
      setGeneratedPitch(result.elevatorPitch);
      toast({
        title: "Elevator Pitch Generated!",
        description: "Your personalized pitch is ready.",
      });
    } catch (error) {
      console.error("Error generating elevator pitch:", error);
      toast({
        title: "Error",
        description: "Failed to generate elevator pitch. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pitch-ai" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Sparkles className="h-10 w-10 text-accent mx-auto mb-2" />
            <CardTitle className="text-3xl font-headline text-primary">Elevator Pitch AI</CardTitle>
            <CardDescription className="text-md text-muted-foreground">
              Craft a compelling introduction based on your profile and recent work.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl><Input placeholder="e.g., Jane Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredJobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Desired Job Title</FormLabel>
                        <FormControl><Input placeholder="e.g., Senior Software Engineer" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormLabel className="text-lg font-medium text-foreground">Recent Projects (1-3)</FormLabel>
                  <div className="space-y-4 mt-2">
                    {fields.map((item, index) => (
                      <Card key={item.id} className="p-4 bg-background/50 border-border">
                        <div className="space-y-3">
                           <FormField
                            control={form.control}
                            name={`projects.${index}.title`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm">Project Title #{index + 1}</FormLabel>
                                <FormControl><Input placeholder="Project Name" {...field} /></FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`projects.${index}.description`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm">Project Description</FormLabel>
                                <FormControl><Textarea placeholder="Briefly describe the project and your role/achievements." {...field} rows={3} /></FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        {fields.length > 1 && (
                          <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)} className="mt-2 text-destructive hover:bg-destructive/10">
                            <Trash2 className="h-4 w-4 mr-1" /> Remove Project
                          </Button>
                        )}
                      </Card>
                    ))}
                  </div>
                  {fields.length < 3 && (
                     <Button type="button" variant="outline" size="sm" onClick={() => append({ title: "", description: "" })} className="mt-4 border-accent text-accent hover:bg-accent/10">
                       <PlusCircle className="h-4 w-4 mr-2" /> Add Project
                     </Button>
                   )}
                   {form.formState.errors.projects && !form.formState.errors.projects.root && (
                      <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.projects.message}</p>
                    )}
                    {form.formState.errors.projects?.root && (
                        <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.projects.root.message}</p>
                    )}
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-5 w-5" />
                  )}
                  Generate Pitch
                </Button>
              </form>
            </Form>

            {generatedPitch && (
              <div className="mt-10">
                <h3 className="text-xl font-headline font-semibold text-primary mb-3">Your Generated Pitch:</h3>
                <Card className="bg-primary/5 border-primary/30">
                  <CardContent className="p-6">
                    <p className="text-foreground whitespace-pre-wrap">{generatedPitch}</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
