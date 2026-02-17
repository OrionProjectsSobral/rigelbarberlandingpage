import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="w-full py-32 px-6 bg-background border-b border-border">
      <motion.div 
        className="max-w-[900px] mx-auto text-center flex flex-col gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-7xl font-black text-foreground leading-none uppercase tracking-tighter italic">
          Pronto para modernizar sua barbearia?
        </h2>
        
        <p className="text-text-secondary text-lg font-medium max-w-2xl mx-auto border-x border-border px-10">
          Junte-se a centenas de barbearias que já estão economizando tempo e faturando mais com nossa plataforma.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-0 justify-center pt-6">
          <motion.button 
            className="flex items-center justify-center h-20 px-16 bg-primary text-primary-foreground text-lg font-black uppercase tracking-widest hover:bg-foreground transition-all animate-pulse-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Criar Conta Agora
          </motion.button>
        </div>
        

      </motion.div>
    </section>
  );
};

export default CTASection;