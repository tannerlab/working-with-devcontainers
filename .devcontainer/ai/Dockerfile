FROM mcr.microsoft.com/devcontainers/base:trixie

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git ca-certificates build-essential \
    gh jq ripgrep fd-find fzf unzip \
    python3 python3-venv python3-pip pipx \
    && rm -rf /var/lib/apt/lists/*

COPY bin/git /usr/local/bin/git
RUN chmod +x /usr/local/bin/git

USER vscode
RUN curl -fsSL https://claude.ai/install.sh | bash

WORKDIR /workspace
