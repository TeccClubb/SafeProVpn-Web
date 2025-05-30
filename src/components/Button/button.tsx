
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "solid" | "outline";
    size?: "sm" | "md" | "lg" | "icon";
};

// interface CustomButtonProps {
//   variant?: "solid" | "outline";
//   children: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
//   type?: "button" | "submit" | "reset";
// }

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  children,
  className,
  size = "md",
  onClick,
  type = "button",
    ...props
}) => {
  const baseStyles =
    "px-6 py-3 text-lg rounded-full transition duration-200 ease-in-out";

  const variantStyles =
    variant === "solid"
      ? "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700  "
      : "border border-cyan-500 text-cyan-500 hover:bg-cyan-50 active:bg-cyan-100";

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-lg px-6 py-2", 
    lg: "text-xl px-8 py-4",
    icon: "p-2 rounded-full",
  }
    

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizes[size]} ${className}`}
        {...props}
    >
      {children}
    </button>
  );
};

export default Button;
