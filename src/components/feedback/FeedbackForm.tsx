
'use client';

import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, MessageSquareText, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { booths as allBooths } from '@/lib/booth-data';
import type { Feature } from '@/types';

const feedbackFormSchema = z.object({
  boothId: z.string().min(1, { message: "Please select a booth." }),
  featureId: z.string().min(1, { message: "Please select a feature." }),
  comment: z.string().min(10, { message: "Feedback must be at least 10 characters." }).max(1000, { message: "Feedback cannot exceed 1000 characters." }),
});

type FeedbackFormData = z.infer<typeof feedbackFormSchema>;

export default function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [availableFeatures, setAvailableFeatures] = useState<Feature[]>([]);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      boothId: '',
      featureId: '',
      comment: '',
    },
  });

  const selectedBoothId = form.watch('boothId');

  useEffect(() => {
    if (selectedBoothId) {
      const selectedBooth = allBooths.find(booth => booth.id === selectedBoothId);
      setAvailableFeatures(selectedBooth ? selectedBooth.features : []);
      form.resetField('featureId', { defaultValue: '' }); // Reset feature when booth changes
    } else {
      setAvailableFeatures([]);
    }
  }, [selectedBoothId, form]);

  const onSubmit: SubmitHandler<FeedbackFormData> = async (data) => {
    setIsLoading(true);
    setSubmitStatus(null);
    console.log('Feedback Submitted:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For now, we'll just show a success message.
    // In a real app, you'd send this to a backend.
    setSubmitStatus({ type: 'success', message: 'Thank you! Your feedback has been submitted successfully.' });
    form.reset();
    setAvailableFeatures([]); // Reset features dropdown as well
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-primary/20">
      <CardHeader className="text-center">
        <MessageSquareText className="mx-auto h-12 w-12 text-primary mb-4" />
        <CardTitle className="text-3xl font-headline gradient-text">Share Your Feedback</CardTitle>
        <CardDescription className="text-muted-foreground">
          We value your input! Let us know your thoughts on our booths and features.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="boothId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Booth</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a booth..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {allBooths.map(booth => (
                        <SelectItem key={booth.id} value={booth.id}>
                          {booth.name} (Booth #{booth.boothNumber})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featureId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Feature</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value} // Ensure value is controlled
                    defaultValue={field.value}
                    disabled={isLoading || !selectedBoothId || availableFeatures.length === 0}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={!selectedBoothId ? "Select a booth first" : "Choose a feature..."} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableFeatures.length > 0 ? (
                        availableFeatures.map(feature => (
                          <SelectItem key={feature.id} value={feature.id}>
                            {feature.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="no-features" disabled>
                          {selectedBoothId ? "No features for this booth" : "Select a booth to see features"}
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what you think..."
                      className="min-h-[120px] text-base"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-lg py-3" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Submit Feedback
                </>
              )}
            </Button>
          </form>
        </Form>

        {submitStatus && (
          <Alert variant={submitStatus.type === 'error' ? 'destructive' : 'default'} className="mt-6 bg-opacity-10">
            {submitStatus.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
            <AlertTitle>{submitStatus.type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
            <AlertDescription>{submitStatus.message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
