import Image from "next/image"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/nusaui.png" alt="NusaUI" width={20} height={20} />
          <span>NusaUI</span>
        </div>
      ),
    },
    githubUrl: "https://github.com/codewithmehmet/nusa-ui",
  }
}
