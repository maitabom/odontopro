import Link from "next/link";
import { SidebarLinkProperties } from "./properties";
import clsx from "clsx";

export function SidebarLink(properties: SidebarLinkProperties) {
  return (
    <Link href={properties.href}>
      <div
        className={clsx(
          "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
          {
            "text-white bg-blue-500": properties.pathname == properties.href,
            "text-gray-700 hover:bg-gray-100":
              properties.pathname != properties.href,
          }
        )}
      >
        <span className="w-6 h-6">{properties.icon}</span>
        {!properties.collapsed && <span>{properties.label}</span>}
      </div>
    </Link>
  );
}
