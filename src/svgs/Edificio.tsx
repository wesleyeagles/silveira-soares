import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 22.948h22M3.444 22.948V5.878L13.222 1v21.948M20.556 22.948V10.755l-7.334-4.878M8.333 8.316v.012M8.333 11.974v.012M8.333 15.632v.012M8.333 19.29v.012"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
