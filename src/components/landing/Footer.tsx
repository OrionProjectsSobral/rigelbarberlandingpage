const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-16 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
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
        
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">
          <a className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1" href="#">
            Termos
          </a>
          <a className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1" href="#">
            Privacidade
          </a>
          <a className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1" href="#">
            Suporte
          </a>
        </div>
        
        <div className="text-text-secondary text-[10px] font-black uppercase tracking-widest">
          © 2024 RigelBarber. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;