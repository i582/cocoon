import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="text-lg font-semibold tracking-tight">COCOON</span>
      ),
    },
  };
}
