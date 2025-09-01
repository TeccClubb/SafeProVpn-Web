import React, { FC, SVGProps } from "react";

const LocationDotIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 20"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_164_2087)">
      <path
        d="M8.84766 19.5C10.8516 16.9922 15.4219 10.9141 15.4219 7.5C15.4219 3.35938 12.0625 0 7.92188 0C3.78125 0 0.421875 3.35938 0.421875 7.5C0.421875 10.9141 4.99219 16.9922 6.99609 19.5C7.47656 20.0977 8.36719 20.0977 8.84766 19.5ZM7.92188 5C8.58492 5 9.2208 5.26339 9.68964 5.73223C10.1585 6.20107 10.4219 6.83696 10.4219 7.5C10.4219 8.16304 10.1585 8.79893 9.68964 9.26777C9.2208 9.73661 8.58492 10 7.92188 10C7.25883 10 6.62295 9.73661 6.15411 9.26777C5.68527 8.79893 5.42188 8.16304 5.42188 7.5C5.42188 6.83696 5.68527 6.20107 6.15411 5.73223C6.62295 5.26339 7.25883 5 7.92188 5Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_164_2087">
        <path d="M0.421875 0H15.4219V20H0.421875V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default LocationDotIcon;
