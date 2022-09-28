import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M50 33.75H10v-4.5h40v4.5Zm0 4.5H10v4.5h40v-4.5Zm-12.5-13.5L50 16.762V11.25l-12.5 7.988L25 11.25l-15 8.235v5.265l14.8-8.122 12.7 8.122Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h60v54H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
