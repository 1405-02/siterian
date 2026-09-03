import React from 'react';
import { Dumbbell, Activity, UtensilsCrossed, ShieldCheck, Quote } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-[#131317] py-20 lg:py-28 relative" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#1f1f23] rounded-2xl p-3 border border-[#2a292e] shadow-xl">
              {/* Gym Coaching Photo */}
              <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden relative group">
                <img
                  src={COACH_INFO.photos.coachingAction}
                  alt="Rian Martins em ação com aluno na academia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent opacity-80" />

                {/* Subtle tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0e0e12]/80 backdrop-blur-md border border-[#2a292e] text-[10px] font-['Space_Grotesk',sans-serif] text-[#ffb59c] uppercase font-bold tracking-wider">
                  Sessão Prática • Biomecânica Clínica
                </div>
              </div>

              {/* Manifesto Card Overlay */}
              <div className="mt-3 p-4 sm:p-5 rounded-xl bg-[#18181d] border border-[#2a292e]">
                <div className="flex items-center gap-2 mb-2">
                  <Quote className="w-4 h-4 text-[#ff5708]" />
                  <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold tracking-widest text-[#ffb59c]">
                    Manifesto
                  </span>
                </div>
                <p className="font-['Manrope',sans-serif] text-sm sm:text-base text-[#e4e1e7] italic leading-relaxed">
                  {COACH_INFO.manifesto}
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Credentials Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#ff5708] rounded-full" />
              <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
                Quem é Rian Martins
              </span>
            </div>

            <div>
              <div className="inline-block bg-[#ff5708] text-white font-['Oswald',sans-serif] text-sm uppercase font-bold px-3 py-1 rounded tracking-wider shadow-sm mb-3">
                TEAM RIAN MARTINS
              </div>
              <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] leading-tight font-bold">
                Ciência, biomecânica e obsessão por resultados definitivos
              </h2>
            </div>

            <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#94a3b8] leading-relaxed">
              {COACH_INFO.bio}
            </p>

            {/* 4 Feature Spec Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex flex-col gap-1.5 hover:border-[#ff5708]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#ff5708]">
                  <Dumbbell className="w-4 h-4 text-[#ff5708]" />
                  <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#e4e1e7]">
                    Periodização Científica
                  </span>
                </div>
                <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-normal">
                  Volume, intensidade e densidade calculados para hipertrofia sem sobrecarga articular crônica.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex flex-col gap-1.5 hover:border-[#ff5708]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#ff5708]">
                  <Activity className="w-4 h-4 text-[#ff5708]" />
                  <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#e4e1e7]">
                    Biomecânica Pessoal
                  </span>
                </div>
                <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-normal">
                  Ajuste milimétrico de ângulos e alavancas mecânicas para a anatomia óssea exata de cada aluno.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex flex-col gap-1.5 hover:border-[#ff5708]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#ff5708]">
                  <UtensilsCrossed className="w-4 h-4 text-[#ff5708]" />
                  <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#e4e1e7]">
                    Sem Dietas Miraculosas
                  </span>
                </div>
                <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-normal">
                  Estratégias nutricionais alinhadas à sua rotina profissional, promovendo adesão perpétua.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex flex-col gap-1.5 hover:border-[#ff5708]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#ff5708]">
                  <ShieldCheck className="w-4 h-4 text-[#ff5708]" />
                  <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#e4e1e7]">
                    Segurança Articular
                  </span>
                </div>
                <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-normal">
                  Prevenção e reabilitação ativa de dores na lombar, ombros e joelhos enquanto você ganha massa.
                </p>
              </div>
            </div>

            {/* Local In-Person Regional Highlight for Bragança Paulista */}
            <div className="mt-2 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1c1a1f] to-[#16161a] border border-[#ff5708]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-['Space_Grotesk',sans-serif] uppercase font-bold text-[#ffb59c] tracking-widest block mb-1">
                  Atendimento Presencial Exclusivo
                </span>
                <p className="text-sm sm:text-base font-['Oswald',sans-serif] uppercase text-[#e4e1e7] font-bold">
                  Bragança Paulista, SP &amp; Região Bragantina
                </p>
                <p className="text-xs text-[#94a3b8] font-['Manrope',sans-serif] mt-0.5">
                  Aulas presenciais em academias parceiras, estúdios ou no condomínio do aluno em Bragança Paulista.
                </p>
              </div>
              <a
                href={`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${encodeURIComponent(
                  'Olá Rian! Gostaria de consultar a disponibilidade de horários para personal presencial em Bragança Paulista.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-lg bg-[#ff5708] hover:bg-[#ff6820] text-white font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold tracking-wider transition-all shadow-md"
              >
                Consultar Vagas no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
