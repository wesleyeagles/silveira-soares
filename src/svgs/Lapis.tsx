import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.338 0c-.404 0-.809.16-1.117.482l-2.695 2.812 6.316 6.587 2.695-2.811a1.696 1.696 0 0 0 0-2.33L25.454.483A1.54 1.54 0 0 0 24.338 0Zm-6.18 5.764L0 24.702v6.587h6.316L24.473 12.35l-6.315-6.587Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
