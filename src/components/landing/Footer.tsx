import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: import.meta.env.VITE_INSTAGRAM_LINK },
  { icon: Linkedin, label: "LinkedIn", href: import.meta.env.VITE_LINKEDIN_LINK },
  { icon: Facebook, label: "Facebook", href: import.meta.env.VITE_FACEBOOK_LINK },
  { icon: Twitter, label: "Twitter", href: import.meta.env.VITE_TWITTER_LINK },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 sm:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-foreground">
              <div className="text-primary">
                <svg fill="none" height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg">
                  <rect height="40" stroke="currentColor" strokeWidth="3" width="40" x="4" y="4"></rect>
                </svg>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tighter">RigelBarber</h2>
            </div>
            <p className="text-text-secondary text-xs font-bold uppercase tracking-widest max-w-[300px] leading-relaxed">
              A plataforma completa para gestão e crescimento de barbearias.
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            <span className="text-text-secondary text-[10px] font-black uppercase tracking-[0.2em]">
              Siga a Orion
            </span>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center border border-border text-text-secondary rounded-md hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider + Copyright + Links */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-text-secondary text-[10px] font-black uppercase tracking-widest">
            © 2024 RigelBarber. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">
            <Link className="hover:text-primary transition-colors" to="/termos">
              Termos
            </Link>
            <Link className="hover:text-primary transition-colors" to="/privacidade">
              Privacidade
            </Link>
            <a className="hover:text-primary transition-colors" href="#">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;