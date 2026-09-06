import React from 'react';
import { ShieldCheck, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0e0e12] border-t border-[#2a292e] text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Creds (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-black border border-[#ff5708]/40 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Logo Team Rian Martins"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-['Oswald',sans-serif] text-2xl uppercase tracking-wider text-[#e4e1e7] font-bold">
                Team Rian Martins
              </span>
            </div>

            <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] pr-4 leading-relaxed">
              Treinamento de elite e assessoria de alta performance voltada para transformação corporal com estratégia e metodologia.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="px-2.5 py-1 rounded bg-[#1b1b1f] border border-[#2a292e] text-[#ffb59c] font-['Space_Grotesk',sans-serif] text-[11px] uppercase font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff5708]" />
                CREF 194592-G/SP
              </div>
              <div className="px-2.5 py-1 rounded bg-[#1b1b1f] border border-[#2a292e] text-[#e4e1e7] font-['Space_Grotesk',sans-serif] text-[11px] uppercase font-bold flex items-center gap-1.5">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-3.5 h-3.5 object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
                Excellence Coach
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#e4e1e7] font-bold">
              Navegação Rápida
            </span>
            <ul className="flex flex-col gap-2 font-['Manrope',sans-serif] text-xs sm:text-sm">
              <li>
                <a href="#sobre" className="hover:text-[#ff5708] transition-colors">
                  Sobre o Treinador
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#ff5708] transition-colors">
                  Pilares da Metodologia
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-[#ff5708] transition-colors">
                  Planos &amp; Consultoria VIP
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#e4e1e7] font-bold">
              Conecte-se
            </span>
            <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Acompanhe treinos diários, análises de biomecânica e bastidores nas redes.
            </p>
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href={COACH_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex items-center justify-center text-[#e4e1e7] hover:bg-[#ff5708] hover:text-white hover:border-[#ff5708] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COACH_INFO.phoneWhatsApp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex items-center justify-center text-[#e4e1e7] hover:bg-[#ff5708] hover:text-white hover:border-[#ff5708] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 4: Contact / Atendimento (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 text-xs">
            <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#e4e1e7] font-bold">
              Atendimento
            </span>
            <div className="flex items-start gap-1.5 text-[#e4e1e7]">
              <MapPin className="w-3.5 h-3.5 text-[#ff5708] shrink-0 mt-0.5" />
              <span>Bragança Paulista - SP (Presencial)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#94a3b8]">
              <Mail className="w-3.5 h-3.5 text-[#ff5708] shrink-0" />
              <a
                href={`mailto:${COACH_INFO.email}`}
                className="truncate hover:text-[#ff5708] transition-colors"
              >
                {COACH_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#2a292e]/60 flex items-center justify-center text-center text-xs font-['Space_Grotesk',sans-serif]">
          <p className="text-[#94a3b8]">
            © {new Date().getFullYear()} Team Rian Martins. Todos os direitos reservados. Treinamento de Alta Performance.
          </p>
        </div>
      </div>
    </footer>
  );
};
