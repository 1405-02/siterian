import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { PROTOCOLS, COACH_INFO } from '../data/fitnessData';
import { ProtocolItem } from '../types';

interface ProtocolsSectionProps {
  onSelectProtocol: (protocol: ProtocolItem) => void;
}

export const ProtocolsSection: React.FC<ProtocolsSectionProps> = ({ onSelectProtocol }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const target = cardRefs.current[index];
    if (target && scrollRef.current) {
      const container = scrollRef.current;
      const targetLeft = target.offsetLeft - container.offsetLeft - (container.clientWidth - target.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, PROTOCOLS.length - 1);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDiff = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft - container.offsetLeft + card.clientWidth / 2;
      const diff = Math.abs(scrollCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    setCurrentIndex(closestIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="protocolos" className="py-20 sm:py-24 bg-[#0a0a0e] relative border-b border-[#2a292e]/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#ff5708]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff7733]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-['Space_Grotesk',sans-serif] font-bold text-[#ff5708] tracking-widest block mb-2">
              Team Rian Martins
            </span>
            <h2 className="font-['Oswald',sans-serif] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#e4e1e7] font-bold">
              Protocolos de <span className="text-[#ff5708]">Treinamento</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-['Space_Grotesk',sans-serif] font-semibold text-[#8e8d97] uppercase tracking-wider bg-[#141418] border border-[#26252b] px-3.5 py-1.5 rounded-full">
              {currentIndex + 1} de {PROTOCOLS.length} protocolos
            </span>
          </div>
        </div>

        {/* Carousel with Side Arrows placed in the middle of the cards */}
        <div className="relative group">
          {/* Seta Lateral Esquerda (no meio, lado do card) */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Protocolo anterior"
            className={`absolute left-1 sm:-left-4 lg:-left-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.9)] border transition-all duration-200 cursor-pointer ${
              currentIndex > 0
                ? 'bg-[#18181e]/95 border-[#ff5708] text-[#ff5708] hover:bg-[#ff5708] hover:text-black hover:scale-110 active:scale-95'
                : 'bg-[#121216]/70 border-[#26252b] text-[#4b4b54] opacity-30 cursor-not-allowed pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Seta Lateral Direita (no meio, lado do card) */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === PROTOCOLS.length - 1}
            aria-label="Próximo protocolo"
            className={`absolute right-1 sm:-right-4 lg:-right-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.9)] border transition-all duration-200 cursor-pointer ${
              currentIndex < PROTOCOLS.length - 1
                ? 'bg-[#18181e]/95 border-[#ff5708] text-[#ff5708] hover:bg-[#ff5708] hover:text-black hover:scale-110 active:scale-95'
                : 'bg-[#121216]/70 border-[#26252b] text-[#4b4b54] opacity-30 cursor-not-allowed pointer-events-none'
            }`}
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {PROTOCOLS.map((protocol, index) => (
              <div
                key={protocol.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`w-[290px] sm:w-[350px] md:w-[380px] shrink-0 snap-center rounded-3xl bg-[#141418] border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl ${
                  currentIndex === index
                    ? 'border-[#ff5708] shadow-[0_12px_40px_rgba(255,87,8,0.2)] scale-[1.01]'
                    : 'border-[#26252b] opacity-85 hover:opacity-100 hover:border-[#ff5708]/50'
                }`}
              >
                {/* Imagem Oficial do Protocolo */}
                <div className="relative w-full aspect-[3/4] bg-[#0d0d11] overflow-hidden border-b border-[#26252b]">
                  <img
                    src={protocol.image}
                    alt={protocol.imageAlt}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Conteúdo: Apenas Título, Texto Enviado e Botão */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl uppercase font-bold text-[#e4e1e7] tracking-wide mb-3">
                      {protocol.title}
                    </h3>
                    <p className="font-['Manrope',sans-serif] text-sm sm:text-base text-[#c4c4cc] leading-relaxed whitespace-pre-line">
                      {protocol.description}
                    </p>
                  </div>

                  {/* Botão Falar com Rian */}
                  <button
                    type="button"
                    onClick={() => onSelectProtocol(protocol)}
                    className="w-full mt-6 py-3.5 px-4 rounded-xl bg-[#ff5708] hover:bg-[#ff6820] text-white font-['Oswald',sans-serif] text-base uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,87,8,0.3)] hover:shadow-[0_6px_25px_rgba(255,87,8,0.5)] transition-all duration-200 cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{protocol.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de Página (Bolinhas) */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {PROTOCOLS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir para protocolo ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#ff5708]'
                  : 'w-2.5 bg-[#2a292e] hover:bg-[#ff5708]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
