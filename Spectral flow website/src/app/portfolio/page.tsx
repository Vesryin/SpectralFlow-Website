import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, User } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Project Cygnus X-1",
    category: "Game Sound Design",
    description: "Full audio pipeline for an indie sci-fi horror game, including atmospheric soundscapes, creature sounds, and UI effects.",
    image: "https://placehold.co/600x400.png",
    testimonial: "Spectral Flow's work was transformative. The sound design added a new layer of terror and immersion to our game.",
    client: "Nebula Interactive",
  },
  {
    title: "Static Dreams",
    category: "Album Production",
    description: "Mixing and mastering for a dark ambient album, focusing on dynamic range and textural clarity.",
    image: "https://placehold.co/600x400.png",
    testimonial: "The mastering was superb. They understood the subtle nuances of the genre and brought our tracks to life.",
    client: "Void Chaser Records",
  },
  {
    title: "The Wanderer",
    category: "Film Score",
    description: "Original score for a short experimental film, blending dark ambient drones with melodic undertones.",
    image: "https://placehold.co/600x400.png",
    testimonial: "The score was the soul of the film. It perfectly captured the sense of isolation and wonder we were aiming for.",
    client: "Ghost Light Films",
  },
   {
    title: "VR Experience 'Sublimina'",
    category: "Interactive Audio",
    description: "Spatial audio design for a VR meditation experience, creating a deeply immersive and calming soundscape.",
    image: "https://placehold.co/600x400.png",
    testimonial: "The spatial audio is incredible. Users feel completely transported. A technical and artistic achievement.",
    client: "Mindscape VR",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium">
          <Code className="h-4 w-4 mr-2" />
          Our Work
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Project Showcase
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          A selection of projects that demonstrate our passion for sound and
          commitment to quality.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mt-12">
        {portfolioItems.map((item) => (
          <Card key={item.title} className="overflow-hidden hover:shadow-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
               <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint="project client"
                />
            </CardHeader>
            <CardContent className="p-6">
              <span className="text-sm text-primary font-semibold">{item.category}</span>
              <h3 className="font-headline text-2xl font-bold mt-1">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.description}</p>
            </CardContent>
            <CardFooter className="p-6 bg-secondary/30">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted rounded-full">
                        <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <blockquote className="text-foreground italic">"{item.testimonial}"</blockquote>
                        <p className="text-sm text-muted-foreground mt-2 font-semibold">— {item.client}</p>
                    </div>
                </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
