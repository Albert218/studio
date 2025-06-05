// use server'
'use server';
/**
 * @fileOverview Generates a personalized elevator pitch based on the user's recent projects.
 *
 * - generateElevatorPitch - A function that generates the elevator pitch.
 * - GenerateElevatorPitchInput - The input type for the generateElevatorPitch function.
 * - GenerateElevatorPitchOutput - The return type for the generateElevatorPitch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateElevatorPitchInputSchema = z.object({
  name: z.string().describe('The name of the user.'),
  projects: z.array(
    z.object({
      title: z.string().describe('The title of the project.'),
      description: z.string().describe('A brief description of the project.'),
      url: z.string().url().optional().describe('The URL of the project, if applicable.'),
    })
  ).describe('An array of the user\'s recent projects.'),
  desiredJobTitle: z.string().describe('The job title that the user is seeking.')
});

export type GenerateElevatorPitchInput = z.infer<typeof GenerateElevatorPitchInputSchema>;

const GenerateElevatorPitchOutputSchema = z.object({
  elevatorPitch: z.string().describe('A personalized elevator pitch for the user.'),
});

export type GenerateElevatorPitchOutput = z.infer<typeof GenerateElevatorPitchOutputSchema>;

export async function generateElevatorPitch(input: GenerateElevatorPitchInput): Promise<GenerateElevatorPitchOutput> {
  return generateElevatorPitchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateElevatorPitchPrompt',
  input: {schema: GenerateElevatorPitchInputSchema},
  output: {schema: GenerateElevatorPitchOutputSchema},
  prompt: `You are an expert career coach, skilled at helping people introduce themselves effectively.

  Create a brief, professional, and engaging elevator pitch (2-3 sentences) for {{name}}, who is seeking a role as a {{desiredJobTitle}}.
  The elevator pitch should highlight their most recent projects and skills.  Make sure to mention the projects in a way that demonstrates their value to a potential employer or client.

  Here are some of their recent projects:
  {{#each projects}}
  - Title: {{title}}
    Description: {{description}}
    {{#if url}}
    URL: {{url}}
    {{/if}}
  {{/each}}
  `,
});

const generateElevatorPitchFlow = ai.defineFlow(
  {
    name: 'generateElevatorPitchFlow',
    inputSchema: GenerateElevatorPitchInputSchema,
    outputSchema: GenerateElevatorPitchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
