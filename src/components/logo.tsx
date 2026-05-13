import type React from "react"
import Image from "next/image"

type LogoProps = Omit<React.ComponentProps<typeof Image>, "src" | "alt">

export function LogoIcon(props: LogoProps) {
  return (
    <Image src="/nusaui.png" alt="NusaUI" width={28} height={28} {...props} />
  )
}

export function Logo(props: LogoProps) {
  return (
    <Image src="/nusaui.png" alt="NusaUI" width={44} height={44} {...props} />
  )
}
