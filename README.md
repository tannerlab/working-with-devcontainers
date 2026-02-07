# Working with Devcontainers

Devcontainers are an easy way to run code inside a docker container during development. This is very advisable, because most code in your projects likely was not written by you, and could contain security risks when run as your (probably priviledged) user on your machine.

Additionally, due to the rise of AI-assisted development, it is very adviseable to run any AI agent inside a fully sandboxed environemnt, where they can't accidentally read and send contents of personal files or credentials used to run the app to the LLM provider or elsewhere on the internet.

## Background

This repo features two devcontainers:
- `dev--{repo}`: for human development and to run the app (`npm run dev`).
- `ai--{repo}`: for AI tools, not intended to run the app.

Both bind-mount the repo into `/workspace` (changes persist on the host).

### Env Files

- Dev env file: `~/dot-env-files/{repo}.env` (auto-created if missing).
- File is empty by default; add required secrets there.
- AI container gets no env file.
- Keeping env files outside the repo keeps them out of the `/workspace` bind mount.

### Getting Started (Development)

- Clone this repo
- Open it in VSCode
- Ensure Docker is running
- Follow the suggestion to "Reopen in Container"
- Inside the container: `npm run dev`

### Extensions

- Extensions are container-scoped (`devcontainer.json` for the opened container).
- AI extensions run only in `ai--{repo}`.

### Ports

- Dev container forwards `3000` (`npm run dev`, `nrd`, `npm run preview`).
- AI container forwards no app ports.

### Tech

This application's boilerplate was created with the following command (generated on https://vike.dev/new):
```sh
npm create vike@latest --- --react --tailwindcss --shadcn-ui --biome --shadcnUi
```

See more information about Vike on [Vike's website](https://vike.dev/start).

This application is only for demonstrative purposes, to show how to use devcontainers.
