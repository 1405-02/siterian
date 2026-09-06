import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

interface HeaderProps {
  onOpenAssessment?: () => void;
  onOpenAppPreview?: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const navLinks = [
    { label: 'Sobre Rian', href: '#sobre' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Planos & Consultoria', href: '#planos' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131317]/90 backdrop-blur-xl border-b border-[#2a292e]/40 shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-black border border-[#ff5708]/40 flex items-center justify-center shadow-[0_2px_12px_rgba(255,87,8,0.35)] group-hover:scale-105 transition-transform duration-200 shrink-0">
            <img
              src="/images/logo.png"
              alt="Logo Team Rian Martins"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Oswald',sans-serif] text-xl font-bold uppercase tracking-wider text-[#e4e1e7] leading-tight">
              Team Rian Martins
            </span>
            <span className="font-['Space_Grotesk',sans-serif] text-[11px] uppercase tracking-widest text-[#ffb59c] font-semibold">
              High Performance Coaching
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Space_Grotesk',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#94a3b8] hover:text-[#ffb59c] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Instagram + WhatsApp CTA */}
        <div className="flex items-center gap-3">
          <a
            href={COACH_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @rianmartins_personal"
            title="Acessar Instagram @rianmartins_personal"
            className="w-10 h-10 rounded-full bg-[#18181d] border border-[#2a292e] hover:border-[#ff5708] flex items-center justify-center text-[#ffb59c] hover:text-white hover:bg-[#ff5708]/15 transition-all duration-200 group cursor-pointer shadow-sm hover:scale-105"
          >
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${encodeURIComponent(
              'Olá Rian! Estou no seu site e gostaria de saber mais sobre a consultoria e o atendimento presencial em Bragança Paulista.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded bg-[#ff5708] text-white font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider font-bold hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,87,8,0.35)] hover:bg-[#ff6820] transition-all duration-200 cursor-pointer"
          >
            <span>Falar com Rian</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
