FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git ca-certificates build-essential \
    jq ripgrep fd-find fzf unzip \
    python3 python3-venv python3-pip pipx \
    && rm -rf /var/lib/apt/lists/*

USER node
RUN curl -fsSL https://claude.ai/install.sh | bash

WORKDIR /workspace
