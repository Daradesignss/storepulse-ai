import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/shared/Logo";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <BarChart3 size={22} />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to access your StorePulse workspace.
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="sarah@storepulse.demo"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <Button className="w-full">Sign in</Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="font-medium text-indigo-600">
            Create one
          </Link>
        </p>
      </Card>
    </main>
  );
}