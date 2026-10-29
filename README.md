# Luna UI

A React component library with an interactive Storybook for exploring components.

## Development

Use Node.js 22 (see `.nvmrc`) and npm.

```sh
npm ci
npm run storybook
```

Storybook runs at http://localhost:6006. The Button stories include controls,
generated API documentation, and examples of every color and variant.

## Validation and builds

```sh
npm run typecheck
npm test -- --runInBand
npm run build
npm run build-storybook
```

The library builds to `lib/`; the static Storybook builds to `storybook-static/`.

## Netlify

[Live Storybook](https://luna-ui-storybook.netlify.app) ·
[Netlify dashboard](https://app.netlify.com/projects/luna-ui-storybook)

Netlify is connected to `nirtz89/luna-ui` with `main` as the production branch. It reads
`netlify.toml`, runs `npm run build-storybook`, and publishes `storybook-static/`
on every push to `main`. Node.js is selected from `.nvmrc`, and `package-lock.json`
keeps dependency installation reproducible. Local Netlify state is gitignored.
