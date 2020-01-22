# Next TSX ![Work in progress][wip-badge]

> Next.js build with TypeScript and TSX support

[![Code coverage][codecov-badge]][codecov] [![Code quality][codacy-badge]][codacy] ![Workflow status][workflow-status]

For detailed explanation on how things work, check out [Next.js docs][next-js].

To learn more about the TypeScript build, visit [Next TypeScript][next-ts].

## Table of contents

- [What's included](#whats-included)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
  - [Serve with hot reload](#serve-with-hot-reload)
- [Production](#production)
  - [Build project](#build-project)
  - [Serve on localhost](#serve-on-localhost)
- [Deployment](#deployment)
  - [Export static version](#export-static-version)
  - [Hosting](#hosting)
    - [Netlify](#netlify)
- [Testing](#testing)
  - [Run all tests](#run-all-tests)
  - [CI tests](#ci-tests)
  - [End-to-end tests (Cypress)](#end-to-end-tests-cypress)
  - [Unit tests (Jest)](#unit-tests-jest)
  - [Update snapshots](#update-snapshots)
- [Documentation](#documentation)
- [Links](#links)
- [License](#license)

## What's included

- [Babel][babel]
- [Cypress][cypress]
- [Emotion][emotion]
- [ESLint][eslint]
- [GitHub workflow][github-workflow]
- [Husky][husky]
- [Jest][jest]
- [Next.js][next-js]
- [Prettier][prettier]
- [React][react]
- [Remark][remark]
- [Stylelint][stylelint]
- [TypeScript][typescript]

## Requirements

- [Node.js][node]

## Installation

```sh
$ npm run install
```

## Development

### Serve with hot reload

```sh
$ npm run dev
```

Default location: [`http://localhost:3000/`][localhost]

## Production

### Build project

```sh
$ npm run build
```

Files will be generated in the `.next` folder.

### Serve on localhost

```sh
$ npm start
```

Default location: [`http://localhost:3000/`][localhost]

## Deployment

### Export static version

```sh
$ npm run export
```

Files will be generated in the `dist` folder.

### Hosting

#### Netlify

1. Sign-up or log-in to [Netlify][netlify]
2. Create a new site from Git using your own copy of this repository
3. Choose an owner and a branch to deploy from
4. Change the following settings in the build options:
   - Build command:
     ```sh
     npm run export
     ```
   - Publish directory:
     ```sh
     dist/
     ```
5. Click on `Deploy site` to publish

See [demo site][demo-site] on Netlify.

![Netlify status][netlify-status]

## Testing

All test related files are located under `__tests__`, except a few configs which are found in the root of the project.

### Run all tests

```sh
$ npm test
```

This will run both the end-to-end tests as well as the unit tests.

### Code coverage

```sh
$ npm run test:coverage
```

A full coverage report will be generated in the `coverage` folder. To access it, open the
`index.html` file in your browser, which is located in the `lcov-report` folder.

### End-to-end tests (Cypress)

```sh
$ npm run test:e2e
```

Screenshots and videos will be generated in the `cypress` folder.

### Unit tests (Jest)

```sh
$ npm run test:unit
```

### Update snapshots

```sh
$ npm run test:update
```

## Documentation

- [Babel documentation][babel]
- [Cypress documentation][cypress]
  - [Cypress fixtures][cypress-fixtures]
  - [TypeScript support][cypress-ts]
- [EditorConfig documentation][editor-config]
- [Emotion documentation][emotion-docs]
  - [Emotion theming][emotion-theming]
- [ESLint documentation][eslint]
  - [ESLint with TypeScript support][eslint-ts]
- [Git documentation][git]
- [Husky documentation][husky]
- [Jest documentation][jest]
  - [Jest with TypeScript support][jest-ts]
- [Next.js documentation][next-js]
  - [Next.js with TypeScript support][next-ts]
- [Prettier documentation][prettier]
- [React documentation][react]
- [Remark documentation][remark]
  - [Remark CLI][remark-cli]
  - [Remark linter][remark-lint]
  - [Remark plugins][remark-plugins]
  - [Recommended preset][remark-preset-lint-recommended]
  - [Style guide][remark-preset-lint-markdown-style-guide]
- [Stylelint documentation][stylelint]
- [TypeScript documentation][typescript]

## Links

- [Awesome Next][awesome-next]
- [Cypress recipes][cypress-recipes]
- [GitHub Markdown guide][github-markdown]
- [React testing recipes][react-testing]

## License

[![MIT][mit-badge]][license]

[awesome-next]: https://github.com/unicodeveloper/awesome-nextjs

[babel]: https://babeljs.io/

[codacy-badge]: https://api.codacy.com/project/badge/Grade/e90183f4949f404984dfba9051f6a51e

[codacy]: https://www.codacy.com/manual/Phoenix2k/next-tsx?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Phoenix2k/next-tsx&amp;utm_campaign=Badge_Grade

[codecov-badge]: https://codecov.io/gh/Phoenix2k/next-tsx/branch/master/graph/badge.svg

[codecov]: https://codecov.io/gh/Phoenix2k/next-tsx

[cypress-fixtures]: https://docs.cypress.io/api/commands/fixture.html

[cypress-recipes]: https://github.com/cypress-io/cypress-example-recipes

[cypress-ts]: https://docs.cypress.io/guides/tooling/typescript-support.html

[cypress]: https://www.cypress.io/

[demo-site]: https://awesome-newton-28faa7.netlify.com/

[editor-config]: https://editorconfig.org/

[emotion-docs]: https://emotion.sh/docs/introduction

[emotion-theming]: https://emotion.sh/docs/emotion-theming

[emotion]: https://emotion.sh/

[eslint-ts]: https://github.com/typescript-eslint/typescript-eslint

[eslint]: https://eslint.org/

[git]: https://git-scm.com/

[github-markdown]: https://guides.github.com/features/mastering-markdown/

[github-workflow]: https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow

[husky]: https://github.com/typicode/husky

[jest-ts]: https://kulshekhar.github.io/ts-jest/

[jest]: https://jestjs.io/

[license]: LICENSE.md

[localhost]: http://localhost:3000/

[mit-badge]: https://img.shields.io/badge/license-MIT-green.svg

[netlify-status]: https://api.netlify.com/api/v1/badges/033ec389-db50-43f5-8937-690712bb2371/deploy-status

[netlify]: https://www.netlify.com/

[next-js]: https://nextjs.org/

[next-ts]: https://nextjs.org/learn/excel/typescript/setup

[node]: https://nodejs.org/

[prettier]: https://prettier.io/

[react]: https://reactjs.org/

[react-testing]: https://reactjs.org/docs/testing-recipes.html

[remark]: https://github.com/remarkjs/remark

[remark-cli]: https://github.com/remarkjs/remark/tree/master/packages/remark-cli

[remark-lint]: https://github.com/remarkjs/remark-lint

[remark-plugins]: https://github.com/remarkjs/remark/blob/master/doc/plugins.md

[remark-preset-lint-markdown-style-guide]: https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-markdown-style-guide

[remark-preset-lint-recommended]: https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-recommended

[stylelint]: https://stylelint.io/

[typescript]: https://www.typescriptlang.org/

[wip-badge]: https://img.shields.io/badge/WIP-Work%20in%20progress-yellow

[workflow-status]: https://github.com/Phoenix2k/next-tsx/workflows/Next.tsx%20workflow/badge.svg
