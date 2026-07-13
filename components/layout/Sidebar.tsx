"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  Sparkles,
  FileText,
  Settings,
} from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Upload",
    href: "/upload",
    icon: Upload,
  },
  {
    label: "Insights",
    href: "/insights",
    icon: Sparkles,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 flex-col justify-between border-r border-slate-200 bg-white lg:flex">
      <div>
        <div className="px-6 pt-8">
          <Logo />
        </div>

        <div className="mt-12 px-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-indigo-50 text-indigo-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  )}
                >
                  <Icon
                    size={18}
                    className={cn(
                      active
                        ? "text-indigo-600"
                        : "text-slate-400 group-hover:text-slate-700"
                    )}
                  />

                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-200 p-6">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

            <p className="text-sm font-medium text-slate-700">
              Workspace Online
            </p>
          </div>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Commerce Copilot is monitoring your latest business activity.
          </p>
        </div>
      </div>
    </aside>
  );
}