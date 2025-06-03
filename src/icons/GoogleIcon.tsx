import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const GoogleIcon: FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_197_387)">
<path d="M17.2344 9.20391C17.2344 14.1785 13.8277 17.7188 8.79688 17.7188C3.97344 17.7188 0.078125 13.8234 0.078125 9C0.078125 4.17656 3.97344 0.28125 8.79688 0.28125C11.1453 0.28125 13.1211 1.14258 14.6434 2.56289L12.2703 4.84453C9.16601 1.84922 3.39336 4.09922 3.39336 9C3.39336 12.041 5.82266 14.5055 8.79688 14.5055C12.2492 14.5055 13.543 12.0305 13.7469 10.7473H8.79688V7.74844H17.0973C17.1781 8.19492 17.2344 8.62383 17.2344 9.20391Z" fill="#1F2937"/>
</g>
<defs>
<clipPath id="clip0_197_387">
<path d="M0.078125 0H17.2344V18H0.078125V0Z" fill="white"/>
</clipPath>
</defs>
</svg>

);

export default GoogleIcon;
