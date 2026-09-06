import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles, ArrowLeft, Target } from 'lucide-react';
import { Plan } from '../types';
import { COACH_INFO } from '../data/fitnessData';

export interface EnrollModalItem {
  id: string;
  name: string;
  subtitle: string;
  priceMonthly?: number;
  periodText?: string;
  isProtocol?: boolean;
  features: { text: string; included?: boolean }[];
  ctaText?: string;
}

interface PlanEnrollModalProps {
  plan: EnrollModalItem | Plan | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlanEnrollModal: React.FC<PlanEnrollModalProps> = ({ plan, isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !plan) return null;

  const isProtocol = (plan as any).isProtocol || plan.id.startsWith('protocolo-') || plan.id.startsWith('metodo-');

  const handleConfirmEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = isProtocol ? 'no protocolo exclusivo' : 'no plano';
    const text = encodeURIComponent(
      `Olá Rian! Gostaria de me inscrever ${prefix}: *${plan.name}*\n` +
      `- Meu Nome: ${name || 'Não informado'}\n` +
      `- WhatsApp: ${whatsapp || 'Não informado'}\n` +
      `- Cidade/Estado: ${city || 'Não informado'}\n` +
      `Gostaria de saber os detalhes para início imediato!`
    );
    window.open(`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-lg bg-[#18181d] border border-[#2a292e] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent Close Button (X) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar e voltar aos planos"
          title="Fechar e voltar aos planos"
          className="absolute top-4 right-4 z-20 w-11 h-11 rounded-xl bg-[#25252c] border border-[#35343d] hover:border-[#ff5708] text-[#94a3b8] hover:text-white hover:bg-[#ff5708] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg group"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5708]/15 text-[#ffb59c] text-xs font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-wider mb-2">
            {isProtocol ? (
              <>
                <Target className="w-3.5 h-3.5 text-[#ff5708]" />
                Protocolo Exclusivo • Team Rian Martins
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-[#ff5708]" />
                Inscrição Oficial • Vagas Limitadas
              </>
            )}
          </div>
          <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl uppercase text-[#e4e1e7] font-bold">
            {plan.name}
          </h3>
          <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] mt-1">
            {plan.subtitle}
          </p>
        </div>

        {/* Plan deliverables box */}
        {!isProtocol ? (
          <div className="p-4 rounded-2xl bg-[#141418] border border-[#2a292e] mb-6">
            <div className="flex items-baseline justify-between border-b border-[#2a292e] pb-3 mb-3">
              <span className="text-xs uppercase font-['Space_Grotesk',sans-serif] text-[#94a3b8] font-bold">
                Investimento
              </span>
              {plan.priceMonthly ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-[#94a3b8]">R$</span>
                  <span className="font-['Oswald',sans-serif] text-3xl font-bold text-[#ff5708]">
                    {plan.priceMonthly}
                  </span>
                  <span className="text-xs text-[#94a3b8]">{plan.periodText}</span>
                </div>
              ) : null}
            </div>

            {plan.features && plan.features.length > 0 && (
              <div className="space-y-2">
                {plan.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-['Manrope',sans-serif] text-[#e4e1e7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5708] shrink-0" />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* Enrollment Form */}
        <form onSubmit={handleConfirmEnrollment} className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-['Space_Grotesk',sans-serif] font-bold text-[#ffb59c] mb-1">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              placeholder="Ex: João Vitor"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-[#141418] border border-[#2a292e] text-sm text-[#e4e1e7] focus:border-[#ff5708] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-['Space_Grotesk',sans-serif] font-bold text-[#ffb59c] mb-1">
              WhatsApp para Contato
            </label>
            <input
              type="tel"
              required
              placeholder="(11) 99999-9999"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-[#141418] border border-[#2a292e] text-sm text-[#e4e1e7] focus:border-[#ff5708] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-['Space_Grotesk',sans-serif] font-bold text-[#ffb59c] mb-1">
              Cidade / Estado
            </label>
            <input
              type="text"
              placeholder="Ex: Bragança Paulista / SP"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-[#141418] border border-[#2a292e] text-sm text-[#e4e1e7] focus:border-[#ff5708] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-2 rounded-xl bg-[#ff5708] text-white font-['Oswald',sans-serif] text-lg uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:bg-[#ff6820] shadow-[0_4px_25px_rgba(255,87,8,0.4)] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Confirmar no WhatsApp (+55 11 97168-5090)</span>
          </button>

          <a
            href={`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${encodeURIComponent(
              `Olá Rian! Gostaria de falar sobre o plano ${plan.name} e saber detalhes para início.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 rounded-xl bg-[#141418] border border-[#2a292e] hover:border-[#ff5708] text-[#94a3b8] hover:text-[#e4e1e7] text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold text-center block transition-all"
          >
            Ou chamar direto no WhatsApp sem preencher
          </a>

          {/* Explicit Back / Return button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-transparent border border-[#2a292e] hover:border-[#ff5708]/60 text-[#94a3b8] hover:text-white text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar</span>
          </button>

          <div className="flex items-center justify-center text-[11px] font-['Space_Grotesk',sans-serif] text-[#94a3b8] pt-2">
            <span>Vagas confirmadas por ordem de chegada</span>
          </div>
        </form>
      </div>
    </div>
  );
};
