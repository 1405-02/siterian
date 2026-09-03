import React, { useState } from 'react';
import { Menu, X, User, ArrowRight, Dumbbell } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

interface HeaderProps {
  onOpenAssessment: () => void;
  onOpenAppPreview: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAssessment,
  onOpenAppPreview,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre Rian', href: '#sobre' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Planos & Consultoria', href: '#planos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131317]/90 backdrop-blur-xl border-b border-[#2a292e]/40 shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff5708] to-[#aa3600] flex items-center justify-center text-white shadow-[0_2px_12px_rgba(255,87,8,0.35)] group-hover:scale-105 transition-transform duration-200">
            <Dumbbell className="w-5 h-5 text-white" />
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
        <nav className="hidden xl:flex items-center gap-7">
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

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${encodeURIComponent(
              'Olá Rian! Estou no seu site e gostaria de saber mais sobre a consultoria e o atendimento presencial em Bragança Paulista.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#ff5708] text-white font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider font-bold hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,87,8,0.35)] hover:bg-[#ff6820] transition-all duration-200 cursor-pointer"
          >
            <span>Falar com Rian</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Student Area / App Preview Button */}
          <button
            onClick={onOpenAppPreview}
            title="Área do Aluno / Prévia do App"
            className="w-10 h-10 rounded-full bg-[#1f1f23] border border-[#2a292e] hover:border-[#ff5708] flex items-center justify-center text-[#ffb59c] hover:text-white transition-all cursor-pointer group"
          >
            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#1f1f23] text-[#e4e1e7] hover:text-[#ff5708] transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#131317] border-b border-[#2a292e] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-['Space_Grotesk',sans-serif] uppercase tracking-wider font-medium text-[#e4e1e7] hover:bg-[#1f1f23] hover:text-[#ff5708] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#2a292e] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full py-3 rounded bg-[#ff5708] text-white font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider font-bold text-center shadow-[0_4px_20px_rgba(255,87,8,0.35)]"
            >
              Começar Avaliação Gratuita
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppPreview();
              }}
              className="w-full py-2.5 rounded bg-[#1f1f23] border border-[#2a292e] text-[#e4e1e7] font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider font-semibold text-center"
            >
              Acessar Prévia do App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
