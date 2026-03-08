import { Zap, Clock, Brain } from "lucide-react";

const cards = [
  { icon: Zap, title: "Energieverlust trotz Disziplin", text: "Ihr Alltag fordert Höchstleistung. Aber der Körper hält nicht mehr Schritt." },
  { icon: Clock, title: "Keine Zeit für ineffizientes Training", text: "Jede Stunde hat strategischen Wert. Training muss messbare Ergebnisse liefern." },
  { icon: Brain, title: "Mentale Schärfe schwindet unter Druck", text: "Fokus, Resilienz und Entscheidungsqualität hängen direkt von Ihrer körperlichen Verfassung ab." },
];

const ProblemSection = () => (
  <section className="py-32 bg-background px-4">
    <div className="container mx-auto max-w-5xl">
      <h2 className="font-playfair font-bold text-3xl md:text-5xl text-foreground text-center mb-20">
        Sie funktionieren auf höchstem Niveau - <span className="text-primary">Ihr Körper auch?</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-10 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300">
            <c.icon className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-playfair text-xl text-foreground mb-3">{c.title}</h3>
            <p className="font-inter text-muted-foreground leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
