import { Code2, Database, GitBranch, MonitorCheck, ServerCog, ShieldCheck } from "lucide-react";

export const links = {
  github: "https://github.com/yuribarbosa384-bot",
  email: "mailto:yuri.barbosa384@gmail.com",
  opsflowDemo: "https://yuribarbosa384-bot.github.io/opsflow-service-desk/",
  opsflowRepo: "https://github.com/yuribarbosa384-bot/opsflow-service-desk",
  portfolioRepo: "https://github.com/yuribarbosa384-bot/yuri-dev-portfolio",
  cashbackRepo: "https://github.com/yuribarbosa384-bot/cashback-nology"
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
