import { links } from "@/lib/nav";
import LocaleSwitcher from "../LocaleSwitcher";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="fixed w-screen inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="px-6 md:px-24 max-w-360 mx-auto flex items-center justify-between py-6">
        <Link
          href="/"
          className="font-heading text-2xl select-none font-bold hidden md:block text-nowrap mr-20"
        >
          Aa | <span className="font-medium">typelier</span>
        </Link>

        <Link
          href="/"
          className="font-heading text-2xl font-bold md:hidden select-none text-nowrap mr-10"
        >
          Aa | <span className="font-medium">t</span>
        </Link>
        <nav className="hidden md:flex w-full">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium font-heading tracking-wider uppercase"
                >
                  {t(link.name)}
                </Link>
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
