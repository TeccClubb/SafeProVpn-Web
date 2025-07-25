"use client";

import React, { FC, useState } from "react";
import { Input as HeroInput, InputProps } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";

const Input: FC<InputProps> = ({
  isRequired,
  label,
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
      label={
        isRequired ? (
          <>
            {label} <span className="text-danger-500">*</span>
          </>
        ) : (
          label
        )
      }
      labelPlacement={labelPlacement}
      variant="bordered"
      type={type === "password" ? (isPasswordShow ? "text" : "password") : type}
      size={size}
      isInvalid={errorMessage ? true : false}
      errorMessage={errorMessage}
      classNames={{
        inputWrapper: "bg-transparent border",
        errorMessage: "mt-0.5 whitespace-pre-line text-start",
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
