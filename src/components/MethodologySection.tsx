import React, { useState } from 'react';
import { BarChart3, Sliders, Utensils, Smartphone, MessageCircle, CheckCircle, X } from 'lucide-react';
import { METHODOLOGY_PILLARS } from '../data/fitnessData';
import { Pillar } from '../types';

interface MethodologySectionProps {
  onOpenAppPreview?: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = () => {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'analytics':
        return <BarChart3 className="w-5 h-5" />;
      case 'tune':
        return <Sliders className="w-5 h-5" />;
      case 'chat':
      case 'message-circle':
        return <MessageCircle className="w-5 h-5" />;
      case 'restaurant':
        return <Utensils className="w-5 h-5" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <section className="w-full bg-[#0e0e12] py-20 lg:py-28 relative" id="metodologia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
            Engenharia de Performance
          </span>
          <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] font-bold mt-2">
            Os 4 Pilares do Team Rian Martins
          </h2>
          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#94a3b8] mt-3 leading-relaxed">
            Uma metodologia estruturada e pensada para te atender levando em conta todos os fatores: físicos, rotina, tempo. Você não precisa de tempo, precisa das estratégias e metodologias corretas. Vem comigo nessa, me dê seu problema, que vou ajuda-lo a resolver.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {METHODOLOGY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="relative p-6 rounded-2xl bg-[#18181d] border border-[#2a292e] flex flex-col justify-between hover:bg-[#1f1f23] hover:border-[#ff5708]/40 transition-all duration-300 group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Oswald',sans-serif] text-3xl sm:text-4xl font-bold text-[#ff5708]">
                    {pillar.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#2a292e] flex items-center justify-center text-[#ffb59c] group-hover:bg-[#ff5708] group-hover:text-white transition-colors duration-200">
                    {getPillarIcon(pillar.icon)}
                  </div>
                </div>

                <h3 className="font-['Oswald',sans-serif] text-xl sm:text-2xl uppercase text-[#e4e1e7] font-bold mb-2.5 leading-snug">
                  {pillar.title}
                </h3>

                <p className="font-['Manrope',sans-serif] text-sm text-[#94a3b8] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2a292e]/60 flex items-center">
                <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider text-[#ffb59c] font-bold">
                  {pillar.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillar Detail Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#18181d] border border-[#2a292e] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#2a292e] text-[#94a3b8] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Oswald',sans-serif] text-3xl font-bold text-[#ff5708]">
                {selectedPillar.number}
              </span>
              <div className="w-9 h-9 rounded-lg bg-[#ff5708]/15 flex items-center justify-center text-[#ff5708]">
                {getPillarIcon(selectedPillar.icon)}
              </div>
            </div>

            <h3 className="font-['Oswald',sans-serif] text-2xl uppercase font-bold text-[#e4e1e7] mb-2">
              {selectedPillar.title}
            </h3>

            <p className="font-['Manrope',sans-serif] text-sm text-[#94a3b8] mb-5 leading-relaxed">
              {selectedPillar.details?.overview || selectedPillar.description}
            </p>

            {selectedPillar.details && (
              <div className="space-y-4 mb-6">
                <p className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider text-[#ffb59c] font-bold">
                  O que está incluso nesta etapa:
                </p>
                <div className="space-y-2.5">
                  {selectedPillar.details.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm text-[#e4e1e7]">
                      <CheckCircle className="w-4 h-4 text-[#ff5708] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#131317] border border-[#2a292e] mt-4">
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] uppercase tracking-wider text-[#7bd0ff] font-bold block mb-1">
                    Entregável ao Aluno
                  </span>
                  <p className="font-['Manrope',sans-serif] text-xs text-[#94a3b8]">
                    {selectedPillar.details.deliverable}
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setSelectedPillar(null)}
              className="w-full py-3 rounded-xl bg-[#ff5708] text-white font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider font-bold hover:bg-[#ff6820] transition-colors"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
