import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { File, Files, Folder } from "@/components/Files";
import { Mermaid } from "@/components/Mermaid";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Callout,
    File,
    Files,
    Folder,
    Mermaid,
    ...components,
  };
}
