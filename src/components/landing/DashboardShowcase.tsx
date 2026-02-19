import { motion } from "framer-motion";
import {
  CalendarDays,
  TrendingUp,
  Users,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Scissors,
  Clock,
  User,
  BarChart3,
  ShoppingBag,
  Heart,
  Link2,
  CreditCard,
  Settings,
} from "lucide-react";

const highlights = [
  { icon: CalendarDays, label: "Visão Geral de Agendamentos" },
  { icon: TrendingUp, label: "Indicadores Financeiros" },
  { icon: Users, label: "Controle de Equipe" },
  { icon: LayoutDashboard, label: "Interface Intuitiva" },
];

/* ============ DESKTOP SIDEBAR ============ */

const sidebarItems = [
  { label: "Visão Geral", icon: LayoutDashboard, active: true, section: "Menu" },
  { label: "Meus Ganhos", icon: CreditCard, active: false, section: "Menu" },
  { label: "Serviços", icon: Scissors, active: false, section: "Gestão do Estabelecimento" },
  { label: "Clientes", icon: Users, active: false, section: "Gestão do Estabelecimento" },
  { label: "Equipe", icon: User, active: false, section: "Gestão do Estabelecimento" },
  { label: "Estoque", icon: ShoppingBag, active: false, section: "Gestão do Estabelecimento" },
  { label: "Assinaturas", icon: CreditCard, active: false, section: "Gestão do Estabelecimento" },
  { label: "Fidelidade", icon: Heart, active: false, section: "Gestão do Estabelecimento" },
  { label: "Integrações", icon: Link2, active: false, section: "Gestão do Estabelecimento" },
  { label: "Meu Plano", icon: Settings, active: false, section: "Gestão do Estabelecimento" },
];

/* ============ TIME SLOTS DATA ============ */

interface Appointment {
  client: string;
  service: string;
  duration: string;
  professional: string;
  status: string;
}

interface TimeSlot {
  time: string;
  appointment?: Appointment;
}

const desktopSlots: TimeSlot[] = [
  { time: "09:00" },
  { time: "09:30" },
  {
    time: "10:00",
    appointment: {
      client: "Rafael Mendes",
      service: "Corte Degradê",
      duration: "45 min",
      professional: "Carlos André",
      status: "Aguardando",
    },
  },
  { time: "10:30" },
  { time: "11:00" },
  { time: "11:30" },
  { time: "12:00" },
];

const mobileSlots: TimeSlot[] = [
  {
    time: "09:00",
    appointment: {
      client: "Lucas Ferreira...",
      service: "Barba Completa",
      duration: "30 min",
      professional: "Pedro Teixeira",
      status: "Aguardando",
    },
  },
  {
    time: "09:30",
    appointment: {
      client: "Matheus Costa...",
      service: "Corte + Barba",
      duration: "30 min",
      professional: "Marcelo Henrique",
      status: "Aguardando",
    },
  },
  {
    time: "10:00",
    appointment: {
      client: "André Oliveira...",
      service: "Corte Social",
      duration: "30 min",
      professional: "Carlos André",
      status: "Aguardando",
    },
  },
  { time: "10:30" },
];

/* ============ DESKTOP MOCKUP ============ */

