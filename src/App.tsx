import { ArrowUpRight, BookOpen, Download, FileText, GitBranch, Mail, MapPin } from "lucide-react";
import { capabilities, links, projects, technicalNotes } from "./content";

export function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const heroImage = `${baseUrl}projects/opsflow-overview.png`;
  const cvUrl = `${baseUrl}Yuri_Barbosa_Couto_CV.pdf`;

  return (
    <main className="bg-[#f5f7fb] text-slate-950">
      <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 text-white">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          src={heroImage}
          alt=""
        />
        <div className="absolute inset-0 bg-slate-950/68 md:bg-slate-950/56" />
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-between px-5 py-6 md:px-8">
          <nav className="flex flex-col items-start gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <a className="font-semibold" href="#top">Yuri Barbosa</a>
            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
              <a className="rounded-md border border-white/25 px-3 py-2 hover:bg-white/10" href="#projetos">Projetos</a>
              <a className="rounded-md border border-white/25 px-3 py-2 hover:bg-white/10" href="#estudo">Estudo</a>
              <a className="rounded-md border border-white/25 px-3 py-2 hover:bg-white/10" href="#contato">Contato</a>
            </div>
          </nav>

          <div id="top" className="max-w-3xl py-14">
            <p className="mb-4 inline-flex items-center gap-2 rounded-sm bg-emerald-300 px-3 py-1 text-sm font-semibold text-slate-950">
              Desenvolvimento full stack para operações e backoffice
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Yuri Barbosa Couto</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
              Transformo rotinas administrativas, planilhas e controles paralelos em sistemas web com dados, regras de negócio, APIs e documentação técnica.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-100" href={links.opsflowDemo}>
                Ver OpsFlow em produção
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" href={cvUrl}>
                Baixar CV
                <Download aria-hidden="true" className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" href={links.github}>
                GitHub
                <GitBranch aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 border-t border-white/20 pt-5 text-sm text-slate-100 md:grid-cols-3">
            <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="h-4 w-4" /> São João de Meriti, RJ</span>
            <span>React, TypeScript, Node.js, SQL, Python e Flask</span>
            <span>Projetos com produto, código, testes, CI e documentação</span>
          </div>
        </div>
      </section>

      <section id="projetos" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="mb-7 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-700">Projetos</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Repertório técnico curado</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Poucos projetos, mas com problema real, demo pública, README forte, testes e decisões técnicas explicadas.
          </p>
        </div>

        <div className="grid gap-5">
          {projects.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[1.05fr_0.95fr]">
              <img className="h-full min-h-72 w-full object-cover" src={`${baseUrl}${project.image}`} alt={`Screenshot do projeto ${project.name}`} />
              <div className="p-5 md:p-6">
                <span className="rounded-sm bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800">{project.status}</span>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    href={project.liveUrl}
                  >
                    Demo online
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    href={project.repoUrl}
                  >
                    Código
                    <GitBranch aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-sm bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{item}</span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {project.outcomes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="estudo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-7 px-5 py-14 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-700">Estudo de caso</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Por que o OpsFlow existe</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              O projeto nasceu de uma dor real de backoffice: tarefas, documentos, prazos e responsáveis espalhados entre planilhas e mensagens. A solução organiza a fila e transforma prioridade em regra visível.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800" href={links.opsflowDemo}>
                Testar agora
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50" href={links.opsflowRepo}>
                Ler README
                <FileText aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="rounded-md border border-slate-200 p-5">
              <h3 className="text-base font-semibold text-slate-950">Decisões técnicas</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {projects[0].decisions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="rounded-md border border-slate-200 p-5">
              <h3 className="text-base font-semibold text-slate-950">Métricas e sinais de qualidade</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {projects[0].metrics.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="mb-7 flex items-center gap-3">
          <BookOpen aria-hidden="true" className="h-6 w-6 text-emerald-700" />
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-700">Notas técnicas</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">O que aprendi construindo</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {technicalNotes.map((note) => (
            <article key={note.title} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-950">{note.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-12 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-md border border-slate-200 p-5">
              <item.icon aria-hidden="true" className="h-5 w-5 text-emerald-700" />
              <h3 className="mt-4 text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-emerald-700">Contato</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">Vamos conversar</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Busco oportunidades para aplicar desenvolvimento, automação e análise de dados em problemas reais.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800" href={links.email}>
            <Mail aria-hidden="true" className="h-4 w-4" />
            E-mail
          </a>
          <a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50" href={cvUrl}>
            <Download aria-hidden="true" className="h-4 w-4" />
            CV PDF
          </a>
          <a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50" href={links.github}>
            <GitBranch aria-hidden="true" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
