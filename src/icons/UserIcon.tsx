import React, { FC, SVGProps } from "react";

const UserIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height}
    role="presentation"
    viewBox="0 0 24 24"
    width={width}
    {...props}
  >
    <path
      d="M12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V18C20 15.34 14.67 14 12 14Z"
      fill="currentColor"
    />
  </svg>
);

export default UserIcon;