const DesktopAgenda = () => (
  <div className="flex h-full bg-background border border-border rounded-md overflow-hidden text-left">
    {/* Sidebar */}
    <div className="w-28 bg-surface border-r border-border flex flex-col py-3 px-2 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-1.5 px-2 pb-3 border-b border-border mb-2">
        <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
          <Scissors size={7} className="text-primary" />
        </div>
        <span className="text-foreground text-[6px] font-black truncate">Barbearia Demo</span>
      </div>

      {/* Menu label */}
      <span className="text-text-secondary text-[5px] font-bold uppercase tracking-widest px-2 mb-1">Menu</span>
      {sidebarItems.filter(i => i.section === "Menu").map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`flex items-center gap-1.5 px-2 py-1.5 rounded-sm text-[6px] font-bold mb-0.5 ${item.active ? "text-primary" : "text-text-secondary"
              }`}
          >
            <Icon size={8} />
            <span>{item.label}</span>
          </div>
        );
      })}

      {/* Financeiro section header */}
      <div className="flex items-center justify-between px-2 mt-2 mb-1">
        <span className="text-text-secondary text-[5px] font-bold uppercase tracking-widest">Financeiro</span>
        <ChevronDown size={6} className="text-text-secondary" />
      </div>

      {/* Gestão section header */}
      <div className="flex items-center justify-between px-2 mt-2 mb-1">
        <span className="text-text-secondary text-[5px] font-bold uppercase tracking-widest">Gestão do Estab.</span>
        <ChevronDown size={6} className="text-text-secondary" />
      </div>
      {sidebarItems.filter(i => i.section === "Gestão do Estabelecimento").map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-1.5 px-2 py-1 text-text-secondary text-[6px] font-medium"
          >
            <Icon size={8} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>

    {/* Main content */}
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="w-3 h-3 text-text-secondary"><LayoutDashboard size={10} /></div>
        <div className="flex items-center gap-2">
          <Settings size={8} className="text-text-secondary" />
          <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary text-[6px] font-black">PH</div>
        </div>
      </div>

      {/* Page content */}
      <div className="flex-1 px-4 py-3 overflow-hidden">
        <h3 className="text-foreground text-[11px] font-black mb-0.5">Agenda</h3>
        <p className="text-text-secondary text-[7px] font-medium mb-3">
          Visualize e gerencie os agendamentos da barbearia
        </p>

        {/* Agenda card */}
        <div className="border border-border rounded-md p-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-foreground text-[9px] font-black">Agenda de Atendimentos</h4>
            <div className="flex items-center gap-1 text-text-secondary text-[6px] font-bold border border-border rounded-sm px-2 py-1">
              <CalendarDays size={8} />
              17 de fevereiro, 2026
            </div>
          </div>

          {/* Barbeiro filter */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-text-secondary text-[7px] font-medium">Barbeiro:</span>
            <div className="flex items-center gap-1 border border-border rounded-sm px-2 py-1 text-foreground text-[7px] font-bold">
              <Users size={8} className="text-primary" />
              Todos os Barbeiros
              <ChevronDown size={7} />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-primary text-[7px] font-bold border border-border rounded-sm px-2 py-1">
              <ChevronLeft size={8} /> Anterior
            </div>
            <span className="text-text-secondary text-[7px] font-bold">Hoje</span>
            <div className="flex items-center gap-1 text-text-secondary text-[7px] font-bold">
              Próximo <ChevronRight size={8} />
            </div>
          </div>

          {/* Barbers label */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
            <Users size={10} className="text-primary" />
            <span className="text-foreground text-[8px] font-bold">Todos os Barbeiros</span>
          </div>

          {/* Time slots */}
          <div className="flex flex-col gap-1">
            {desktopSlots.map((slot) => (
              <div key={slot.time} className="flex items-center gap-3">
                <span className="text-text-secondary text-[7px] font-bold w-8 shrink-0">
                  {slot.time}
                </span>
                {slot.appointment ? (
                  <div className="flex-1 border-l-2 border-primary bg-primary/10 rounded-sm px-3 py-2 flex items-center gap-3">
                    <div>
                      <span className="text-primary text-[8px] font-black block">
                        {slot.appointment.client}
                      </span>
                      <div className="flex items-center gap-2 text-text-secondary text-[6px] font-medium mt-0.5">
                        <span className="flex items-center gap-0.5"><Scissors size={6} /> {slot.appointment.service}</span>
                        <span className="flex items-center gap-0.5"><Clock size={6} /> {slot.appointment.duration}</span>
                      </div>
                      <span className="text-text-secondary text-[6px] font-medium flex items-center gap-0.5 mt-0.5">
                        <User size={6} /> Com: {slot.appointment.professional}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 border border-border/50 rounded-sm px-3 py-2">
                    <span className="text-text-secondary text-[7px] font-medium">
                      Sem agendamentos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ============ MOBILE MOCKUP ============ */

const MobileAgenda = () => (
  <div className="flex flex-col h-full bg-background overflow-hidden text-left">
    {/* Mobile top bar */}
    <div className="flex items-center justify-between px-3 py-2 border-b border-border">
      <LayoutDashboard size={10} className="text-text-secondary" />
      <div className="flex items-center gap-2">
        <Settings size={9} className="text-text-secondary" />
        <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary text-[6px] font-black">PH</div>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 px-3 py-3 overflow-hidden">
      <h3 className="text-foreground text-[10px] font-black mb-0.5">Agenda</h3>
      <p className="text-text-secondary text-[6px] font-medium mb-3">
        Visualize e gerencie os agendamentos da barbearia
      </p>

      {/* Agenda card */}
      <div className="border border-border rounded-md p-2.5">
        <h4 className="text-foreground text-[8px] font-black mb-2">Agenda de Atendimentos</h4>

        {/* Date */}
        <div className="flex items-center gap-1 text-text-secondary text-[6px] font-bold border border-border rounded-sm px-2 py-1 w-fit mb-2">
          <CalendarDays size={7} />
          18 de fevereiro, 2026
        </div>

        {/* Barbeiro filter */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-text-secondary text-[6px] font-medium">Barbeiro:</span>
          <div className="flex items-center gap-1 border border-border rounded-sm px-2 py-0.5 text-foreground text-[6px] font-bold">
            <Users size={7} className="text-primary" />
            Todos os Barbeiros
            <ChevronDown size={6} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-0.5 text-primary text-[6px] font-bold border border-border rounded-sm px-1.5 py-0.5">
            <ChevronLeft size={7} /> Anterior
          </div>
          <span className="text-foreground text-[6px] font-bold border border-border rounded-sm px-2 py-0.5">Hoje</span>
          <div className="flex items-center gap-0.5 text-text-secondary text-[6px] font-bold">
            Próximo <ChevronRight size={7} />
          </div>
        </div>

        {/* Barbers label */}
        <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-border">
          <Users size={9} className="text-primary" />
          <span className="text-foreground text-[7px] font-bold">Todos os Barbeiros</span>
        </div>

        {/* Time slots */}
        <div className="flex flex-col gap-1.5">
          {mobileSlots.map((slot) => (
            <div key={slot.time} className="flex items-start gap-2">
              <span className="text-text-secondary text-[6px] font-bold w-6 shrink-0 pt-1">
                {slot.time}
              </span>
              {slot.appointment ? (
                <div className="flex-1 border-l-2 border-primary bg-primary/10 rounded-sm px-2 py-1.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-primary text-[7px] font-black truncate max-w-[65%]">
                      {slot.appointment.client}
                    </span>
                    <span className="text-primary text-[5px] font-bold bg-primary/10 border border-primary/30 rounded-sm px-1 py-0.5">
                      {slot.appointment.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-secondary text-[5px] font-medium">
                    <span className="flex items-center gap-0.5"><Scissors size={5} /> {slot.appointment.service}</span>
                    <span className="flex items-center gap-0.5"><Clock size={5} /> {slot.appointment.duration}</span>
                  </div>
                  <span className="text-text-secondary text-[5px] font-medium flex items-center gap-0.5 mt-0.5">
                    <User size={5} /> Com: {slot.appointment.professional}
                  </span>
                </div>
              ) : (
                <div className="flex-1 border border-border/50 rounded-sm px-2 py-1.5">
                  <span className="text-text-secondary text-[6px] font-medium">
                    Sem agendamentos
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ============ MAIN COMPONENT ============ */

const DashboardShowcase = () => {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-surface flex justify-center border-b border-border overflow-hidden" id="sistema">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 sm:gap-16">
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
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-4xl">
            Controle Total na Palma da Mão
          </h2>
          <p className="text-text-secondary text-base sm:text-lg font-medium max-w-2xl">
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
                className={`flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 md:p-8 text-center ${index < 3 ? 'border-r border-border' : ''} ${index < 2 ? 'md:border-r' : ''}`}
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
            <div className="bg-background border border-border p-2 md:p-4 glow-primary rounded-md">
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
                <DesktopAgenda />
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
              className="absolute -right-2 sm:-right-4 md:right-8 -bottom-6 sm:-bottom-8 md:-bottom-12 w-20 sm:w-32 md:w-44 lg:w-52"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative bg-background border-2 border-border p-1 md:p-2 device-shadow animate-float rounded-lg">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3 md:h-4 bg-background border-x border-b border-border rounded-b-lg z-10"></div>

                {/* Screen content */}
                <div className="aspect-[9/19] bg-background overflow-hidden rounded-sm">
                  <MobileAgenda />
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