import { Plan, Pillar, StudentResult, FAQItem, ProtocolItem } from '../types';

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
  instagram: 'https://www.instagram.com/rianmartins_personal',
  youtube: 'https://youtube.com',
  manifesto: '“Corpos de elite não são construídos pelo sofrimento irracional, mas pela constância inteligente e aplicação cirúrgica da biomecânica.”',
  bio: 'Rian Martins (CREF 194592-G/SP) é graduado em Educação Física, com Pós Graduação em Condicionamento Físico e Musculação, estudante de nutrição e com mais de 30 cursos na área de treinamento, além de mentorias com os principais nomes do treinamento no Brasil. Com atendimento presencial exclusivo em Bragança Paulista (SP) e consultoria online global, ele refinou uma abordagem de treinamento que prioriza acompanhamento, individualidade e resultados (tudo exclusivo para sua realidade) e assim transforma vidas através do Team Rian Martins.',
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
    title: 'AVALIAÇÃO CORPORAL: FÍSICA, BIOMECÂNICA E POSTURAL',
    description: 'Avaliando seus pontos fracos e fortes, sua condição biomecânica e sua postura, podemos montar uma periodização altamente eficiente.',
    tag: 'Diagnóstico Preciso',
    icon: 'analytics',
    details: {
      overview: 'Avaliando seus pontos fracos e fortes, sua condição biomecânica e sua postura, podemos montar uma periodização altamente eficiente.',
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
    description: 'Macrociclos e microciclos estruturados de acordo com suas necessidades, tempo disponível para treinar e rotina, visando aumentar a aderência e potencializar ao máximo os resultados.',
    tag: 'Evolução Contínua',
    icon: 'tune',
    details: {
      overview: 'Macrociclos e microciclos estruturados de acordo com suas necessidades, tempo disponível para treinar e rotina, visando aumentar a aderência e potencializar ao máximo os resultados.',
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
    title: 'SUPORTE ONLINE DIRETAMENTE COM O TREINADOR',
    description: 'Teve qualquer dúvida? Entre em contato DIRETAMENTE com o treinador, via WhatsApp, isso mesmo: sem atendimento automático, assim que possível Rian entrará em contato para responder suas dúvidas e ajustar algo no seu treino. Você pode enviar vídeos das suas execuções para correção do exercício, tirar dúvidas referentes ao treino e pedir dicas para otimização dos resultados!',
    tag: 'WhatsApp Direto',
    icon: 'chat',
    details: {
      overview: 'Teve qualquer dúvida? Entre em contato DIRETAMENTE com o treinador, via WhatsApp, isso mesmo: sem atendimento automático, assim que possível Rian entrará em contato para responder suas dúvidas e ajustar algo no seu treino. Você pode enviar vídeos das suas execuções para correção do exercício, tirar dúvidas referentes ao treino e pedir dicas para otimização dos resultados!',
      bulletPoints: [
        'Contato direto no WhatsApp com o Coach Rian (sem robôs)',
        'Envio de vídeos dos exercícios para análise e correção de execução',
        'Ajustes ágeis na periodização e dicas para potencializar seus ganhos'
      ],
      deliverable: 'Canal aberto direto para esclarecer dúvidas e garantir segurança e evolução constante.'
    }
  },
  {
    id: 'pilar-4',
    number: '04',
    title: 'MONITORAMENTO & APP',
    description: 'Treinos via aplicativo, com vídeos dos exercícios, espaço para marcar suas cargas, já vem com os informativos de séries, repetições, e observações feitas pelo treinador. Você pode adicionar seu feedback pós treino no app e usar o cronômetro já incluso, para calcular o tempo de intervalo; ou seja, TUDO na palma da sua mão para seu resultado ser o melhor!',
    tag: 'Tudo no App',
    icon: 'smartphone',
    details: {
      overview: 'Treinos via aplicativo, com vídeos dos exercícios, espaço para marcar suas cargas, já vem com os informativos de séries, repetições, e observações feitas pelo treinador. Você pode adicionar seu feedback pós treino no app e usar o cronômetro já incluso, para calcular o tempo de intervalo; ou seja, TUDO na palma da sua mão para seu resultado ser o melhor!',
      bulletPoints: [
        'Vídeos demonstrativos de cada exercício com séries e repetições',
        'Registro de cargas e histórico de evolução sessão a sessão',
        'Cronômetro de intervalo integrado e espaço para feedback pós-treino'
      ],
      deliverable: 'Acesso completo ao aplicativo Team Rian para iOS e Android.'
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
      { text: 'Treino prescrito no App com vídeos e instruções', included: true },
      { text: 'Avaliações do físico', included: true },
      { text: 'Suporte diário via WhatsApp diretamente com Rian', included: true },
      { text: 'Ajustes planejados na periodização', included: true },
      { text: 'Análise da execução dos movimentos por vídeo', included: true },
      { text: 'Sem sessões presenciais', included: false }
    ],
    ctaText: 'Falar com Rian'
  },
  {
    id: 'personal-vip',
    name: 'Personal VIP Presencial',
    subtitle: 'Acompanhamento presencial exclusivo em Bragança Paulista - SP (academias ou condomínios).',
    badge: 'Mais Exclusivo',
    priceMonthly: 780,
    priceQuarterly: 780,
    periodText: '/mês',
    isFeatured: true,
    features: [
      { text: '2x por Semana com a presença de Rian Martins', included: true, highlight: true },
      { text: 'Avaliação física presencial', included: true },
      { text: 'Acesso total ao App para os treinos complementares', included: true },
      { text: 'Orientação, correções, feedbacks, ajustes finos, ao vivo', included: true }
    ],
    ctaText: 'Falar com Rian'
  },
  {
    id: 'protocolo-90d',
    name: 'Personal VIP Presencial',
    subtitle: 'Acompanhamento presencial exclusivo em Bragança Paulista - SP (academias ou condomínios).',
    badge: '',
    priceMonthly: 1360,
    priceQuarterly: 1360,
    periodText: '/mês',
    isFeatured: false,
    features: [
      { text: '4x por Semana com a presença de Rian Martins', included: true, highlight: true },
      { text: 'Avaliação física presencial', included: true },
      { text: 'Acesso total ao App para os treinos complementares', included: true },
      { text: 'Orientação, correções, feedbacks, ajustes finos, ao vivo', included: true }
    ],
    ctaText: 'Falar com Rian'
  }
];

