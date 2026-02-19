import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Privacidade = () => {
    return (
        <div className="relative flex flex-col min-h-screen w-full dark">
            <Header />
            <main className="flex-1">
                {/* HERO */}
                <section className="relative w-full py-16 sm:py-24 md:py-36 px-4 sm:px-6 flex justify-center data-grid overflow-hidden">
                    <div className="max-w-[900px] w-full flex flex-col gap-10 items-center text-center">
                        <motion.div
                            className="flex flex-col gap-8 items-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 sm:gap-4">
                                <span className="w-8 sm:w-12 h-[1px] bg-primary"></span>
                                Conformidade Legal
                                <span className="w-8 sm:w-12 h-[1px] bg-primary"></span>
                            </div>

                            <h1 className="text-foreground text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
                                Política de{" "}
                                <span className="text-primary not-italic">Privacidade</span>
                            </h1>

                            <p className="text-text-secondary text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-[700px] border-l-2 border-r-2 border-border px-4 sm:px-8">
                                A sua privacidade é importante para nós. Saiba como coletamos,
                                usamos e protegemos suas informações.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CONTEÚDO */}
                <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-surface flex justify-center border-y border-border">
                    <motion.div
                        className="max-w-[800px] w-full flex flex-col gap-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Seção 1 — Introdução */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center border border-primary/50 rounded-md text-primary">
                                    <Shield size={20} />
                                </div>
                                <h2 className="text-foreground text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight">
                                    Política de Privacidade
                                </h2>
                            </div>

                            <div className="flex flex-col gap-5">
                                <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-primary/40 pl-6">
                                    A sua privacidade é importante para nós. É política do
                                    RigelBarber respeitar a sua privacidade em relação a qualquer
                                    informação sua que possamos coletar no site RigelBarber, e
                                    outros sites que possuímos e operamos.
                                </p>

                                <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                    Solicitamos informações pessoais apenas quando realmente
                                    precisamos delas para lhe fornecer um serviço. Fazemo-lo por
                                    meios justos e legais, com o seu conhecimento e consentimento.
                                    Também informamos por que estamos coletando e como será usado.
                                </p>

                                <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                    Apenas retemos as informações coletadas pelo tempo necessário
                                    para fornecer o serviço solicitado. Quando armazenamos dados,
                                    protegemos dentro de meios comercialmente aceitáveis para
                                    evitar perdas e roubos, bem como acesso, divulgação, cópia, uso
                                    ou modificação não autorizados.
                                </p>

                                <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                    Não compartilhamos informações de identificação pessoal
                                    publicamente ou com terceiros, exceto quando exigido por lei.
                                </p>

                                <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                    O nosso site pode ter links para sites externos que não são
                                    operados por nós. Esteja ciente de que não temos controle sobre
                                    o conteúdo e práticas desses sites e não podemos aceitar
                                    responsabilidade por suas respectivas políticas de privacidade.
                                </p>

                                <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                    Você é livre para recusar a nossa solicitação de informações
                                    pessoais, entendendo que talvez não possamos fornecer alguns dos
                                    serviços desejados.
                                </p>

                                <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                    O uso continuado de nosso site será considerado como aceitação
                                    de nossas práticas em torno de privacidade e informações
                                    pessoais. Se você tiver alguma dúvida sobre como lidamos com
                                    dados do usuário e informações pessoais, entre em contacto
                                    connosco.
                                </p>
                            </div>
                        </div>

                        {/* Seção 2 — Google AdSense */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-foreground text-xl font-black uppercase tracking-tight border-b border-border pb-3">
                                Google AdSense
                            </h3>

                            <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-primary/40 pl-6">
                                O serviço Google AdSense que usamos para veicular publicidade usa
                                um cookie DoubleClick para veicular anúncios mais relevantes em
                                toda a Web e limitar o número de vezes que um determinado anúncio
                                é exibido para você.
                            </p>

                            <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                Para mais informações sobre o Google AdSense, consulte as FAQs
                                oficiais sobre privacidade do Google AdSense.
                            </p>

                            <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                Utilizamos anúncios para compensar os custos de funcionamento
                                deste site e fornecer financiamento para futuros desenvolvimentos.
                                Os cookies de publicidade comportamental usados por este site
                                foram projetados para garantir que você forneça os anúncios mais
                                relevantes sempre que possível, rastreando anonimamente seus
                                interesses e apresentando coisas semelhantes que possam ser do seu
                                interesse.
                            </p>

                            <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-border pl-6">
                                Vários parceiros anunciam em nosso nome e os cookies de
                                rastreamento de afiliados simplesmente nos permitem ver se nossos
                                clientes acessaram o site através de um dos sites de nossos
                                parceiros, para que possamos creditá-los adequadamente e, quando
                                aplicável, permitir que nossos parceiros afiliados ofereçam
                                qualquer promoção que pode fornecê-lo para fazer uma compra.
                            </p>
                        </div>

                        {/* Seção 3 — Compromisso do Usuário */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-foreground text-xl font-black uppercase tracking-tight border-b border-border pb-3">
                                Compromisso do Usuário
                            </h3>

                            <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-primary/40 pl-6">
                                O usuário se compromete a fazer uso adequado dos conteúdos e da
                                informação que o RigelBarber oferece no site e com caráter
                                enunciativo, mas não limitativo:
                            </p>

                            <div className="flex flex-col gap-3 pl-6">
                                <div className="flex gap-3 items-start">
                                    <span className="text-primary font-black text-sm mt-0.5">A)</span>
                                    <p className="text-text-secondary text-base leading-relaxed font-medium">
                                        Não se envolver em atividades que sejam ilegais ou contrárias
                                        à boa fé a à ordem pública;
                                    </p>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <span className="text-primary font-black text-sm mt-0.5">B)</span>
                                    <p className="text-text-secondary text-base leading-relaxed font-medium">
                                        Não difundir propaganda ou conteúdo de natureza racista,
                                        xenofóbica, jogos de sorte ou azar, qualquer tipo de
                                        pornografia ilegal, de apologia ao terrorismo ou contra os
                                        direitos humanos;
                                    </p>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <span className="text-primary font-black text-sm mt-0.5">C)</span>
                                    <p className="text-text-secondary text-base leading-relaxed font-medium">
                                        Não causar danos aos sistemas físicos (hardwares) e lógicos
                                        (softwares) do RigelBarber, de seus fornecedores ou terceiros,
                                        para introduzir ou disseminar vírus informáticos ou quaisquer
                                        outros sistemas de hardware ou software que sejam capazes de
                                        causar danos anteriormente mencionados.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Seção 4 — Mais Informações */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-foreground text-xl font-black uppercase tracking-tight border-b border-border pb-3">
                                Mais Informações
                            </h3>

                            <p className="text-text-secondary text-base leading-relaxed font-medium border-l-2 border-primary/40 pl-6">
                                Esperemos que esteja esclarecido e, como mencionado anteriormente,
                                se houver algo que você não tem certeza se precisa ou não,
                                geralmente é mais seguro deixar os cookies ativados, caso interaja
                                com um dos recursos que você usa em nosso site.
                            </p>

                            <p className="text-text-secondary text-sm font-bold text-center pt-4 border-t border-border uppercase tracking-widest">
                                Esta política é efetiva a partir de 17 de Fevereiro de 2026
                            </p>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Privacidade;
