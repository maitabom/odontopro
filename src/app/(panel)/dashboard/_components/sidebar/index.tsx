"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarProperties } from "./properties";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Folder,
  List,
  Settings,
} from "lucide-react";
import { SidebarLink } from "./link";
import Image from "next/image";

import logoImg from "../../../../../../public/logo-odonto.png";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

export function SidebarDashboard({ children }: SidebarProperties) {
  const [isCollapsable, setIsCollapsable] = useState(false);

  const pathname = usePathname();

  return (
    <div className="flex flex-row min-h-screen w-full">
      <aside
        className={clsx(
          "hidden md:fixed md:flex flex-col border-r bg-background transition-all duration-300 p-4 h-full",
          {
            "w-20": isCollapsable,
            "w-64": !isCollapsable,
          }
        )}
      >
        <div className="mb-6 mt-4">
          {!isCollapsable && (
            <Image
              src={logoImg}
              alt="Logo do Odontopro"
              quality={100}
              priority
            />
          )}
        </div>
        <Button
          className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2"
          onClick={() => setIsCollapsable(!isCollapsable)}
        >
          {!isCollapsable ? (
            <ChevronLeft className="w-12 h-12" />
          ) : (
            <ChevronRight className="w-12 h-12" />
          )}
        </Button>
        {isCollapsable && (
          <nav className="flex flex-col gap-1 overflow-hidden mt-2">
            <SidebarLink
              href="/dashboard"
              label="Agendamentos"
              pathname={pathname}
              collapsed={isCollapsable}
              icon={<CalendarCheck2 className="w-6 h-6" />}
            />

            <SidebarLink
              href="/dashboard/services"
              label="Serviços"
              pathname={pathname}
              collapsed={isCollapsable}
              icon={<Folder className="w-6 h-6" />}
            />

            <SidebarLink
              href="/dashboard/profile"
              label="Meu Perfil"
              pathname={pathname}
              collapsed={isCollapsable}
              icon={<Settings className="w-6 h-6" />}
            />

            <SidebarLink
              href="/dashboard/plans"
              label="Planos"
              pathname={pathname}
              collapsed={isCollapsable}
              icon={<Banknote className="w-6 h-6" />}
            />
          </nav>
        )}

        <Collapsible open={!isCollapsable}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-1 overflow-hidden">
              <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                Painel
              </span>

              <SidebarLink
                href="/dashboard"
                label="Agendamentos"
                pathname={pathname}
                collapsed={isCollapsable}
                icon={<CalendarCheck2 className="w-6 h-6" />}
              />

              <SidebarLink
                href="/dashboard/services"
                label="Serviços"
                pathname={pathname}
                collapsed={isCollapsable}
                icon={<Folder className="w-6 h-6" />}
              />

              <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                Configurações
              </span>

              <SidebarLink
                href="/dashboard/profile"
                label="Meu Perfil"
                pathname={pathname}
                collapsed={isCollapsable}
                icon={<Settings className="w-6 h-6" />}
              />

              <SidebarLink
                href="/dashboard/plans"
                label="Planos"
                pathname={pathname}
                collapsed={isCollapsable}
                icon={<Banknote className="w-6 h-6" />}
              />
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </aside>
      <div
        className={clsx("flex flex-1 flex-col transition-all duration-300", {
          "md:ml-20": isCollapsable,
          "md:ml-64": !isCollapsable,
        })}
      >
        <header className="md:hidden flex items-center justify-between border-b px-4 md:px-6 h-14 z-10 sticky top-0 bg-white">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger>
                <Button variant="outline" size="icon" className="md:hidden">
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <h1 className="text-base md:text-lg font-semibold">
                Menu OdontoPRO
              </h1>
            </div>
            <SheetContent side="right" className="sm:max-w-xs text-black">
              <SheetTitle>OdontoPro</SheetTitle>
              <SheetDescription>Menu administrativo</SheetDescription>

              <nav className="grid gap-2 text-base pt-5">
                <SidebarLink
                  href="/dashboard"
                  label="Agendamentos"
                  pathname={pathname}
                  collapsed={isCollapsable}
                  icon={<CalendarCheck2 className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/services"
                  label="Serviços"
                  pathname={pathname}
                  collapsed={isCollapsable}
                  icon={<Folder className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/profile"
                  label="Meu Perfil"
                  pathname={pathname}
                  collapsed={isCollapsable}
                  icon={<Settings className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/plans"
                  label="Planos"
                  pathname={pathname}
                  collapsed={isCollapsable}
                  icon={<Banknote className="w-6 h-6" />}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex-1 py-4 px-2 md:p-6">{children}</main>
      </div>
    </div>
  );
}
