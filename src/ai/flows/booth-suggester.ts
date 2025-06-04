// src/ai/flows/booth-suggester.ts
'use server';

/**
 * @fileOverview Provides personalized booth recommendations based on user preferences.
 *
 * - boothSuggester - A function that recommends product booths based on user preferences.
 * - BoothSuggesterInput - The input type for the boothSuggester function.
 * - BoothSuggesterOutput - The return type for the boothSuggester function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BoothSuggesterInputSchema = z.object({
  preferences: z
    .string()
    .describe('The user\s preferences for product booths.'),
});
export type BoothSuggesterInput = z.infer<typeof BoothSuggesterInputSchema>;

const BoothSuggesterOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('The list of recommended booth names based on user preferences.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the recommendations provided.'),
});
export type BoothSuggesterOutput = z.infer<typeof BoothSuggesterOutputSchema>;

export async function boothSuggester(input: BoothSuggesterInput): Promise<BoothSuggesterOutput> {
  return boothSuggesterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'boothSuggesterPrompt',
  input: {schema: BoothSuggesterInputSchema},
  output: {schema: BoothSuggesterOutputSchema},
  prompt: `You are an expert in matching user preferences to product booths in a product pavilion.

  Based on the user's stated preferences, recommend a list of booth names that would be most relevant to their needs.
  Also, provide a brief reasoning for each recommendation.

  User Preferences: {{{preferences}}}
  `,
});

const boothSuggesterFlow = ai.defineFlow(
  {
    name: 'boothSuggesterFlow',
    inputSchema: BoothSuggesterInputSchema,
    outputSchema: BoothSuggesterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
