import { SidebarDashboard } from "./_components/sidebar";
import { DashboardLayoutProperties } from "./layout.properties";

export default function DashboardLayout({
  children,
}: DashboardLayoutProperties) {
  return (
    <>
      <SidebarDashboard>{children}</SidebarDashboard>
    </>
  );
}
