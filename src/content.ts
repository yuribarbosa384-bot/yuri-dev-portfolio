import { Code2, Database, GitBranch, MonitorCheck, ServerCog, ShieldCheck } from "lucide-react";

export const projects = [
  {
    name: "OpsFlow Administrativo",
    status: "Sistema full stack",
    summary: "Gestão de tarefas administrativas com banco SQLite, criação, edição, exclusão, filtros por prazo e responsável, dashboard e insights de gargalos operacionais.",
    image: "/projects/opsflow-overview.png",
    repoUrl: "https://github.com/yuribarbosa384-bot/opsflow-service-desk",
    stack: ["React", "TypeScript", "Express", "SQLite", "Zod", "Vitest", "GitHub Actions"],
    outcomes: [
      "Banco SQLite com seed, índices e persistência local",
      "API REST com criação, edição, exclusão, filtros e métricas",
      "Dashboard com taxa de conclusão, prazos vencidos e insights operacionais",
      "Testes de domínio, API e formulário com pipeline de CI"
    ]
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
    text: "APIs REST, validação de entrada, rotas, filtros, regras de negócio, métricas e tratamento de erro."
  },
  {
    icon: Database,
    title: "Dados",
    text: "SQL, modelagem de dados, SQLite, persistência local, filtros e leitura de indicadores operacionais."
  },
  {
    icon: ShieldCheck,
    title: "Qualidade",
    text: "Testes automatizados, typecheck, CI, documentação e revisão visual antes de publicar."
  },
  {
    icon: GitBranch,
    title: "Git",
    text: "Histórico organizado, README objetivo, estrutura de repositório e integração com GitHub."
  },
  {
    icon: MonitorCheck,
    title: "Produto",
    text: "Interfaces objetivas para fluxo de trabalho, priorização, acompanhamento e tomada de decisão."
  }
];
