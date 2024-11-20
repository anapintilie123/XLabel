<p align="center">
  <img src="./static/favicons/icon-512.png" width="96" />
</p>

<h1 align="center">SvelteKit Boilerplate</h1>

<p align="center">SvelteKit starter template.</p>

<br>

# My SvelteKit Project
A modern web application built with SvelteKit.

## Description
This is a responsive web application built using SvelteKit. It includes dynamic internationalization (i18n), Bootstrap styling, and a modern UI design. The project serves as a foundational template for creating professional-grade web applications.

## Features
- Built with [SvelteKit](https://kit.svelte.dev/)
- Responsive design with [Bootstrap](https://getbootstrap.com/)
- Internationalization (i18n) support
- Fast client-side routing
- Modular and scalable project structure

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>

## What's Included

- Svelte 5
- SvelteKit 2
- TypeScript 5
- ESLint 9
- Prettier 3
- TailwindCSS 4

## Add ftp-deploy if needed
npm install --save-dev ftp-deploy
then :
npm run deploy

## Development Setup

Start the local `dev` server:

```sh
pnpm dev
```

## Static Deployment

Build your `static` application:

```sh
pnpm build
```

Run the `preview` command to see a production version:

```sh
pnpm preview
```


## License

Released under the [MIT](LICENSE.txt) license.

##Project Structure
├── src/
│   ├── routes/          # Application pages and API routes
│   ├── lib/             # Shared utilities and components
│   ├── styles/          # Global CSS styles
│   ├── app.html         # HTML entry point
├── static/              # Static assets like images and fonts
├── package.json         # Node.js dependencies and scripts
└── svelte.config.js     # SvelteKit configuration
