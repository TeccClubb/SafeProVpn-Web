import { IconSvgProps } from "@/types";
import React, { FC } from "react";

const MacOSIcon: FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_250_416)">
        <path
          d="M10.1625 8.87496C10.1563 7.73943 10.6699 6.88237 11.7096 6.25118C11.1279 5.41887 10.2492 4.96095 9.08887 4.87122C7.99047 4.78458 6.78997 5.51169 6.35061 5.51169C5.8865 5.51169 4.82213 4.90216 3.98673 4.90216C2.26024 4.93001 0.425446 6.27902 0.425446 9.02347C0.425446 9.83412 0.573961 10.6716 0.870993 11.5359C1.26704 12.6714 2.6965 15.4561 4.18785 15.4097C4.96756 15.3911 5.5183 14.8558 6.53316 14.8558C7.51708 14.8558 8.0276 15.4097 8.89704 15.4097C10.4008 15.388 11.6941 12.857 12.0716 11.7184C10.0542 10.7685 10.1625 8.93375 10.1625 8.87496ZM8.41127 3.79448C9.25595 2.792 9.1786 1.87924 9.15385 1.55127C8.40817 1.59459 7.54492 2.0587 7.05297 2.6311C6.5115 3.24373 6.19281 4.00178 6.26088 4.85575C7.06844 4.91763 7.80483 4.50302 8.41127 3.79448Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_250_416">
          <path
            d="M0.301697 0.561035H12.183V16.4027H0.301697V0.561035Z"
            fill="transparent"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MacOSIcon;
