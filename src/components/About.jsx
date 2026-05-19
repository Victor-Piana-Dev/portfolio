"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Languages, Cpu } from "lucide-react";

export default function About() {
  // Lista de tecnologias categorizadas para renderizar dinamicamente
  const techCategories = [
    {
      title: "Front-end & Core",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
    },
    {
      title: "Back-end & Banco de Dados",
      skills: ["Node.js", "Supabase", "SQL", "MongoDB"]
    },
    {
      title: "Arquitetura & Performance",
      skills: ["SSR", "ISR", "SPA"]
    }
  ];

  // Variantes de animação para reutilizar nos cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="sobre" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      
      {/* Título da Seção */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">
          Sobre Mim
        </h2>
        <div className="w-12 h-1 mt-2 bg-blue-500 rounded-full" />
      </div>

      {/* Grid Principal: Texto à esquerda, Cards à direita */}
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        
        {/* Texto Descritivo e Tech Stack */}
        <div className="lg:col-span-7 space-y-8 text-zinc-400 text-lg leading-relaxed">
          <p>
            Sou um Desenvolvedor Web focado na construção de soluções eficientes e de alta performance. Minha trajetória profissional consolidou-se no Front-end, onde construí uma base sólida trabalhando diretamente com HTML, CSS e JavaScript puro (ES6+). Essa bagagem técnica foi fundamental para o meu domínio completo do ecossistema moderno de SPAs e SSR, desenvolvendo aplicações robustas com React e Next.js.
          </p>
          <p>
            Com pós-graduação em Desenvolvimento Web Full Stack, expandi minha atuação para o ecossistema do back-end e arquitetura de dados, o que me permite integrar interfaces fluidas a servidores e bancos de dados escaláveis.
          </p>

          {/* Tags de Habilidades Categorizadas */}
          <div className="pt-4 space-y-6">
            {techCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="mb-3 text-xs font-semibold tracking-wider uppercase text-zinc-500">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de Destaques Visuais (Cards à Direita) */}
        <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          
          {/* Card 1: Front-end (Sem termo "raiz") */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex gap-4"
          >
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl h-fit">
              <Code2 size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-200 mb-1">Arquitetura Front-end</h4>
              <p className="text-sm text-zinc-400">Componentização avançada e interfaces performáticas utilizando React e Next.js.</p>
            </div>
          </motion.div>

          {/* Card 2: Pós-Graduação */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex gap-4"
          >
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl h-fit">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-200 mb-1">Especialista Full Stack</h4>
              <p className="text-sm text-zinc-400">Pós-graduado com visão ponta a ponta, integrando client, servidores e segurança.</p>
            </div>
          </motion.div>

          {/* Card 3: Idiomas (Transparente e alinhado) */}
          {/* <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex gap-4"
          >
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl h-fit">
              <Languages size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-200 mb-1">Mentalidade Global</h4>
              <p className="text-sm text-zinc-400">Língua inglesa em desenvolvimento contínuo focado em contextos e times profissionais.</p>
            </div>
          </motion.div> */}

          {/* Card 4: Substituído de Games para Infra/Sistemas (Mais Técnico) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex gap-4"
          >
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl h-fit">
              <Cpu size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-200 mb-1">Soluções Modernas</h4>
              <p className="text-sm text-zinc-400">Prática na integração de serviços escaláveis usando Supabase, SQL e APIs Rest.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}