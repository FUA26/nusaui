import type { Metadata } from "next"
import { RootProvider } from "fumadocs-ui/provider/next"

import { Toaster } from "@/registry/new-york/ui/sonner"

import "./global.css"

import { Geist, Geist_Mono } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nusa-ui.vercel.app"),
  title: {
    default: "NusaUI",
    template: "%s | NusaUI",
  },
  description:
    "A beautiful component library built with Radix UI and Tailwind CSS.",
  icons: {
    icon: "/nusaui.png",
    apple: "/nusaui.png",
  },
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className="root flex min-h-screen flex-col">
          <RootProvider theme={{ defaultTheme: "dark" }}>
            {children}
            <Toaster />
          </RootProvider>
        </div>
      </body>
    </html>
  )
}
