import { motion } from "framer-motion";
import heroBarbershop from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 flex justify-center data-grid overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col-reverse md:flex-row gap-16 items-center">
        <motion.div 
          className="flex flex-col gap-8 flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-foreground text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
              Sua Barbearia no <span className="text-primary not-italic">Próximo Nível</span>
            </h1>
            <h2 className="text-text-secondary text-lg md:text-xl font-medium leading-relaxed max-w-[550px] mx-auto md:mx-0 border-l-2 border-border pl-6">
              Economize tempo, organize sua agenda e aumente seus lucros com a plataforma de gestão mais completa para barbearias modernas.
            </h2>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <motion.button 
              className="flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest hover:bg-foreground transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Começar Agora
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="wireframe-container w-full aspect-square md:aspect-[4/3] bg-background p-2 group overflow-hidden">
            <img 
              src={heroBarbershop}
              alt="Barbearia moderna"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-primary/20 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;