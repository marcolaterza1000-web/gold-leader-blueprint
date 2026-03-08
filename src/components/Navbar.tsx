import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#ueber-marco", label: "Über Marco" },
    { href: "#methode", label: "Methode" },
    { href: "#ergebnisse", label: "Ergebnisse" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="font-playfair text-2xl font-bold italic text-primary">ML</a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-inter tracking-wide text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#kontakt" className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-inter text-sm font-semibold hover:brightness-110 transition">
          Strategiegespräch buchen
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 space-y-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-foreground/80 hover:text-primary py-2 font-inter">
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} className="block text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
            Strategiegespräch buchen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
