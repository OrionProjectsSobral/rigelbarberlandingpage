import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import financialDashboard from "@/assets/financial-dashboard.jpg";

const stats = [
  { value: "+30%", label: "Aumento de Receita" },
  { value: "-5h", label: "Tempo Admin/Semana" },
];

const FinancialSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-surface flex justify-center data-grid border-y border-border">
      <div className="max-w-[1200px] w-full flex flex-col-reverse md:flex-row gap-16 md:gap-24 items-center">
        <motion.div 
          className="flex flex-col gap-8 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            Gestão Inteligente
          </div>
          
          <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Controle Financeiro Total
          </h2>
          
          <p className="text-text-secondary text-lg leading-relaxed font-medium">
            Acompanhe o fluxo de caixa, calcule comissões automaticamente e visualize o crescimento do seu negócio em tempo real. Tome decisões baseadas em dados, não em achismos.
          </p>
          
          <div className="grid grid-cols-2 gap-0 mt-4 border border-border bg-background">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`flex flex-col gap-2 p-8 ${index === 0 ? 'border-r border-border' : ''}`}
              >
                <span className="text-4xl font-black text-primary tracking-tighter italic">
                  {stat.value}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          <div className="pt-6">
            <button className="group flex items-center gap-4 text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-foreground hover:border-foreground transition-all">
              Ver planos 
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="wireframe-container w-full aspect-video md:aspect-[4/3] bg-background p-2 overflow-hidden">
            <img 
              src={financialDashboard}
              alt="Dashboard financeiro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-primary/20 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialSection;