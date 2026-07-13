"use client";
import Link from "next/link";
import { BarChart3, CheckCircle2, Sparkles, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/shared/Logo";
import { useEffect, useState } from "react";

const benefits = [
  "Upload sales reports in seconds",
  "Track revenue and customer trends",
  "Receive AI-powered recommendations",
];

const previews = [
  {
    icon: BarChart3,
    title: "Dynamic dashboard",
    text: "See revenue, orders, top products, and sales channels update from your CSV.",
  },
  {
    icon: UploadCloud,
    title: "Guided CSV upload",
    text: "Import sales files and validate required columns before analysis begins.",
  },
  {
    icon: Sparkles,
    title: "AI recommendations",
    text: "Commerce Copilot turns business trends into clear next steps.",
  },
];

export default function SignupPage() {
  const [activePreview, setActivePreview] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActivePreview((current) => (current + 1) % previews.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

    return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <Card className="grid w-full max-w-5xl gap-4 overflow-hidden p-4 lg:grid-cols-[1fr_400px]">
        <section className="p-6 sm:p-8">
          <div className="mb-6">
            <Logo />
          </div>

          <div>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Sparkles size={20} />
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
              Let’s analyze your first sales report.
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Create your StorePulse workspace to upload CSVs, track performance,
              and receive AI-powered business insights.
            </p>
          </div>

          <div className="mt-5 grid gap-2 rounded-2xl bg-slate-50 p-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <CheckCircle2 size={16} className="text-indigo-600" />
                {benefit}
              </div>
            ))}
          </div>

          <form className="mt-5 space-y-3">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                placeholder="Sarah Chen"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
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
                placeholder="Create a password"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <Button className="w-full">Create workspace</Button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-indigo-600">
              Sign in
            </Link>
          </p>
        </section>

        <section className="hidden rounded-3xl bg-slate-50 p-6 lg:flex lg:min-h-[560px] lg:flex-col lg:items-center lg:justify-center">
  <div className="relative">
    <div className="absolute -inset-6 rounded-full bg-indigo-200/40 blur-3xl" />

    <div className="relative w-[260px] rounded-[2.5rem] border-[8px] border-slate-950 bg-slate-950 p-2 shadow-2xl">
      <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

      <div className="h-[520px] overflow-hidden rounded-[2rem] bg-slate-100 text-slate-950">
        {activePreview === 0 && (
          <div className="p-4 pt-8">
            <p className="text-xs font-medium text-slate-500">Workspace</p>
            <h3 className="mt-1 text-lg font-semibold">Good afternoon 👋</h3>

            <div className="mt-4 rounded-2xl bg-indigo-600 p-4 text-white">
              <p className="text-xs text-indigo-100">Revenue this month</p>
              <p className="mt-2 text-2xl font-semibold">$48.2K</p>
              <p className="mt-1 text-xs text-indigo-100">Up 12%</p>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="text-xs text-slate-500">Orders</p>
                <p className="mt-1 font-semibold">1,248</p>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="text-xs text-slate-500">AOV</p>
                <p className="mt-1 font-semibold">$38</p>
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
              <p className="text-xs font-medium">Revenue Trend</p>
              <div className="mt-3 flex h-24 items-end gap-2">
                {[30, 48, 36, 64, 72, 85].map((height, index) => (
                  <div
                    key={index}
                    className="w-full rounded-t bg-indigo-500"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activePreview === 1 && (
          <div className="p-4 pt-8">
            <p className="text-xs font-medium text-slate-500">Upload Data</p>
            <h3 className="mt-1 text-lg font-semibold">Import report</h3>

            <div className="mt-4 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50 p-5 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <UploadCloud size={20} />
              </div>
              <p className="mt-3 text-sm font-semibold">Upload CSV</p>
              <p className="mt-1 text-xs text-slate-500">5MB max file size</p>
            </div>

            <div className="mt-4 space-y-2">
              {["date", "product", "revenue", "channel"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm"
                >
                  <span className="text-xs font-medium">{item}</span>
                  <CheckCircle2 size={14} className="text-indigo-600" />
                </div>
              ))}
            </div>
          </div>
        )}

        {activePreview === 2 && (
          <div className="p-4 pt-8">
            <p className="text-xs font-medium text-slate-500">Insights</p>
            <h3 className="mt-1 text-lg font-semibold">Commerce Copilot</h3>

            <div className="mt-4 space-y-3">
              {[
                ["Promote Classic Hoodie", "Top revenue product this month."],
                ["Scale Email", "Email drove the largest sales share."],
                ["Re-engage customers", "Returning purchases declined."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-white p-3 shadow-sm">
                  <div className="mb-2 inline-flex rounded-full bg-indigo-50 px-2 py-1 text-[10px] font-medium text-indigo-600">
                    AI Insight
                  </div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  <div className="mt-6 flex justify-center gap-2">
    {previews.map((preview, index) => (
      <button
        key={preview.title}
        onClick={() => setActivePreview(index)}
        className={`h-2 rounded-full transition-all ${
          index === activePreview ? "w-8 bg-indigo-600" : "w-2 bg-slate-300"
        }`}
        aria-label={`Show ${preview.title}`}
      />
    ))}
  </div>
</section>
      </Card>
    </main>
  );
}