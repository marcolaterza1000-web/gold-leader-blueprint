import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border px-4">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6 font-inter text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Impressum</a>
        <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
      </div>

      <div className="flex items-center gap-4">
        {[Instagram, Linkedin, Youtube].map((Icon, i) => (
          <a key={i} href="#" className="text-primary/70 hover:text-primary transition-colors" aria-label="Social">
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <p className="font-inter text-xs text-muted-foreground">
        © 2026 Marco Laterza Personal Training Zürich
      </p>
    </div>
  </footer>
);

export default Footer;
