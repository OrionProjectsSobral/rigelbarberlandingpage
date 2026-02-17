import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Para barbearias iniciando sua jornada digital",
    price: "79",
    period: "/mês",
    features: [
      "Até 2 profissionais",
      "Agendamento online ilimitado",
      "Lembretes via WhatsApp",
      "Relatórios básicos",
      "Suporte por email",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Professional",
    description: "O plano mais escolhido pelos nossos clientes",
    price: "149",
    period: "/mês",
    features: [
      "Até 5 profissionais",
      "Tudo do Starter +",
      "Controle de comissões",
      "Relatórios avançados",
      "Personalização da marca",
      "Integração Google Calendar",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Para redes e múltiplas unidades",
    price: "299",
    period: "/mês",
    features: [
      "Profissionais ilimitados",
      "Tudo do Professional +",
      "Múltiplas unidades",
      "API personalizada",
      "Gerente de sucesso dedicado",
      "Treinamento da equipe",
      "SLA garantido",
    ],
    cta: "Falar com Especialista",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="w-full py-24 md:py-32 px-6 bg-background flex justify-center border-b border-border" id="precos">
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
            Planos e Preços
            <span className="w-12 h-[1px] bg-primary"></span>
          </div>
          <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-4xl">
            Escolha o Plano Ideal
          </h2>
          <p className="text-text-secondary text-lg font-medium max-w-2xl">
            Comece gratuitamente e escale conforme seu negócio cresce. Sem taxas ocultas, cancele quando quiser.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-border">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col p-8 md:p-10 border-r border-b border-border ${
                plan.popular ? 'bg-surface' : 'bg-background'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-primary"></div>
              )}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground text-[8px] font-black px-3 py-1 uppercase tracking-widest">
                    <Star size={10} fill="currentColor" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-foreground text-2xl font-black uppercase tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-text-secondary text-sm font-medium min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-text-secondary text-lg font-bold">R$</span>
                <span className="text-foreground text-5xl md:text-6xl font-black tracking-tighter italic">
                  {plan.price}
                </span>
                <span className="text-text-secondary text-sm font-bold uppercase tracking-widest">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-4 h-4 flex items-center justify-center border border-primary text-primary flex-shrink-0">
                      <Check size={10} />
                    </span>
                    <span className="text-text-secondary text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                className={`w-full h-14 text-sm font-black uppercase tracking-widest transition-all ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-foreground'
                    : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PricingSection;