import React, { useState } from 'react';
import { Star, TrendingUp, CheckCircle2 } from 'lucide-react';
import { STUDENT_RESULTS } from '../data/fitnessData';

export const ResultsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'emagrecimento' | 'hipertrofia'>('all');

  const filteredResults = STUDENT_RESULTS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section className="w-full bg-[#0e0e12] py-20 lg:py-28 relative" id="resultados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
              Métricas Comprovadas
            </span>
            <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] font-bold mt-2">
              Resultados do Team Rian Martins
            </h2>
          </div>
          <p className="font-['Manrope',sans-serif] text-sm sm:text-base text-[#94a3b8] max-w-md leading-relaxed">
            Sem promessas fáceis. O que você vê abaixo é a convergência de disciplina individual com orientação técnica de excelência.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-[#ff5708] text-white'
                : 'bg-[#1b1b1f] text-[#94a3b8] border border-[#2a292e] hover:text-[#e4e1e7]'
            }`}
          >
            Todos os Casos
          </button>
          <button
            onClick={() => setFilter('emagrecimento')}
            className={`px-4 py-1.5 rounded-full text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold tracking-wider transition-all ${
              filter === 'emagrecimento'
                ? 'bg-[#ff5708] text-white'
                : 'bg-[#1b1b1f] text-[#94a3b8] border border-[#2a292e] hover:text-[#e4e1e7]'
            }`}
          >
            Queima de Gordura
          </button>
          <button
            onClick={() => setFilter('hipertrofia')}
            className={`px-4 py-1.5 rounded-full text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold tracking-wider transition-all ${
              filter === 'hipertrofia'
                ? 'bg-[#ff5708] text-white'
                : 'bg-[#1b1b1f] text-[#94a3b8] border border-[#2a292e] hover:text-[#e4e1e7]'
            }`}
          >
            Ganho de Massa Magra
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#18181d] border border-[#2a292e] flex flex-col justify-between hover:border-[#ff5708]/40 transition-all duration-300 shadow-md"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#ff5708] text-[#ff5708]"
                    />
                  ))}
                </div>

                {/* Metric Badge */}
                <div
                  className="inline-flex px-3 py-1 rounded-lg text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold mb-4"
                  style={{
                    backgroundColor: `${item.metricColor}20`,
                    color: item.metricColor,
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-['Manrope',sans-serif] text-sm text-[#e4e1e7] italic leading-relaxed mb-6">
                  {item.testimonial}
                </p>
              </div>

              {/* Student Author */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#2a292e]/60">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#2a292e] shrink-0 border border-[#2a292e]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-['Oswald',sans-serif] text-base uppercase font-bold text-[#e4e1e7] leading-tight">
                    {item.name}
                  </p>
                  <p className="font-['Space_Grotesk',sans-serif] text-xs text-[#94a3b8] mt-0.5">
                    {item.role} • <span className="text-[#ffb59c]">{item.plan}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
