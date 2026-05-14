import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { githubRepoUrl } from "@/lib/metadata";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      githubUrl={githubRepoUrl}
      sidebar={{
        className: "cocoon-docs-sidebar",
      }}
      containerProps={{
        style: {
          gridTemplate: `"sidebar . header toc toc"
"sidebar . toc-popover toc toc"
"sidebar . main toc toc" 1fr / var(--fd-sidebar-col) minmax(min-content, 1fr) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) var(--fd-toc-width) minmax(min-content, 1fr)`,
        },
      }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
