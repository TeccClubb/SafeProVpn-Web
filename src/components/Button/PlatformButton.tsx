// import React from "react";
// import Image from "next/image";
// import clsx from "clsx";

// interface PlatformButtonProps {
//   name: string;
//   iconSrc: string;
//   bg?: string;
//   textColor?: string;
//   size?: "sm" | "md" | "lg";
//   className?: string;
//   iconSize?: number; // optional size control
// }

// const sizeClasses = {
//   sm: "px-2 py-1 text-sm",
//   md: "px-4 py-3 text-base",
//   lg: "px-5 py-4 text-lg",
// };

// const PlatformButton: React.FC<PlatformButtonProps> = ({
//   name,
//   iconSrc,
//   bg = "bg-red-500",
//   textColor = "text-gray-800",
//   size = "md",
//   className = "",
//   iconSize = 20,
// }) => {
//   return (
//     <div
//       className={clsx(
//         "flex items-center rounded-lg shadow-sm font-medium space-x-2 cursor-pointer",
//         sizeClasses[size],
//         bg,
//         textColor,
//         className
//       )}
//     >
//       <span className="shrink-0">
//         <Image
//           src={iconSrc}
//           alt={name}
//           width={iconSize}
//           height={iconSize}
//           className="transition-all duration-200 group-hover:invert"
//         />
//       </span>
//       <span>{name}</span>
//     </div>
//   );
// };

// export default PlatformButton;
