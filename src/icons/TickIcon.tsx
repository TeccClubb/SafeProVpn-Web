import React, { FC } from "react";
import { IconSvgProps } from "@/types";
import { cn } from "@/lib/utils";

const TickIcon: FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 14 16"
    fill="none"
    className={cn("text-primary", className)}
    {...props}
  >
    <g clipPath="url(#clip0_156_1133)">
      <path
        d="M13.7062 3.29395C14.0969 3.68457 14.0969 4.31895 13.7062 4.70957L5.70624 12.7096C5.31562 13.1002 4.68124 13.1002 4.29062 12.7096L0.290619 8.70957C-0.100006 8.31895 -0.100006 7.68457 0.290619 7.29395C0.681244 6.90332 1.31562 6.90332 1.70624 7.29395L4.99999 10.5846L12.2937 3.29395C12.6844 2.90332 13.3187 2.90332 13.7094 3.29395H13.7062Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_156_1133">
        <path d="M0 0H14V16H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TickIcon;
