declare module "@theme/Layout" {
  import type { ReactNode } from "react"

  export interface Props {
    children: ReactNode
    title?: string
    description?: string
  }

  export default function Layout(props: Props): JSX.Element
}

declare module "@docusaurus/useGlobalData" {
  export function usePluginData<T = unknown>(pluginName: string): T
}
