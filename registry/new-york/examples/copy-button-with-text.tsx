import { CopyButton } from "@/registry/new-york/ui/copy-button"

export default function CopyButtonWithText() {
  return (
    <div className="bg-muted flex items-center gap-2 rounded-md px-3 py-2">
      <code className="text-sm">npm install nusa-ui</code>
      <CopyButton value="npm install nusa-ui" size="sm" variant="ghost" />
    </div>
  )
}
