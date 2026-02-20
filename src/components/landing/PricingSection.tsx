import { motion } from "framer-motion";
import { Check, Minus, User, Crown, ShoppingCart } from "lucide-react";

/* ============ PLAN DATA ============ */

const plans = [
  {
    name: "Solo",
    icon: User,
    description: "Para quem está começando",
    price: "49,90",
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    description: "Gestão Completa",
    price: "79,90",
    cta: "Começar Agora",
    popular: true,
  },
  {
    name: "Elite",
    icon: ShoppingCart,
    description: "Máquina de Vendas",
    price: "99,90",
    cta: "Começar Agora",
    popular: false,
  },
];

type FeatureValue = boolean | string;

interface FeatureRow {
  label: string;
  values: FeatureValue[];
}

const features: FeatureRow[] = [
  { label: "Profissionais", values: ["Até 2", "Até 5", "Ilimitado"] },
  { label: "Agendamento Online", values: [true, true, true] },
  { label: "Lembretes Manuais (Zap)", values: [true, true, true] },
  { label: "Gestão Financeira", values: [true, true, true] },
  { label: "Controle de Estoque", values: [false, "Até 6 Produtos", "Ilimitado"] },
  { label: "Suporte 24/7", values: [true, true, true] },
  { label: "Notificações Automáticas (WhatsApp)", values: [false, true, true] },
  { label: "Clube de Assinaturas", values: [false, "Até 3 Planos", "Ilimitado"] },
  { label: "Programa de Fidelidade", values: [false, false, true] },
];

/* ============ CELL RENDERER ============ */

const CellValue = ({ value }: { value: FeatureValue }) => {
  if (value === true) {
    return (
      <div className="flex justify-center md:block">
        <Check size={16} className="text-primary md:mx-auto" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center md:block">
        <Minus size={16} className="text-text-secondary/40 md:mx-auto" />
      </div>
    );
  }
  return (
    <span className="text-foreground text-sm font-medium">{value}</span>
  );
};

/* ============ COMPONENT ============ */

const PricingSection = () => {
  return (
    <section
      className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background flex justify-center border-b border-border"
      id="precos"
    >
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
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-4xl">
            Escolha o Plano Ideal
          </h2>
          <p className="text-text-secondary text-base sm:text-lg font-medium max-w-2xl">
            Comece agora e escale conforme seu negócio cresce. Sem taxas ocultas,
            cancele quando quiser.
          </p>
        </motion.div>

        {/* COMPARISON TABLE — Desktop */}
        <motion.div
          className="hidden md:block overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <table className="w-full border-collapse">
            {/* PLAN HEADERS */}
            <thead>
              <tr>
                {/* Empty cell for feature labels column */}
                <th className="w-[280px]"></th>
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <th
                      key={plan.name}
                      className="px-6 pt-8 pb-6 text-left align-top border-l border-border"
                    >
                      <div className="flex flex-col gap-4">
                        {/* Badges */}
                        <div className="flex items-center gap-2 min-h-[24px]">
                          {plan.popular && (
                            <span className="px-3 py-1 bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-widest rounded-sm">
                              Popular
                            </span>
                          )}
                        </div>

                        {/* Name + Icon */}
                        <div className="flex items-center gap-2">
                          <Icon size={18} className="text-primary" />
                          <span className="text-foreground text-xl font-black tracking-tight">
                            {plan.name}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-text-secondary text-xs font-medium italic">
                          {plan.description}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-1">
                          <span className="text-foreground text-3xl font-black tracking-tighter">
                            R$ {plan.price}
                          </span>
                          <span className="text-text-secondary text-xs font-medium">
                            /mês
                          </span>
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* FEATURE ROWS */}
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature.label}
                  className={`border-t border-border ${idx % 2 === 0 ? "bg-background" : "bg-surface/30"
                    }`}
                >
                  <td className="px-6 py-4 text-foreground text-sm font-bold">
                    {feature.label}
                  </td>
                  {feature.values.map((val, i) => (
                    <td
                      key={i}
                      className="px-6 py-4 text-center border-l border-border"
                    >
                      <CellValue value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* CTA BUTTONS ROW */}
            <tfoot>
              <tr className="border-t border-border">
                <td className="px-6 py-6"></td>
                {plans.map((plan) => (
                  <td key={plan.name} className="px-6 py-6 border-l border-border">
                    <button
                      className="w-full py-3 text-xs font-black uppercase tracking-widest rounded-md transition-all bg-primary text-primary-foreground hover:brightness-110"
                    >
                      {plan.cta}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>

        {/* MOBILE CARDS */}
        <div className="md:hidden flex flex-col gap-8">
          {plans.map((plan, planIdx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                className={`border border-border rounded-md overflow-hidden ${plan.popular ? "border-primary" : ""
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: planIdx * 0.1 }}
              >
                {/* Card header */}
                <div className="p-6 flex flex-col gap-3 bg-surface/50">
                  <div className="flex items-center gap-2">
                    {plan.popular && (
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-widest rounded-sm">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon size={18} className="text-primary" />
                    <span className="text-foreground text-xl font-black tracking-tight">
                      {plan.name}
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs font-medium italic">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-foreground text-3xl font-black tracking-tighter">
                      R$ {plan.price}
                    </span>
                    <span className="text-text-secondary text-xs font-medium">
                      /mês
                    </span>
                  </div>
                </div>

                {/* Feature list */}
                <div className="flex flex-col">
                  {features.map((feature, idx) => (
                    <div
                      key={feature.label}
                      className={`flex items-center justify-between px-6 py-3 border-t border-border ${idx % 2 === 0 ? "" : "bg-surface/30"
                        }`}
                    >
                      <span className="text-foreground text-xs font-bold">
                        {feature.label}
                      </span>
                      <CellValue value={feature.values[planIdx]} />
                    </div>
                  ))}
                </div>

                {/* CTA at bottom */}
                <div className="p-6 border-t border-border">
                  <button
                    className="w-full py-3 text-xs font-black uppercase tracking-widest rounded-md transition-all bg-primary text-primary-foreground hover:brightness-110"
                  >
                    {plan.cta}
                  </button>
                </div>


              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;