import { Code2, Database, GitBranch, MonitorCheck, ServerCog, ShieldCheck } from "lucide-react";

export const links = {
  github: "https://github.com/yuribarbosacouto",
  email: "mailto:yuri.barbosa384@gmail.com",
  opsflowDemo: "https://yuribarbosacouto.github.io/opsflow-service-desk/",
  opsflowRepo: "https://github.com/yuribarbosacouto/opsflow-service-desk",
  lumeDemo: "https://yuribarbosacouto.github.io/lume-fashion-commerce/",
  lumeRepo: "https://github.com/yuribarbosacouto/lume-fashion-commerce",
  portfolioRepo: "https://github.com/yuribarbosacouto/yuri-dev-portfolio",
  dbLabDocs: "https://yuribarbosacouto.github.io/yuri-db-lab/",
  dbLabRepo: "https://github.com/yuribarbosacouto/yuri-db-lab",
  polyagentDemo: "https://yuribarbosacouto.github.io/polyagent-workbench/",
  polyagentRepo: "https://github.com/yuribarbosacouto/polyagent-workbench"
};

export const projects = [
  {
    name: "OpsFlow Administrativo",
    status: "Projeto flagship",
    summary: "Central de Operações e SLA para priorizar demandas administrativas, detectar gargalos, calcular risco e registrar decisões no histórico.",
    image: "projects/opsflow-overview.png",
    caseStudyPath: "cases/opsflow.html",
    liveUrl: links.opsflowDemo,
    repoUrl: links.opsflowRepo,
    stack: ["React", "TypeScript", "Express", "SQLite", "Zod", "Vitest", "GitHub Actions"],
    outcomes: [
      "Score de risco por prazo, prioridade, responsável e gargalo",
      "Dashboard, fila operacional, Kanban, relatórios e painel de detalhe",
      "API REST com SQLite, auditoria, comentários internos, filtros e métricas",
      "Demo pública, testes, CI e documentação de decisão técnica"
    ],
    metrics: [
      "Fluxo crítico coberto por testes de domínio, API, formulário e Playwright E2E",
      "Deploy estático no GitHub Pages com dados demonstrativos",
      "Arquitetura documentada com domínio compartilhado entre web e API",
      "Histórico de tarefa persistido em SQLite para criação, atualização, status, comentários e exclusão"
    ],
    decisions: [
      "Usei monorepo para manter web, API e domínio no mesmo fluxo de qualidade.",
      "Escolhi SQLite para facilitar setup local sem abrir mão de persistência e auditoria reais.",
      "Separei regras de risco no pacote de domínio para evitar duplicação entre frontend e backend."
    ]
  },
  {
    name: "Lume Fashion Commerce",
    status: "E-commerce UX-first",
    summary: "E-commerce de moda com descoberta rápida, filtros compartilháveis, PDP com guia de medidas, carrinho, checkout e testes de funil.",
    image: "projects/lume-commerce.png",
    liveUrl: links.lumeDemo,
    repoUrl: links.lumeRepo,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Playwright", "GitHub Actions"],
    outcomes: [
      "Home editorial, busca acessível, PLP com filtros em URL e cards responsivos",
      "PDP com galeria, swatches, estoque, JSON-LD Product e recomendação de tamanho",
      "Carrinho persistente em localStorage, checkout em etapas e resumo transparente",
      "Static export para GitHub Pages, audit limpo, CI, CodeQL e testes E2E desktop/mobile"
    ],
    metrics: [
      "Funil crítico coberto por Playwright: filtro, PDP, add-to-cart e checkout",
      "Build estático com 14 rotas geradas, incluindo 6 páginas de produto",
      "npm audit --audit-level=moderate sem vulnerabilidades",
      "URLs de imagens verificadas e demo pública publicada no GitHub Pages"
    ],
    decisions: [
      "Usei Next.js com export estático para unir arquitetura moderna e demo fácil de abrir.",
      "Mantive dados mockados versionados para focar em UX, acessibilidade, SEO e fluxo de compra.",
      "Modelei recomendação de tamanho com regra transparente para gerar conversa técnica em entrevista."
    ]
  }
];

