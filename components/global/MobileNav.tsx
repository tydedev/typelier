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
    if (open) {
      setOpen(false);
    }
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
          <DrawerTitle className="font-heading text-lg text-center mt-10 font-medium text-foreground">
            Menu
          </DrawerTitle>
        </DrawerHeader>
        <nav>
          <ul className="flex flex-col text-center mt-20 gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium font-heading tracking-wider uppercase"
                  onClick={onClick}
                >
                  {t(link.name)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
