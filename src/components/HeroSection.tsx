import heroBg from "@/assets/hero-bg.jpg";
import { Star } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="Marco Laterza Personal Training" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center -5%' }} loading="eager" />
    <div className="absolute inset-0 bg-background/45" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
      <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8 animate-fade-in-up">
        Ihr Körper ist Ihr wichtigstes Kapital
      </h1>
      <p className="font-inter text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: "0.2s" }}>
        Strategisches Personal Coaching für Führungskräfte, Spitzensportler und Entscheider in Zürich. Seit über 20 Jahren.
      </p>

      <div className="flex flex-col items-center gap-5" style={{ animationDelay: "0.4s" }}>
        <a href="#kontakt" className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-gold">
          Kostenloses Strategiegespräch buchen
        </a>
        <p className="text-sm text-primary font-inter">Begrenzte Plätze verfügbar</p>
      </div>

      <div className="mt-14 inline-flex items-center gap-2 bg-card/50 backdrop-blur-md px-6 py-3 rounded-full border border-border/50">
        <Star className="w-5 h-5 text-primary fill-primary" />
        <span className="font-inter text-sm text-foreground">
          <strong>4.9</strong> Google Bewertung (59 Rezensionen)
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;
