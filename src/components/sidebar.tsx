"use client";

import React, { FC } from "react";
import {
  LayoutDashboard,
  CreditCard,
  Monitor,
  Settings,
  LogOut,
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
import { useLogout } from "@/hooks/useLogout";
import { usePathname } from "next/navigation";

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
  const { openLogoutModal } = useLogout();

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

        <ListboxItem
          key="logout"
          startContent={<LogOut />}
          className="mt-auto h-auto p-2 transition-colors bg-danger/20 text-danger"
          variant="flat"
          color="danger"
          onPress={() => openLogoutModal(true)}
        >
          Sign Out
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
  const { openLogoutModal } = useLogout();

  return (
    <aside className={cn("px-1 pb-8 h-[calc(100vh-4rem)]", className)}>
      <div className="h-full flex flex-col gap-1">
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

        <Tooltip content="Sign Out" placement="right">
          <Button
            isIconOnly
            size="lg"
            variant="flat"
            color="danger"
            className="mt-auto"
            onPress={() => openLogoutModal(true)}
          >
            <LogOut />
          </Button>
        </Tooltip>
      </div>
    </aside>
  );
};

export { SidebarExpanded, SidebarCollapsed };
