import { Plan, Pillar, StudentResult, FAQItem } from '../types';

export const COACH_INFO = {
  name: 'Rian Martins',
  title: 'Head Coach • CREF 194592-G/SP',
  badge: 'Excellence Coach',
  yearsExperience: '8+',
  fatLostKg: '+1.200',
  satisfactionRate: '98%',
  countriesCount: '12',
  totalStudents: '+100',
  phoneWhatsApp: '5511971685090',
  phoneDisplay: '+55 11 97168-5090',
  email: 'rianmartins025@gmail.com',
  city: 'Bragança Paulista',
  state: 'SP',
  locationDisplay: 'Bragança Paulista - SP (Presencial)',
  instagram: 'https://instagram.com/rianmartinscoach',
  youtube: 'https://youtube.com',
  manifesto: '“Corpos de elite não são construídos pelo sofrimento irracional, mas pela constância inteligente e aplicação cirúrgica da biomecânica.”',
  bio: 'Graduado em Educação Física com especialização profunda em Biomecânica Clínica, Fisiologia Avançada do Exercício e Periodização de Força. Com atendimento presencial exclusivo em Bragança Paulista (SP) e consultoria online global, Rian Martins (CREF 194592-G/SP) refinou uma abordagem de mentoria que remove o ruído e entrega resultados tangíveis.',
  photos: {
    hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqn_xTQSdqBmdJsM5HSs51jZkwFgOomejGQ8s-GxMmrLSTEWc8L1wa6mb8EozCcZHa7_VLVUERtG3wMJn84T6hAXcDkx2eOlmGM7HAikr9Oo5f_Ulb1anM9NQ4jvU92XWfjxe76r1JtFxdUAb6Z-Bk8U52s0hV-tcQqjyUtpZtYt8wLGk4J68pf701VbFHh6RjTnubyautPVuDwIXYwazdGdRMHzo5TjE1dy0zu6-iA1T8qH0YrZrMRuci4WcEg4y1',
    coachingAction: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHGOWjci6Wpa5zWgttWwoNQzVStVkOt9-Qq6DI0UZxNBuBZS3uLxAd73umMVZ4GqR8N8ajmdCeG6fczx6zZhx9kP2WNw6LvYMjJebIX1ZUaxHL7FewtYzVzGRl6zjA4LPNwvVodWhnk4trqxlEu61smkx5o9IZ8ugzKLKRlOaef_2V0UuOUn7537wM3ikGMxJhpHmfbGWLB0D3UuvdNVTQkkeT8nQlInzl9YpY8eNxtNivZRvIWmI',
    logo: 'https://lh3.googleusercontent.com/aida/AEtjO1UEF2I1aJhXC4iEYvCNoGRnfMglO3kxsr0hppyscpRQR8NLTbXwTz0SIxY58cwMWXrFr8OEEGCS_ph76ue8VTKkBt11k2sHZrDWUPC-AnSSpxfs5vKAlJoQQvzA6WQbUS2vbU_uG2lH2giwPMrxa2RpAEQfOK3Sd4a11NqVyzNiNxmfEa9qymsi0lQyVsjQ8cKbLIRGjnM1uQ1xedpv4db6vGox0T9dPK5kOQAiEzh0cXxKE8IB-P1wbdMBuv9HqWGcuzYBeHz1',
  }
};

