import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  style?: React.CSSProperties
}

export function Container({ children, className, as: Component = "div", style }: ContainerProps) {
  return <Component className={cn("container mx-auto px-2 sm:px-4", className)} style={style}>{children}</Component>
}
