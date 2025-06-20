import { SoundscapeGenerator } from "@/components/soundscape-generator";
import { Sparkles } from "lucide-react";

export default function SoundscapeGeneratorPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          AI Soundscape Generator
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          Experiment with our custom AI to generate a unique dark ambient
          soundscape. Describe a mood or a scene and let the AI craft an
          aural environment for you.
        </p>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <SoundscapeGenerator />
      </div>
    </div>
  );
}
