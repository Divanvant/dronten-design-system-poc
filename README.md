<!-- @license CC0-1.0 -->

# Dronten Headless architectuur met design systeem POC

## Delen

- [Design systeem](#dronten-design-systeem-documentatie)
- [React frontend](./apps/poc-react/README.md)
- [Vue Frontend](./apps/poc-vue/README.md)

## Data bron(nen)

De data word opgehaald vanuit de huidige websites die al bestaat en beheerd worden door de leverancier - Yard. We hebben meerdere websites, met namen, OpenPDC (waar o.a. alle PDC items zitten), OpenPub (waar o.a. alle nieuws items zitten) en de hoofd website.

In dit POC maken we gebruik van de OpenPDC en OpenPub bronnen om de headless concept te bewijzen

De data wordt met React hooks en Vue composables opgehaald. Dat betekent dat om een databron te vervangen hoeft je de componenten heelemaal niet aan te passen, deze laag is geabstraheerd en dus los gekoppeld van hoe de componenten eruit ziet.

## Voorwaarden om de code te draaien

- [NodeJs](https://nodejs.org/en)
- [PNPM](https://pnpm.io/installation)

## Quick start

### Apps

```bash
pnpm install
pnpm dev
```

### Design systeem

```bash
pnpm install
pnpm storybook
```

### Styling Aanpassingen

In de `proprietary/design-tokens/src/brand/dronten` map kan jij de design tokens aanpassen

---

## Dronten Design Systeem documentatie

## !NB this codebase is a Proof of concept

Please note that this repository is currently only used as a proof of concept and therefore it should not be used for any other reason

This design system is based on the NL Design System architecture.

For more info about the NL Design System and learn about things happening in our open source community, join the `#nl-design-system` Slack via [praatmee.codefor.nl](https://praatmee.codefor.nl)!

### Run storybook

- Install dependencies: `pnpm install`
- Run storybook: `npm run storybook`

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).
