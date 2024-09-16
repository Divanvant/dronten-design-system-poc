# Dronten Vue POC

## A note about the design system components

The design system doesn't work well with Vue as it stands. The components used in the Vue project are therefore stored in this project in the `/src/components/design-system-components` folder. They use the CSS from the design system and could eventually be refactored to sit in the design-system project should storybook work better with Vue in the future

## Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Type-Check, Compile and Minify for Production

```bash
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```bash
npm run lint
```
