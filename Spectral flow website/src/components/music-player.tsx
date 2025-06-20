"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music,
} from "lucide-react";
import Image from "next/image";
import { useMusicPlayer } from "@/hooks/use-music-player";
import { cn } from "@/lib/utils";

export function MusicPlayer() {
  const {
    currentTrack,
    isPlaying,
    volume,
    isMuted,
    progress,
    playTrack,
    togglePlay,
    playNext,
    playPrevious,
    setVolume,
    toggleMute,
    tracks,
  } = useMusicPlayer();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Card className="flex-1">
        <CardHeader>
          <h3 className="font-headline text-xl">Tracklist</h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tracks.map((track, index) => (
              <li
                key={track.id}
                onClick={() => playTrack(index)}
                className={cn(
                  "flex items-center gap-4 p-2 rounded-md cursor-pointer transition-colors hover:bg-accent",
                  currentTrack.id === track.id && "bg-accent"
                )}
              >
                <div className="w-12 h-12 relative flex-shrink-0">
                   <Image
                      src={track.artwork}
                      alt={track.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                      data-ai-hint="album cover"
                    />
                    {currentTrack.id === track.id && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        {isPlaying ? <Pause className="h-6 w-6 text-primary" /> : <Play className="h-6 w-6 text-primary" />}
                      </div>
                    )}
                </div>
                <div>
                  <p className="font-semibold">{track.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {track.artist}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="lg:w-1/3">
        <Card className="sticky top-24">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 relative mb-6">
              <Image
                src={currentTrack.artwork}
                alt={currentTrack.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                data-ai-hint="album cover"
              />
            </div>
            <h2 className="font-headline text-2xl font-bold">
              {currentTrack.title}
            </h2>
            <p className="text-muted-foreground">{currentTrack.artist}</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="w-full flex items-center gap-2 text-xs text-muted-foreground">
              <span>{Math.floor(progress / 60)}:{String(progress % 60).padStart(2, '0')}</span>
              <Slider
                value={[progress]}
                max={240}
                step={1}
                className="w-full"
              />
               <span>4:00</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button variant="ghost" size="icon" onClick={playPrevious}>
                <SkipBack />
              </Button>
              <Button
                size="lg"
                className="w-16 h-16 rounded-full"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={playNext}>
                <SkipForward />
              </Button>
            </div>
            <div className="flex items-center gap-2 w-full max-w-xs mx-auto">
              <Button variant="ghost" size="icon" onClick={toggleMute}>
                {isMuted || volume === 0 ? <VolumeX /> : <Volume2 />}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.01}
                onValueChange={(value) => setVolume(value[0])}
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
