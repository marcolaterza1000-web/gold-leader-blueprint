import portrait from "@/assets/marco-portrait.jpg";
import { Star, CheckCircle } from "lucide-react";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "24×", label: "Titelseiten" },
  { value: "4.9", label: "Google Sterne", icon: true },
  { value: "500+", label: "Klienten" },
];

const credentials = [
  "Akkreditierter Mental Coach",
  "Zertifizierter Ernährungsberater",
  "Spezialist für Hormonforschung & Bioprint",
  "Ausgebildet nach Charles Poliquin Methode",
];

const AboutMarco = () => (
  <section id="ueber-marco" className="py-32 bg-secondary px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img
            src={portrait}
            alt="Marco Laterza Personal Trainer Zürich"
            className="rounded-2xl w-full object-cover aspect-[4/5] shadow-card"
            loading="lazy"
          />
          <div className="absolute -top-4 -left-4 bg-card border border-primary/30 rounded-2xl px-5 py-3 shadow-gold">
            <p className="font-inter text-xs text-muted-foreground">International anerkannt</p>
            <p className="font-playfair text-primary font-bold text-lg">24× Cover</p>
          </div>
        </div>

        <div>
          <p className="font-inter text-sm text-primary uppercase tracking-widest mb-3">Über Marco Laterza</p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-8">
            Erfahrung, die Ihren Fortschritt beschleunigt
          </h2>

          <p className="font-inter text-foreground/80 leading-relaxed mb-5 text-base">
            Mein Name ist Marco Laterza und ich begleite seit über zwei Jahrzehnten Persönlichkeiten, die im Berufsleben keine Kompromisse eingehen - und diesen Anspruch auch an ihre Gesundheit stellen.
          </p>
          <p className="font-inter text-foreground/70 leading-relaxed mb-5 text-base">
            Meine Reise führte mich über internationale Laufstege und die Titelseiten weltweiter Fitnessmagazine bis hin zur Arbeit mit führenden Medizinern und Experten für Stoffwechselprozesse. Ich weiss, wie es sich anfühlt, wenn der Terminkalender die Lebensqualität diktiert.
          </p>
          <p className="font-inter text-foreground/70 leading-relaxed mb-10 text-base">
            Deshalb habe ich ein System entwickelt, das die biologischen Bedürfnisse Ihres Körpers mit den Anforderungen eines modernen Führungsalltags in Einklang bringt. Ich verstehe mich als Ihr Mentor und strategischer Berater auf Augenhöhe - nicht um flüchtige Trends zu verfolgen, sondern um eine nachhaltige Transformation zu erreichen.
          </p>

          <div className="grid grid-cols-1 gap-3 mb-10">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="font-inter text-sm text-foreground/80">{c}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-10 py-6 border-y border-border/50">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-playfair text-2xl md:text-3xl text-primary font-bold flex items-center justify-center gap-1">
                  {s.value}
                  {s.icon && <Star className="w-4 h-4 fill-primary text-primary" />}
                </div>
                <div className="font-inter text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold hover:brightness-110 transition-all duration-300 shadow-gold"
          >
            Kostenloses Erstgespräch buchen
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMarco;
