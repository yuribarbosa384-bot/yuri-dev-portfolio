import { Code2, Database, GitBranch, MonitorCheck, ServerCog, ShieldCheck } from "lucide-react";

export const projects = [
  {
    name: "OpsFlow Service Desk",
    status: "Projeto principal",
    summary: "Sistema full-stack para controlar chamados, prioridade, SLA e status operacional.",
    image: "/projects/opsflow-overview.png",
    stack: ["React", "TypeScript", "Express", "Zod", "Vitest", "GitHub Actions"],
    outcomes: [
      "API REST com validacao e filtros",
      "Dashboard com indicadores de fila",
      "Testes de dominio, API e formulario",
      "README com case study e decisoes tecnicas"
    ]
  },
  {
    name: "Cashback Nology",
    status: "Projeto academico",
    summary: "Aplicacao web para calculo de cashback com regras de negocio, historico e persistencia.",
    image: "/projects/opsflow-overview.png",
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLAlchemy"],
    outcomes: [
      "Regras de negocio implementadas",
      "Fluxo completo de consulta",
      "Base para evoluir testes e deploy"
    ]
  }
];

export const capabilities = [
  {
    icon: Code2,
    title: "Frontend",
    text: "React, TypeScript, componentes reutilizaveis, formularios, estados de loading e erro."
  },
  {
    icon: ServerCog,
    title: "Backend",
    text: "APIs REST, validacao de entrada, rotas, filtros, regras de negocio e tratamento de erro."
  },
  {
    icon: Database,
    title: "Dados",
    text: "SQL, modelagem simples, persistencia local, filtros e leitura de indicadores operacionais."
  },
  {
    icon: ShieldCheck,
    title: "Qualidade",
    text: "Testes automatizados, typecheck, CI, documentacao e revisao visual antes de publicar."
  },
  {
    icon: GitBranch,
    title: "Git",
    text: "Commits claros, README forte, estrutura de repositorio e preparo para GitHub profissional."
  },
  {
    icon: MonitorCheck,
    title: "Produto",
    text: "Interfaces objetivas para fluxo de trabalho, priorizacao, acompanhamento e tomada de decisao."
  }
];
