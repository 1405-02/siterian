import React from 'react';
import { UserCheck } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-[#131317] py-20 lg:py-28 relative" id="sobre">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-1 bg-[#ff5708] rounded-full" />
            <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
              Quem é Rian Martins
            </span>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-[#ff5708] text-white font-['Oswald',sans-serif] text-sm uppercase font-bold px-3 py-1 rounded tracking-wider shadow-sm mb-3">
              <img
                src="/images/logo.png"
                alt="Logo Team Rian Martins"
                className="w-4 h-4 object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>TEAM RIAN MARTINS</span>
            </div>
            <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] leading-tight font-bold">
              Ciência, biomecânica e obsessão por resultados
            </h2>
          </div>

          <div className="space-y-4 font-['Manrope',sans-serif] text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            <p>
              Graduado em Educação Física, com Pós Graduação em Condicionamento Físico e Musculação, estudante de nutrição e com mais de 30 cursos na área de treinamento.
            </p>
            <p>
              Com atendimento presencial exclusivo em Bragança Paulista (SP) e consultoria online global, Rian Martins (CREF 194592-G/SP) refinou uma abordagem de treinamento que prioriza acompanhamento, individualidade e resultados (tudo exclusivo para sua realidade).
            </p>
          </div>

          {/* Feature Spec Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex flex-col gap-2 hover:border-[#ff5708]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-[#ff5708]">
                <div className="w-6 h-6 rounded-md overflow-hidden bg-black border border-[#ff5708]/40 shrink-0 flex items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="Logo Team Rian Martins"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-['Space_Grotesk',sans-serif] text-sm uppercase font-bold text-[#e4e1e7]">
                  Periodização Científica
                </span>
              </div>
              <p className="font-['Manrope',sans-serif] text-sm text-[#94a3b8] leading-relaxed">
                Volume, intensidade e densidade calculados para seus objetivos e ajustados para sua realidade.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex flex-col gap-2 hover:border-[#ff5708]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-[#ff5708]">
                <UserCheck className="w-5 h-5 text-[#ff5708]" />
                <span className="font-['Space_Grotesk',sans-serif] text-sm uppercase font-bold text-[#e4e1e7]">
                  ACOMPANHAMENTO PRÓXIMO
                </span>
              </div>
              <p className="font-['Manrope',sans-serif] text-sm text-[#94a3b8] leading-relaxed">
                Rian Martins quer estar ao seu lado nessa jornada. Ele estará disponível no dia a dia para resolver qualquer problema e tirar qualquer dúvida do seu treino, de forma rápida e precisa!
              </p>
            </div>
          </div>

          {/* Local In-Person Regional Highlight for Bragança Paulista */}
          <div className="mt-2 p-5 rounded-2xl bg-gradient-to-r from-[#1c1a1f] to-[#16161a] border border-[#ff5708]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-['Space_Grotesk',sans-serif] uppercase font-bold text-[#ffb59c] tracking-widest block mb-1">
                Atendimento Presencial Exclusivo
              </span>
              <p className="text-base sm:text-lg font-['Oswald',sans-serif] uppercase text-[#e4e1e7] font-bold">
                Bragança Paulista, SP &amp; Região Bragantina
              </p>
              <p className="text-xs sm:text-sm text-[#94a3b8] font-['Manrope',sans-serif] mt-0.5">
                Aulas presenciais em academias parceiras, estúdios ou no condomínio do aluno em Bragança Paulista.
              </p>
            </div>
            <a
              href={`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${encodeURIComponent(
                'Olá Rian! Gostaria de consultar a disponibilidade de horários para personal presencial em Bragança Paulista.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 px-5 py-3 rounded-lg bg-[#ff5708] hover:bg-[#ff6820] text-white font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold tracking-wider transition-all shadow-md"
            >
              Consultar Vagas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
