"use client";

import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { links } from "@/lib/nav";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

const MobileNav = () => {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(false);
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="cursor-pointer" asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="mt-10 text-center font-heading text-lg font-medium text-foreground">
            Menu
          </DrawerTitle>
        </DrawerHeader>

        <nav>
          <ul className="mt-20 flex flex-col gap-6 text-center">
            {links.map((link) =>
              "submenu" in link ? (
                link.menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-heading font-medium uppercase tracking-wider"
                      onClick={onClick}
                    >
                      {t(item.name)}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading font-medium uppercase tracking-wider"
                    onClick={onClick}
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
