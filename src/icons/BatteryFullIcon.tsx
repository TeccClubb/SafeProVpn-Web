import React, { FC, SVGProps } from "react";

const BatteryFullIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 28 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_182_104)">
      <path
        d="M22.5781 7.5C22.9906 7.5 23.3281 7.8375 23.3281 8.25V15.75C23.3281 16.1625 22.9906 16.5 22.5781 16.5H4.57812C4.16563 16.5 3.82812 16.1625 3.82812 15.75V8.25C3.82812 7.8375 4.16563 7.5 4.57812 7.5H22.5781ZM4.57812 4.5C2.50625 4.5 0.828125 6.17812 0.828125 8.25V15.75C0.828125 17.8219 2.50625 19.5 4.57812 19.5H22.5781C24.65 19.5 26.3281 17.8219 26.3281 15.75V15C27.1578 15 27.8281 14.3297 27.8281 13.5V10.5C27.8281 9.67031 27.1578 9 26.3281 9V8.25C26.3281 6.17812 24.65 4.5 22.5781 4.5H4.57812ZM21.8281 9H5.32812V15H21.8281V9Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_182_104">
        <path d="M0.828125 0H27.8281V24H0.828125V0Z" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export default BatteryFullIcon;
