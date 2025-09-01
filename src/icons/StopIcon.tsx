import React, { FC, SVGProps } from "react";

const StopIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_182_86)">
      <path
        d="M17.2125 19.3359L4.66406 6.7875C3.61406 8.25469 3 10.0547 3 12C3 16.9688 7.03125 21 12 21C13.9453 21 15.7453 20.3859 17.2125 19.3359ZM19.3359 17.2125C20.3859 15.7453 21 13.9453 21 12C21 7.03125 16.9688 3 12 3C10.0547 3 8.25469 3.61406 6.7875 4.66406L19.3359 17.2125ZM0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_182_86">
        <path d="M0 0H24V24H0V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default StopIcon;
