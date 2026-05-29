# Yuri Barbosa Couto | Portfólio

![CI](https://github.com/yuribarbosa384-bot/yuri-dev-portfolio/actions/workflows/ci.yml/badge.svg)
![Pages](https://github.com/yuribarbosa384-bot/yuri-dev-portfolio/actions/workflows/pages.yml/badge.svg)
![CodeQL](https://github.com/yuribarbosa384-bot/yuri-dev-portfolio/actions/workflows/codeql.yml/badge.svg)

Portfólio profissional para apresentar projetos, competências, CV e estudos de caso de desenvolvimento full stack.

[Demo online](https://yuribarbosa384-bot.github.io/yuri-dev-portfolio/) · [Repositório](https://github.com/yuribarbosa384-bot/yuri-dev-portfolio)

![Tela inicial do portfólio](docs/screenshots/portfolio-home.png)

## Proposta

O site posiciona Yuri Barbosa Couto como desenvolvedor full stack em formação com foco em produtos para operações, backoffice e fluxos administrativos. A vitrine prioriza poucos projetos bem explicados, com demo pública, estudo de caso, links de contratação e documentação técnica.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Vitest e Testing Library
- GitHub Pages

## Rodar localmente

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run typecheck
npm run test
npm run build
```

## Qualidade

- CI com typecheck, testes e build
- Deploy automatizado no GitHub Pages
- CodeQL para análise estática
- Dependabot para npm e GitHub Actions
- Dependency Review em pull requests

## Conteúdo

- Hero com posicionamento profissional
- Link para CV PDF
- Projeto principal em formato de estudo de caso
- Notas técnicas e aprendizados
- Competências técnicas
- Contato

## Projetos destacados

- OpsFlow Administrativo: https://github.com/yuribarbosa384-bot/opsflow-service-desk
- Demo do OpsFlow: https://yuribarbosa384-bot.github.io/opsflow-service-desk/

## Artefatos

- CV fonte: [docs/CV.md](docs/CV.md)
- CV público: [public/Yuri_Barbosa_Couto_CV.pdf](public/Yuri_Barbosa_Couto_CV.pdf)
- Script de geração do CV: [scripts/build_cv_pdf.py](scripts/build_cv_pdf.py)
