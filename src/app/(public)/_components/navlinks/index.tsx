import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavLinksProperties } from "./properties";

type LinkItem = {
  href: string;
  label: string;
};

const navItems: LinkItem[] = [
  { href: "#profissionais", label: "Profissionais" },
];

export const NavLinks = (properties: NavLinksProperties) => (
  <>
    {navItems.map((item) => (
      <Button
        onClick={properties.onMenuClick}
        key={item.href}
        className="bg-transparent hover:bg-transparent text-black shadow-none"
        asChild
      >
        <Link href={item.href}>{item.label}</Link>
      </Button>
    ))}
  </>
);
