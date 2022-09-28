import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.143 3.565H3.57c-.682 0-1.336.27-1.818.752A2.562 2.562 0 0 0 1 6.13v15.392c0 .68.27 1.333.753 1.814a2.575 2.575 0 0 0 1.818.752H16.43c.682 0 1.336-.27 1.818-.752A2.562 2.562 0 0 0 19 21.523V6.131c0-.68-.27-1.333-.753-1.814a2.575 2.575 0 0 0-1.818-.752h-2.572"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.286 1H8.714a2.568 2.568 0 0 0-2.571 2.565 2.568 2.568 0 0 0 2.571 2.566h2.572a2.568 2.568 0 0 0 2.571-2.566A2.568 2.568 0 0 0 11.286 1ZM6.143 15.11l2.571 2.565 5.143-5.13"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