export const METHODOLOGY_PILLARS: Pillar[] = [
  {
    id: 'pilar-1',
    number: '01',
    title: 'Avaliação Biomecânica & Postural',
    description: 'Mapeamento de mobilidade, encurtamentos, assimetrias de membros e histórico de lesões para blindar o corpo antes de sobrecarregar.',
    tag: 'Diagnóstico Preciso',
    icon: 'analytics',
    details: {
      overview: 'Uma análise visual minuciosa dos seus padrões básicos de movimento (agachamento, flexão de quadril, empurrada vertical/horizontal).',
      bulletPoints: [
        'Detecção de compensações articulares na coluna lombar e joelhos',
        'Avaliação de flexibilidade ativa e passiva',
        'Protocolo de ativação neuromuscular pré-treino personalizado'
      ],
      deliverable: 'Relatório biomecânico com apontamento dos pontos críticos para blindagem articular.'
    }
  },
  {
    id: 'pilar-2',
    number: '02',
    title: 'Periodização Estruturada',
    description: 'Divisão de micro e macrociclos de treino: fases de adaptação neural, hipertrofia tensional e deloads estratégicos calculados.',
    tag: 'Evolução Contínua',
    icon: 'tune',
    details: {
      overview: 'Você nunca treinará por acaso. Cada semana obedece a uma curva matemática de volume (séries semanais) e intensidade (% de esforço real).',
      bulletPoints: [
        'Planejamento de RPE (Percepção Subjetiva de Esforço) e RIR (Repetições em Reserva)',
        'Progressão de carga linear e ondulatória periodizada',
        'Semanas de deload programadas para regeneração neural e metabólica'
      ],
      deliverable: 'Fichas dinâmicas atualizadas com base na velocidade de adaptação do seu organismo.'
    }
  },
  {
    id: 'pilar-3',
    number: '03',
    title: 'Suporte Nutricional & Hábitos',
    description: 'Direcionamento de macronutrientes, hidratação e otimização do sono. Sinergia total entre combustível metabólico e esforço físico.',
    tag: 'Adesão & Energia',
    icon: 'restaurant',
    details: {
      overview: 'Sem dietas punitivas ou restrições incompatíveis com reuniões de trabalho, viagens e vida familiar.',
      bulletPoints: [
        'Cálculo de metas diárias de proteína, carboidratos e gorduras boas',
        'Timing de carboidratos em volta da janela do treino para render mais',
        'Otimização do sono REM e higiene de sono para recuperação hormonal'
      ],
      deliverable: 'Guia de substituições inteligentes e estratégias para manter o foco em jantares e viagens.'
    }
  },
  {
    id: 'pilar-4',
    number: '04',
    title: 'Monitoramento & App Exclusivo',
    description: 'Controle de cargas em aplicativo VIP, vídeos de execução em alta definição e feedback semanal direto com Rian para ajustes ágeis.',
    tag: 'Zero Dúvidas',
    icon: 'smartphone',
    details: {
      overview: 'Você leva o método no bolso. Registre suas cargas, assista às instruções de postura em vídeo 4K e fale direto com o Coach.',
      bulletPoints: [
        'Biblioteca com demonstrações em vídeo e alertas de erros comuns',
        'Histórico de progressão de carga e repetições de cada exercício',
        'Envio semanal de vídeos da sua execução para correção direta por WhatsApp'
      ],
      deliverable: 'Acesso imediato ao App exclusivo Team Rian no iOS e Android.'
    }
  }
];

export const PLANS: Plan[] = [
  {
    id: 'consultoria-online',
    name: 'Consultoria Online 90 Dias',
    subtitle: 'Prescrição completa e acompanhamento 100% individual à distância.',
    badge: 'Ideal para quem treina só',
    priceMonthly: 360,
    priceQuarterly: 360,
    periodText: '/trimestral',
    isFeatured: false,
    features: [
      { text: 'Treino prescrito no App com vídeos em HD', included: true },
      { text: 'Suporte diário via WhatsApp com o Coach', included: true },
      { text: 'Ajustes de carga e volume a cada 15 dias', included: true },
      { text: 'Análise de execução de movimentos por vídeo', included: true },
      { text: 'Sem sessões presenciais', included: false }
    ],
    ctaText: 'Falar com Rian'
  },
  {
    id: 'personal-vip',
    name: 'Personal VIP Presencial',
    subtitle: 'Acompanhamento presencial exclusivo em Bragança Paulista - SP (academias ou condomínios).',
    badge: 'Mais Exclusivo',
    priceMonthly: 890,
    priceQuarterly: 890,
    periodText: '/mês',
    isFeatured: true,
    features: [
      { text: '2x por Semana', included: true, highlight: true },
      { text: 'Presença de Rian Martins em cada repetição e série', included: true },
      { text: 'Correção biomecânica e postural em tempo real', included: true },
      { text: 'Avaliação com bioimpedância e adipometria periódica', included: true },
      { text: 'Acesso total ao App para os treinos complementares', included: true },
      { text: 'Atendimento presencial exclusivo em Bragança Paulista, SP', included: true }
    ],
    ctaText: 'Falar com Rian'
  },
  {
    id: 'protocolo-90d',
    name: 'Personal VIP Presencial',
    subtitle: 'Acompanhamento presencial exclusivo em Bragança Paulista - SP (academias ou condomínios).',
    badge: 'Intenso',
    priceMonthly: 1360,
    priceQuarterly: 1360,
    periodText: '/mês',
    isFeatured: false,
    features: [
      { text: '4x por Semana', included: true, highlight: true },
      { text: 'Presença de Rian Martins em cada repetição e série', included: true },
      { text: 'Correção biomecânica e postural em tempo real', included: true },
      { text: 'Avaliação com bioimpedância e adipometria periódica', included: true },
      { text: 'Acesso total ao App para os treinos complementares', included: true },
      { text: 'Atendimento presencial exclusivo em Bragança Paulista, SP', included: true }
    ],
    ctaText: 'Falar com Rian'
  }
];

