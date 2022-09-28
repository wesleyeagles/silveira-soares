import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={55}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.175 22.825C42.6 25.15 45 28.3 45 32.5V40h10v-7.5c0-5.45-8.925-8.675-15.825-9.675Z"
      fill="#fff"
    />
    <path
      d="M20 20c5.523 0 10-4.477 10-10S25.523 0 20 0 10 4.477 10 10s4.477 10 10 10Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35 20c5.525 0 10-4.475 10-10S40.525 0 35 0c-1.175 0-2.275.25-3.325.6a14.95 14.95 0 0 1 0 18.8c1.05.35 2.15.6 3.325.6ZM20 22.5c-6.675 0-20 3.35-20 10V40h40v-7.5c0-6.65-13.325-10-20-10Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
