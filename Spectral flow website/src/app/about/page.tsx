import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Lightbulb, Music } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          About Spectral Flow
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          The art and science behind our sound.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Spectral Flow was born from a lifelong fascination with the emotive power of sound. Founded by a solo sound artist and composer, our studio is dedicated to exploring the depths of dark ambient music and the frontiers of sound design. We believe that sound is more than just background noise; it's a critical component of storytelling, capable of creating atmosphere, evoking emotion, and immersing an audience in a different reality.
          </p>
          <p className="text-muted-foreground">
            Our journey began in the world of experimental music, manipulating field recordings and synthesized textures to create vast, evolving soundscapes. This passion for texture and atmosphere is the foundation of our work, whether we're scoring a film, designing sounds for a game, or producing an album.
          </p>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x600.png"
            alt="Spectral Flow Studio"
            width={600}
            height={600}
            className="rounded-lg object-cover"
            data-ai-hint="music studio"
          />
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="p-3 bg-secondary rounded-full">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-headline text-2xl font-bold">Our Mission</h3>
          <p className="text-muted-foreground">
            To create unforgettable audio experiences that push creative boundaries and resonate deeply with listeners.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="p-3 bg-secondary rounded-full">
            <Lightbulb className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-headline text-2xl font-bold">Our Philosophy</h3>
          <p className="text-muted-foreground">
            We approach every project as a unique artistic challenge, blending technical expertise with creative intuition.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="p-3 bg-secondary rounded-full">
            <Music className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-headline text-2xl font-bold">Our Sound</h3>
          <p className="text-muted-foreground">
            Characterized by deep drones, intricate textures, and a cinematic quality that is both haunting and beautiful.
          </p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter">
            Ready to Collaborate?
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
            Let's discuss how we can bring our unique sound to your next project.
        </p>
        <div className="mt-6">
            <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
