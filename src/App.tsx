import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MethodologySection } from './components/MethodologySection';
import { PlansSection } from './components/PlansSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { AppPreviewModal } from './components/AppPreviewModal';
import { PlanEnrollModal } from './components/PlanEnrollModal';
import { MessageCircle } from 'lucide-react';
import { COACH_INFO, PLANS } from './data/fitnessData';
import { Plan } from './types';

export function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isAppPreviewOpen, setIsAppPreviewOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá Rian! Estou no seu site e gostaria de saber mais sobre seu atendimento como personal em Bragança Paulista / consultoria online.'
    );
    window.open(`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#131317] text-[#e4e1e7] font-['Manrope',sans-serif] selection:bg-[#ff5708] selection:text-white relative">
      {/* Top Fixed Header */}
      <Header
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenAppPreview={() => setIsAppPreviewOpen(true)}
      />

      {/* Main Landing Flow */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onExplorePlans={scrollToPlans}
        />

        {/* 2. Quem é Rian Martins (Bio, Manifesto & 4 Features) */}
        <AboutSection />

        {/* 3. Os 4 Pilares da Metodologia */}
        <MethodologySection
          onOpenAppPreview={() => setIsAppPreviewOpen(true)}
        />

        {/* 4. Tabela de Planos & Consultoria */}
        <PlansSection
          onSelectPlan={(plan) => setSelectedPlan(plan)}
        />

        {/* 5. Chamada para Ação Decisiva */}
        <CtaSection
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={handleFloatingWhatsApp}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#ff5708] text-white shadow-[0_6px_25px_rgba(255,87,8,0.45)] hover:bg-[#ff6820] hover:scale-105 transition-all duration-300 cursor-pointer"
          aria-label="Falar com Rian"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#ff5708]/40 animate-ping pointer-events-none" />
          <MessageCircle className="w-6 h-6 fill-white relative z-10" />

          {/* Tooltip on hover */}
          <span className="absolute right-16 px-3.5 py-2 rounded-xl bg-[#1b1b1f] border border-[#ff5708]/40 text-xs font-['Space_Grotesk',sans-serif] uppercase tracking-wider font-bold text-[#e4e1e7] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25d366]" />
            WhatsApp: (11) 97168-5090
          </span>
        </button>
      </div>

      {/* Modals */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
      />

      <AppPreviewModal
        isOpen={isAppPreviewOpen}
        onClose={() => setIsAppPreviewOpen(false)}
        onEnroll={() => {
          setIsAppPreviewOpen(false);
          setSelectedPlan(PLANS[0]);
        }}
      />

      <PlanEnrollModal
        plan={selectedPlan}
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </div>
  );
}

export default App;
