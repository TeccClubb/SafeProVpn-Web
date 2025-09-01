import React, { FC, SVGProps } from "react";

const FlashIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_182_68)">
      <path
        d="M16.5344 2.09062C16.8109 1.44843 16.6047 0.698434 16.0375 0.285934C15.4703 -0.126566 14.6969 -0.0890657 14.1672 0.370309L2.16718 10.8703C1.69843 11.2828 1.52968 11.9437 1.74999 12.525C1.9703 13.1062 2.5328 13.5 3.15624 13.5H8.3828L4.77811 21.9094C4.50155 22.5516 4.7078 23.3016 5.27499 23.7141C5.84218 24.1266 6.61562 24.0891 7.1453 23.6297L19.1453 13.1297C19.6141 12.7172 19.7828 12.0562 19.5625 11.475C19.3422 10.8937 18.7844 10.5047 18.1562 10.5047H12.9297L16.5344 2.09062Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_182_68">
        <path d="M0.15625 0H21.1562V24H0.15625V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default FlashIcon;
