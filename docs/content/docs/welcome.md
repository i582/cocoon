---
title: Welcome to Cocoon
description: "Start here for the COCOON docs: overview pages, technical guides, and suggested reading paths by role."
---

COCOON is a confidential AI inference network on TON. This documentation is split into a public overview layer and a deeper technical layer, so you can either get oriented quickly or go straight into implementation details.

## Start Here

- [Overview](./overview.mdx) — High-level map of the technical documentation
- [For Developers](./developers.mdx) — Product-facing entry point for app and backend developers
- [For GPU Owners](./gpu-owners.mdx) — Operational guide for running workers
- [Architecture Overview](./architecture-overview.mdx) — Public architecture, trust model, and request flow
- [Downloads](./downloads.mdx) — Official worker distribution, source repos, images, and tools

## Technical Docs

- [Architecture](./architecture.md) — Detailed system architecture
- [TDX and Images](./tdx-and-images.mdx) — Guest images, measurements, and boot flow
- [RA-TLS](./ra-tls.md) — Attested transport and certificate format
- [Seal Keys](./seal-keys.mdx) — Persistent key derivation and SGX/TDX interaction
- [Smart Contracts](./smart-contracts.md) — On-chain payment and registry model
- [GPU](./gpu.md) — GPU passthrough, attestation, and model validation
- [Deployment](./deployment.md) — Build, launch, testing, and monitoring flows

## Suggested Paths

- Building an app on top of COCOON: start with [For Developers](./developers.mdx), then read [Architecture Overview](./architecture-overview.mdx) and [RA-TLS](./ra-tls.md)
- Running worker infrastructure: start with [For GPU Owners](./gpu-owners.mdx), then read [GPU](./gpu.md), [TDX and Images](./tdx-and-images.mdx), and [Deployment](./deployment.md)
- Auditing the protocol: start with [Overview](./overview.mdx), then read [Architecture](./architecture.md), [Seal Keys](./seal-keys.mdx), [RA-TLS](./ra-tls.md), and [Smart Contracts](./smart-contracts.md)
