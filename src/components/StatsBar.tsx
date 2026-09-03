import React from 'react';
import { Globe } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

export const StatsBar: React.FC = () => {
  return (
    <section className="w-full bg-[#1b1b1f] border-y border-[#2a292e]/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-5 bg-[#131317] rounded-xl border border-[#2a292e]/40 shadow-sm hover:border-[#ff5708]/30 transition-all">
            <span className="font-['Oswald',sans-serif] text-4xl sm:text-5xl text-[#ff5708] font-bold leading-none">
              {COACH_INFO.totalStudents}
            </span>
            <span className="font-['Space_Grotesk',sans-serif] text-sm uppercase tracking-wider text-[#e4e1e7] font-bold mt-2">
              Alunos Transformados
            </span>
            <span className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] mt-1">
              Resultados reais e consistentes
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-5 bg-[#131317] rounded-xl border border-[#2a292e]/40 shadow-sm hover:border-[#ff5708]/30 transition-all">
            <span className="font-['Oswald',sans-serif] text-4xl sm:text-5xl text-[#ffb59c] font-bold leading-none">
              {COACH_INFO.yearsExperience}
            </span>
            <span className="font-['Space_Grotesk',sans-serif] text-sm uppercase tracking-wider text-[#e4e1e7] font-bold mt-2">
              Anos de Experiência
            </span>
            <span className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] mt-1">
              Prática clínica &amp; biomecânica
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-5 bg-[#131317] rounded-xl border border-[#2a292e]/40 shadow-sm hover:border-[#7bd0ff]/30 transition-all">
            <span className="font-['Oswald',sans-serif] text-4xl sm:text-5xl text-[#7bd0ff] font-bold leading-none">
              {COACH_INFO.satisfactionRate}
            </span>
            <span className="font-['Space_Grotesk',sans-serif] text-sm uppercase tracking-wider text-[#e4e1e7] font-bold mt-2">
              Taxa de Satisfação
            </span>
            <span className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] mt-1">
              Fidelidade &amp; constância
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center p-5 bg-[#131317] rounded-xl border border-[#2a292e]/40 shadow-sm hover:border-[#ff5708]/30 transition-all">
            <div className="flex items-center justify-center gap-1.5 text-[#ff5708] mb-1">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff5708]" />
            </div>
            <span className="font-['Space_Grotesk',sans-serif] text-sm uppercase tracking-wider text-[#e4e1e7] font-bold">
              Bragança &amp; Online
            </span>
            <span className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] mt-1">
              Presencial em Bragança Paulista (SP)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