export const STUDENT_RESULTS: StudentResult[] = [];

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

export const PROTOCOLS: ProtocolItem[] = [
  {
    id: 'protocolo-fast',
    title: 'PROTOCOLO FAST',
    description: 'ESSE É PRA VOCÊ, QUE NÃO TREINA POR FALTA DE TEMPO!\n\nRian Martins desenvolveu uma metodologia que une: rapidez, eficiência e resultados.',
    image: '/images/protocols/fast.png?v=5',
    imageAlt: 'PROTOCOLO FAST - Team Rian Martins',
    ctaText: 'Falar com Rian'
  },
  {
    id: 'protocolo-gluteos-3d',
    title: 'Protocolo Glúteos 3D',
    description: 'Transforme seus glúteos com esse protocolo que vai mudar a sua estética.',
    image: '/images/protocols/gluteos.png?v=5',
    imageAlt: 'Protocolo Glúteos 3D - Team Rian Martins',
    ctaText: 'Falar com Rian'
  },
  {
    id: 'metodo-ombros-3d',
    title: 'Método Ombros 3D',
    description: 'Quer construir ombros de respeito, que mudam a visão e estética do seu shape? Então esse é para você.',
    image: '/images/protocols/ombros.png?v=5',
    imageAlt: 'Método Ombros 3D - Team Rian Martins',
    ctaText: 'Falar com Rian'
  },
  {
    id: 'protocolo-explode-bracos',
    title: 'Protocolo Explode Braços',
    description: 'Dificuldade em ganhar braços? Tem vergonha deles? Ou simplesmente quer preencher o shape com braços de respeito? O que você precisa é explodir eles, vem comigo!',
    image: '/images/protocols/bracos.png?v=5',
    imageAlt: 'Protocolo Explode Braços - Team Rian Martins',
    ctaText: 'Falar com Rian'
  },
  {
    id: 'protocolo-explode-coxas',
    title: 'Protocolo Explode Coxas',
    description: 'Não sabe o que fazer para evoluir suas coxas? Conquiste a coxa dos seus sonhos com esse protocolo que irá mudar seu shape.',
    image: '/images/protocols/coxas.png?v=5',
    imageAlt: 'Protocolo Explode Coxas - Team Rian Martins',
    ctaText: 'Falar com Rian'
  }
];
