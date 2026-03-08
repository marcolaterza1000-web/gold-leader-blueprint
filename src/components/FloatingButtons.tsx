import { MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp Button - left */}
    <a
      href="https://wa.me/41794445851"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-gold hover:brightness-110 transition"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </a>

    {/* Mobile sticky CTA - bottom right */}
    <a
      href="#kontakt"
      className="fixed bottom-6 right-6 z-40 md:hidden px-6 py-3 rounded-full bg-primary text-primary-foreground font-inter font-semibold text-sm shadow-gold hover:brightness-110 transition"
    >
      Jetzt buchen
    </a>
  </>
);

export default FloatingButtons;
