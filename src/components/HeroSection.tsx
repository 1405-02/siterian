import React from 'react';
import { ArrowRight, Award, Flame, Target, ShieldCheck, Sparkles } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

interface HeroSectionProps {
  onOpenAssessment: () => void;
  onExplorePlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAssessment,
  onExplorePlans,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e0e12] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Ambient glow decorative layers */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff5708]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-[#c34c01]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#7bd0ff]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Authority Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f1f23] border border-[#2a292e] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff5708] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#ff5708] -ml-4" />
              <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider text-[#ffb59c] font-bold">
                Vagas limitadas para treinos presenciais em Bragança Paulista/SP
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-['Oswald',sans-serif] text-4xl sm:text-5xl lg:text-[66px] uppercase text-[#e4e1e7] leading-[1.05] tracking-tight font-bold">
              Personal Trainer em Bragança Paulista e Treinamento com{' '}
              <span className="text-[#ff5708] drop-shadow-[0_2px_18px_rgba(255,87,8,0.35)]">
                Metodologia Eficiente
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
              Atendimento presencial exclusivo em <span className="text-[#e4e1e7] font-semibold">Bragança Paulista (SP)</span> e treinamento online com o Head Coach Rian Martins. Protocolos individualizados e altamente eficientes, voltados para sua realidade.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href={`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${encodeURIComponent(
                  'Olá Rian! Gostaria de agendar minha avaliação física e saber mais sobre os treinos (presencial em Bragança Paulista / consultoria online).'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-[#ff5708] text-white font-['Oswald',sans-serif] text-lg uppercase tracking-wider font-bold hover:scale-[1.02] shadow-[0_8px_30px_rgba(255,87,8,0.35)] hover:bg-[#ff6820] transition-all duration-200 text-center cursor-pointer"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Fast Authority Badges Mosaic */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1b1b1f] border border-[#2a292e]/60">
                <div className="w-10 h-10 rounded-lg bg-[#ff5708]/15 flex items-center justify-center text-[#ff5708] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold text-[#e4e1e7] uppercase">
                    Metodologia
                  </span>
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#94a3b8]">
                    Comprovada
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1b1b1f] border border-[#2a292e]/60">
                <div className="w-10 h-10 rounded-lg bg-[#ff5708]/15 flex items-center justify-center text-[#ff5708] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold text-[#e4e1e7] uppercase">
                    Ciência Aplicada
                  </span>
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#94a3b8]">
                    Biomecânica pura
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1b1b1f] border border-[#2a292e]/60">
                <div className="w-10 h-10 rounded-lg bg-[#ff5708]/15 flex items-center justify-center text-[#ff5708] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold text-[#e4e1e7] uppercase">
                    100% Individual
                  </span>
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#94a3b8]">
                    Zero fichas genéricas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coach Photo Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] group">
              {/* Glow background plate */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff5708]/30 via-[#c34c01]/10 to-transparent rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Official Coach Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1f1f23] border border-[#2a292e]">
                <img
                  src={COACH_INFO.photos.hero}
                  alt="Rian Martins - Head Coach"
                  className="rounded-2xl object-cover w-full h-[480px] sm:h-[540px] shadow-2xl transition duration-500 group-hover:scale-[1.015]"
                />

                {/* Gradient Bottom Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/20 to-transparent opacity-90" />

                {/* Floating Coach Badge inside card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#1b1b1f]/90 backdrop-blur-md border border-[#2a292e] shadow-lg flex items-center justify-between">
                  <div>
                    <p className="font-['Oswald',sans-serif] text-xl uppercase text-[#e4e1e7] leading-tight font-bold">
                      {COACH_INFO.name}
                    </p>
                    <p className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#ffb59c] uppercase font-bold tracking-widest">
                      {COACH_INFO.title}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-black border border-[#ff5708]/40 flex items-center justify-center shadow-md shrink-0">
                    <img
                      src="/images/logo.png"
                      alt="Logo Team Rian Martins"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Top Corner Quick Spec */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#0e0e12]/80 backdrop-blur-md border border-[#2a292e] text-[11px] font-['Space_Grotesk',sans-serif] text-[#7bd0ff] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff5708]" />
                  <span>Alta Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