export const technicalNotes = [
  {
    title: "Produto antes de tela",
    text: "O OpsFlow não foi pensado como lista genérica de tarefas. A proposta é responder o que está vencido, quem está sobrecarregado, qual demanda deve ser atacada primeiro e qual decisão foi registrada."
  },
  {
    title: "Trade-off de banco local",
    text: "SQLite deixa o projeto simples de rodar em ambiente de avaliação, mas a documentação já separa o próximo passo: backend publicado com banco gerenciado."
  },
  {
    title: "Qualidade visível",
    text: "Typecheck, testes, CI, CodeQL, Dependabot e release notes aparecem no repositório para reduzir fricção na avaliação técnica."
  }
];

export const projectMap = [
  {
    tier: "Principal",
    name: "OpsFlow",
    role: "Sistema full stack para operacoes, SLA e priorizacao de demandas administrativas.",
    maturity: "Projeto mais defensavel em entrevista: problema real, API, banco, testes, CI e demo publica.",
    repoUrl: links.opsflowRepo,
    liveUrl: links.opsflowDemo
  },
  {
    tier: "Principal",
    name: "Lume",
    role: "Produto visual e fluxo de compra para e-commerce de moda.",
    maturity: "Mostra frontend, UX, acessibilidade, SEO, carrinho, checkout e testes E2E.",
    repoUrl: links.lumeRepo,
    liveUrl: links.lumeDemo
  },
  {
    tier: "Laboratorio tecnico",
    name: "Yuri DB Lab",
    role: "Estudo de banco de dados por baixo dos sistemas: parser SQL, storage, indices e WAL.",
    maturity: "Projeto experimental de sistemas. Tem subsistemas reais, mas nao e banco de producao.",
    repoUrl: links.dbLabRepo,
    liveUrl: links.dbLabDocs
  },
  {
    tier: "Experimental",
    name: "PolyAgent",
    role: "Workbench de arquitetura para roteamento, fila, traces e metricas de agentes simulados.",
    maturity: "Providers e outputs sao simulados. Serve como laboratorio de arquitetura, nao plataforma pronta.",
    repoUrl: links.polyagentRepo,
    liveUrl: links.polyagentDemo
  },
  {
    tier: "Vitrine",
    name: "Portfolio",
    role: "Camada de curadoria que conecta os projetos em uma narrativa profissional.",
    maturity: "Organiza foco, estudos de caso, CV e mapa de maturidade do GitHub.",
    repoUrl: links.portfolioRepo,
    liveUrl: "https://yuribarbosacouto.github.io/yuri-dev-portfolio/"
  }
];

export const capabilities = [
  {
    icon: Code2,
    title: "Frontend",
    text: "React, TypeScript, componentes reutilizáveis, formulários, edição, exclusão, estados de carregamento e tratamento de erro."
  },
  {
    icon: ServerCog,
    title: "Backend",
    text: "APIs REST, validação de entrada, rotas, filtros, regras de negócio, métricas, auditoria e tratamento de erro."
  },
  {
    icon: Database,
    title: "Dados",
    text: "SQL, modelagem de dados, SQLite, persistência local, trilha de auditoria, filtros e leitura de indicadores operacionais."
  },
  {
    icon: ShieldCheck,
    title: "Qualidade",
    text: "Testes automatizados, typecheck, CI, documentação, segurança de dependências e revisão visual antes de publicar."
  },
  {
    icon: GitBranch,
    title: "Git",
    text: "Histórico organizado, README objetivo, estrutura de repositório, GitHub Actions e deploy público."
  },
  {
    icon: MonitorCheck,
    title: "Produto",
    text: "Interfaces objetivas para fluxo de trabalho, priorização, acompanhamento e tomada de decisão."
  }
];
