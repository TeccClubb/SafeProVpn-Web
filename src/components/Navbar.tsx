import React, { FC } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { link as linkStyles } from "@heroui/theme";
import Link from "next/link";
import { cn } from "@/lib/utils";

// import { ThemeSwitch } from "@/components/theme-switch";

import {
  DOWNLOADS_PAGE_PATH,
  FEATURES_PAGE_PATH,
  HOME_PAGE_PATH,
  SIGNIN_PAGE_PATH,
  PRICING_PAGE_PATH,
  SERVERS_PAGE_PATH,
  SIGNUP_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
} from "@/lib/pathnames";
import { usePathname } from "next/navigation";
import AppLogo from "./AppLogo";
import { useSession } from "next-auth/react";
import { Avatar } from "./Avatar";

const Navbar: FC = () => {
  const { status: sessionStatus } = useSession();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: HOME_PAGE_PATH },
    {
      label: "Features",
      href: FEATURES_PAGE_PATH,
    },
    {
      label: "Servers",
      href: SERVERS_PAGE_PATH,
    },
    {
      label: "Pricing",
      href: PRICING_PAGE_PATH,
    },
    {
      label: "Downloads",
      href: DOWNLOADS_PAGE_PATH,
    },
  ];

  return (
    <HeroUINavbar
      id="navbar"
      maxWidth="xl"
      className="bg-transparent"
      classNames={{
        wrapper: pathname.startsWith(DASHBOARD_PAGE_PATH) ? "pl-1 lg:pl-6" : "",
      }}
    >
      <NavbarContent>
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href={HOME_PAGE_PATH}>
            <AppLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-6 justify-start">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={cn(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary text-base font-medium duration-300",
                  pathname === item.href ? "text-primary" : "text-foreground"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex lg:gap-4 gap-3">
          {/* <ThemeSwitch /> */}

          {sessionStatus === "unauthenticated" && (
            <Button
              as={Link}
              href={
                pathname !== SIGNIN_PAGE_PATH
                  ? SIGNIN_PAGE_PATH
                  : SIGNUP_PAGE_PATH
              }
              variant="bordered"
              color="primary"
              radius="full"
              className="hidden sm:inline-flex"
            >
              {pathname !== SIGNIN_PAGE_PATH ? "Sign In" : "Sign Up"}
            </Button>
          )}

          <Button
            as={Link}
            href={DASHBOARD_PAGE_PATH}
            color="primary"
            variant="shadow"
            radius="full"
            className="hidden sm:inline-flex"
          >
            Get Free Trial
          </Button>

          <Avatar />
        </NavbarItem>
        <NavbarMenuToggle className="lg:hidden" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {[
            ...navItems,
            {
              label: "Auth Button",
              href: "/auth-button",
            },
            {
              label: "Get Free Trial",
              href: DASHBOARD_PAGE_PATH,
            },
          ].map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item.href === "/auth-button" ? (
                <>
                  {sessionStatus === "unauthenticated" && (
                    <Button
                      as={Link}
                      href={
                        pathname !== SIGNIN_PAGE_PATH
                          ? SIGNIN_PAGE_PATH
                          : SIGNUP_PAGE_PATH
                      }
                      variant="bordered"
                      color="primary"
                      radius="full"
                      className="w-full sm:hidden"
                    >
                      {pathname !== SIGNIN_PAGE_PATH ? "Sign In" : "Sign Up"}
                    </Button>
                  )}
                </>
              ) : item.href === DASHBOARD_PAGE_PATH ? (
                <Button
                  as={Link}
                  href={item.href}
                  color="primary"
                  variant="shadow"
                  radius="full"
                  className="w-full sm:hidden"
                >
                  {item.label}
                </Button>
              ) : (
                <Link
                  className={cn(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary text-base font-medium duration-300",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
