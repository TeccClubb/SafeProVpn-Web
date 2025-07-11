"use client";

import React, { FC } from "react";
import {
  LayoutDashboard,
  CreditCard,
  Monitor,
  Settings,
  Menu,
} from "lucide-react";
import {
  Button,
  Listbox,
  ListboxItem,
  ListboxSection,
  Tooltip,
} from "@heroui/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarUser } from "../Avatar";

const listItems = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    Icon: LayoutDashboard,
  },
  {
    name: "Billing",
    href: "/Dashboard/billing",
    Icon: CreditCard,
  },
  {
    name: "My Devices",
    href: "/Dashboard/my-devices",
    Icon: Monitor,
  },
  {
    name: "Setting",
    href: "/Dashboard/settings",
    Icon: Settings,
  },
];

const SidebarExpanded: FC<{ className?: string }> = ({ className }) => {
  const pathname = usePathname();

  return (
    <aside className={cn("w-64 px-2 pb-8 h-[calc(100vh-4rem)]", className)}>
      <Listbox
        aria-label="dashboard menu"
        className="h-full"
        classNames={{ list: "h-full" }}
      >
        <ListboxSection>
          {listItems.map(({ name, href, Icon }, index) => (
            <ListboxItem
              key={href}
              as={Link}
              href={href}
              startContent={<Icon />}
              className={cn(
                "p-2",
                pathname === href ? "bg-primary text-white" : ""
              )}
              variant={pathname === href ? "shadow" : "faded"}
              color={pathname === href ? "primary" : "default"}
              showDivider={index !== listItems.length - 1}
            >
              {name}
            </ListboxItem>
          ))}
        </ListboxSection>

        <ListboxItem key="user" variant="faded" className="mt-auto h-auto p-2">
          <AvatarUser />
        </ListboxItem>
      </Listbox>
    </aside>
  );
};

const SidebarCollapsed: FC<{ className?: string; onOpen: () => void }> = ({
  className,
  onOpen,
}) => {
  const pathname = usePathname();

  return (
    <aside className={cn("px-1 pb-8 h-[calc(100vh-4rem)]", className)}>
      <div className="h-full flex flex-col items-center gap-1.5">
        <Tooltip content="Menu" placement="right">
          <Button isIconOnly size="lg" variant="light" onPress={onOpen}>
            <Menu />
          </Button>
        </Tooltip>

        {listItems.map(({ Icon, href, name }) => (
          <Tooltip key={href} content={name} placement="right">
            <Button
              as={Link}
              href={href}
              isIconOnly
              size="lg"
              variant={pathname === href ? "solid" : "faded"}
              color={pathname === href ? "primary" : "default"}
            >
              <Icon />
            </Button>
          </Tooltip>
        ))}

        <Tooltip content="User Menu" placement="right">
          <Avatar className="mt-auto" />
        </Tooltip>
      </div>
    </aside>
  );
};

export { SidebarExpanded, SidebarCollapsed };
