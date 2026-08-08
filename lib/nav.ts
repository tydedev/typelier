type MenuLink = {
  name: string;
  href: string;
};

type MenuSubmenu = {
  name: string;
  submenu: true;
  menuItems: MenuLink[];
};

export const links: (MenuLink | MenuSubmenu)[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "library",
    href: "/library",
  },
  {
    name: "resources",
    submenu: true,
    menuItems: [
      {
        name: "articles",
        href: "/resources",
      },
      {
        name: "shop",
        href: "/shop",
      },
    ],
  },
  {
    name: "howTo",
    href: "/how-to",
  },
];
