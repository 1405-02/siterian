import React from 'react';
import { Dumbbell, ShieldCheck, Instagram, MessageCircle, Youtube, Mail, MapPin, Clock } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0e0e12] border-t border-[#2a292e] text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Creds (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#ff5708] flex items-center justify-center text-white">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="font-['Oswald',sans-serif] text-2xl uppercase tracking-wider text-[#e4e1e7] font-bold">
                Team Rian Martins
              </span>
            </div>

            <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#94a3b8] pr-4 leading-relaxed">
              Treinamento de elite, biomecânica clínica e assessoria de alta performance voltada para transformação corporal e mental definitiva.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="px-2.5 py-1 rounded bg-[#1b1b1f] border border-[#2a292e] text-[#ffb59c] font-['Space_Grotesk',sans-serif] text-[11px] uppercase font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff5708]" />
                CREF 194592-G/SP
              </div>
              <div className="px-2.5 py-1 rounded bg-[#1b1b1f] border border-[#2a292e] text-[#e4e1e7] font-['Space_Grotesk',sans-serif] text-[11px] uppercase font-bold flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 text-[#7bd0ff]" />
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
              <li>
                <a href="#calculadora" className="hover:text-[#ff5708] transition-colors">
                  Simulador de Calorias &amp; Macros
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-[#ff5708] transition-colors">
                  Transformações &amp; Métricas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ff5708] transition-colors">
                  Dúvidas Frequentes
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
              <a
                href={COACH_INFO.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-[#1b1b1f] border border-[#2a292e] flex items-center justify-center text-[#e4e1e7] hover:bg-[#ff5708] hover:text-white hover:border-[#ff5708] transition-all"
              >
                <Youtube className="w-4 h-4" />
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
              <MessageCircle className="w-3.5 h-3.5 text-[#ff5708] shrink-0" />
              <a
                href={`https://wa.me/${COACH_INFO.phoneWhatsApp}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff5708] font-semibold text-[#e4e1e7] transition-colors"
              >
                +55 11 97168-5090
              </a>
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
            <div className="flex items-center gap-1.5 text-[#ffb59c] font-semibold mt-1">
              <Clock className="w-3.5 h-3.5 text-[#ff5708] shrink-0" />
              <span>Seg - Sáb: 06:00 - 21:00</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#2a292e]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs font-['Space_Grotesk',sans-serif]">
          <p className="text-[#94a3b8]">
            © {new Date().getFullYear()} Team Rian Martins. Todos os direitos reservados. Treinamento de Alta Performance.
          </p>
          <div className="flex items-center gap-5 text-[#94a3b8]">
            <span className="hover:text-[#e4e1e7] cursor-pointer transition-colors">
              Privacidade
            </span>
            <span className="hover:text-[#e4e1e7] cursor-pointer transition-colors">
              Termos de Serviço
            </span>
            <span className="hover:text-[#e4e1e7] cursor-pointer transition-colors">
              Código de Ética CREF
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
