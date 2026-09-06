import React, { useState, useEffect } from 'react';
import { X, Play, Clock, CheckCircle2, ChevronRight, Volume2, Flame, Award } from 'lucide-react';
import { COACH_INFO, PILLAR_SAMPLE_EXERCISES } from '../data/fitnessData';

interface AppPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
}

export const AppPreviewModal: React.FC<AppPreviewModalProps> = ({ isOpen, onClose, onEnroll }) => {
  const [restSeconds, setRestSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isTimerRunning && restSeconds > 0) {
      interval = setInterval(() => {
        setRestSeconds((prev) => prev - 1);
      }, 1000);
    } else if (restSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, restSeconds]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const startTimer = (seconds: number) => {
    setRestSeconds(seconds);
    setIsTimerRunning(true);
  };

  const activeExercise = PILLAR_SAMPLE_EXERCISES[activeExerciseIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-[#131317] border border-[#2a292e] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2a292e]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-black border border-[#ff5708]/40 flex items-center justify-center shrink-0 shadow-md">
              <img
                src="/images/logo.png"
                alt="Logo Team Rian Martins"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-['Oswald',sans-serif] text-xl uppercase font-bold text-[#e4e1e7]">
                App Team Rian
              </h3>
              <p className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#ffb59c] uppercase font-semibold">
                Área do Aluno • Tecnologia &amp; Biomecânica no Bolso
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#2a292e] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Mockup UI */}
        <div className="overflow-y-auto py-5 space-y-5 pr-1">
          {/* Student Profile Bar */}
          <div className="p-4 rounded-2xl bg-[#1b1b1f] border border-[#2a292e] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff5708]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU-pFU87lxlQG7OKh80Mj8jRTKauNT1vnGyAERJoHhO13L0B4u88uk9x7uREoK8xftLyvMWfCd7wdTcXwIKwv42FxXdww_BQrS4Ps6j9MCagC6NVhZh-QrKWVq2Yh8nw3r42TwJjh-TsdxdBuo2GU_QDYNXR4kvQxFbW7Z_3vG0e8oQVf2kdlgKhT32vxj7dKUVdXx0cGdTl7SlR0RC5u4TJNJa9_z7-xI94O8HGKlbVZSv4z5GfE"
                  alt="Aluno"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-['Oswald',sans-serif] text-base uppercase font-bold text-[#e4e1e7] leading-tight">
                  Lucas Almeida
                </p>
                <span className="text-[11px] font-['Space_Grotesk',sans-serif] text-[#7bd0ff] font-semibold">
                  Semana 06 • Microciclo Hipertrofia
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-['Space_Grotesk',sans-serif] text-[#ffb59c] bg-[#ff5708]/15 px-2.5 py-1 rounded-full font-bold">
                VIP Ativo
              </span>
            </div>
          </div>

          {/* Today's Workout Header */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1e1e24] to-[#16161a] border border-[#2a292e] flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div>
              <span className="text-[11px] uppercase font-['Space_Grotesk',sans-serif] text-[#ff5708] font-bold tracking-wider block">
                Treino do Dia
              </span>
              <h4 className="font-['Oswald',sans-serif] text-xl uppercase font-bold text-[#e4e1e7] mt-0.5">
                Treino A: Push &amp; Tensão Mecânica de Peitoral
              </h4>
              <p className="text-xs text-[#94a3b8] mt-0.5 font-['Manrope',sans-serif]">
                Volume total prescrito: 16 séries efetivas • Duração aprox: 52 min
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-['Space_Grotesk',sans-serif] text-[#7bd0ff] bg-[#7bd0ff]/10 px-3 py-1.5 rounded-lg font-bold">
                RPE Alvo: 8 - 9.5
              </span>
            </div>
          </div>

          {/* Exercise Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {PILLAR_SAMPLE_EXERCISES.map((ex, index) => (
              <button
                key={ex.name}
                type="button"
                onClick={() => setActiveExerciseIndex(index)}
                className={`px-3.5 py-2 rounded-xl text-xs font-['Space_Grotesk',sans-serif] uppercase font-bold shrink-0 transition-all cursor-pointer ${
                  activeExerciseIndex === index
                    ? 'bg-[#ff5708] text-white shadow-md'
                    : 'bg-[#1b1b1f] text-[#94a3b8] border border-[#2a292e]'
                }`}
              >
                Exercício 0{index + 1}
              </button>
            ))}
          </div>

          {/* Active Exercise Detail Card */}
          <div className="p-5 rounded-2xl bg-[#1b1b1f] border border-[#2a292e] space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h5 className="font-['Oswald',sans-serif] text-xl uppercase font-bold text-[#e4e1e7]">
                  {activeExercise.name}
                </h5>
                <span className="text-xs text-[#ffb59c] font-['Space_Grotesk',sans-serif] font-semibold">
                  Foco: {activeExercise.focus}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-['Space_Grotesk',sans-serif] text-[#e4e1e7] bg-[#2a292e] px-2.5 py-1 rounded-md font-bold">
                  Cadência: {activeExercise.tempo}
                </span>
              </div>
            </div>

            {/* Video Preview Mockup */}
            <div className="w-full h-36 rounded-xl bg-[#0e0e12] border border-[#2a292e] relative overflow-hidden flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="w-12 h-12 rounded-full bg-[#ff5708] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 flex justify-between text-[11px] font-['Space_Grotesk',sans-serif] text-[#e4e1e7]">
                <span className="font-semibold">Demonstração HD com Rian Martins</span>
                <span className="text-[#ffb59c]">0:45</span>
              </div>
            </div>

            {/* Coach Biomechanics Secret Note */}
            <div className="p-3.5 rounded-xl bg-[#131317] border border-[#2a292e]/80">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#ff5708]" />
                <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#e4e1e7]">
                  Dica Biomecânica do Coach
                </span>
              </div>
              <p className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] leading-relaxed">
                {activeExercise.biomechanicsTip}
              </p>
            </div>

            {/* Interactive Rest Interval Timer */}
            <div className="p-3.5 rounded-xl bg-[#141418] border border-[#2a292e] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#ff5708]" />
                <div>
                  <span className="text-[11px] uppercase font-['Space_Grotesk',sans-serif] text-[#94a3b8] font-bold block">
                    Cronômetro de Descanso
                  </span>
                  <span className="font-['Oswald',sans-serif] text-2xl font-bold text-[#e4e1e7]">
                    {Math.floor(restSeconds / 60)}:
                    {restSeconds % 60 < 10 ? `0${restSeconds % 60}` : restSeconds % 60}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => startTimer(60)}
                  className="px-3 py-1.5 rounded-lg bg-[#2a292e] text-xs font-['Space_Grotesk',sans-serif] text-[#e4e1e7] hover:bg-[#353439] cursor-pointer"
                >
                  60s
                </button>
                <button
                  type="button"
                  onClick={() => startTimer(90)}
                  className="px-3 py-1.5 rounded-lg bg-[#2a292e] text-xs font-['Space_Grotesk',sans-serif] text-[#e4e1e7] hover:bg-[#353439] cursor-pointer"
                >
                  90s
                </button>
                <button
                  type="button"
                  onClick={() => startTimer(120)}
                  className="px-3 py-1.5 rounded-lg bg-[#2a292e] text-xs font-['Space_Grotesk',sans-serif] text-[#e4e1e7] hover:bg-[#353439] cursor-pointer"
                >
                  120s
                </button>
                <button
                  type="button"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-4 py-1.5 rounded-lg bg-[#ff5708] text-white text-xs font-['Space_Grotesk',sans-serif] font-bold uppercase cursor-pointer hover:bg-[#ff6820]"
                >
                  {isTimerRunning ? 'Pausar' : 'Iniciar'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#2a292e] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#94a3b8] font-['Manrope',sans-serif] text-center sm:text-left">
            Incluso em todos os planos da consultoria com acesso ilimitado.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${encodeURIComponent(
                'Olá Rian! Vi a prévia do App do Team Rian e quero iniciar minha consultoria com esse acompanhamento.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ff5708] text-white font-['Oswald',sans-serif] text-base uppercase tracking-wider font-bold hover:bg-[#ff6820] shadow-[0_4px_20px_rgba(255,87,8,0.35)] transition-all cursor-pointer text-center"
            >
              Falar com Rian no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
