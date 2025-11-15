import { ReactNode } from "react";

export interface SidebarProperties {
  children: ReactNode;
}

export interface SidebarLinkProperties {
  href: string;
  icon: ReactNode;
  label: string;
  pathname: string;
  collapsed: boolean
}
