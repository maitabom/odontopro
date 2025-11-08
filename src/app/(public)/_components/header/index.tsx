import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-3xl font-bold text-zinc-900" href="/">
          Odonto <span className="text-emerald-500">PRO</span>
        </Link>
        <nav className="hidden md:flex items-center">
          <Link href="#">Profissionais</Link>
        </nav>
        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Button
              className="text-black hover:bg-transparent"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-60 sm:w-80 z-9999">
            <SheetTitle>Menu</SheetTitle>
            <SheetHeader></SheetHeader>
            <SheetDescription>Veja nossos links</SheetDescription>
            <nav>
              <Link href="#">Profissionais</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
