import { Bell, CalendarDays, Search } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur lg:px-6">
      <div className="lg:hidden">
        <Logo />
      </div>

      <div className="hidden lg:block">
        <p className="text-sm font-medium text-slate-500">Today</p>
        <div className="mt-1 flex items-center gap-2 text-sm text-slate-700">
          <CalendarDays size={16} className="text-slate-400" />
          July 2, 2026
        </div>
      </div>

      <div className="hidden w-full max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 md:flex">
        <Search size={17} />
        Search metrics, insights, reports...
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition hover:bg-slate-50">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-600" />
        </button>

        <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-semibold text-white">
            S
          </div>

          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold text-slate-900">Sarah Chen</p>
            <p className="text-xs text-slate-500">Store Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}