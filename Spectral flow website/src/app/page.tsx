import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Music, Sparkles, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Abstract sound waves"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="abstract sound"
        />
        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Crafting Aural Landscapes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Spectral Flow is your partner in creating immersive dark ambient
            music and professional sound design that captivates and inspires.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/music">Explore Music</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Our Expertise
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Offer
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From haunting soundscapes to polished final tracks, we provide a
                complete suite of audio services to bring your vision to life.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
            <Card className="bg-card/50 hover:bg-card transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <Music className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline">Music Samples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Listen to our curated collection of dark ambient tracks,
                  showcasing our signature sound.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 hover:bg-card transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <Waves className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline">Sound Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom sound design for games, films, and interactive media.
                  We create textures that tell a story.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 hover:bg-card transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline">AI Soundscapes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experiment with our generative AI to create a unique
                  soundscape based on your mood.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
