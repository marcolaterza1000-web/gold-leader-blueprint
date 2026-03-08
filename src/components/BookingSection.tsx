import { Phone, Calendar, Shield } from "lucide-react";
import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="kontakt" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="border-2 border-primary/40 rounded-2xl p-8 md:p-14 text-center shadow-gold">
          <p className="font-inter text-sm text-primary uppercase tracking-widest mb-3">Nächster Schritt</p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
            Ihr erstes Gespräch. <span className="text-primary">Kostenlos & unverbindlich.</span>
          </h2>
          <p className="font-inter text-foreground/75 leading-relaxed mb-8 max-w-xl mx-auto">
            In 30 Minuten analysieren wir Ihre Situation, definieren Ihre Ziele und zeigen Ihnen, ob und wie eine Zusammenarbeit mit Marco Laterza sinnvoll ist.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span>100% vertraulich</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>30 Minuten, kein Verkaufsdruck</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>Online oder persönlich</span>
            </div>
          </div>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget rounded-lg overflow-hidden mb-8"
            data-url="https://calendly.com/marcolaterza/strategiegesprach?hide_gdpr_banner=1&background_color=0d0f1a&text_color=f0f0f0&primary_color=c9a84c"
            style={{ minWidth: "320px", height: "700px" }}
          />

          <div className="flex items-center justify-center gap-2 text-muted-foreground font-inter text-sm">
            <Phone className="w-4 h-4" />
            <span>
              Oder direkt anrufen:{" "}
              <a href="tel:+41794445851" className="text-primary hover:underline font-semibold">
                +41 79 444 58 51
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
