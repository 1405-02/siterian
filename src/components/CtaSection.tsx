import React from 'react';
import { Zap, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

interface CtaSectionProps {
  onOpenAssessment: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenAssessment }) => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Olá Rian! Gostaria de saber mais sobre as vagas disponíveis para a sua consultoria de alta performance e atendimento presencial em Bragança Paulista.'
    );
    window.open(`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section className="w-full bg-[#0e0e12] py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff5708]/10 via-transparent to-[#ff5708]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5708]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-20 rounded-3xl bg-[#18181d] border border-[#2a292e] shadow-2xl flex flex-col items-center text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-[#ff5708]/15 border border-[#ff5708]/30 flex items-center justify-center text-[#ff5708] mb-6 shadow-inner">
            <Zap className="w-8 h-8 fill-[#ff5708]" />
          </div>

          <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] leading-tight font-bold">
            Pronto para fazer parte do{' '}
            <span className="text-[#ff5708] drop-shadow-[0_2px_15px_rgba(255,87,8,0.4)]">
              Team Rian Martins
            </span>
            ?
          </h2>

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#94a3b8] max-w-2xl mt-4 mb-8 leading-relaxed">
            As vagas para acompanhamento presencial em Bragança Paulista (SP) e consultoria online são limitadas para assegurar o padrão de excelência e acompanhamento minucioso de cada aluno.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#ff5708] text-white font-['Oswald',sans-serif] text-lg uppercase tracking-wider font-bold hover:scale-[1.03] shadow-[0_8px_35px_rgba(255,87,8,0.45)] hover:bg-[#ff6820] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar com Rian</span>
            </button>

            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#1b1b1f] border border-[#2a292e] text-[#e4e1e7] font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider font-bold hover:bg-[#2a292e] transition-colors cursor-pointer"
            >
              Fazer Avaliação Online
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-[#2a292e]/60 text-xs font-['Space_Grotesk',sans-serif] text-[#94a3b8] uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ff5708]" />
              Resposta em menos de 2 horas
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7bd0ff]" />
              Sem compromisso inicial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
