import { Code2, Database, GitBranch, MonitorCheck, ServerCog, ShieldCheck } from "lucide-react";

export const projects = [
  {
    name: "OpsFlow Service Desk",
    status: "Case full stack",
    summary: "Sistema operacional para priorizar chamados, acompanhar SLA, registrar status e visualizar indicadores da fila.",
    image: "/projects/opsflow-overview.png",
    repoUrl: "https://github.com/yuribarbosa384-bot/opsflow-service-desk",
    stack: ["React", "TypeScript", "Express", "Zod", "Vitest", "GitHub Actions"],
    outcomes: [
      "Contratos compartilhados entre frontend e API",
      "Validação de dados com Zod",
      "Testes de domínio, API e formulário",
      "Pipeline de CI com typecheck, testes e build"
    ]
  }
];

export const capabilities = [
  {
    icon: Code2,
    title: "Frontend",
    text: "React, TypeScript, componentes reutilizáveis, formulários, estados de carregamento e tratamento de erro."
  },
  {
    icon: ServerCog,
    title: "Backend",
    text: "APIs REST, validação de entrada, rotas, filtros, regras de negócio e tratamento de erro."
  },
  {
    icon: Database,
    title: "Dados",
    text: "SQL, modelagem de dados, persistência local, filtros e leitura de indicadores operacionais."
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
