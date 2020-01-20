# Next TSX

> Next.js build with TypeScript and TSX support

![Work in progress][wip-badge] ![Workflow status][workflow-status]

For detailed explanation on how things work, check out [Next.js docs][next-js].

To learn more about the TypeScript build, visit [Next TypeScript][next-ts].

## Stack
* [Babel][babel]
* [Cypress][cypress]
* [Emotion][emotion]
* [ESLint][eslint]
* [GitHub workflow][github-workflow]
* [Husky][husky]
* [Jest][jest]
* [Prettier][prettier]
* [React][react-js] + [Next.js][next-js]
* [Stylelint][stylelint]
* [TypeScript][typescript]

## Requirements
* [Node.js][node]

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

### Build for production and launch server
```sh
$ npm run build
$ npm start
```
Files will be generated in the `.next` folder.

### Export static version
```sh
$ npm run deploy
```
Files will be generated in the `dist` folder.

### Testing

#### Run all tests
```sh
$ npm test
```

#### End to end tests with Cypress
```sh
$ npm run test:e2e
```

#### Unit tests with Jest
```sh
$ npm run test:unit
```

#### Update snapshots
```sh
$ npm run test:update
```

## Deployment

### Netlify
1. Sign-up or log-in to [Netlify][netlify]
2. Create a new site from Git using your own copy of this repository
3. Choose an owner and a branch to deploy from
4. Change the following settings in the build options:
   - Build command:
   ```npm run deploy```
   - Publish directory:
   ```dist/```
5. Click on `Deploy site` to publish

See [demo site][demo-site] on Netlify.

![Netlify status][netlify-status]

## Links
* [Awesome Next][awesome-next]
* [Babel documentation][babel]
* [Cypress document][cypress-recipes] + [TypeScri][cypress-ts]
* [EditorConfig documentation][editor-config]
* [Emotion documentation][emotion-docs] and [theming][emotion-theming]
* [ESLint documentation][eslint] + [TypeScript][eslint-ts]
* [Git documentation][git]
* [Husky documentation][husky]
* [Jest documentation][jest] + [TypeScript][jest-ts]
* [Next.js documentation][next-js] with [TypeScript support][next-ts]
* [Prettier documentation][prettier]
* [Stylelint developer guide][stylelint-docs]
* [TypeScript documentation][typescript]

## License
[![MIT][mit-badge]](LICENSE.md)

[awesome-next]: https://github.com/unicodeveloper/awesome-nextjs
[babel]: https://babeljs.io/
[cypress-recipes]: https://github.com/cypress-io/cypress-example-recipes
[cypress-ts]: https://docs.cypress.io/guides/tooling/typescript-support.html
[cypress]: https://www.cypress.io/
[cypress]: https://www.cypress.io/
[demo-site]: https://awesome-newton-28faa7.netlify.com/
[editor-config]: https://editorconfig.org/
[emotion-docs]: https://emotion.sh/docs/introduction
[emotion-theming]: https://emotion.sh/docs/emotion-theming
[emotion]: https://emotion.sh/
[eslint-ts]: https://github.com/typescript-eslint/typescript-eslint
[eslint]: https://eslint.org/
[git]: https://git-scm.com/
[github-workflow]: https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow
[github-workflow]: https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow
[husky]: https://github.com/typicode/husky
[jest-ts]: https://kulshekhar.github.io/ts-jest/
[jest]: https://jestjs.io/
[jsconfig]: https://code.visualstudio.com/docs/languages/jsconfig
[localhost]: http://localhost:3000/
[mit-badge]: https://img.shields.io/badge/license-MIT-green.svg
[netlify-status]: https://api.netlify.com/api/v1/badges/033ec389-db50-43f5-8937-690712bb2371/deploy-status
[netlify]: https://www.netlify.com/
[next-js-logo]: public/nextjs.svg
[next-js]: https://nextjs.org/
[next-logo]: public/logo.svg
[next-ts]: https://nextjs.org/learn/excel/typescript/setup
[node]: https://nodejs.org/
[prettier]: https://prettier.io/
[react-js]: https://reactjs.org/
[react-js]: https://reactjs.org/
[stylelint-docs]: https://stylelint.io/developer-guide
[stylelint]: https://stylelint.io/
[typescript]: https://www.typescriptlang.org/
[wip-badge]: https://img.shields.io/badge/WIP-Work%20in%20progress-yellow
[workflow-status]: https://github.com/Phoenix2k/next-tsx/workflows/Next.tsx%20workflow/badge.svg
