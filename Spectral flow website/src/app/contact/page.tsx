import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Contact Us
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          Have a project in mind or want to book a session? We'd love to hear
          from you.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <div>
                <h2 className="font-headline text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground mt-2">Fill out the form and we'll get back to you as soon as possible.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-lg">contact@spectralflow.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-lg">Cyber-space / Remote</span>
                </div>
            </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
