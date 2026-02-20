import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Ticket,
  Crown,
  Star,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const stats = [
  { value: "+30%", label: "Aumento de Receita" },
  { value: "-5h", label: "Tempo Admin/Semana" },
];

/* ============ TAB CONFIG ============ */

const tabLabels = ["Visão Geral", "Equipe", "Serviços", "Produtos"];

/* ============ SHARED HEADER ============ */

const DashHeader = () => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-border/50 mb-3 sm:mb-4 gap-2 sm:gap-0">
    <div className="flex flex-col gap-0.5 sm:gap-1">
      <h3 className="text-foreground text-xs sm:text-sm font-bold tracking-tight text-left border-none p-0 inline">Estatísticas</h3>
      <p className="text-text-secondary text-[8px] sm:text-[10px] font-medium text-left border-none p-0">
        Acompanhe o desempenho do seu negócio
      </p>
    </div>
    <div className="flex items-center gap-1.5 sm:gap-2 border border-border bg-surface/30 hover:bg-surface rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-text-secondary hover:text-foreground transition-colors cursor-pointer text-[8px] sm:text-[9px] font-medium shadow-sm">
      <CalendarDays className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
      Últimos 30 dias
      <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 sm:ml-1" />
    </div>
  </div>
);

/* ============ TAB BAR ============ */

const TabBar = ({ active }: { active: number }) => (
  <div className="flex p-0.5 sm:p-1 mx-4 sm:mx-6 mb-3 sm:mb-4 bg-surface/40 rounded-md border border-border overflow-x-auto scrollbar-none">
    {tabLabels.map((tab, i) => (
      <div
        key={tab}
        className={`flex-1 min-w-[65px] sm:min-w-[80px] py-1.5 sm:py-1.5 text-center text-[7.5px] sm:text-[9px] font-semibold transition-all rounded-sm cursor-pointer whitespace-nowrap px-1 sm:px-0 ${i === active
          ? "bg-background text-foreground shadow-sm border border-border/50"
          : "text-text-secondary hover:text-foreground"
          }`}
      >
        {tab}
      </div>
    ))}
  </div>
);

/* ============ SLIDE 1 — VISÃO GERAL ============ */

