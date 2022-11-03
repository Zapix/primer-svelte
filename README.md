# primer-svelte

Svelte implementation of  Primer Design System

## Project status

In development

## Development 

primer-svelte builds on node `v18.12.0`  with TypeScript `4.8.4` and Svelte `3.52.0` 

### Run local

- Clone project `git clone git@github.com:Zapix/primer-svelte.git`
- Setup dependencies:`npm install'
- Start storybook `npm run storybook` with env variable `NODE_OPTIONS=--openssl-legacy-provider`

### Available npm commands:

- `npm run dev` - starts dev server
- `npm build` - builds project
- `npm run check` - checks project with svelte-check
- `npm run storybook` - starts storybook 
- `npm run build-storybook` - build storybook for svelte
- `npm run test` - run tests for project
- `npm run test:watch` - run tests in watch mode
- `npm run prettier:write` - format code with prettier
- `npm run prettier:check` - check code with prettier for errors
- `npm run lint` - run linter to check errors
