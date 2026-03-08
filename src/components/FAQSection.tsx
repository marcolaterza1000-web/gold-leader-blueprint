import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Für wen ist das Coaching geeignet?", a: "Das Coaching richtet sich an Führungskräfte, Unternehmer, Spitzensportler und Entscheider, die höchste Ansprüche an sich und ihren Körper stellen." },
  { q: "Wie läuft das erste Gespräch ab?", a: "In einem kostenlosen 30-minütigen Gespräch analysieren wir Ihre aktuelle Situation, definieren Ihre Ziele und prüfen, ob eine Zusammenarbeit sinnvoll ist." },
  { q: "Wo findet das Training statt?", a: "Das Training findet in unseren exklusiven Studios in Urdorf und Zürich statt. Auf Wunsch auch bei Ihnen zu Hause oder im Büro." },
  { q: "Wie schnell sehe ich Ergebnisse?", a: "Die meisten Klienten spüren bereits nach 2-3 Wochen eine deutliche Verbesserung ihrer Energie und Leistungsfähigkeit. Sichtbare körperliche Veränderungen zeigen sich in der Regel nach 6-8 Wochen." },
  { q: "Bieten Sie auch Online-Coaching an?", a: "Ja, für Klienten, die viel reisen oder international tätig sind, bieten wir ein hybrides Modell aus Präsenz- und Online-Sessions an." },
];

const FAQSection = () => (
  <section className="py-24 bg-secondary px-4">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
        Häufige Fragen
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="font-inter text-foreground hover:text-primary py-5 text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-inter text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
