import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, PenTool, Sparkles, Waves } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Sound Design",
    icon: <Waves className="h-8 w-8 text-primary" />,
    description: "Custom sound effects, foley, and atmospheric textures for film, games, and interactive media. We build worlds with sound.",
    link: "#",
  },
  {
    title: "Mixing & Mastering",
    icon: <Mic className="h-8 w-8 text-primary" />,
    description: "Professional mixing and mastering services to give your tracks clarity, depth, and loudness, ready for any platform.",
    link: "#",
  },
  {
    title: "Custom Compositions",
    icon: <PenTool className="h-8 w-8 text-primary" />,
    description: "Original dark ambient compositions and scores tailored to your project's specific mood and narrative.",
    link: "#",
  },
  {
    title: "AI Soundscape Generation",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    description: "Leverage our AI tools for rapid prototyping of soundscapes or to generate unique, royalty-free ambient tracks.",
    link: "/soundscape-generator",
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
          Our Services
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Audio Solutions
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          We offer a comprehensive suite of services to meet all your audio
          needs, from initial concept to final polish.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mt-12">
        {services.map((service) => (
           <Card key={service.title} className="flex flex-col">
           <CardHeader className="flex flex-row items-center gap-4">
             {service.icon}
             <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
           </CardHeader>
           <CardContent className="flex-1">
             <p className="text-muted-foreground">{service.description}</p>
           </CardContent>
           <CardContent>
             <Button asChild variant="secondary">
                <Link href={service.link}>Learn More</Link>
             </Button>
           </CardContent>
         </Card>
        ))}
      </div>
    </div>
  );
}
