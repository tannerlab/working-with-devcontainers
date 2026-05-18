FROM mcr.microsoft.com/devcontainers/base:trixie

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git ca-certificates build-essential \
    && rm -rf /var/lib/apt/lists/*

ARG NODE_VERSION=24

RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

USER vscode
WORKDIR /workspace
