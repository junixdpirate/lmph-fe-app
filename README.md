# LMPH Front-end Demo Application

Front-end demo application using svelte as front-end framework

## Tech Stack

![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

- Svelte 4.0.5
- SvelteKit
- TypeScript
- Tailwind
- Flowbite Svelte (UI components)
- Houdini (GraphQL Client)
- Vitest (unit testing)
- Playwright (Integration and end-to-end testing)

## Requirements

- git
- docker or docker desktop for Windows
- node

## Installation

clone the repository
```bash
git clone https://github.com/junixdpirate/lmph-fe-app.git .
```
in root directory, create an environment file .env and .env.development and copy the ff variables to both .env and .env.development
```
VITE_GRAPHQL_API_URL="http://localhost:8080/graphql"
```

run `npm install` to install dependencies.
```bash
npm install
```

## Developing

To successfully run this app, you need to run the backend server. Run first the dockerize backend server provided in the root folder:

```bash
docker-compose -f docker-compose-be-server.yml up -d
```

Once you run the backend server. start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Testing
Vitest is use for unit testing. To run unit test:
```bash
npm run test
```

For integration or end-to-end testing. 
First you need to run the application. Run:
```
npm run dev
```

Then run playwrite test Run:
```bash
npx playwright test
```

To view result:
```bash
npx playwright show-report
```
you can view the result in http://localhost:9323/

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Run dockerize application

Run the server docker image first
```bash
docker-compose -f docker-compose-be-server.yml up -d
```

Then run the Dockerfile
```bash
docker build -t lmph-fe-app .
docker run lmph-fe-app
```
