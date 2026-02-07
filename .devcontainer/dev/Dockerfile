FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git ca-certificates build-essential \
    && rm -rf /var/lib/apt/lists/*

USER node
WORKDIR /workspace
