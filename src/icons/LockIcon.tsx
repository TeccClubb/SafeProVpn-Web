import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const LockIcon: FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 22 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_193_252)">
      <path
        d="M7.25 6.75V9H14.75V6.75C14.75 4.67812 13.0719 3 11 3C8.92813 3 7.25 4.67812 7.25 6.75ZM4.25 9V6.75C4.25 3.02344 7.27344 0 11 0C14.7266 0 17.75 3.02344 17.75 6.75V9H18.5C20.1547 9 21.5 10.3453 21.5 12V21C21.5 22.6547 20.1547 24 18.5 24H3.5C1.84531 24 0.5 22.6547 0.5 21V12C0.5 10.3453 1.84531 9 3.5 9H4.25Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_193_252">
        <path d="M0.5 0H21.5V24H0.5V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default LockIcon;