export const STUDENT_RESULTS: StudentResult[] = [
  {
    id: 'case-lucas',
    name: 'Lucas Almeida',
    role: 'Empresário',
    plan: 'Consultoria VIP',
    category: 'emagrecimento',
    metric: '-14 kg em 4 meses',
    metricColor: '#ff5708',
    testimonial: '“Eu vinha de 5 anos estagnado, com dores lombares terríveis. O Rian corrigiu meu agachamento na primeira semana e a queima de gordura veio com consistência. Minha disposição hoje é outra.”',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU-pFU87lxlQG7OKh80Mj8jRTKauNT1vnGyAERJoHhO13L0B4u88uk9x7uREoK8xftLyvMWfCd7wdTcXwIKwv42FxXdww_BQrS4Ps6j9MCagC6NVhZh-QrKWVq2Yh8nw3r42TwJjh-TsdxdBuo2GU_QDYNXR4kvQxFbW7Z_3vG0e8oQVf2kdlgKhT32vxj7dKUVdXx0cGdTl7SlR0RC5u4TJNJa9_z7-xI94O8HGKlbVZSv4z5GfE',
    rating: 5,
    timeframe: '4 meses'
  },
  {
    id: 'case-beatriz',
    name: 'Beatriz Ramos',
    role: 'Advogada',
    plan: 'Consultoria Online',
    category: 'hipertrofia',
    metric: '+6.5 kg de Massa Magra',
    metricColor: '#7bd0ff',
    testimonial: '“Achei que por treinar online seria distante, mas o Rian responde minhas dúvidas no WhatsApp mais rápido do que qualquer professor presencial que tive. O acompanhamento é cirúrgico!”',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnTZwV-TKFoZVwo-bLl4NvIWG5FS_76uXWUMolKNlazNGkDGk6sHDeWakidTaA3exaJBSuW2BECgMlI2wplRO9IexyzA7nQsn4KkWTBLU1zeyG8Yj6Ud9QnWCywwLrWyZszz3HNBhZyM5jPyqrfLMjtsqoRfBsdBg_Hu_YLnc3F5RkVjtkZ-orFKCerMEHl7VUuDMjWhIIs8s5lmNiyN3E49tuhT3GRtZ_SOilZTRXcyCt0hpUGA8',
    rating: 5,
    timeframe: '6 meses'
  },
  {
    id: 'case-rodrigo',
    name: 'Rodrigo Faria',
    role: 'Engenheiro',
    plan: 'Protocolo 90D',
    category: 'emagrecimento',
    metric: 'De 28% para 12% de Gordura',
    metricColor: '#ffb596',
    testimonial: '“O Protocolo 90 Dias foi um divisor de águas. Não apenas perdi a barriga que me incomodava, mas aprendi a treinar com intensidade real sem me lesionar. Valeu cada centavo investido.”',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7-QmK8Fo9F0M8cBKGt8TSMZ0sl6xt-U_h-h7pLz4uFpE3l8HSn0-f6nnGip8SseJntfVePKun9sJBWtr5_UmrEwWLIKveqvpaBeeXd5NWifApmBjPiyZAW1putRoziJMJ2oOOvAcB5_4nxfpwvo2qiq_fxb88hzxYctZsmxfOmlLxu6bcaOoClGKPeCQPiA4QebuniFE1Y-orRsWIeah4xLyEVHCR1DNg0AmwuLGZzP5UJtkcRzA',
    rating: 5,
    timeframe: '90 dias'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Nunca treinei antes, a consultoria serve para mim?',
    answer: 'Com certeza. É até melhor começar do jeito certo para não criar vícios posturais. Sua periodização iniciará com foco na adaptação articular, ganho de consciência corporal e aprendizado dos padrões fundamentais (agachar, empurrar, puxar).'
  },
  {
    id: 'faq-2',
    question: 'Como funciona a consultoria online na prática?',
    answer: 'Você baixa nosso aplicativo exclusivo com todos os seus treinos ilustrados por vídeos em alta definição. Ao treinar, você anota as cargas e repetições utilizadas. Você pode enviar vídeos das suas execuções para que o Rian analise ângulos, cadência e alinhamentos pelo WhatsApp, com feedbacks regulares e ajustes periódicos.'
  },
  {
    id: 'faq-3',
    question: 'Preciso treinar em academia ou dá para fazer em casa?',
    answer: 'Montamos o plano estritamente de acordo com a sua realidade. Se você treina no condomínio, em uma academia de rede completa, em estúdio ou em casa com halteres e elásticos, adaptamos a seleção de exercícios para extrair o máximo do seu ambiente.'
  },
  {
    id: 'faq-4',
    question: 'Qual a frequência de troca dos meus treinos?',
    answer: 'A troca completa da estrutura ocorre tipicamente a cada 4 a 6 semanas, respeitando o princípio da sobrecarga progressiva. Trocar de treino todo dia é erro comum; você precisa consolidar a mecânica e progredir carga antes de introduzir novos estímulos.'
  },
  {
    id: 'faq-5',
    question: 'Tenho dores no ombro / joelho / lombar. Posso treinar?',
    answer: 'Sim! Na verdade, o treinamento resistido com foco biomecânico e correção de encurtamentos é a forma mais eficaz de estabilizar articulações e eliminar a dor mecânica. Realizamos uma anamnese prévia para eliminar exercícios potencialmente lesivos para a sua condição.'
  },
  {
    id: 'faq-presencial-braganca',
    question: 'Onde ocorrem as aulas presenciais de Personal Trainer?',
    answer: 'O atendimento presencial de Rian Martins é exclusivo na cidade de Bragança Paulista, SP e condomínios da região bragantina. As sessões ocorrem na academia onde você já treina, em condomínios fechados ou em estúdios parceiros selecionados. Para alunos de outras cidades ou do exterior, o atendimento é realizado através da Consultoria Online Elite.'
  },
  {
    id: 'faq-6',
    question: 'Como faço para falar diretamente com o Coach?',
    answer: 'Assim que a matrícula for concluída, você recebe o link de integração e o número particular de WhatsApp de Rian Martins. As dúvidas de rotina são respondidas em menos de 2 horas úteis.'
  }
];

export const PILLAR_SAMPLE_EXERCISES = [
  {
    name: 'Agachamento Livre com Barra',
    focus: 'Quadríceps & Glúteos',
    biomechanicsTip: 'Manter a linha de força sobre o mediopé e controlar a retroversão pélvica no ponto de reversão.',
    tempo: '3-0-1-0',
    intensity: 'RPE 8.5'
  },
  {
    name: 'Supino Reto com Halteres',
    focus: 'Peitoral Maior & Deltóide Anterior',
    biomechanicsTip: 'Retração e depressão escapular fixas no banco. Ângulo dos cotovelos em 45° a 60° para poupar o manguito.',
    tempo: '2-1-1-0',
    intensity: 'RPE 8'
  },
  {
    name: 'Levantamento Terra Romeno (RDL)',
    focus: 'Cadeia Posterior & Isquiotibiais',
    biomechanicsTip: 'Foco no quadril se projetando posteriormente, mantendo neutra a coluna torácica e cervical.',
    tempo: '3-1-1-0',
    intensity: 'RPE 8'
  }
];
