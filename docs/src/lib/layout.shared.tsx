import { ThemeLogo } from "@/components/ThemeLogo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-3">
          <ThemeLogo />
        </span>
      ),
    },
  };
}
