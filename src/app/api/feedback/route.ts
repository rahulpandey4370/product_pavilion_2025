
import { NextResponse, type NextRequest } from 'next/server';
import { put } from '@vercel/blob';
import { z } from 'zod';

const feedbackSchema = z.object({
  boothId: z.string().min(1),
  featureId: z.string().min(1),
  comment: z.string().min(10).max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedData = feedbackSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json({ error: 'Invalid data provided.', details: parsedData.error.flatten() }, { status: 400 });
    }

    const { boothId, featureId, comment } = parsedData.data;

    const feedbackContent = {
      boothId,
      featureId,
      comment,
      submittedAt: new Date().toISOString(),
    };

    const filename = `feedback/feedback-${Date.now()}-${Math.random().toString(36).substring(2, 7)}.json`;
    
    const blob = await put(filename, JSON.stringify(feedbackContent, null, 2), {
      access: 'public',
      contentType: 'application/json',
      // The token is automatically picked up from the BLOB_READ_WRITE_TOKEN environment variable by Vercel.
      // No need to pass it explicitly if deployed on Vercel or if the env var is set locally.
    });

    return NextResponse.json({ message: 'Feedback submitted successfully', url: blob.url }, { status: 201 });

  } catch (error) {
    console.error('Error submitting feedback:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ error: 'Failed to submit feedback.', details: errorMessage }, { status: 500 });
  }
}
