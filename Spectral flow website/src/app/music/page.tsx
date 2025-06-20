import { MusicPlayer } from "@/components/music-player";
import { Music } from "lucide-react";

export default function MusicPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium">
          <Music className="h-4 w-4 mr-2" />
          Our Sound
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Listen to Our Work
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          Explore a selection of our dark ambient tracks. Each piece is crafted
          to evoke a unique atmosphere and emotional landscape.
        </p>
      </div>

      <div className="mt-12">
        <MusicPlayer />
      </div>
    </div>
  );
}
