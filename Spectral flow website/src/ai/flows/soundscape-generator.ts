// Use server directive.
'use server';

/**
 * @fileOverview AI Soundscape Generator flow.
 *
 * This file defines a Genkit flow for generating personalized dark ambient soundscapes based on user mood and input.
 * It includes the flow definition, input and output schemas, and a wrapper function.
 *
 * @remarks
 * - `generateSoundscape`: A function that handles the soundscape generation process.
 * - `GenerateSoundscapeInput`: The input type for the `generateSoundscape` function.
 * - `GenerateSoundscapeOutput`: The return type for the `generateSoundscape` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the soundscape generator.
const GenerateSoundscapeInputSchema = z.object({
  mood: z
    .string()
    .describe("The desired mood for the soundscape (e.g., 'melancholic', 'eerie', 'peaceful')."),
  input: z
    .string()
    .describe("Additional input or description to guide the soundscape generation."),
});

// Define the output schema for the soundscape generator.
const GenerateSoundscapeOutputSchema = z.object({
  soundscapeDescription: z
    .string()
    .describe("A description of the generated soundscape."),
});

// Define the TypeScript types based on the Zod schemas.
export type GenerateSoundscapeInput = z.infer<typeof GenerateSoundscapeInputSchema>;
export type GenerateSoundscapeOutput = z.infer<typeof GenerateSoundscapeOutputSchema>;

// Exported function to generate soundscape
export async function generateSoundscape(
  input: GenerateSoundscapeInput
): Promise<GenerateSoundscapeOutput> {
  return generateSoundscapeFlow(input);
}

// Define the prompt for the soundscape generator.
const soundscapePrompt = ai.definePrompt({
  name: 'soundscapePrompt',
  input: {schema: GenerateSoundscapeInputSchema},
  output: {schema: GenerateSoundscapeOutputSchema},
  prompt: `You are an AI soundscape generator specializing in dark ambient music.

  Based on the user's desired mood and additional input, create a detailed description of a dark ambient soundscape.
  Consider elements such as drones, textures, sound effects, and overall atmosphere.

  Desired Mood: {{{mood}}}
  Additional Input: {{{input}}}

  Soundscape Description:`,
});

// Define the Genkit flow for the soundscape generator.
const generateSoundscapeFlow = ai.defineFlow(
  {
    name: 'generateSoundscapeFlow',
    inputSchema: GenerateSoundscapeInputSchema,
    outputSchema: GenerateSoundscapeOutputSchema,
  },
  async input => {
    const {output} = await soundscapePrompt(input);
    return output!;
  }
);
