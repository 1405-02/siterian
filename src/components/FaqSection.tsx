import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/fitnessData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section className="w-full bg-[#131317] py-20 lg:py-28 relative" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
            Transparência Total
          </span>
          <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] font-bold mt-2">
            Perguntas Frequentes
          </h2>
          <p className="font-['Manrope',sans-serif] text-sm sm:text-base text-[#94a3b8] mt-3 leading-relaxed">
            Tire suas dúvidas antes de dar o primeiro passo rumo à sua melhor versão física.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#18181d] border border-[#2a292e] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#1f1f23] transition-colors"
                >
                  <span className="font-['Oswald',sans-serif] text-base sm:text-lg uppercase text-[#e4e1e7] font-bold">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#2a292e] flex items-center justify-center text-[#ff5708] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#ff5708]/15' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-[#94a3b8] text-sm font-['Manrope',sans-serif] leading-relaxed border-t border-[#2a292e]/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
