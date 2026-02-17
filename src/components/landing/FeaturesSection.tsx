import { motion } from "framer-motion";
import { Clock, Users, Scissors, DollarSign, MessageCircle, Palette } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Gestão de Horários",
    description: "Agendamento online 24/7 para seus clientes. Sincronização automática e sem conflitos."
  },
  {
    icon: Users,
    title: "Equipe",
    description: "Controle de comissões, gorjetas e produtividade individual de cada barbeiro."
  },
  {
    icon: Scissors,
    title: "Serviços",
    description: "Configuração flexível de preços, promoções e duração estimada de cada serviço."
  },
  {
    icon: DollarSign,
    title: "Financeiro",
    description: "Dashboard financeiro completo com relatórios de lucro, despesas e fluxo de caixa."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Lembretes automáticos para reduzir faltas e confirmações diretas no celular do cliente."
  },
  {
    icon: Palette,
    title: "Personalização",
    description: "Personalize a página de agendamento com a marca, logo e cores da sua barbearia."
  }
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-background flex justify-center border-b border-border" id="funcionalidades">
      <div className="max-w-[1200px] w-full flex flex-col gap-16">
        <motion.div 
          className="max-w-[720px] flex flex-col gap-4 border-l-4 border-primary pl-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Ferramentas Poderosas
          </h2>
          <p className="text-text-secondary text-lg font-medium">
            Tudo o que você precisa para gerenciar seu negócio em um só lugar, projetado para impulsionar seu crescimento.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group flex flex-col gap-6 p-8 border-r border-b border-border hover:bg-surface transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-primary">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-foreground text-xl font-black uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed border-l border-border pl-4">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;