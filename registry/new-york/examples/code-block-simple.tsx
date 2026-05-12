import { CodeBlock } from "@/registry/new-york/ui/code-block"

const code = `npm install nusa-ui`

export default function CodeBlockSimple() {
  return <CodeBlock code={code} language="bash" />
}
