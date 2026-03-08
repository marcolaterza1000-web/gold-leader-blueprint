import { Star, ExternalLink } from "lucide-react";

const reviews = [
{
  name: "Robert Skrobak",
  date: "Januar 2026",
  text: "Marco arbeitet sehr professionell und verfügt über ein beeindruckendes Palmares. Er geht individuell auf meine Situation ein und hat eine massgeschneiderte Struktur definiert. Seine Erfahrung mit Unternehmern und C-Level Menschen ist einzigartig — er versteht das stressvolle Setting und berät mit Fokus auf Resilienz, Leistungsfähigkeit und Erholung."
},
{
  name: "Yvon Hochstrasser",
  date: "Mai 2025",
  text: "Working with Marco Laterza has been a truly transformative experience. I not only reached my body goal, but it also had an impact on my mind — which helped me during a tough period of my life. His holistic philosophy is not just about working out — it's about creating a mindset and a way of life that supports long-term health."
},
{
  name: "Nicola Hägeli",
  date: "Mai 2025",
  text: "Als Unternehmer ist mein Alltag oft chaotisch. Marco hat das geändert. Ohne Druck, aber mit Klarheit. Sein Coaching ist strukturiert, individuell und vor allem alltagstauglich. Es geht nicht nur ums Training, sondern um das grosse Ganze — Energie, Fokus, mentale Stärke."
}];


const Stars = () =>
<div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
  </div>;


const GoogleReviews = () =>
<section className="py-24 bg-background px-4">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-sm text-primary uppercase tracking-widest text-center mb-3">Echte Bewertungen</p>
      <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
        Was Klienten über Marco sagen
      </h2>
      <p className="text-center font-inter text-muted-foreground mb-12 max-w-lg mx-auto">
        Verifizierte Google-Bewertungen von echten Klienten.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {reviews.map((r, i) =>
      <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <Stars />
              <span className="font-inter text-xs text-muted-foreground">{r.date}</span>
            </div>
            <p className="font-inter text-foreground/80 leading-relaxed mb-5 text-sm">
              «{r.text}»
            </p>
            <p className="font-inter font-semibold text-foreground text-sm py-0 my-0 px-0 whitespace-nowrap">{r.name}</p>
          </div>
      )}
      </div>

      {/* Google badge */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
          </div>
          <span className="font-inter text-foreground font-semibold">4.9</span>
          <span className="font-inter text-muted-foreground text-sm">· 59 Google Bewertungen</span>
        </div>
        <a
        href="https://search.google.com/local/reviews?placeid=ChIJhZrzumoKkEcR9iO2vfn5Uh8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-inter text-sm text-primary hover:underline">
        
          Alle Bewertungen lesen <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>;


export default GoogleReviews;