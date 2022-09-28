import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#fff">
      <path d="M38.5 20.5c.85 0 1.675.1 2.5.225V8.675L22.25.5 3.5 8.675V20.95c0 11.35 8 21.975 18.75 24.55 1.375-.325 2.7-.8 4-1.375A14.946 14.946 0 0 1 23.5 35.5c0-8.275 6.725-15 15-15Z" />
      <path d="M38.5 25.5c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10Zm0 3.45c1.55 0 2.8 1.275 2.8 2.8s-1.275 2.8-2.8 2.8-2.8-1.275-2.8-2.8 1.25-2.8 2.8-2.8Zm0 13.425c-2.325 0-4.35-1.15-5.6-2.925.125-1.8 3.775-2.7 5.6-2.7 1.825 0 5.475.9 5.6 2.7-1.25 1.775-3.275 2.925-5.6 2.925Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h50v47H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
