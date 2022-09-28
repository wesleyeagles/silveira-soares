import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M30 30c5.525 0 10-4.475 10-10s-4.475-10-10-10-10 4.475-10 10 4.475 10 10 10Zm0 5c-6.675 0-20 3.35-20 10v5h40v-5c0-6.65-13.325-10-20-10Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h60v60H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
