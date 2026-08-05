import { links } from "@/lib/nav";
import LocaleSwitcher from "../LocaleSwitcher";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="fixed w-screen inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="px-6 md:px-24 max-w-360 mx-auto flex items-center justify-between py-6">
        <nav className="hidden md:flex">
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
        <Button
          className="md:hidden cursor-pointer"
          variant="outline"
          size="icon"
        >
          <Menu />
        </Button>
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Header;
