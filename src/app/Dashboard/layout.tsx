"use client";

import React, { FC, ReactNode } from "react";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  ScrollShadow,
  useDisclosure,
} from "@heroui/react";
import {
  SidebarCollapsed,
  SidebarExpanded,
} from "@/components/dashboard/SideBar";
import AppLogo from "@/components/AppLogo";

const DashboardLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="w-full h-[calc(100vh-4rem)] flex">
        <Drawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="xs"
          placement="left"
        >
          <DrawerContent className="rounded-none">
            <DrawerHeader>
              <AppLogo />
            </DrawerHeader>
            <DrawerBody className="px-0">
              <SidebarExpanded className="w-full h-full" />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <SidebarCollapsed className="lg:hidden pt-4" onOpen={onOpen} />
        <SidebarExpanded className="hidden lg:flex pt-8" />

        <Divider orientation="vertical" className="mt-4 lg:mt-0" />

        <ScrollShadow className="flex-1 relative px-6 py-12 lg:pt-14">
          {children}
        </ScrollShadow>
      </div>
    </div>
  );
};

export default DashboardLayout;
