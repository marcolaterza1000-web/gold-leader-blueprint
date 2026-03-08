import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/marcolaterza/", label: "Instagram" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/marco-laterza/", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "https://x.com/mlaterza", label: "Twitter/X" },
  { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCMPQ4avjkYuDbKICyU8M_2w", label: "YouTube" },
  { Icon: FaFacebook, href: "https://www.facebook.com/marcolaterzafit", label: "Facebook" },
  { Icon: FaWhatsapp, href: "https://wa.me/41794445851", label: "WhatsApp" },
];

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border px-4">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6 font-inter text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Impressum</a>
        <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
      </div>

      <div className="flex items-center gap-4">
        {socialLinks.map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors" aria-label={label}>
            <Icon size={24} />
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