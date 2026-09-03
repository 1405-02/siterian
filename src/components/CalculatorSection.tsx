import React, { useState } from 'react';
import { Calculator, Flame, Dumbbell, Send, RefreshCw, Sparkles } from 'lucide-react';
import { COACH_INFO } from '../data/fitnessData';

export const CalculatorSection: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(28);
  const [weight, setWeight] = useState<number>(78);
  const [height, setHeight] = useState<number>(178);
  const [activity, setActivity] = useState<number>(1.4); // 1.2, 1.4, 1.6, 1.8
  const [goal, setGoal] = useState<'fatloss' | 'hypertrophy' | 'recomp'>('hypertrophy');

  // Mifflin-St Jeor formula
  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const tdee = Math.round(bmr * activity);

  // Target calories based on goal
  let targetCalories = tdee;
  let proteinPerKg = 2.0;
  let fatPerKg = 0.8;

  if (goal === 'fatloss') {
    targetCalories = Math.round(tdee * 0.82); // 18% deficit
    proteinPerKg = 2.2;
    fatPerKg = 0.7;
  } else if (goal === 'hypertrophy') {
    targetCalories = Math.round(tdee * 1.1); // 10% surplus
    proteinPerKg = 2.0;
    fatPerKg = 0.9;
  } else {
    // Recomposition
    targetCalories = Math.round(tdee);
    proteinPerKg = 2.3;
    fatPerKg = 0.8;
  }

  const proteinGrams = Math.round(weight * proteinPerKg);
  const fatGrams = Math.round(weight * fatPerKg);
  const carbCalories = Math.max(0, targetCalories - (proteinGrams * 4 + fatGrams * 9));
  const carbGrams = Math.round(carbCalories / 4);

  const getSplitSuggestion = () => {
    if (goal === 'fatloss') return 'ABC 5x (Upper / Lower / Full body) + 2x Cardio LISS';
    if (goal === 'hypertrophy') return 'Push / Pull / Legs (PPL) 5-6x com foco em tensão mecânica';
    return 'Upper / Lower 4x focado em progressão de cargas fundamentais';
  };

  const handleShareToWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Rian! Calculei meu perfil metabólico na sua página:\n` +
      `- Sexo: ${gender === 'male' ? 'Masculino' : 'Feminino'}, Idade: ${age} anos\n` +
      `- Peso: ${weight}kg, Altura: ${height}cm\n` +
      `- Objetivo: ${goal === 'fatloss' ? 'Emagrecimento' : goal === 'hypertrophy' ? 'Hipertrofia' : 'Recomposição'}\n` +
      `- Meta Estimada: ${targetCalories} kcal (Proteína: ${proteinGrams}g, Carbo: ${carbGrams}g, Gordura: ${fatGrams}g)\n` +
      `Gostaria de validar essa estratégia com sua consultoria!`
    );
    window.open(`https://wa.me/${COACH_INFO.phoneWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section className="w-full bg-[#0e0e12] py-20 lg:py-28 relative" id="calculadora">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-widest text-[#ffb59c] font-bold">
            Simulador Biomecânico &amp; Metabólico
          </span>
          <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e4e1e7] font-bold mt-2">
            Calcule sua Necessidade Energética
          </h2>
          <p className="font-['Manrope',sans-serif] text-sm sm:text-base text-[#94a3b8] mt-3 leading-relaxed">
            Descubra o ponto de partida ideal para o seu gasto calórico, distribuição de macronutrientes e modelo de periodização.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#18181d] border border-[#2a292e] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Gender and Goal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-['Space_Grotesk',sans-serif] font-bold text-[#ffb59c] mb-2">
                  Sexo Biológico
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2.5 rounded-xl font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold transition-all ${
                      gender === 'male'
                        ? 'bg-[#ff5708] text-white'
                        : 'bg-[#1b1b1f] text-[#94a3b8] border border-[#2a292e]'
                    }`}
                  >
                    Masculino
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2.5 rounded-xl font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold transition-all ${
                      gender === 'female'
                        ? 'bg-[#ff5708] text-white'
                        : 'bg-[#1b1b1f] text-[#94a3b8] border border-[#2a292e]'
                    }`}
                  >
                    Feminino
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-['Space_Grotesk',sans-serif] font-bold text-[#ffb59c] mb-2">
                  Objetivo Principal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as any)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#1b1b1f] border border-[#2a292e] text-xs font-['Space_Grotesk',sans-serif] text-[#e4e1e7] focus:border-[#ff5708] focus:outline-none"
                >
                  <option value="fatloss">Queima de Gordura (Déficit)</option>
                  <option value="hypertrophy">Hipertrofia Limpa (Superávit)</option>
                  <option value="recomp">Recomposição Corporal</option>
                </select>
              </div>
            </div>

            {/* Sliders for Age, Weight, Height */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-['Space_Grotesk',sans-serif] mb-1.5">
                  <span className="text-[#94a3b8] uppercase font-bold">Idade</span>
                  <span className="text-[#e4e1e7] font-bold">{age} anos</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="70"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-[#ff5708] bg-[#2a292e] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-['Space_Grotesk',sans-serif] mb-1.5">
                  <span className="text-[#94a3b8] uppercase font-bold">Peso Corporal</span>
                  <span className="text-[#e4e1e7] font-bold">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="140"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-[#ff5708] bg-[#2a292e] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-['Space_Grotesk',sans-serif] mb-1.5">
                  <span className="text-[#94a3b8] uppercase font-bold">Estatura</span>
                  <span className="text-[#e4e1e7] font-bold">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="145"
                  max="210"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-[#ff5708] bg-[#2a292e] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-['Space_Grotesk',sans-serif] mb-1.5">
                  <span className="text-[#94a3b8] uppercase font-bold">Nível de Atividade Semanal</span>
                  <span className="text-[#ffb59c] font-bold">
                    {activity === 1.2
                      ? 'Sedentário (pouco exercício)'
                      : activity === 1.4
                      ? 'Moderado (3 a 4 treinos/sem)'
                      : activity === 1.6
                      ? 'Ativo (5 treinos intensos/sem)'
                      : 'Atleta / Treino duplo diário'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {[
                    { val: 1.2, label: 'Baixo' },
                    { val: 1.4, label: '3-4x' },
                    { val: 1.6, label: '5-6x' },
                    { val: 1.8, label: 'Extremo' },
                  ].map((act) => (
                    <button
                      key={act.val}
                      type="button"
                      onClick={() => setActivity(act.val)}
                      className={`py-2 rounded-lg text-xs font-['Space_Grotesk',sans-serif] font-semibold uppercase transition-all ${
                        activity === act.val
                          ? 'bg-[#2a292e] text-[#ff5708] border border-[#ff5708]'
                          : 'bg-[#1b1b1f] text-[#94a3b8] border border-[#2a292e]'
                      }`}
                    >
                      {act.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#1b1b1f] border border-[#2a292e] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2a292e]">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#ff5708]" />
                  <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider text-[#e4e1e7] font-bold">
                    Diagnóstico Metabólico
                  </span>
                </div>
                <span className="text-[11px] font-['Space_Grotesk',sans-serif] text-[#7bd0ff] font-semibold">
                  Mifflin-St Jeor
                </span>
              </div>

              {/* Calories Highlight */}
              <div className="my-6 text-center">
                <span className="text-xs uppercase font-['Space_Grotesk',sans-serif] text-[#94a3b8] tracking-wider block">
                  Meta Calórica Recomendada
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="font-['Oswald',sans-serif] text-5xl sm:text-6xl text-[#ff5708] font-bold leading-none">
                    {targetCalories}
                  </span>
                  <span className="font-['Oswald',sans-serif] text-xl text-[#94a3b8]">kcal/dia</span>
                </div>
                <span className="text-xs text-[#94a3b8] block mt-1">
                  (Gasto Total estimado: {tdee} kcal • Basal: {Math.round(bmr)} kcal)
                </span>
              </div>

              {/* Macro breakdown */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 rounded-xl bg-[#131317] border border-[#2a292e] text-center">
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#ffb59c] uppercase font-bold block">
                    Proteína
                  </span>
                  <span className="font-['Oswald',sans-serif] text-2xl text-[#e4e1e7] font-bold block mt-0.5">
                    {proteinGrams}g
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">{proteinPerKg}g/kg</span>
                </div>

                <div className="p-3 rounded-xl bg-[#131317] border border-[#2a292e] text-center">
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#7bd0ff] uppercase font-bold block">
                    Carboidrato
                  </span>
                  <span className="font-['Oswald',sans-serif] text-2xl text-[#e4e1e7] font-bold block mt-0.5">
                    {carbGrams}g
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">Energia</span>
                </div>

                <div className="p-3 rounded-xl bg-[#131317] border border-[#2a292e] text-center">
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#ffb596] uppercase font-bold block">
                    Gorduras
                  </span>
                  <span className="font-['Oswald',sans-serif] text-2xl text-[#e4e1e7] font-bold block mt-0.5">
                    {fatGrams}g
                  </span>
                  <span className="text-[10px] text-[#94a3b8]">Hormonal</span>
                </div>
              </div>

              {/* Recommended Split */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#131317] border border-[#2a292e]">
                <div className="flex items-center gap-2 mb-1">
                  <Dumbbell className="w-4 h-4 text-[#ff5708]" />
                  <span className="font-['Space_Grotesk',sans-serif] text-xs uppercase font-bold text-[#e4e1e7]">
                    Periodização Sugerida
                  </span>
                </div>
                <p className="font-['Manrope',sans-serif] text-xs text-[#94a3b8] leading-relaxed">
                  {getSplitSuggestion()}
                </p>
              </div>
            </div>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleShareToWhatsApp}
              className="mt-6 w-full py-3.5 rounded-xl bg-[#ff5708] text-white font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:bg-[#ff6820] shadow-[0_4px_20px_rgba(255,87,8,0.35)] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Estratégia para o Rian</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
