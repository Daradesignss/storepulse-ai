import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { MobileNav } from "@/components/layout/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
  <div className="flex min-h-screen bg-slate-100">
    <Sidebar />

    <div className="flex min-h-screen flex-1 flex-col">
      <Topbar />

      <main className="flex-1 p-6 pb-24 lg:p-8">{children}</main>
    </div>

    <MobileNav />
  </div>
);
}