# Contributing

Thanks for taking a look at this portfolio. This repository is a professional work sample, so contributions should preserve the goal: clear positioning, credible case studies, reliable public links, and clean build quality.

## Local Setup

```bash
npm install
npm run dev
```

## Quality Checklist

Run the relevant checks before opening a pull request:

```bash
npm run typecheck
npm run test
npm run build
```

If the CV source changes, regenerate and review the public PDF before opening the pull request.

## Pull Request Guidelines

- Keep changes focused on one section, case study, asset, or technical improvement.
- Check all external links touched by the change.
- Update screenshots when the visible UI changes.
- Do not commit secrets, private documents, or contact data that is not intended to be public.
- Keep project claims specific and backed by demos, repositories, or documented implementation notes.

## Commit Style

Use short imperative commit messages, for example:

```text
docs: sharpen opsflow case study
fix: correct project demo link
test: cover project card rendering
```
