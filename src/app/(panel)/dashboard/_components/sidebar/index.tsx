"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarProperties } from "./properties";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

export function SidebarDashboard({ children }: SidebarProperties) {
  const [isCollapsable, setIsCollapsable] = useState(false);

  const pathName = usePathname();

  return (
    <div className="flex min-h-screen w-full">
      <div
        className={clsx("flex flex-1 flex-col transition-all duration-300", {
          "md:ml-20": isCollapsable,
          "md:ml-64": !isCollapsable,
        })}
      >
        <header className="md:hidden">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger>
                <Button variant="outline" size="icon" className="md:hidden">
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetHeader>
                <h1 className="text-base md:text-lg font-semibold">
                  Menu OdontoPRO
                </h1>
              </SheetHeader>
            </div>
          </Sheet>
        </header>
        <main className="flex-1 py-4 px-2 md:p-6">{children}</main>
      </div>
    </div>
  );
}
