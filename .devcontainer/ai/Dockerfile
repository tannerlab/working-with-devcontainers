FROM mcr.microsoft.com/devcontainers/base:bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git ca-certificates build-essential \
    gh jq ripgrep fd-find fzf unzip \
    python3 python3-venv python3-pip pipx \
    && rm -rf /var/lib/apt/lists/*

ARG NODE_VERSION
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Install claude code
RUN curl -fsSL https://claude.ai/install.sh | bash

# Install codex cli
RUN npm install -g @openai/codex

USER root
# Read-only git wrapper in front of the system git binary
COPY bin/git /usr/local/bin/git
RUN chmod +x /usr/local/bin/git

# Mount points for the persisted agent-state volumes
RUN mkdir -p /home/vscode/.claude /home/vscode/.codex && \
    chown -R vscode:vscode /home/vscode/.claude /home/vscode/.codex

USER vscode
WORKDIR /workspace
