import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Rocket,
    Eye,
    Heart,
    ArrowRight,
    Lightbulb,
    Shield,
    Target,
    Users,
    UserCheck,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const founders = [
    { name: "Pablo Henrique de Sousa" },
    { name: "Júlio César Saldanha Landim" },
    { name: "Gabriel Meireles Soares" },
    { name: "Christian Ximenes Paiva" },
];

const values = [
    { icon: Lightbulb, label: "Inovação contínua" },
    { icon: Shield, label: "Transparência" },
    { icon: Target, label: "Compromisso com resultados" },
    { icon: Users, label: "Cooperação e trabalho em equipe" },
    { icon: UserCheck, label: "Foco no cliente" },
];

const Sobre = () => {
    return (
        <div className="relative flex flex-col min-h-screen w-full dark">
            <Header />
            <main className="flex-1">
                {/* ===================== SEÇÃO 1 — HERO INSTITUCIONAL ===================== */}
                <section className="relative w-full py-24 md:py-36 px-6 flex justify-center data-grid overflow-hidden">
                    <div className="max-w-[900px] w-full flex flex-col gap-10 items-center text-center">
                        <motion.div
                            className="flex flex-col gap-8 items-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-primary"></span>
                                Sobre a Orion
                                <span className="w-12 h-[1px] bg-primary"></span>
                            </div>

                            <h1 className="text-foreground text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
                                Tecnologia que{" "}
                                <span className="text-primary not-italic">impulsiona</span>{" "}
                                negócios reais
                            </h1>

                            <p className="text-text-secondary text-lg md:text-xl font-medium leading-relaxed max-w-[700px] border-l-2 border-r-2 border-border px-8">
                                A Orion é uma empresa de tecnologia criada para facilitar a
                                gestão de comerciantes de todos os níveis — desde quem está
                                começando e enfrenta desafios diários até empresários já
                                consolidados no mercado.
                            </p>

                            <motion.a
                                href="#historia"
                                className="flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest hover:bg-foreground transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Conheça nossas soluções
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* ===================== SEÇÃO 2 — NOSSA HISTÓRIA ===================== */}
                <section
                    className="w-full py-24 md:py-32 px-6 bg-surface flex justify-center border-y border-border"
                    id="historia"
                >
                    <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                        {/* Texto à esquerda */}
                        <motion.div
                            className="flex flex-col gap-8 w-full md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-primary"></span>
                                Quem somos
                            </div>

                            <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                                Nossa{" "}
                                <span className="text-primary">História</span>
                            </h2>

                            <div className="flex flex-col gap-6">
                                <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium border-l-2 border-primary/40 pl-6">
                                    A Orion nasceu da iniciativa de quatro estudantes de
                                    Engenharia de Computação da Universidade Federal do Ceará
                                    (UFC), campus Sobral.
                                </p>
                                <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium border-l-2 border-border pl-6">
                                    Movidos pelo desejo de desenvolver soluções tecnológicas que
                                    realmente impactassem a vida de empreendedores, fundaram a
                                    empresa com o propósito de simplificar a gestão de negócios e
                                    fortalecer sonhos.
                                </p>
                                <p className="text-text-secondary text-sm leading-relaxed font-medium pl-6">
                                    Todos compartilham a visão de utilizar tecnologia como
                                    ferramenta de transformação para pequenos e grandes
                                    comerciantes.
                                </p>
                            </div>
                        </motion.div>

                        {/* Cards dos fundadores à direita */}
                        <motion.div
                            className="w-full md:w-1/2 flex flex-col gap-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary mb-6">
                                Fundadores
                            </div>
                            <div className="border-t border-l border-border">
                                {founders.map((founder, index) => (
                                    <motion.div
                                        key={founder.name}
                                        className="group flex items-center gap-5 p-6 border-b border-r border-border hover:bg-background/60 transition-all duration-300"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center border border-primary/50 text-primary font-black text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                        <span className="text-foreground text-sm md:text-base font-bold uppercase tracking-wide">
                                            {founder.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===================== SEÇÃO 3 — MISSÃO, VISÃO E VALORES ===================== */}
                <section className="w-full py-24 md:py-32 px-6 bg-background flex justify-center border-b border-border">
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
                                O que nos guia
                                <span className="w-12 h-[1px] bg-primary"></span>
                            </div>
                            <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                                Missão, Visão &{" "}
                                <span className="text-primary">Valores</span>
                            </h2>
                        </motion.div>

                        {/* 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Missão */}
                            <motion.div
                                className="group flex flex-col gap-6 p-8 md:p-10 bg-surface border border-border rounded-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center border border-primary/50 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Rocket size={22} />
                                </div>
                                <h3 className="text-foreground text-xl font-black uppercase tracking-tight">
                                    Missão
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed font-medium">
                                    Desenvolver soluções tecnológicas que simplifiquem a gestão de
                                    negócios, promovendo eficiência, crescimento e liberdade para
                                    empreendedores.
                                </p>
                            </motion.div>

                            {/* Visão */}
                            <motion.div
                                className="group flex flex-col gap-6 p-8 md:p-10 bg-surface border border-border rounded-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center border border-primary/50 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Eye size={22} />
                                </div>
                                <h3 className="text-foreground text-xl font-black uppercase tracking-tight">
                                    Visão
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed font-medium">
                                    Ser referência nacional em tecnologia para gestão empresarial,
                                    impactando positivamente milhares de comerciantes em todo o
                                    Brasil.
                                </p>
                            </motion.div>

                            {/* Valores */}
                            <motion.div
                                className="group flex flex-col gap-6 p-8 md:p-10 bg-surface border border-border rounded-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center border border-primary/50 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Heart size={22} />
                                </div>
                                <h3 className="text-foreground text-xl font-black uppercase tracking-tight">
                                    Valores
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {values.map((value) => {
                                        const Icon = value.icon;
                                        return (
                                            <li
                                                key={value.label}
                                                className="flex items-center gap-3 text-text-secondary text-sm font-medium"
                                            >
                                                <Icon
                                                    size={14}
                                                    className="text-primary flex-shrink-0"
                                                />
                                                {value.label}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===================== SEÇÃO 4 — CONEXÃO COM O RIGEL BARBER ===================== */}
                <section className="w-full py-24 md:py-32 px-6 bg-surface flex justify-center data-grid border-b border-border">
                    <motion.div
                        className="max-w-[900px] w-full text-center flex flex-col gap-10 items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-primary"></span>
                            Nosso Produto
                            <span className="w-12 h-[1px] bg-primary"></span>
                        </div>

                        <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
                            Conheça o{" "}
                            <span className="text-primary not-italic">Rigel Barber</span>
                        </h2>

                        <p className="text-text-secondary text-lg md:text-xl font-medium leading-relaxed max-w-[700px] border-x border-border px-10">
                            O Rigel Barber é uma das soluções desenvolvidas pela Orion, criada
                            especificamente para modernizar e otimizar a gestão de barbearias.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-0 pt-4">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/"
                                    className="flex items-center justify-center gap-3 h-16 px-14 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest hover:bg-foreground transition-all"
                                >
                                    Conheça o Rigel Barber
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Sobre;
