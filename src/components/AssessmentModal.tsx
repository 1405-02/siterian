import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, Send } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    goal: 'Hipertrofia Muscular',
    experience: 'Intermediário (1 a 3 anos)',
    frequency: '4 a 5 dias por semana',
    location: 'Academia Completa',
    injury: 'Nenhuma dor ou lesão limitante',
    name: '',
    whatsapp: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Rian! Acabei de preencher minha Avaliação Física Inicial:\n` +
      `- Nome: ${formData.name || 'Aluno'}\n` +
      `- Objetivo: ${formData.goal}\n` +
      `- Experiência: ${formData.experience}\n` +
      `- Frequência: ${formData.frequency}\n` +
      `- Onde treino: ${formData.location}\n` +
      `- Histórico de dores: ${formData.injury}\n` +
      `Gostaria de agendar meu diagnóstico detalhado e conhecer a melhor opção para mim!`
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
        className="relative w-full max-w-xl bg-[#18181d] border border-[#2a292e] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glow accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ff5708]/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-[#25252c] border border-[#35343d] hover:border-[#ff5708] text-[#94a3b8] hover:text-white hover:bg-[#ff5708] flex items-center justify-center transition-all cursor-pointer shadow-md group"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5708]/15 text-[#ffb59c] text-xs font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#ff5708]" />
                Etapa {step} de 4 • Diagnóstico Personalizado
              </div>
              <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl uppercase text-[#e4e1e7] font-bold">
                Avaliação Física &amp; Biomecânica Gratuita
              </h3>
              <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] mt-1">
                Responda em 1 minuto para receber uma recomendação estruturada pelo Coach.
              </p>

              {/* Progress bar */}
              <div className="w-full bg-[#2a292e] h-1.5 rounded-full mt-4 overflow-hidden">
                <div
                  className="bg-[#ff5708] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Goal */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#ffb59c] tracking-wider">
                  Qual é o seu objetivo físico primordial hoje?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'Hipertrofia Muscular', desc: 'Ganho expressivo de massa magra e volume' },
                    { title: 'Emagrecimento & Definição', desc: 'Queima de gordura preservando o tônus' },
                    { title: 'Correção Postural / Dores', desc: 'Blindagem de coluna, ombros e joelhos' },
                    { title: 'Performance Atlética', desc: 'Força pura, mobilidade e potência' },
                  ].map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setFormData({ ...formData, goal: item.title })}
                      className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                        formData.goal === item.title
                          ? 'bg-[#1f1f25] border-[#ff5708] shadow-[0_0_20px_rgba(255,87,8,0.2)]'
                          : 'bg-[#141418] border-[#2a292e] hover:border-[#ff5708]/40'
                      }`}
                    >
                      <span className="font-['Oswald',sans-serif] text-base uppercase text-[#e4e1e7] font-bold block">
                        {item.title}
                      </span>
                      <span className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] block mt-1">
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Experience & Frequency */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <p className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#ffb59c] tracking-wider mb-2">
                    Há quanto tempo você treina de forma consistente?
                  </p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      'Iniciante (menos de 6 meses ou nunca treinei)',
                      'Intermediário (1 a 3 anos, mas estagnado)',
                      'Avançado (mais de 3 anos de sala de musculação)',
                    ].map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setFormData({ ...formData, experience: exp })}
                        className={`p-3.5 rounded-xl text-left border text-xs font-['Space_Grotesk',sans-serif] font-semibold transition-all cursor-pointer ${
                          formData.experience === exp
                            ? 'bg-[#1f1f25] border-[#ff5708] text-[#e4e1e7]'
                            : 'bg-[#141418] border-[#2a292e] text-[#94a3b8] hover:text-[#e4e1e7]'
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#ffb59c] tracking-wider mb-2">
                    Quantos dias por semana você pode se dedicar?
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {['3 dias', '4 a 5 dias', '6 dias'].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFormData({ ...formData, frequency: freq })}
                        className={`py-3 rounded-xl text-xs font-['Space_Grotesk',sans-serif] font-bold uppercase transition-all cursor-pointer ${
                          formData.frequency === freq
                            ? 'bg-[#ff5708] text-white'
                            : 'bg-[#141418] border border-[#2a292e] text-[#94a3b8]'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Location & Injuries */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <p className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#ffb59c] tracking-wider mb-2">
                    Onde você pretende realizar os seus treinos?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { name: 'Academia Completa', desc: 'Rede ou salão clássico' },
                      { name: 'Espaço de Condomínio', desc: 'Aparelhos básicos' },
                      { name: 'Em Casa / Ao Ar Livre', desc: 'Elásticos e halteres' },
                    ].map((loc) => (
                      <button
                        key={loc.name}
                        type="button"
                        onClick={() => setFormData({ ...formData, location: loc.name })}
                        className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                          formData.location === loc.name
                            ? 'bg-[#1f1f25] border-[#ff5708]'
                            : 'bg-[#141418] border-[#2a292e]'
                        }`}
                      >
                        <span className="font-['Oswald',sans-serif] text-sm uppercase text-[#e4e1e7] font-bold block">
                          {loc.name}
                        </span>
                        <span className="text-[11px] text-[#94a3b8] block mt-0.5">
                          {loc.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#ffb59c] tracking-wider mb-2">
                    Possui histórico de dor ou lesão?
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Nenhuma dor ou lesão limitante',
                      'Dores frequentes na lombar ou cervical',
                      'Problemas no ombro (manguito / impacto)',
                      'Desconforto nos joelhos (condromalácia / menisco)',
                    ].map((inj) => (
                      <button
                        key={inj}
                        type="button"
                        onClick={() => setFormData({ ...formData, injury: inj })}
                        className={`p-3 rounded-xl text-left border text-xs font-['Space_Grotesk',sans-serif] transition-all cursor-pointer ${
                          formData.injury === inj
                            ? 'bg-[#1f1f25] border-[#ff5708] text-[#e4e1e7] font-semibold'
                            : 'bg-[#141418] border-[#2a292e] text-[#94a3b8]'
                        }`}
                      >
                        {inj}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Final submission */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#ffb59c] tracking-wider">
                  Informe seus dados para receber o parecer do Coach:
                </p>

                <div>
                  <label className="block text-xs font-['Space_Grotesk',sans-serif] uppercase text-[#94a3b8] mb-1">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-[#141418] border border-[#2a292e] text-sm text-[#e4e1e7] focus:border-[#ff5708] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Space_Grotesk',sans-serif] uppercase text-[#94a3b8] mb-1">
                    WhatsApp com DDD (para envio da análise)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-[#141418] border border-[#2a292e] text-sm text-[#e4e1e7] focus:border-[#ff5708] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Space_Grotesk',sans-serif] uppercase text-[#94a3b8] mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-[#141418] border border-[#2a292e] text-sm text-[#e4e1e7] focus:border-[#ff5708] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 rounded-xl bg-[#ff5708] text-white font-['Oswald',sans-serif] text-lg uppercase tracking-wider font-bold hover:bg-[#ff6820] shadow-[0_4px_25px_rgba(255,87,8,0.4)] transition-all cursor-pointer"
                >
                  Gerar Meu Diagnóstico Imediato
                </button>
              </form>
            )}

            {/* Navigation buttons */}
            {step < 4 && (
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#2a292e]/60">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2a292e] text-[#e4e1e7] text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold hover:bg-[#353439] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#ff5708] text-white text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold hover:bg-[#ff6820] transition-colors cursor-pointer"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Submission Complete View */
          <div className="text-center py-4 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#ff5708]/20 text-[#ff5708] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="font-['Oswald',sans-serif] text-3xl uppercase text-[#e4e1e7] font-bold">
                Diagnóstico Concluído, {formData.name || 'Atleta'}!
              </h3>
              <p className="font-['Manrope',sans-serif] text-sm text-[#94a3b8] max-w-md mx-auto mt-2 leading-relaxed">
                Com base nas suas respostas, seu perfil se enquadra perfeitamente no protocolo de{' '}
                <span className="text-[#ffb59c] font-semibold">{formData.goal}</span> com periodização para{' '}
                <span className="text-[#ffb59c] font-semibold">{formData.frequency}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141418] border border-[#2a292e] text-left text-xs font-['Space_Grotesk',sans-serif] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Objetivo:</span>
                <span className="text-[#e4e1e7] font-bold">{formData.goal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Experiência:</span>
                <span className="text-[#e4e1e7] font-bold">{formData.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Foco Articular:</span>
                <span className="text-[#7bd0ff] font-bold">{formData.injury}</span>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8]">
              Para que Rian Martins faça a análise preliminar da sua anatomia e reserve sua vaga, envie os dados diretamente pelo WhatsApp:
            </p>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-4 rounded-xl bg-[#ff5708] text-white font-['Oswald',sans-serif] text-lg uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:bg-[#ff6820] shadow-[0_8px_30px_rgba(255,87,8,0.4)] transition-all cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>Enviar para o WhatsApp (+55 11 97168-5090)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
