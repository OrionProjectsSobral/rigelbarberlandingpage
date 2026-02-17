import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="px-6 md:px-10 py-4 flex items-center justify-between max-w-[1400px] mx-auto w-full">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-primary">
            <svg fill="none" height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg">
              <rect height="40" stroke="currentColor" strokeWidth="2" width="40" x="4" y="4"></rect>
              <path d="M12 12H36M12 24H36M12 36H24" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
            </svg>
          </div>
          <h2 className="text-foreground text-xl font-bold tracking-tighter uppercase">RigelBarber</h2>
        </Link>

        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-10">
            <a className="text-foreground text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/">
              Início
            </a>
            <a className="text-foreground text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/#funcionalidades">
              Funcionalidades
            </a>
            <a className="text-foreground text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/#sistema">
              Sistema
            </a>
            <a className="text-foreground text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/#precos">
              Preços
            </a>
            <Link className="text-foreground text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" to="/sobre">
              Sobre Nós
            </Link>
          </nav>
          <button className="flex items-center justify-center border-2 border-primary px-8 h-10 bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest hover:bg-background hover:text-primary transition-all">
            Login
          </button>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            <a className="text-foreground text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/">
              Início
            </a>
            <a className="text-foreground text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/#funcionalidades">
              Funcionalidades
            </a>
            <a className="text-foreground text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/#sistema">
              Sistema
            </a>
            <a className="text-foreground text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/#precos">
              Preços
            </a>
            <Link className="text-foreground text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors" to="/sobre">
              Sobre Nós
            </Link>
          </nav>
          <button className="flex items-center justify-center border-2 border-primary px-8 h-12 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;