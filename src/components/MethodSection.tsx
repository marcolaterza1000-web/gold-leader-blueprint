import { Dumbbell, Apple, Brain, Activity } from "lucide-react";

const tiles = [
{
  icon: Dumbbell,
  title: "Präzises Krafttraining",
  text: "Biomechanisch sauber und hocheffizient - exakt angepasst an Ihren Kalender und Ihre Tagesform. Basierend auf HRV-Messungen steuern wir die Belastung so, dass Sie Stress abbauen und Energie gewinnen, statt auszubrennen.",
  tag: "Training"
},
{
  icon: Apple,
  title: "Hormonbasierte Ernährungsoptimierung",
  text: "Kein Nachmittagstief, sondern konstanter Fokus. Wir entwickeln eine Strategie basierend auf Blutmessungen Ihrer hormonellen Ausgangslage - pragmatisch integrierbar in Geschäftsessen und Reisen. Maximale Energie bei vollem Genuss.",
  tag: "Ernährung"
},
{
  icon: Brain,
  title: "Mentales Coaching & Resilienz",
  text: "Im vertraulichen Sparring auf Augenhöhe identifizieren wir innere Blockaden. Sie lernen, Ihr Nervensystem aktiv zu regulieren, Stressphasen produktiv zu nutzen und danach schnell in den Erholungsmodus zu schalten.",
  tag: "Mental"
},
{
  icon: Activity,
  title: "Bioprint & Stoffwechselmessung",
  text: "Präzise Analysen zeigen Entzündungsprozesse, Hormonstatus und Körperzusammensetzung. Gemeinsam mit Spitzenmedizinern planen wir Training und Ernährung passend zu Ihrer individuellen Biologie - datengetrieben, messbar, nachhaltig.",
  tag: "Analyse"
}];


const MethodSection = () =>
<section id="methode" className="py-24 bg-background px-4">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-sm text-primary uppercase tracking-widest text-center mb-3">Die Methode</p>
      <h2 className="font-playfair font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
        Ein System. Vier Säulen. <span className="text-primary">Ein Ergebnis.</span>
      </h2>
      <p className="text-center text-muted-foreground font-inter mb-16 max-w-xl mx-auto">
        Jede Säule ist präzise auf Ihr individuelles Profil abgestimmt - kein Standardprogramm, sondern massgeschneiderte Exzellenz.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {tiles.map((t, i) =>
      <div key={i} className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors group">
            <div className="flex items-start justify-between mb-5">
              <t.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-inter text-xs text-primary/70 border border-primary/20 rounded-full px-3 py-1">
                {t.tag}
              </span>
            </div>
            <h3 className="font-playfair text-xl text-foreground mb-3">{t.title}</h3>
            <p className="font-inter text-muted-foreground leading-relaxed">{t.text}</p>
          </div>
      )}
      </div>

      <div className="text-center mt-12">
        <a
        href="#kontakt"
        className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold text-lg hover:brightness-110 transition shadow-gold">
        
          Methode persönlich kennenlernen
        </a>
      </div>
    </div>
  </section>;


export default MethodSection;
