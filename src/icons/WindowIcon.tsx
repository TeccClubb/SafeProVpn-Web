import React, { FC, SVGProps } from "react";

const WindowIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 20,
  height = 20,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_250_409)">
      <path
        d="M0.561279 3.46032L6.24201 2.67751V8.16641H0.561279V3.46032ZM0.561279 13.5037L6.24201 14.2865V8.86567H0.561279V13.5037ZM6.86701 14.37L14.4228 15.4127V8.86567H6.86701V14.37ZM6.86701 2.59397V8.16641H14.4228V1.55127L6.86701 2.59397Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_250_409">
        <path
          d="M0.561157 0.561035H14.4226V16.4027H0.561157V0.561035Z"
          fill="transparent"
        />
      </clipPath>
    </defs>
  </svg>
);

export default WindowIcon;
