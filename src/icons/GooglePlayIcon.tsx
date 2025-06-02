import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const GooglePlayIcon: FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      d="M10.5405 7.32188L3.64365 0.40625L12.4187 5.44375L10.5405 7.32188ZM1.84365 0C1.4374 0.2125 1.16553 0.6 1.16553 1.10312V14.8938C1.16553 15.3969 1.4374 15.7844 1.84365 15.9969L9.8624 7.99687L1.84365 0ZM15.1312 7.05L13.2905 5.98438L11.2374 8L13.2905 10.0156L15.1687 8.95C15.7312 8.50313 15.7312 7.49688 15.1312 7.05ZM3.64365 15.5938L12.4187 10.5562L10.5405 8.67813L3.64365 15.5938Z"
      fill="currentColor"
    />
  </svg>
);

export default GooglePlayIcon;
