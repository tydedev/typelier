import { links } from "@/lib/nav";
import LocaleSwitcher from "../LocaleSwitcher";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { ChevronDown, Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="fixed w-screen inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="px-6 md:px-24 max-w-360 mx-auto flex items-center justify-between py-6">
        <div className="md:max-w-[350px] shrink-0 mr-10">
          <Link
            href="/"
            className="font-heading text-2xl flex items-center gap-2 font-bold"
          >
            <Image
              src="/logotype.svg"
              alt="Typelier"
              width={150}
              height={75}
              className="max-w-full h-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex w-full">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                {"submenu" in link ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="m-0 p-0 text-base font-normal ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 cursor-pointer"
                        variant="ghost"
                      >
                        {t(link.name)} <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start">
                      {link.menuItems.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href}>{t(item.name)}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={link.href}>{t(link.name)}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex items-center justify-end mr-10">
          <LocaleSwitcher />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
