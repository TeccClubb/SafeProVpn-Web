import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import Section from "@/components/sections/Section";
import { HOME_PAGE_PATH } from "@/lib/pathnames";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page Not Found",
};

const NotFoundPage: FC = () => (
  <Section isHeroSection className="gap-y-6 items-center text-center">
    <div className="flex flex-col items-center gap-4">
      <span className="text-7xl font-bold text-danger-500">404</span>
      <h1 className="text-3xl font-semibold">Page Not Found</h1>
      <Button
        as={Link}
        href={HOME_PAGE_PATH}
        color="primary"
        variant="shadow"
        className="mt-4"
      >
        Go to Home
      </Button>
    </div>
  </Section>
);

export default NotFoundPage;
