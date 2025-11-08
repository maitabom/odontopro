import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavLinksProperties } from "./properties";
import { LogIn } from "lucide-react";

type LinkItem = {
  href: string;
  label: string;
};

const session = null;

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
        <Link className="text-base" href={item.href}>{item.label}</Link>
      </Button>
    ))}

    {session ? (
      <Link href="/dashboard" className="flex items-center gap-2">Painel da Clínica</Link>
    ) : (
      <Button>
        <LogIn /> Login
      </Button>
    )}
  </>
);
