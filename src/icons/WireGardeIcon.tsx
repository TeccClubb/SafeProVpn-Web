import React, { FC, SVGProps } from "react";

const WireGardeIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_193_257)">
      <path
        d="M12 3H18V6H12V3ZM11.25 0C10.0078 0 9 1.00781 9 2.25V6.75C9 7.99219 10.0078 9 11.25 9H13.5V10.5H1.5C0.670312 10.5 0 11.1703 0 12C0 12.8297 0.670312 13.5 1.5 13.5H6V15H3.75C2.50781 15 1.5 16.0078 1.5 17.25V21.75C1.5 22.9922 2.50781 24 3.75 24H11.25C12.4922 24 13.5 22.9922 13.5 21.75V17.25C13.5 16.0078 12.4922 15 11.25 15H9V13.5H21V15H18.75C17.5078 15 16.5 16.0078 16.5 17.25V21.75C16.5 22.9922 17.5078 24 18.75 24H26.25C27.4922 24 28.5 22.9922 28.5 21.75V17.25C28.5 16.0078 27.4922 15 26.25 15H24V13.5H28.5C29.3297 13.5 30 12.8297 30 12C30 11.1703 29.3297 10.5 28.5 10.5H16.5V9H18.75C19.9922 9 21 7.99219 21 6.75V2.25C21 1.00781 19.9922 0 18.75 0H11.25ZM4.5 21V18H10.5V21H4.5ZM19.5 18H25.5V21H19.5V18Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_193_257">
        <path d="M0 0H30V24H0V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default WireGardeIcon;
