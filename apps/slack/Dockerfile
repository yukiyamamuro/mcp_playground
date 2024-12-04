FROM oven/bun:1.1.29 as base
WORKDIR /app
COPY . /app/
RUN bun install --frozen-lockfile

WORKDIR /app/apps/slack
