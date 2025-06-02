"use client";

import React, { ComponentProps, FC, HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  isHeroSection?: boolean;
  title?: ReactNode;
  heading?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  classNames?: {
    section?: string;
    container?: string;
    title?: string;
    heading?: string;
    subtitle?: string;
    description?: string;
  };
};

const SectionTitle: FC<ComponentProps<typeof motion.span>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "text-primary bg-[#E2FFE0] w-fit px-6 py-2 rounded-full text-base font-medium text-center mb-10 inline-block",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  ) : null;

const SectionHeading: FC<ComponentProps<typeof motion.h3>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "sm:text-3xl text-2xl font-bold !leading-[3.5rem] text-center mb-6 text-black",
        className
      )}
      {...props}
    >
      {children}
    </motion.h3>
  ) : null;

const SectionSubTitle: FC<ComponentProps<typeof motion.span>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <motion.span
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "px-4 sm:text-xl text-base sm:leading-10 leading-9 font-medium text-center mt-4 mb-6 inline-block text-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  ) : null;

const SectionDescription: FC<ComponentProps<typeof motion.p>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "text-default-500 lg:w-2/3 px-8 text-lg leading-8 capitalize text-center mb-14",
        className
      )}
      {...props}
    >
      {children}
    </motion.p>
  ) : null;

const Section: FC<SectionProps> = ({
  isHeroSection,
  title,
  heading,
  subtitle,
  description,
  classNames,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        "w-full flex flex-col  items-center justify-center relative",
        classNames?.section
      )}
      {...props}
    >
      <div
        className={cn(
          "container w-full max-w-7xl flex flex-col items-center justify-center text-center",
          isHeroSection
            ? "p-4 min-h-[calc(100vh-5rem)]"
            : "px-4 py-12 lg:py-14",
          classNames?.container,
          className
        )}
      >
        {title && (
          <SectionTitle className={classNames?.title}>{title}</SectionTitle>
        )}
        {heading && (
          <SectionHeading className={classNames?.heading}>
            {heading}
          </SectionHeading>
        )}
        {subtitle && (
          <SectionSubTitle className={classNames?.subtitle}>
            {subtitle}
          </SectionSubTitle>
        )}
        {description && (
          <SectionDescription className={classNames?.description}>
            {description}
          </SectionDescription>
        )}
        {children}
      </div>
    </section>
  );
};

export { SectionTitle, SectionHeading, SectionSubTitle, SectionDescription };

export default Section;


