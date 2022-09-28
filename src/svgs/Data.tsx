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
      d="M11.184 21.998H3.316a2.319 2.319 0 0 1-1.638-.677A2.308 2.308 0 0 1 1 19.687V5.825c0-.612.244-1.2.678-1.633a2.319 2.319 0 0 1 1.638-.677H17.21c.614 0 1.203.243 1.637.677.434.433.678 1.02.678 1.633v4.62"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.369 23.153A4.626 4.626 0 0 0 23 18.533a4.626 4.626 0 0 0-4.631-4.622 4.626 4.626 0 0 0-4.632 4.621 4.626 4.626 0 0 0 4.632 4.62ZM14.895 1.205v4.62M5.632 1.205v4.62M1 10.446h18.526"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.368 16.795v1.738l1.158 1.155"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
