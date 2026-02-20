import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
    MessageCircle,
    CalendarDays,
    Clock,
    User,
    Scissors,
    XCircle,
    CheckCircle2,
    Bell,
    ArrowRight
} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

/* ============ MOCKUPS DAS MENSAGENS ============ */

interface MessageDetails {
    icon: any;
    label: string;
    value: string;
}

interface MessageContent {
    header: string;
    emoji: string;
    body: string;
    details?: MessageDetails[];
    footer: string;
    time: string;
}

const MessageBubble = ({ type, content }: { type: "agendamento" | "cancelamento", content: MessageContent }) => {
    const isCancel = type === "cancelamento";

    return (
        <div className="bg-[#1F2C34] rounded-lg p-3 sm:p-4 w-full max-w-[280px] sm:max-w-[320px] shadow-md relative rounded-tl-none ml-2">
            {/* Triângulo da bolha */}
            <div className="absolute top-0 -left-2 w-0 h-0 border-[10px] border-transparent border-t-[#1F2C34] border-r-[#1F2C34]"></div>

            <div className="flex flex-col gap-2 text-[#E9EDEF] text-[11px] sm:text-[13px] leading-relaxed font-sans">
                <p>
                    <span className="font-bold">{content.header}</span> {content.emoji}
                </p>

                <p>{content.body}</p>

                {content.details && (
                    <div className="flex flex-col gap-1 mt-1 bg-[#111B21] p-2 rounded-md border-l-4 border-primary/50">
                        {content.details.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex items-center gap-2 text-[#D1D7DB] text-xs">
                                    <Icon size={14} className={isCancel ? "text-red-400" : "text-primary"} />
                                    <span><span className="font-bold text-[#E9EDEF]">{item.label}:</span> {item.value}</span>
                                </div>
                            )
                        })}
                    </div>
                )}

                {content.footer && <p className="mt-1 text-xs text-[#8696A0]">{content.footer}</p>}
            </div>

            <div className="flex justify-end items-end gap-1 mt-1">
                <span className="text-[#8696A0] text-[10px]">{content.time}</span>
            </div>
        </div>
    );
};

/* ============ SLIDE 1 — NOVO AGENDAMENTO ============ */

const SlideAgendamento = () => (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#0B141A] border border-border rounded-md overflow-hidden relative">
        {/* Background Pattern WhatsApp style - simulating via repeated dots */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6">
            <MessageBubble
                type="agendamento"
                content={{
                    header: "Olá, Pablo Henrique!",
                    emoji: "👋",
                    body: "Você tem um novo agendamento na Rigel Barber!",
                    details: [
                        { icon: CalendarDays, label: "Data", value: "terça-feira, 17/02" },
                        { icon: Clock, label: "Horário", value: "10:30" },
                        { icon: User, label: "Cliente", value: "Júlio César" },
                        { icon: Scissors, label: "Serviço", value: "Corte Degradê" }
                    ],
                    footer: "Por favor, vá para o sistema para mais detalhes e para confirmar ou rejeitar este agendamento. Obrigado!",
                    time: "06:49"
                }}
            />
        </div>
    </div>
);

/* ============ SLIDE 2 — CANCELAMENTO ============ */

const SlideCancelamento = () => (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#0B141A] border border-border rounded-md overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6">
            <MessageBubble
                type="cancelamento"
                content={{
                    header: "Oi, Pablo Henrique.",
                    emoji: "",
                    body: "O cliente Júlio César na Rigel Barber cancelou seu agendamento.",
                    details: [
                        { icon: CalendarDays, label: "Data", value: "terça-feira, 17/02" },
                        { icon: Clock, label: "Horário", value: "10:30" },
                        { icon: XCircle, label: "Status", value: "Cancelado pelo Cliente" }
                    ],
                    footer: "",
                    time: "20:58"
                }}
            />
        </div>
    </div>
);

const slides = [
    { component: SlideAgendamento, label: "Novos Agendamentos", icon: CheckCircle2 },
    { component: SlideCancelamento, label: "Cancelamentos", icon: XCircle },
];

/* ============ MAIN COMPONENT ============ */

const WhatsappSection = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const scrollTo = useCallback(
        (index: number) => {
            api?.scrollTo(index);
        },
        [api]
    );

    return (
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-surface flex justify-center border-b border-border">
            <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-12 sm:gap-16 md:gap-24 items-center">

                {/* Left (Text Content) */}
                <motion.div
                    className="flex flex-col gap-8 w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-[#25D366] font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 sm:gap-4">
                        <span className="w-8 sm:w-12 h-[1px] bg-[#25D366]"></span>
                        Notificações em Tempo Real
                    </div>

                    <h2 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-left">
                        Integração com <span className="text-[#25D366]">WhatsApp</span>
                    </h2>

                    <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-medium text-left">
                        Mantenha sua equipe e seus clientes sempre atualizados. Nosso sistema envia
                        mensagens automáticas para confirmar agendamentos, notificar cancelamentos
                        e lembrar seus clientes.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4 p-4 border border-border rounded-lg bg-background/50 hover:border-[#25D366]/50 transition-colors">
                            <div className="mt-1 w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                                <Bell size={20} />
                            </div>
                            <div>
                                <h4 className="text-foreground font-bold uppercase text-xs sm:text-sm mb-1">Automático & Sem Esforço</h4>
                                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">Você foca no corte, nós cuidamos da comunicação. Tudo enviado automaticamente.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border border-border rounded-lg bg-background/50 hover:border-[#25D366]/50 transition-colors">
                            <div className="mt-1 w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                                <MessageCircle size={20} />
                            </div>
                            <div>
                                <h4 className="text-foreground font-bold uppercase text-xs sm:text-sm mb-1">Redução de No-Shows</h4>
                                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">Lembretes garantem que seu cliente não esqueça o horário marcado.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <a href="#precos" className="group flex w-fit items-center gap-4 text-[#25D366] text-xs font-black uppercase tracking-widest border-b-2 border-[#25D366] pb-2 hover:text-foreground hover:border-foreground transition-all">
                            Ver planos com integração
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Right (Carousel) */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col gap-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Tab indicators */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap justify-center md:justify-start">
                        {slides.map((slide, index) => {
                            const Icon = slide.icon;
                            return (
                                <button
                                    key={slide.label}
                                    onClick={() => scrollTo(index)}
                                    className={`flex items-center gap-2 px-3 py-2 text-[9px] font-black uppercase tracking-widest border rounded-sm transition-all cursor-pointer ${current === index
                                        ? "border-[#25D366] bg-[#25D366]/10 text-[#25D366]"
                                        : "border-border text-text-secondary hover:border-[#25D366]/40 hover:text-foreground"
                                        }`}
                                >
                                    <Icon size={12} />
                                    <span className="">{slide.label}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Carousel */}
                    <Carousel setApi={setApi} opts={{ loop: true, watchDrag: false }} className="w-full">
                        <CarouselContent>
                            {slides.map((slide, i) => {
                                const SlideComponent = slide.component;
                                return (
                                    <CarouselItem key={i}>
                                        <div className="aspect-[5/4] sm:aspect-[4/3] md:aspect-video w-full flex items-center justify-center">
                                            <SlideComponent />
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>

                    {/* Dots */}
                    <div className="flex items-center justify-center md:justify-start gap-2 pt-2 pl-1">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${current === index
                                    ? "w-8 bg-[#25D366]"
                                    : "w-3 bg-border hover:bg-text-secondary"
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhatsappSection;
