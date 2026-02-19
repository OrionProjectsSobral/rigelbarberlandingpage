import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "O sistema pode ser usado só no celular?",
        answer:
            "Não somente no celular. O sistema é totalmente compatível com diversos dispositivos, como computador, tablet e celular.",
    },
    {
        question: "Posso cancelar quando quiser?",
        answer:
            "Sim. Na plataforma da Orion você pode cancelar o plano quando quiser e continuar utilizando normalmente até o fim do período já pago.",
    },
    {
        question: "Como funciona o agendamento de clientes?",
        answer:
            "O cliente escolhe os serviços disponíveis na sua barbearia, seleciona o profissional desejado e escolhe a data e horário conforme a disponibilidade do barbeiro.",
    },
    {
        question: "Como funciona a integração com o WhatsApp?",
        answer:
            "O barbeiro pode enviar mensagens automatizadas para os clientes, informando detalhes sobre o serviço agendado, lembretes e confirmações.",
    },
];

const FAQItem = ({
    question,
    answer,
    index,
}: {
    question: string;
    answer: string;
    index: number;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="border border-border/60 rounded-md bg-surface/80 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-primary/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left cursor-pointer group"
            >
                <span className="text-foreground text-sm md:text-base font-bold uppercase tracking-wide leading-snug">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-primary/50 rounded-sm text-primary"
                >
                    <ChevronDown size={18} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                            <div className="border-l-2 border-primary/40 pl-5">
                                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-medium">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQSection = () => {
    return (
        <section
            className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background flex justify-center border-b border-border"
            id="faq"
        >
            <div className="max-w-[800px] w-full flex flex-col gap-14">
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
                        Ainda tem dúvidas?
                        <span className="w-12 h-[1px] bg-primary"></span>
                    </div>
                    <h2 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                        Perguntas{" "}
                        <span className="text-primary">Frequentes</span>
                    </h2>
                    <p className="text-text-secondary text-base sm:text-lg font-medium max-w-xl">
                        Tire suas dúvidas sobre a plataforma e descubra como podemos
                        ajudar o seu negócio a crescer.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
