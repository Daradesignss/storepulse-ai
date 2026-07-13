"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
];

export function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-6">
        <Link href="/" aria-label="StorePulse AI home">
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm text-slate-600 md:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/login">
            <Button variant="secondary">Sign in</Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <Menu size={21} />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[86%] max-w-sm flex-col bg-white p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <Logo />

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50"
            aria-label="Close navigation menu"
          >
            <X size={21} />
          </button>
        </div>

        <nav className="mt-10 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-2xl px-4 py-4 text-base font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-slate-200 pt-6">
          <Link href="/login" onClick={closeMenu} className="block">
            <Button variant="secondary" className="w-full">
              Sign in
            </Button>
          </Link>

          <Link href="/dashboard" onClick={closeMenu} className="block">
            <Button className="w-full">Try demo dashboard</Button>
          </Link>
        </div>
      </aside>
    </>
  );
}