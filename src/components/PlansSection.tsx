import React from 'react';
import { CheckCircle, XCircle, Zap, Shield, Sparkles } from 'lucide-react';
import { PLANS } from '../data/fitnessData';
import { Plan } from '../types';

interface PlansSectionProps {
  onSelectPlan: (plan: Plan) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section className="w-full bg-[#131317] py-20 lg:py-28 relative" id="planos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
            Investimento Estratégico
          </span>
          <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] font-bold mt-2">
            Escolha o seu nível de acompanhamento
          </h2>
          <p className="font-['Manrope',sans-serif] text-sm sm:text-base text-[#94a3b8] mt-3 leading-relaxed">
            Planos sob medida para quem busca treinar em qualquer academia ou prefere o acompanhamento presencial em Bragança Paulista.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const isVip = plan.isFeatured;

            return (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  isVip
                    ? 'bg-[#1e1e24] border-2 border-[#ff5708] shadow-[0_0_35px_rgba(255,87,8,0.22)] lg:-translate-y-2'
                    : 'bg-[#18181d] border border-[#2a292e] hover:border-[#ff5708]/40 hover:bg-[#1b1b20]'
                }`}
              >
                {/* VIP Pill Badge */}
                {isVip && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff5708] text-white px-4 py-1 rounded-full font-['Space_Grotesk',sans-serif] text-[11px] uppercase font-bold tracking-widest shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {!isVip && (
                    <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#94a3b8] font-bold">
                      {plan.badge}
                    </span>
                  )}

                  {isVip && (
                    <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
                      Máxima Performance Presencial
                    </span>
                  )}

                  <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl uppercase text-[#e4e1e7] font-bold mt-2">
                    {plan.name}
                  </h3>

                  <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] mt-1.5 leading-relaxed">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 flex items-baseline gap-1">
                    <span className="font-['Manrope',sans-serif] text-sm text-[#94a3b8]">R$</span>
                    <span
                      className={`font-['Oswald',sans-serif] text-5xl sm:text-6xl font-bold leading-none ${
                        isVip ? 'text-[#ff5708]' : 'text-[#e4e1e7]'
                      }`}
                    >
                      {plan.priceMonthly}
                    </span>
                    <span className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] ml-1">
                      {plan.periodText}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3 font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] mt-4 pt-4 border-t border-[#2a292e]/60">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 ${
                          !feature.included ? 'text-[#94a3b8]/40' : feature.highlight ? 'text-[#e4e1e7] font-semibold' : 'text-[#e4e1e7]'
                        }`}
                      >
                        {feature.included ? (
                          <CheckCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isVip ? 'text-[#ff5708]' : 'text-[#ffb59c]'
                            }`}
                          />
                        ) : (
                          <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#94a3b8]/40" />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`mt-8 w-full py-3.5 rounded-xl font-['Oswald',sans-serif] text-base uppercase tracking-wider font-bold text-center transition-all cursor-pointer ${
                    isVip
                      ? 'bg-[#ff5708] text-white hover:bg-[#ff6820] hover:scale-[1.02] shadow-[0_4px_25px_rgba(255,87,8,0.4)]'
                      : 'bg-[#2a292e] text-[#e4e1e7] hover:bg-[#ff5708] hover:text-white'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ff5708]/15 flex items-center justify-center text-[#ff5708] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="font-['Space_Grotesk',sans-serif] text-sm font-bold uppercase text-[#e4e1e7]">
                Garantia Incondicional de 7 Dias
              </p>
              <p className="font-['Manrope',sans-serif] text-xs text-[#94a3b8]">
                Se você não se adaptar à metodologia ou ao aplicativo, devolvemos 100% do seu investimento.
              </p>
            </div>
          </div>
          <div className="text-right sm:text-right shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#7bd0ff] font-['Space_Grotesk',sans-serif] font-semibold">
              <Zap className="w-3.5 h-3.5 text-[#ff5708]" />
              Início imediato após anamnese
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
