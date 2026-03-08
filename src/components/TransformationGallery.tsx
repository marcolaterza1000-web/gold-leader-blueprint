import { useState } from "react";

import t1 from "@/assets/transform_markus.jpg";
import t2 from "@/assets/transform_bill.jpg";
import t3 from "@/assets/transform_m.jpg";
import t4 from "@/assets/transform_andre.jpg";
import t5 from "@/assets/transform_corinna.jpg";
import t6 from "@/assets/transform_extra.jpg";
import t7 from "@/assets/transform_nico.jpg";
import t8 from "@/assets/transform_bidi.jpg";
import t9 from "@/assets/transform_front.jpg";
import t10 from "@/assets/transform_jean.jpg";
import t11 from "@/assets/transform_marco.jpg";
const images = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11];

const TransformationGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-32 bg-background px-4">
      <div className="container mx-auto max-w-6xl">
        <p className="font-inter text-sm text-primary uppercase tracking-widest text-center mb-3">
          Body Transformation
        </p>
        <h2 className="font-inter font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
          Echte Ergebnisse. <span className="text-primary">Echte Menschen.</span>
        </h2>
        <p className="text-center font-inter text-muted-foreground mb-16 max-w-xl mx-auto">
          Über 500 Transformationen in 20+ Jahren. Jedes Resultat ist das Ergebnis eines individuellen, massgeschneiderten Programms.
        </p>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Body Transformation ${i + 1} Marco Laterza Zürich`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#kontakt"
            className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-gold"
          >
            Ihre Transformation beginnt hier
          </a>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Transformation"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
          <button
            className="absolute top-6 right-6 text-foreground text-3xl font-bold hover:text-primary transition"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default TransformationGallery;
