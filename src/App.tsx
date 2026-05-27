import { ArrowUpRight, GitBranch, Mail, MapPin } from "lucide-react";
import { capabilities, projects } from "./content";

export function App() {
  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 text-white">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          src="/projects/opsflow-overview.png"
          alt=""
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-between px-5 py-6 md:px-8">
          <nav className="flex items-center justify-between gap-4 text-sm">
            <a className="font-semibold" href="#top">Yuri Barbosa</a>
            <div className="flex items-center gap-3">
              <a className="rounded-md border border-white/25 px-3 py-2 hover:bg-white/10" href="#projetos">Projetos</a>
              <a className="rounded-md border border-white/25 px-3 py-2 hover:bg-white/10" href="#contato">Contato</a>
            </div>
          </nav>

          <div id="top" className="max-w-3xl py-16">
            <p className="mb-4 inline-flex items-center gap-2 rounded-sm bg-cyan-300 px-3 py-1 text-sm font-semibold text-slate-950">
              Desenvolvimento web, APIs e automação
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Yuri Barbosa Couto</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
              Crio aplicações para organizar fluxos de trabalho, transformar rotinas manuais em sistemas e tornar dados operacionais mais fáceis de acompanhar.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-100" href="#projetos">
                Ver projetos
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" href="https://github.com/yuribarbosa384-bot">
                GitHub
                <GitBranch aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 border-t border-white/20 pt-5 text-sm text-slate-100 md:grid-cols-3">
            <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="h-4 w-4" /> São João de Meriti, RJ</span>
            <span>React, TypeScript, Node.js e SQL</span>
            <span>Projetos com produto, código, testes e documentação</span>
          </div>
        </div>
      </section>

      <section id="projetos" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="mb-7 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">Projetos</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Repertório técnico</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Projetos selecionados para demonstrar raciocínio de produto, arquitetura, código limpo, testes e documentação.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
              <img className="h-56 w-full object-cover" src={project.image} alt={`Screenshot do projeto ${project.name}`} />
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-sm bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-800">{project.status}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>
                <a
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  href={project.repoUrl}
                >
                  Ver repositório
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-sm bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{item}</span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {project.outcomes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-12 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-md border border-slate-200 p-5">
              <item.icon aria-hidden="true" className="h-5 w-5 text-cyan-700" />
              <h3 className="mt-4 text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">Contato</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">Vamos conversar</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Busco oportunidades para aplicar desenvolvimento, automação e análise de dados em problemas reais.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800" href="mailto:yuri.barbosa384@gmail.com">
            <Mail aria-hidden="true" className="h-4 w-4" />
            E-mail
          </a>
          <a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50" href="https://github.com/yuribarbosa384-bot">
            <GitBranch aria-hidden="true" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
