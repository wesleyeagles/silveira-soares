import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={23}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.333 5.656a2.33 2.33 0 0 0 2.334-2.328A2.33 2.33 0 0 0 3.333 1 2.33 2.33 0 0 0 1 3.328a2.33 2.33 0 0 0 2.333 2.328ZM19.667 21.95A2.33 2.33 0 0 0 22 19.624a2.33 2.33 0 0 0-2.333-2.328 2.33 2.33 0 0 0-2.334 2.328 2.33 2.33 0 0 0 2.334 2.328ZM19.667 5.656A2.33 2.33 0 0 0 22 3.328 2.33 2.33 0 0 0 19.667 1a2.33 2.33 0 0 0-2.334 2.328 2.33 2.33 0 0 0 2.334 2.328ZM3.333 21.95a2.33 2.33 0 0 0 2.334-2.327 2.33 2.33 0 0 0-2.334-2.328A2.33 2.33 0 0 0 1 19.623a2.33 2.33 0 0 0 2.333 2.328ZM5.667 3.328h11.666m-14 2.328v11.639m16.334-11.64v11.64"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
