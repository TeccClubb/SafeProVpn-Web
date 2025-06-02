import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const ShieldIcon: FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_164_2073)">
      <path
        d="M10.7969 0C10.9766 0 11.1563 0.0390625 11.3203 0.113281L18.6758 3.23438C19.5352 3.59766 20.1758 4.44531 20.1719 5.46875C20.1524 9.34375 18.5586 16.4336 11.8281 19.6562C11.1758 19.9688 10.418 19.9688 9.76564 19.6562C3.03517 16.4336 1.44142 9.34375 1.42189 5.46875C1.41799 4.44531 2.05861 3.59766 2.91799 3.23438L10.2774 0.113281C10.4375 0.0390625 10.6172 0 10.7969 0ZM10.7969 2.60938V17.375C16.1875 14.7656 17.6367 8.98828 17.6719 5.52344L10.7969 2.60938Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_164_2073">
        <path d="M0.796875 0H20.7969V20H0.796875V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default ShieldIcon;
