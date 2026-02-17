import { motion } from "framer-motion";
import { CalendarDays, TrendingUp, Users, LayoutDashboard } from "lucide-react";
import dashboardDesktop from "@/assets/dashboard-desktop.jpg";
import dashboardMobile from "@/assets/dashboard-mobile.jpg";

const highlights = [
  { icon: CalendarDays, label: "Visão Geral de Agendamentos" },
  { icon: TrendingUp, label: "Indicadores Financeiros" },
  { icon: Users, label: "Controle de Equipe" },
  { icon: LayoutDashboard, label: "Interface Intuitiva" },
];

const DashboardShowcase = () => {
  return (
    <section className="w-full py-24 md:py-32 px-6 bg-surface flex justify-center border-b border-border overflow-hidden" id="sistema">
      <div className="max-w-[1200px] w-full flex flex-col gap-16">
        {/* Header */}
        <motion.div 
          className="text-center flex flex-col gap-6 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            Sistema Completo
            <span className="w-12 h-[1px] bg-primary"></span>
          </div>
          <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-4xl">
            Controle Total na Palma da Mão
          </h2>
          <p className="text-text-secondary text-lg font-medium max-w-2xl">
            Uma experiência perfeita em qualquer dispositivo. Gerencie sua barbearia do computador ou do celular com a mesma eficiência.
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border bg-background"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.label}
                className={`flex flex-col items-center gap-3 p-6 md:p-8 text-center ${index < 3 ? 'border-r border-border' : ''} ${index < 2 ? 'md:border-r' : ''}`}
              >
                <Icon className="text-primary w-6 h-6" />
                <span className="text-foreground text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Device showcase */}
        <motion.div 
          className="relative flex justify-center items-center py-8 md:py-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Desktop mockup */}
          <div className="relative w-full max-w-4xl">
            <div className="wireframe-container bg-background p-2 md:p-4 glow-primary">
              {/* Browser bar */}
              <div className="flex items-center gap-2 pb-2 md:pb-3 border-b border-border mb-2 md:mb-3">
              <div className="flex gap-1.5">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-destructive/60"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary/60"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary/40"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-muted px-3 md:px-4 py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    rigelbarber.app/dashboard
                  </div>
                </div>
              </div>
              {/* Screen content */}
              <div className="aspect-[16/9] bg-background overflow-hidden">
                <img 
                  src={dashboardDesktop} 
                  alt="Dashboard Desktop"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Desktop label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground text-[8px] md:text-[10px] font-black px-3 py-1 uppercase tracking-tighter">
                  DESKTOP
                </div>
              </div>
            </div>

            {/* Mobile mockup - overlapping */}
            <motion.div 
              className="absolute -right-4 md:right-8 -bottom-8 md:-bottom-12 w-24 sm:w-32 md:w-44 lg:w-52"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative bg-background border-2 border-border p-1 md:p-2 device-shadow animate-float">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3 md:h-4 bg-background border-x border-b border-border rounded-b-lg z-10"></div>
                
                {/* Screen content */}
                <div className="aspect-[9/19] bg-background overflow-hidden rounded-sm">
                  <img 
                    src={dashboardMobile} 
                    alt="Dashboard Mobile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-8 md:w-12 h-0.5 md:h-1 bg-muted rounded-full"></div>
                
                {/* Mobile label */}
                <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-[6px] md:text-[8px] font-black px-2 py-0.5 uppercase tracking-tighter whitespace-nowrap">
                    MOBILE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="flex flex-col items-center gap-6 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-text-secondary text-sm font-bold uppercase tracking-widest text-center">
            100% Responsivo • Acesse de qualquer lugar
          </p>
          <button className="group flex items-center gap-4 text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-foreground hover:border-foreground transition-all">
            Experimente Agora
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardShowcase;