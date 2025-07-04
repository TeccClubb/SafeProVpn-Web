import { IconSvgProps } from "@/types";
import React, { FC } from "react";

const ChromeIcon: FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_195_144)">
      <path
        d="M0.765625 12C0.765625 9.81563 1.35016 7.7625 2.37203 5.95781L7.52031 14.9203C8.54688 16.7578 10.5109 18 12.7656 18C13.4359 18 14.0359 17.8922 14.6781 17.6906L11.1016 23.8875C5.26094 23.0766 0.765625 18.0609 0.765625 12ZM17.8797 15.075C18.4563 14.175 18.7656 13.0828 18.7656 12C18.7656 10.2094 17.9781 8.60156 16.7359 7.5H23.8937C24.4562 8.8875 24.7656 10.4109 24.7656 12C24.7656 18.6281 19.3937 23.9578 12.7656 24L17.8797 15.075ZM23.1625 6H12.7656C9.81719 6 7.43594 8.06719 6.88281 10.8141L3.30578 4.61578C5.5 1.80609 8.92188 0 12.7656 0C17.2094 0 21.0859 2.41313 23.1625 6ZM8.64062 12C8.64062 9.72188 10.4875 7.875 12.7656 7.875C15.0437 7.875 16.8906 9.72188 16.8906 12C16.8906 14.2781 15.0437 16.125 12.7656 16.125C10.4875 16.125 8.64062 14.2781 8.64062 12Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_195_144">
        <path d="M0.765625 0H24.7656V24H0.765625V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default ChromeIcon;
