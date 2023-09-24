# LMPH Front-end Application

Front-end demo application using svelte as front-end framework

## Tech Stack
- Svelte 4.0.5
- SvelteKit
- Tailwind
- Flowbite Svelte (UI components)
- Houdini (GraphQL Client)

## Requirements

- git
- docker or docker desktop for Windows
- node

## Installation

- clone the repository
- run `npm install` to install dependencies.

## Developing

To successfully run this app, you need to run the backend server. Run first the dockerize backend server provided in the root folder:

```bash
docker-compose up -d
```

Once you run the backend server. start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
