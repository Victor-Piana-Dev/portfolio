"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  // Estrutura de dados da sua experiência profissional
  const experiences = [
    {
      role: "Desenvolvedor Front-end",
      company: "Agência de Tecnologia / House of Hagens", // Substitua pelo nome real da empresa se desejar
      period: "4 Anos de Atuação", // Ajuste o período conforme seu histórico real
      description: "Responsável pelo desenvolvimento, manutenção e evolução de interfaces web focadas em alta fidelidade visual, responsividade e performance.",
      keyClients: ["3M", "FINI", "HM Engenharia"],
      achievements: [
        "Arquitetura e codificação de interfaces modernas utilizando React e Next.js, sustentadas por uma base sólida em HTML5, CSS3 estruturado e JavaScript puro (ES6+).",
        "Entrega de interfaces de alta fidelidade com rigoroso controle de design (pixel-perfect) e robustez garantida em todos os navegadores e dispositivos (cross-browser compatibility).",
        "Colaboração direta com times de UI/UX Designers e profissionais de Back-end para integrar APIs e otimizar a experiência final do usuário.",
        "Foco constante na otimização de tempo de carregamento e boas práticas de SEO para soluções web corporativas."
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      
      {/* Cabeçalho da Seção */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">
          Experiência Profissional
        </h2>
        <div className="w-12 h-1 mt-2 bg-blue-500 rounded-full" />
        <p className="mt-4 text-zinc-400 max-w-xl">
          Minha trajetória no mercado corporativo, lidando com prazos, padrões de código exigentes e clientes de grande porte.
        </p>
      </div>

      {/* Linha do Tempo / Lista de Experiências */}
      <div className="space-y-12 relative md:before:absolute md:before:inset-0 md:before:left-8 md:before:w-[1px] md:before:bg-zinc-800">
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:pl-20 group"
          >
            {/* Ícone de Maleta na Linha do Tempo */}
            <div className="hidden md:block absolute left-0 sm:left-4 top-1.5 p-2 bg-zinc-950 text-blue-400 border border-zinc-800 rounded-xl group-hover:border-blue-500 group-hover:text-blue-300 transition-colors duration-300 z-10">
              <Briefcase size={20} />
            </div>

            {/* Conteúdo Principal do Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300">
              
              {/* Informações do Cargo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-400 font-medium">{exp.company}</p>
                </div>
                
                {/* Período / Data */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 w-fit h-fit">
                  <Calendar size={12} />
                  {exp.period}
                </div>
              </div>

              {/* Texto Descritivo */}
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Bloco de Marcas / Clientes Atendidos */}
              <div className="mb-6 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Grandes Clientes Atendidos:
                </span>
                <div className="flex flex-wrap gap-3">
                  {exp.keyClients.map((client, cIndex) => (
                    <span
                      key={cIndex}
                      className="px-3 py-1 text-sm font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm hover:border-zinc-700 transition-colors"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Entregas Técnicas (Bullet Points) */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Contribuições e Atividades Técnicas:
                </h4>
                <ul className="space-y-2.5">
                  {exp.achievements.map((ach, aIndex) => (
                    <li key={aIndex} className="flex gap-3 items-start text-sm text-zinc-400 leading-relaxed">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}