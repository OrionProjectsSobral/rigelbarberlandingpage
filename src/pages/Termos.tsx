import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const sections = [
    {
        number: "1",
        title: "Termos",
        paragraphs: [
            "Ao acessar ao site RigelBarber, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.",
        ],
    },
    {
        number: "2",
        title: "Uso de Licença",
        paragraphs: [
            "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site RigelBarber, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site RigelBarber; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.",
            "Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por RigelBarber a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.",
        ],
    },
    {
        number: "3",
        title: "Isenção de Responsabilidade",
        paragraphs: [
            "Os materiais no site da RigelBarber são fornecidos 'como estão'. RigelBarber não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
            "Além disso, o RigelBarber não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.",
        ],
    },
    {
        number: "4",
        title: "Limitações",
        paragraphs: [
            "Em nenhum caso o RigelBarber ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em RigelBarber, mesmo que RigelBarber ou um representante autorizado da RigelBarber tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.",
        ],
    },
    {
        number: "5",
        title: "Precisão dos Materiais",
        paragraphs: [
            "Os materiais exibidos no site da RigelBarber podem incluir erros técnicos, tipográficos ou fotográficos. RigelBarber não garante que qualquer material em seu site seja preciso, completo ou atual. RigelBarber pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, RigelBarber não se compromete a atualizar os materiais.",
        ],
    },
    {
        number: "6",
        title: "Links",
        paragraphs: [
            "O RigelBarber não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por RigelBarber do site. O uso de qualquer site vinculado é por conta e risco do usuário.",
        ],
    },
    {
        number: null,
        title: "Modificações",
        paragraphs: [
            "O RigelBarber pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.",
        ],
    },
    {
        number: null,
        title: "Lei Aplicável",
        paragraphs: [
            "Estes termos e condições são regidos e interpretados de acordo com as leis do RigelBarber e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.",
        ],
    },
];

const Termos = () => {
    return (
        <div className="relative flex flex-col min-h-screen w-full dark">
            <Header />
            <main className="flex-1">
                {/* HERO */}
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
                                Conformidade Legal
                                <span className="w-12 h-[1px] bg-primary"></span>
                            </div>

                            <h1 className="text-foreground text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
                                Termos de{" "}
                                <span className="text-primary not-italic">Uso</span>
                            </h1>

                            <p className="text-text-secondary text-lg md:text-xl font-medium leading-relaxed max-w-[700px] border-l-2 border-r-2 border-border px-8">
                                Leia atentamente os termos e condições de uso do RigelBarber
                                antes de utilizar nossos serviços.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CONTEÚDO */}
                <section className="w-full py-24 md:py-32 px-6 bg-surface flex justify-center border-y border-border">
                    <motion.div
                        className="max-w-[800px] w-full flex flex-col gap-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Ícone + título geral */}
                        <div className="flex items-center gap-3 pb-4 border-b border-border">
                            <div className="w-10 h-10 flex items-center justify-center border border-primary/50 rounded-md text-primary">
                                <FileText size={20} />
                            </div>
                            <h2 className="text-foreground text-2xl md:text-3xl font-black uppercase tracking-tight">
                                Termos de Serviço
                            </h2>
                        </div>

                        {/* Seções */}
                        {sections.map((section, sIdx) => (
                            <motion.div
                                key={section.title}
                                className="flex flex-col gap-5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                            >
                                <h3 className="text-foreground text-xl font-black uppercase tracking-tight border-b border-border pb-3 flex items-center gap-3">
                                    {section.number && (
                                        <span className="w-8 h-8 flex items-center justify-center border border-primary/50 rounded-md text-primary text-sm font-black shrink-0">
                                            {section.number}
                                        </span>
                                    )}
                                    {section.title}
                                </h3>

                                {section.paragraphs.map((paragraph, pIdx) => (
                                    <p
                                        key={pIdx}
                                        className={`text-text-secondary text-base leading-relaxed font-medium border-l-2 pl-6 ${pIdx === 0 ? "border-primary/40" : "border-border"
                                            }`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Termos;
