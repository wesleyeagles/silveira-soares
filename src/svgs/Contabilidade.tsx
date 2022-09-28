import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M45 0H5C2.25 0 0 2.25 0 5v35c0 2.75 2.25 5 5 5h40c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5ZM20 35H7.5v-5H20v5Zm0-10H7.5v-5H20v5Zm0-10H7.5v-5H20v5Zm12.05 15L25 22.9l3.525-3.525 3.525 3.55L39.975 15l3.55 3.55L32.05 30Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
