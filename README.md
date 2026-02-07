# Working with devcontainers

## Why devcontainers?

Devcontainers are an easy way to run code in a docker container during development. This is very advisable, because most code in your projects likely was not written by you, and could contain security 

## Background

This repo features two devcontainers:
- `dev--{repo}`: for human development and to run the app (`nrd`).
- `ai--{repo}`: for AI tools, not intended to run the app.

Both bind-mount the repo into `/workspace` (changes persist on the host).

### Getting Started (Development)

- Clone this repo
- Open it in VSCode
- Follow the suggestion to "Reopen in Container"
- Inside the container: `npm run dev`

### Tech

This application's boilerplate was created with the following command (generated on https://vike.dev/new):
```sh
npm create vike@latest --- --react --tailwindcss --shadcn-ui --biome --shadcnUi
```

See more information about Vike on [Vike's website](https://vike.dev/start).

This application is only for demonstrative purposes, to show how to use devcontainers.
