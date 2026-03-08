import { Award, Clock, Users } from "lucide-react";

const items = [
  { icon: Award, text: "24× Titelseite internationaler Fitnessmagazine" },
  { icon: Clock, text: "20+ Jahre Erfahrung" },
  { icon: Users, text: "Führungskräfte, Spitzensportler, Politiker" },
];

const AuthorityStrip = () => (
  <section className="bg-secondary py-6 border-y border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <item.icon className="w-5 h-5 text-primary shrink-0" />
          <span className="font-inter text-sm text-foreground/85">{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AuthorityStrip;
