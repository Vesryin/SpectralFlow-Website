"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { generateSoundscape, type GenerateSoundscapeOutput } from "@/ai/flows/soundscape-generator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2 } from "lucide-react";

const formSchema = z.object({
  mood: z.string().min(3, "Mood must be at least 3 characters."),
  input: z.string().min(10, "Description must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function SoundscapeGenerator() {
  const [result, setResult] = useState<GenerateSoundscapeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mood: "",
      input: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await generateSoundscape(data);
      setResult(response);
    } catch (e) {
      setError("Failed to generate soundscape. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create Your Soundscape</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Mood</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., melancholic, eerie, desolate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="input"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Scene or Concept</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., an abandoned space station, a windswept arctic tundra, a forgotten crypt"
                        className="resize-none"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center text-muted-foreground">
          <p>The AI is composing, please wait...</p>
        </div>
      )}

      {error && <p className="text-destructive text-center">{error}</p>}

      {result && (
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Generated Soundscape
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-foreground whitespace-pre-wrap font-mono">
              {result.soundscapeDescription}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
