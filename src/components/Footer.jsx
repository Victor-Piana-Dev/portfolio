"use client";

import { Mail } from "lucide-react";
import { Toaster, toast } from 'react-hot-toast';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Função para copiar e disparar o toast
    const copyEmail = () => {
        navigator.clipboard.writeText("victor.piana.dev@gmail.com");
        toast.success("E-mail copiado para a área de transferência!", {
            style: {
                background: '#18181b', // zinc-900
                color: '#f4f4f5',      // zinc-100
                border: '1px solid #27272a', // zinc-800
            },
            iconTheme: {
                primary: '#60a5fa', // blue-400
                secondary: '#18181b',
            },
        });
    };

    return (
        <footer className="w-full py-12 px-6 mt-12 border-t border-zinc-900 bg-zinc-950/20">
            <Toaster position="bottom-right" />
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Lado Esquerdo: Mensagem de Autoria e Copyright */}
                <div className="text-center md:text-left space-y-1">
                    <p className="text-sm text-zinc-400">
                        &copy; {currentYear} • Desenvolvido por Victor Piana.
                    </p>
                    <p className="text-xs text-zinc-600">
                        Construído do zero usando Next.js, Tailwind CSS e Framer Motion.
                    </p>
                </div>

                {/* Lado Direito: Links de Contato Rápido */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={copyEmail}
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors cursor-pointer border-none bg-transparent"
                        title="Copiar e-mail para área de transferência"
                    >
                        <Mail size={18} />
                        <span className="">victor.piana.dev@gmail.com</span>
                    </button>

                    {/* Divisor Visual */}
                    <span className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />

                    {/* Ícones Sociais */}
                    <div className="flex gap-5">
                        {/* GitHub SVG */}
                        <a
                            href="https://github.com/Victor-Piana-Dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-zinc-100 transition-colors"
                            aria-label="Acessar GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>

                        {/* LinkedIn SVG */}
                        <a
                            href="https://www.linkedin.com/in/victor-piana-5b2507184/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-blue-400 transition-colors"
                            aria-label="Acessar LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}