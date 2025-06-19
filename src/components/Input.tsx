"use client";

import React, { FC, useState } from "react";
import { Input as HeroInput, InputProps } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";

const Input: FC<InputProps> = ({
  labelPlacement = "outside",
  type,
  endContent,
  size = "lg",
  errorMessage,
  ...props
}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const togglePasswordHide = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <HeroInput
      labelPlacement={labelPlacement}
      variant="bordered"
      type={type === "password" ? (isPasswordShow ? "text" : "password") : type}
      size={size}
      isInvalid={errorMessage ? true : false}
      errorMessage={errorMessage}
      classNames={{
        inputWrapper: "bg-transparent border",
        errorMessage: "mt-2 whitespace-pre-line",
      }}
      endContent={
        type === "password" ? (
          isPasswordShow ? (
            <Eye
              onClick={togglePasswordHide}
              className="w-5 text-default-500 cursor-default"
            />
          ) : (
            <EyeOff
              onClick={togglePasswordHide}
              className="w-5 text-default-500 cursor-default"
            />
          )
        ) : (
          endContent
        )
      }
      {...props}
    />
  );
};

export default Input;
