import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={47}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M41.5.5h-35c-2.75 0-5 2.25-5 5v35c0 2.75 2.25 5 5 5h35c2.75 0 5-2.25 5-5v-35c0-2.75-2.25-5-5-5ZM29 35.5H11.5v-5H29v5Zm7.5-10h-25v-5h25v5Zm0-10h-25v-5h25v5Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h47v47H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
