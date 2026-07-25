---
title: "Building Pux — A CI Companion for AI Agents"
date: "2025-06-15"
description: "How I built a CLI tool that watches your CI pipeline and feeds failure context directly to your AI coding assistant."
---

Every time a CI build fails, the same ritual plays out: open GitHub, find the run, scroll through logs, copy the error, paste it into your AI assistant. Twenty-five minutes and seven tabs later, you're finally debugging.

I built Pux to kill that loop entirely.

## The idea

Pux is a CLI that watches your GitHub Actions runs in real-time. When something fails, it pulls the logs, extracts the relevant stacktrace, grabs the diff that caused it, and writes everything to a structured `.ai-context/failure.md` file.

Your AI agent picks it up on the next prompt. No tabs, no scrolling, no copy-paste.

## How it works

The architecture is simple:

1. `pux watch` polls the GitHub Actions API for active runs
2. On failure, it downloads the raw logs
3. A parser extracts the error window (the relevant 50-100 lines around the failure)
4. It collects the triggering diff and any config files
5. Everything gets written to `.ai-context/failure.md` in a structured format

The key insight: AI agents already read context files. Claude Code reads `CLAUDE.md`, Cursor reads `.cursorrules`, Copilot reads `.github/copilot-instructions.md`. Pux auto-injects pointers into all of them.

## The cat

Every good CLI needs personality. Pux has an ASCII cat that lives in your terminal, watches your builds, and reacts to success and failure. It never interrupts — just sits there, keeping you company while CI runs.

```
 /\_/\
( ^.^ )
 > ^ <
```

## What I learned

Building developer tools is about removing friction, not adding features. The best tool is one you forget is running until it saves you twenty minutes.

Pux is open source. Try it with `npm install -g pux.sh`.
