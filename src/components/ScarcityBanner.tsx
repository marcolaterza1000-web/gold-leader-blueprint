import { Clock } from "lucide-react";

const ScarcityBanner = () => (
  <div className="bg-primary/10 border-y border-primary/30 py-3.5 text-center">
    <p className="font-inter text-sm text-primary font-medium flex items-center justify-center gap-2">
      <Clock className="w-4 h-4" />
      Aktuell nur <strong>2 Plätze verfügbar</strong> — Marco betreut ausschliesslich eine limitierte Anzahl Klienten.{" "}
      <a href="#kontakt" className="underline underline-offset-2 hover:text-primary/80 transition">
        Jetzt Erstgespräch sichern →
      </a>
    </p>
  </div>
);

export default ScarcityBanner;
