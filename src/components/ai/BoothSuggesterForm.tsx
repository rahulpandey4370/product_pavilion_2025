
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { boothSuggester, type BoothSuggesterOutput } from '@/ai/flows/booth-suggester';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2, CheckCircle } from 'lucide-react';

const FormSchema = z.object({
  preferences: z.string().min(10, { message: 'Please describe your interests in at least 10 characters.' }),
});

type FormData = z.infer<typeof FormSchema>;

export default function BoothSuggesterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<BoothSuggesterOutput | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      preferences: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await boothSuggester({ preferences: data.preferences });
      setResult(response);
    } catch (e) {
      console.error(e);
      setError('An error occurred while fetching recommendations. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-primary/20">
      <CardHeader className="text-center">
        <Wand2 className="mx-auto h-12 w-12 text-primary mb-4" />
        <CardTitle className="text-3xl font-headline">AI Booth Suggester</CardTitle>
        <CardDescription className="text-muted-foreground">
          Tell us what you're looking for, and our AI will suggest the most relevant booths for you!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Textarea
              placeholder="e.g., 'I am interested in cloud solutions for manufacturing and AI-driven analytics.'"
              {...form.register('preferences')}
              className="min-h-[100px] text-base"
              disabled={isLoading}
            />
            {form.formState.errors.preferences && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.preferences.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full text-lg py-3" disabled={isLoading}> {/* Adjusted padding from py-6 to py-3 for standard feel */}
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Getting Suggestions...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Suggest Booths
              </>
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold text-center text-primary font-headline">Here are your personalized recommendations:</h3>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="h-6 w-6 mr-2 text-emerald" />
                  Recommended Booths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="text-base">{rec}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
               <CardHeader>
                <CardTitle className="text-xl">Reasoning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">{result.reasoning}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
