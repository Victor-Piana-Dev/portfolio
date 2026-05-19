"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bot, Database, Sparkles, Layers } from "lucide-react";

export default function Projects() {
    // Dados do Cine Versus estruturados diretamente para renderização limpa
    const featuredProject = {
        title: "Cine Versus",
        role: "Idealizador & Desenvolvedor Full Stack",
        description: "Uma plataforma web completa de análise e comparação inteligente de filmes que utiliza Next.js para entregar uma interface performática e focada em SEO. Para otimizar custos e tempo de resposta, o sistema utiliza renderização híbrida (SSR/ISR) e armazena em cache no Supabase os dados consolidados e as análises geradas via IA (Gemini), gerando uma economia massiva no consumo de tokens da API.",
        techStack: ["Next.js", "Supabase", "Gemini AI", "Tailwind CSS", "SSR & ISR", "SEO Optimization"],
        liveLink: "https://cineversus.com.br",
        highlights: [
            {
                icon: <Bot size={18} />,
                text: "Integração estratégica com a API do Gemini, processando análises profundas e comparativas de filmes com engenharia de prompt."
            },
            {
                icon: <Database size={18} />,
                text: "Arquitetura de dados eficiente com Supabase, utilizando cache para persistência de conteúdos e otimização do consumo de tokens."
            },
            {
                icon: <Layers size={18} />,
                text: "Performance otimizada através de renderização híbrida (SSR/ISR) no Next.js, garantindo carregamento rápido e foco em SEO."
            },
            {
                icon: <Sparkles size={18} />,
                text: "Arquitetura preparada para monetização, com espaços estratégicos configurados para AdSense e integração pronta para afiliados."
            }
        ]
    };

    return (
        <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">

            {/* Cabeçalho da Seção - Ajustado para o Singular */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">
                    Projeto em Destaque
                </h2>
                <div className="w-12 h-1 mt-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
                <p className="mt-4 text-zinc-400 max-w-2xl text-lg">
                    Uma aplicação web completa construída de ponta a ponta. Um produto digital real que une engenharia de software, inteligência artificial e estratégia de monetização.
                </p>
            </div>

            {/* Grid de Projetos - Foco total e exclusivo no Cine Versus */}
            <div className="grid gap-8">

                {/* Card Especial: Cine Versus */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group overflow-hidden rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center hover:border-zinc-700 transition-all duration-300"
                >
                    {/* Efeito luminoso interno no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Lado Esquerdo: Conteúdo Principal */}
                    <div className="flex-1 space-y-6 z-10">
                        <div>
                            {/* Ajustado para inline-block e adicionado mb-3 para dar o espaçamento perfeito */}
                            <span className="inline-block text-xs text-center font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3 py-1 mb-8 rounded-full border border-emerald-400/20">
                                {featuredProject.role}
                            </span>
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-zinc-100">
                                {featuredProject.title}
                            </h3>
                        </div>

                        <p className="text-zinc-400 text-lg leading-relaxed">
                            {featuredProject.description}
                        </p>

                        {/* Tecnologias Usadas */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {featuredProject.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Botão para Acessar */}
                        <div className="pt-4">
                            <a
                                href={featuredProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 w-full font-semibold text-zinc-950 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Acessar Plataforma
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Lado Direito: Diferenciais Técnicos Resolvidos */}
                    <div className="flex-1 w-full lg:max-w-md bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 lg:p-8 space-y-4 z-10">
                        <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">
                            Arquitetura & Engenharia
                        </h4>

                        <div className="space-y-4">
                            {featuredProject.highlights.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="p-2 bg-zinc-900 text-blue-400 rounded-lg border border-zinc-800 shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}