const SlideVisaoGeral = () => (
  <div className="flex flex-col h-full bg-background border border-border rounded-xl overflow-hidden shadow-sm">
    <DashHeader />
    <TabBar active={0} />

    <div className="flex-1 px-6 pb-6 flex flex-col gap-5 overflow-y-auto scrollbar-thin">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {[
          { label: "Faturamento Bruto", value: "R$ 26.046,00", icon: DollarSign, change: "+10,0%", sub: "vs mês anterior", iconColor: "text-primary" },
          { label: "Desp. + Comissões", value: "- R$ 9.434,20", icon: TrendingDown, change: null, sub: "Despesas / Comissões", iconColor: "text-destructive" },
          { label: "Lucro Líquido", value: "R$ 16.611,80", icon: TrendingUp, change: null, sub: "Receita - Gastos", iconColor: "text-emerald-400" },
          { label: "Atendimentos", value: "6", icon: Users, change: "+2", sub: "vs mês anterior", iconColor: "text-purple-400" },
          { label: "Ticket Médio", value: "R$ 4.341,00", icon: Ticket, change: "+5,0%", sub: "vs mês anterior", iconColor: "text-sky-400" },
        ].map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="border border-border/80 bg-surface/20 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary text-[8px] font-medium tracking-wide uppercase">{kpi.label}</span>
                <div className="p-1 bg-background rounded border border-border/50 group-hover:border-primary/30 transition-colors">
                  <Icon size={10} className={kpi.iconColor} />
                </div>
              </div>
              <span className={`text-foreground text-[11px] xl:text-[13px] font-bold tracking-tight`}>{kpi.value}</span>
              {kpi.change ? (
                <span className="text-emerald-400 text-[6px] xl:text-[7px] font-semibold flex items-center gap-1">
                  <TrendingUp size={7} /> {kpi.change} <span className="text-text-secondary font-medium">{kpi.sub}</span>
                </span>
              ) : (
                <span className="text-text-secondary text-[6px] xl:text-[7px] font-medium leading-tight">{kpi.sub}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Revenue Chart */}
      <div className="border border-border/80 bg-surface/10 rounded-lg p-4 sm:p-5 flex-1 relative flex flex-col min-h-[160px] sm:min-h-[220px]">
        <div className="flex flex-col gap-0.5 sm:gap-1 mb-4 sm:mb-6">
          <span className="text-foreground text-[10px] sm:text-[11px] font-bold tracking-tight">Tendência de Faturamento</span>
          <span className="text-text-secondary text-[7px] sm:text-[8px] font-medium">Histórico do período (19/01/26 - 17/02/26)</span>
        </div>

        <div className="relative flex-1 flex items-end">
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-text-secondary text-[7px] font-medium pr-3">
            <span>R$ 28k</span><span>R$ 21k</span><span>R$ 14k</span><span>R$ 7k</span><span>R$ 0</span>
          </div>

          <div className="ml-10 flex-1 h-full relative mb-6">
            <div className="absolute inset-0 grid grid-rows-4">
              {[0, 1, 2, 3].map((i) => (<div key={i} className="border-t border-border/40 border-dashed" />))}
              <div className="border-t border-border/80" />
            </div>

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-[calc(100%-24px)] overflow-visible">
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 85 C 7.5 85, 7.5 70, 15 70 C 22.5 70, 22.5 75, 30 75 C 37.5 75, 37.5 50, 45 50 C 52.5 50, 52.5 55, 60 55 C 67.5 55, 67.5 30, 75 30 C 81.5 30, 81.5 40, 88 40 C 94 40, 94 15, 100 15 L 100 100 L 0 100 Z"
                fill="url(#chart-gradient)"
              />
              <path
                d="M 0 85 C 7.5 85, 7.5 70, 15 70 C 22.5 70, 22.5 75, 30 75 C 37.5 75, 37.5 50, 45 50 C 52.5 50, 52.5 55, 60 55 C 67.5 55, 67.5 30, 75 30 C 81.5 30, 81.5 40, 88 40 C 94 40, 94 15, 100 15"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>


            {/* Last active point with pulse */}
            <div className="absolute left-[100%] top-[15%] w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))] -ml-[4px] -mt-[4px] z-10">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
            </div>

            <div className="absolute top-[3%] right-3 bg-foreground text-background text-[7px] font-bold px-2 py-1 rounded shadow-md opacity-100 z-20">
              R$ 26.046
            </div>

            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-text-secondary text-[7px] font-medium pt-2 tabular-nums">
              <span>19/01</span>
              <span>26/01</span>
              <span>02/02</span>
              <span>09/02</span>
              <span>16/02</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ============ SLIDE 2 — EQUIPE ============ */

const SlideEquipe = () => {
  const teamData = [
    { name: "Carlos André Monteiro", value: 12000, pct: 100 },
    { name: "Marcelo Henrique", value: 11000, pct: 92 },
    { name: "Pedro Teixeira", value: 2000, pct: 17 }
  ];

  return (
    <div className="flex flex-col h-full bg-background border border-border rounded-md overflow-hidden">
      <DashHeader />
      <TabBar active={1} />
      <div className="flex-1 px-4 pb-4 flex flex-col gap-3 overflow-y-auto scrollbar-thin">
        {/* Horizontal Bar Chart */}
        <div className="border border-border rounded-sm p-3">
          <div className="flex flex-col gap-0.5 mb-3">
            <span className="text-foreground text-[9px] font-black">Faturamento por Profissional</span>
            <span className="text-text-secondary text-[7px] font-medium">19/01/26 - 17/02/26</span>
          </div>
          <div className="flex flex-col gap-2">
            {teamData.map((p) => (
              <div key={p.name} className="flex items-center gap-3">
                <span className="text-foreground text-[7px] font-bold w-20 text-right truncate">{p.name}</span>
                <div className="flex-1 h-5 bg-surface rounded-sm overflow-hidden">
                  <div className="h-full bg-primary rounded-sm" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
            <div className="flex justify-between pl-[calc(80px+12px)] text-text-secondary text-[6px] font-bold mt-1">
              <span>R$0</span><span>R$3000</span><span>R$6000</span><span>R$9000</span><span>R$12000</span>
            </div>
          </div>
        </div>

        {/* Performance Table */}
        <div className="border border-border rounded-sm p-3">
          <div className="flex flex-col gap-0.5 mb-3">
            <span className="text-foreground text-[9px] font-black">Desempenho Detalhado</span>
            <span className="text-text-secondary text-[7px] font-medium">Ranking por faturamento gerado</span>
          </div>
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-text-secondary text-[7px] font-bold uppercase tracking-wider border-b border-border">
                  <th className="text-left pb-2">Profissional</th>
                  <th className="text-center pb-2">Qtd. Cortes</th>
                  <th className="text-center pb-2">Faturamento</th>
                  <th className="text-right pb-2">Comissão</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Pablo Henrique", cuts: 1, revenue: "R$ 12.000", commission: "R$ 6.000", rank: 1 },
                  { name: "Gabe", cuts: 2, revenue: "R$ 11.000", commission: "R$ 1.100", rank: 2 },
                  { name: "Zulio", cuts: 2, revenue: "R$ 2.000", commission: "R$ 1.000", rank: 3 },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-border/30">
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        {row.rank === 1 && <Crown size={10} className="text-primary" />}
                        <div className="w-5 h-5 rounded-full bg-muted border border-border flex items-center justify-center text-primary text-[7px] font-black">{row.name.charAt(0)}</div>
                        <span className="text-foreground text-[8px] font-bold">{row.name}</span>
                      </div>
                    </td>
                    <td className="text-center text-foreground text-[8px] font-medium">{row.cuts}</td>
                    <td className="text-center text-primary text-[8px] font-bold">{row.revenue}</td>
                    <td className="text-right text-foreground text-[8px] font-medium">{row.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============ SLIDE 3 — SERVIÇOS ============ */

const SlideServicos = () => (
  <div className="flex flex-col h-full bg-background border border-border rounded-md overflow-hidden">
    <DashHeader />
    <TabBar active={2} />
    <div className="flex-1 px-4 pb-4 flex flex-col gap-3 overflow-y-auto scrollbar-thin">
      {/* Donut Chart */}
      <div className="border border-border rounded-sm p-3">
        <div className="flex flex-col gap-0.5 mb-3">
          <span className="text-foreground text-[9px] font-black">Distribuição de Serviços</span>
          <span className="text-text-secondary text-[7px] font-medium">19/01/26 - 17/02/26</span>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="border border-border rounded-sm px-2 py-1 text-[7px] font-bold text-foreground">Corte Degradê · 67%</div>
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="14" strokeDasharray={`${67 * 2.2} ${100 * 2.2}`} />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#a855f7" strokeWidth="14" strokeDasharray={`${17 * 2.2} ${100 * 2.2}`} strokeDashoffset={`${-67 * 2.2}`} />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#38bdf8" strokeWidth="14" strokeDasharray={`${16 * 2.2} ${100 * 2.2}`} strokeDashoffset={`${-(67 + 17) * 2.2}`} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-primary text-[10px] font-black">67%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-3">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-primary rounded-full" /><span className="text-text-secondary text-[7px] font-medium">Corte Degradê</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-purple-400 rounded-full" /><span className="text-text-secondary text-[7px] font-medium">Barba Completa</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-sky-400 rounded-full" /><span className="text-text-secondary text-[7px] font-medium">Corte + Barba</span></div>
        </div>
      </div>

      {/* Highlight cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-border rounded-sm p-3 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-text-secondary text-[7px] font-bold"><Star size={9} className="text-primary" /> Carro Chefe</div>
          <span className="text-primary text-[10px] font-black">Corte Degradê</span>
          <span className="text-text-secondary text-[7px] font-medium">4 agendamentos (67% do total)</span>
          <span className="px-2 py-0.5 bg-primary/10 text-primary text-[6px] font-bold rounded-sm w-fit">Mais Popular</span>
        </div>
        <div className="border border-border rounded-sm p-3 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-text-secondary text-[7px] font-bold"><DollarSign size={9} className="text-primary" /> Maior Lucratividade</div>
          <span className="text-primary text-[10px] font-black">Barba Completa</span>
          <span className="text-text-secondary text-[7px] font-medium">R$ 12.000 em receita</span>
          <span className="px-2 py-0.5 bg-sky-400/10 text-sky-400 text-[6px] font-bold rounded-sm w-fit">Alto Valor</span>
        </div>
      </div>

      {/* Service Details */}
      <div className="border border-border rounded-sm p-3">
        <div className="flex flex-col gap-0.5 mb-3">
          <span className="text-foreground text-[9px] font-black">Detalhamento de Serviços</span>
          <span className="text-text-secondary text-[7px] font-medium">Ranking por quantidade de agendamentos</span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Corte Degradê", count: 4, value: "4.070", pct: 100, color: "bg-primary" },
            { name: "Barba Completa", count: 1, value: "1.070", pct: 26, color: "bg-primary" },
            { name: "Corte + Barba", count: 1, value: "1.070", pct: 26, color: "bg-primary" },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <span className="text-foreground text-[7px] font-bold"># {s.count}</span>
              <span className="text-foreground text-[7px] font-medium flex-1">{s.name}</span>
              <div className="w-32 h-2 bg-surface rounded-full overflow-hidden">
                <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
              </div>
              <span className="text-primary text-[7px] font-bold w-12 text-right">R${s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ============ SLIDE 4 — PRODUTOS ============ */

const SlideProdutos = () => (
  <div className="flex flex-col h-full bg-background border border-border rounded-md overflow-hidden">
    <DashHeader />
    <TabBar active={3} />
    <div className="flex-1 px-4 pb-4 flex flex-col gap-3 overflow-y-auto scrollbar-thin">
      {/* Horizontal Bar Chart */}
      <div className="border border-border rounded-sm p-3">
        <div className="flex flex-col gap-0.5 mb-3">
          <span className="text-foreground text-[9px] font-black">Top 5 Produtos Mais Vendidos</span>
          <span className="text-text-secondary text-[7px] font-medium">19/01/26 - 17/02/26</span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Pomada Modeladora", value: 3, pct: 100 },
            { name: "Óleo para Barba", value: 1, pct: 33 },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className="text-foreground text-[7px] font-bold w-24 text-right truncate">{p.name}</span>
              <div className="flex-1 h-5 bg-surface rounded-sm overflow-hidden">
                <div className="h-full bg-sky-400 rounded-sm" style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
          <div className="flex justify-between pl-[calc(96px+12px)] text-text-secondary text-[6px] font-bold mt-1">
            <span>0</span><span>0.75</span><span>1.5</span><span>2.25</span><span>3</span>
          </div>
        </div>
      </div>

      {/* Sales Table */}
      <div className="border border-border rounded-sm p-3">
        <div className="flex flex-col gap-0.5 mb-3">
          <span className="text-foreground text-[9px] font-black">Desempenho de Vendas</span>
          <span className="text-text-secondary text-[7px] font-medium">Ranking por quantidade vendida</span>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="text-text-secondary text-[7px] font-bold uppercase tracking-wider border-b border-border">
                <th className="text-left pb-2">Produto</th>
                <th className="text-center pb-2">Vendidos</th>
                <th className="text-center pb-2">Receita</th>
                <th className="text-right pb-2">Estoque</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Pomada Modeladora", sold: 3, revenue: "R$ 36", stock: 3, stockLow: true },
                { name: "Óleo para Barba", sold: 1, revenue: "R$ 10", stock: 8, stockLow: true },
              ].map((row) => (
                <tr key={row.name} className="border-b border-border/30">
                  <td className="py-2 text-foreground text-[8px] font-bold">{row.name}</td>
                  <td className="text-center text-foreground text-[8px] font-bold">{row.sold}</td>
                  <td className="text-center text-primary text-[8px] font-bold">{row.revenue}</td>
                  <td className="text-right">
                    <span className={`px-2 py-0.5 text-[7px] font-bold rounded-full ${row.stockLow ? "bg-destructive/20 text-destructive" : "bg-primary/10 text-primary"}`}>
                      {row.stock} un
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

/* ============ SLIDES CONFIG ============ */

const slides = [
  { component: SlideVisaoGeral, label: "Visão Geral" },
  { component: SlideEquipe, label: "Equipe" },
  { component: SlideServicos, label: "Serviços" },
  { component: SlideProdutos, label: "Produtos" },
];

/* ============ MAIN COMPONENT ============ */

const FinancialSection = () => {
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
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-surface flex justify-center data-grid border-y border-border">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-12 sm:gap-16 md:gap-12 items-center">
        {/* Left — text content */}
        <motion.div
          className="flex flex-col gap-8 w-full md:w-[40%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            Gestão Inteligente
          </div>

          <h2 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Controle Financeiro Total
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-medium">
            Acompanhe o fluxo de caixa, calcule comissões automaticamente e
            visualize o crescimento do seu negócio em tempo real. Tome decisões
            baseadas em dados, não em achismos.
          </p>

          <div className="grid grid-cols-2 gap-0 mt-4 border border-border bg-background">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-2 p-5 sm:p-8 ${index === 0 ? "border-r border-border" : ""}`}
              >
                <span className="text-3xl sm:text-4xl font-black text-primary tracking-tighter italic">
                  {stat.value}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a
              href="#precos"
              className="group flex items-center gap-4 text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-foreground hover:border-foreground transition-all"
            >
              Ver planos
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right — carousel */}
        <motion.div
          className="w-full md:w-[60%] flex flex-col gap-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tab indicators */}
          <div className="flex items-center gap-2 justify-start md:justify-center flex-nowrap md:flex-wrap overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                onClick={() => scrollTo(index)}
                className={`shrink-0 px-3 py-2 text-[9px] font-black uppercase tracking-widest border rounded-sm transition-all cursor-pointer ${current === index
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-text-secondary hover:border-primary/40 hover:text-foreground"
                  }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <Carousel setApi={setApi} opts={{ loop: true, watchDrag: false }} className="w-full">
            <CarouselContent>
              {slides.map((slide, i) => {
                const SlideComponent = slide.component;
                return (
                  <CarouselItem key={i}>
                    <div className="h-[460px] sm:h-[500px] md:h-auto md:aspect-[4/3]">
                      <SlideComponent />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pt-1">
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
      </div>
    </section>
  );
};

export default FinancialSection;