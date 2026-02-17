import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Clock,
  Scissors,
  CalendarDays,
  User,
  Phone,
  CheckCircle2,
  X,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const benefits = [
  "Link exclusivo para sua barbearia",
  "Sem necessidade de baixar app",
  "Integração com Google Calendar",
];

/* ============ SHARED STEPPER ============ */

const steps = ["Serviço", "Profissional", "Data/Hora", "Confirmar"];

const Stepper = ({ activeStep }: { activeStep: number }) => (
  <div className="flex items-center justify-between px-4 py-5">
    {steps.map((label, i) => (
      <div key={label} className="flex items-center gap-0 flex-1 last:flex-none">
        <div className="flex flex-col items-center gap-1.5">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${i < activeStep
              ? "bg-primary text-primary-foreground"
              : i === activeStep
                ? "bg-primary text-primary-foreground"
                : "border border-border text-text-secondary"
              }`}
          >
            {i < activeStep ? <Check size={12} /> : i + 1}
          </div>
          <span
            className={`text-[8px] font-bold uppercase tracking-wider ${i <= activeStep ? "text-foreground" : "text-text-secondary"
              }`}
          >
            {label}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div
            className={`flex-1 h-[2px] mx-2 mt-[-14px] rounded-full ${i < activeStep ? "bg-primary" : "bg-border"
              }`}
          />
        )}
      </div>
    ))}
  </div>
);

/* ============ APP HEADER ============ */

const AppHeader = () => (
  <div className="flex items-center justify-between px-4 py-3 border-b border-border">
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center">
        <Scissors size={12} className="text-primary" />
      </div>
      <span className="text-foreground text-xs font-black tracking-tight">
        Barbearia Rigel
      </span>
    </div>
    <X size={16} className="text-text-secondary" />
  </div>
);

/* ============ SLIDE 1 — SERVIÇO ============ */

const SlideServices = () => (
  <div className="flex flex-col h-full bg-background border border-border rounded-md overflow-hidden">
    <AppHeader />
    <Stepper activeStep={0} />

    <div className="flex-1 px-4 pb-4 flex flex-col gap-4 overflow-hidden">
      <div className="text-center flex flex-col gap-1 pt-2">
        <h3 className="text-foreground text-lg font-black italic">
          Selecione o <span className="text-primary">Serviço</span>
        </h3>
        <p className="text-text-secondary text-[10px] font-medium">
          Escolha o serviço desejado
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col gap-3 flex-1 overflow-hidden">
        {[
          { name: "Corte Degradê", price: "R$ 45,00", time: "30 min", selected: true },
          { name: "Barba Completa", price: "R$ 35,00", time: "25 min", selected: false },
          { name: "Corte + Barba", price: "R$ 70,00", time: "50 min", selected: false },
        ].map((s) => (
          <div
            key={s.name}
            className={`relative border rounded-md overflow-hidden transition-all ${s.selected ? "border-primary" : "border-border"
              }`}
          >
            {/* Image placeholder area */}
            <div className="h-24 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <Scissors size={28} className="text-text-secondary/30" />
              {s.selected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check size={12} className="text-primary-foreground" />
                </div>
              )}
            </div>
            <div className="p-3 flex flex-col gap-1">
              <span className="text-foreground text-xs font-black">{s.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-primary text-[11px] font-bold">{s.price}</span>
                <span className="text-text-secondary text-[9px] font-medium flex items-center gap-1">
                  <Clock size={9} /> {s.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ============ SLIDE 2 — PROFISSIONAL ============ */

const SlideProfessional = () => (
  <div className="flex flex-col h-full bg-background border border-border rounded-md overflow-hidden">
    <AppHeader />
    <Stepper activeStep={1} />

    <div className="flex-1 px-4 pb-4 flex flex-col gap-4 overflow-hidden">
      {/* Back */}
      <div className="flex items-center gap-2 text-text-secondary text-[10px] font-bold">
        <ChevronLeft size={12} /> Voltar
      </div>

      <div className="text-center flex flex-col gap-1">
        <h3 className="text-foreground text-lg font-black italic">
          Escolha o <span className="text-primary">Profissional</span>
        </h3>
        <p className="text-text-secondary text-[10px] font-medium">
          Profissionais disponíveis para: <span className="text-primary">Corte Degradê</span>
        </p>
      </div>

      {/* Professional list */}
      <div className="flex flex-col gap-3 flex-1">
        {[
          { name: "Carlos Silva", role: "Barbeiro" },
          { name: "Rafael Souza", role: "Barbeiro" },
          { name: "Bruno Santos", role: "Barbeiro" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-4 p-4 border border-border rounded-md hover:border-primary/40 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-primary font-black text-xs">
              {p.name.charAt(0)}
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-foreground text-xs font-bold">{p.name}</span>
              <span className="text-text-secondary text-[10px] font-medium">{p.role}</span>
            </div>
            <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center">
              <ChevronRight size={12} className="text-text-secondary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ============ SLIDE 3 — DATA E HORÁRIO ============ */

const SlideDateTime = () => (
  <div className="flex flex-col h-full bg-background border border-border rounded-md overflow-hidden">
    <AppHeader />
    <Stepper activeStep={2} />

    <div className="flex-1 px-4 pb-4 flex flex-col gap-4 overflow-hidden">
      {/* Back */}
      <div className="flex items-center gap-2 text-text-secondary text-[10px] font-bold">
        <ChevronLeft size={12} /> Voltar
      </div>

      <div className="text-center flex flex-col gap-1">
        <h3 className="text-foreground text-lg font-black italic">
          Data e <span className="text-primary">Horário</span>
        </h3>
        <p className="text-text-secondary text-[10px] font-medium">
          Corte Degradê com Carlos Silva
        </p>
      </div>

      {/* Calendar + Time grid */}
      <div className="flex flex-col sm:flex-row gap-3 flex-1">
        {/* Mini Calendar */}
        <div className="bg-surface border border-border rounded-md p-3 flex-1">
          <div className="flex items-center justify-between mb-3">
            <ChevronLeft size={12} className="text-text-secondary" />
            <span className="text-[10px] font-bold text-foreground">fevereiro 2026</span>
            <ChevronRight size={12} className="text-text-secondary" />
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {["dom", "seg", "ter", "qua", "qui", "sex", "sab"].map((d) => (
              <span key={d} className="text-text-secondary text-[7px] font-bold uppercase pb-1">
                {d}
              </span>
            ))}
            {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`aspect-square flex items-center justify-center text-[8px] font-bold rounded-full transition-all ${day === 19
                  ? "bg-primary text-primary-foreground"
                  : day < 17
                    ? "text-text-secondary/40"
                    : "text-foreground"
                  }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Time slots */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-1.5 text-text-secondary text-[8px] font-bold mb-1">
            <CalendarDays size={10} />
            quinta-feira, 19 de fevereiro
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              "09:00", "09:30", "10:00",
              "10:30", "11:00", "11:30",
              "13:00", "13:30", "14:00",
              "14:30", "15:00", "15:30",
            ].map((time) => (
              <div
                key={time}
                className={`py-1.5 text-center text-[8px] font-bold border rounded-sm transition-all ${time === "11:00"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground"
                  }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continue button */}
      <button className="w-full py-2.5 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-md">
        Continuar
      </button>
    </div>
  </div>
);

/* ============ SLIDE 4 — CONFIRMAÇÃO ============ */

const SlideConfirmation = () => (
  <div className="flex flex-col h-full bg-background border border-border rounded-md overflow-hidden">
    <AppHeader />
    <Stepper activeStep={3} />

    <div className="flex-1 px-4 pb-4 flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
      {/* Back */}
      <div className="flex items-center gap-2 text-text-secondary text-[10px] font-bold">
        <ChevronLeft size={12} /> Voltar
      </div>

      <div className="text-center flex flex-col gap-1">
        <h3 className="text-primary text-lg font-black italic">Confirmação</h3>
        <p className="text-text-secondary text-[10px] font-medium">
          Revise seu agendamento e confirme seus dados
        </p>
      </div>

      {/* Summary card */}
      <div className="border border-border rounded-md p-4 flex flex-col gap-3">
        <span className="text-foreground text-[10px] font-black uppercase tracking-wider">
          Resumo do Agendamento
        </span>

        {/* Professional */}
        <div className="flex items-center gap-3 pb-3 border-b border-border">
          <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-primary font-black text-[10px]">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-[10px] font-bold">Carlos Silva</span>
            <span className="text-text-secondary text-[8px] font-medium">Barbeiro</span>
          </div>
        </div>

        {/* Service */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground text-[9px] font-medium">
            <Scissors size={10} className="text-text-secondary" /> Corte Degradê
          </div>
          <div className="text-right">
            <span className="text-primary text-[10px] font-bold">R$ 45,00</span>
            <span className="text-text-secondary text-[8px] font-medium block">30 min</span>
          </div>
        </div>

        {/* Date/Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground text-[9px] font-medium">
            <CalendarDays size={10} className="text-text-secondary" /> qui, 19 de fevereiro
          </div>
          <div className="flex items-center gap-1 text-foreground text-[9px] font-medium">
            <Clock size={10} className="text-text-secondary" /> 11:00
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-foreground text-[10px] font-black">Total</span>
          <span className="text-primary text-sm font-black">R$ 45,00</span>
        </div>
      </div>

      {/* Form inputs */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-text-secondary text-[8px] font-bold">
            <User size={9} /> Seu Nome
          </div>
          <div className="border border-border rounded-sm px-3 py-2 text-text-secondary/50 text-[9px] font-medium">
            Digite seu nome completo
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-text-secondary text-[8px] font-bold">
            <Phone size={9} /> WhatsApp
          </div>
          <div className="border border-border rounded-sm px-3 py-2 text-text-secondary/50 text-[9px] font-medium">
            (11) 99999-9999
          </div>
        </div>
      </div>

      {/* Submit button */}
      <button className="w-full py-2.5 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-md">
        Solicitar Agendamento
      </button>
    </div>
  </div>
);

const slides = [
  { component: SlideServices, label: "Serviço", step: 1 },
  { component: SlideProfessional, label: "Profissional", step: 2 },
  { component: SlideDateTime, label: "Data & Hora", step: 3 },
  { component: SlideConfirmation, label: "Confirmação", step: 4 },
];

/* ============ MAIN COMPONENT ============ */

const BookingSection = () => {
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
    <section className="w-full py-24 px-6 bg-background flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Step indicators */}
          <div className="flex items-center gap-2 mb-2">
            {slides.map((slide, index) => (
              <button
                key={slide.step}
                onClick={() => scrollTo(index)}
                className={`flex items-center gap-2 px-3 py-2 text-[9px] font-black uppercase tracking-widest border rounded-sm transition-all cursor-pointer ${current === index
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-text-secondary hover:border-primary/40 hover:text-foreground"
                  }`}
              >
                <span
                  className={`w-4 h-4 flex items-center justify-center text-[8px] font-black rounded-sm ${current === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-text-secondary"
                    }`}
                >
                  {slide.step}
                </span>
                <span className="hidden sm:inline">{slide.label}</span>
              </button>
            ))}
          </div>

          {/* Carousel */}
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((slide) => {
                const SlideComponent = slide.component;
                return (
                  <CarouselItem key={slide.step}>
                    <div className="aspect-[3/4] max-h-[540px]">
                      <SlideComponent />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${current === index
                  ? "w-8 bg-primary"
                  : "w-3 bg-border hover:bg-text-secondary"
                  }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            Experiência do Cliente
          </div>

          <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Agendamento Simplificado
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed font-medium">
            Abandone o papel e caneta. Ofereça uma experiência de agendamento
            online impecável para seus clientes, disponível 24 horas por dia.
            Seus clientes podem escolher o serviço, o profissional e o horário
            em segundos.
          </p>

          <ul className="flex flex-col gap-4 mt-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-4 text-foreground text-sm font-bold uppercase tracking-widest"
              >
                <span className="w-5 h-5 flex items-center justify-center border border-primary text-primary">
                  <Check size={12} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <button className="group flex items-center gap-4 text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-foreground hover:border-foreground transition-all">
              Ver funcionalidades
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;