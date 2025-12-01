"use client";

import React, { FC, ReactNode } from "react";
import {
  AvatarProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Avatar as HeroAvatar,
  Skeleton,
  User,
  UserProps,
} from "@heroui/react";
import { useSession } from "next-auth/react";
import { HelpCircle, Home, LayoutDashboard, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { DASHBOARD_PAGE_PATH, HOME_PAGE_PATH } from "@/lib/pathnames";
import { useLogout } from "@/hooks/useLogout";
import { User as UserTypes } from "next-auth";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const AvatarDropdown: FC<{ user: UserTypes; children: ReactNode }> = ({
  user,
  children,
}) => {
  const pathname = usePathname();
  const { openLogoutModal } = useLogout();
  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",
      }}
      radius="sm"
    >
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        className="p-3"
        disabledKeys={["profile"]}
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection showDivider aria-label="Profile">
          <DropdownItem
            key="profile"
            isReadOnly
            className="h-14 gap-2 opacity-100"
          >
            <User
              avatarProps={{
                size: "sm",
                // src: "",
                showFallback: true,
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description={user.email}
              name={user.name}
            />
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider aria-label="Actions">
          {pathname.startsWith(DASHBOARD_PAGE_PATH) ? (
            <DropdownItem
              key="home"
              as={Link}
              href={HOME_PAGE_PATH}
              startContent={<Home />}
            >
              Home
            </DropdownItem>
          ) : (
            <DropdownItem
              key="dashboard"
              as={Link}
              href={DASHBOARD_PAGE_PATH}
              startContent={<LayoutDashboard />}
            >
              Dashboard
            </DropdownItem>
          )}
          <DropdownItem
            key="settings"
            as={Link}
            href="/Dashboard/settings"
            startContent={<Settings />}
          >
            Settings
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem
            key="help_and_feedback"
            as={Link}
            href="/contact-us"
            startContent={<HelpCircle />}
          >
            Help & Feedback
          </DropdownItem>
          <DropdownItem
            key="logout"
            startContent={<LogOut />}
            onPress={() => openLogoutModal(true)}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

const Avatar: FC<AvatarProps> = ({ className, ...props }) => {
  const { data: session, status: authStatus } = useSession();
  return authStatus === "authenticated" ? (
    <AvatarDropdown user={session.user}>
      <HeroAvatar
        as="button"
        showFallback
        src=""
        className={cn("transition-transform", className)}
        {...props}
      />
    </AvatarDropdown>
  ) : authStatus === "loading" ? (
    <Skeleton className="w-10 h-10 rounded-full bg-default-200" />
  ) : null;
};

const AvatarUser: FC<
  Omit<UserProps, "name" | "description" | "avatarProps">
> = ({ className, ...props }) => {
  const { data: session, status: authStatus } = useSession();
  return authStatus === "authenticated" ? (
    <AvatarDropdown user={session.user}>
      <User
        as="button"
        avatarProps={{
          // src: "",
          showFallback: true,
        }}
        className={cn("transition-transform", className)}
        description={session.user.email}
        name={session.user.name}
        {...props}
      />
    </AvatarDropdown>
  ) : authStatus === "loading" ? (
    <div className={cn("flex items-center gap-3 animate-pulse", className)}>
      <Skeleton className="w-10 h-10 rounded-full bg-default-200" />
      <div className="flex flex-col gap-1">
        <Skeleton className="w-24 h-4 rounded bg-default-200" />
        <Skeleton className="w-16 h-3 rounded bg-default-100" />
      </div>
    </div>
  ) : null;
};

export { Avatar, AvatarUser };
