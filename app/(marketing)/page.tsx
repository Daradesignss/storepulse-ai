import { ArrowRight, BarChart3, Brain, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { MarketingHeader } from "@/components/layout/MarketingHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
    <MarketingHeader />

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-6 pt-8 md:gap-10 md:py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            AI business workspace for online stores
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Stop guessing why your sales changed.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Upload your sales report, understand revenue trends, and ask
            Commerce Copilot what happened, why it happened, and what to do next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard">
  <Button className="gap-2">
    Try demo dashboard <ArrowRight size={18} />
  </Button>
</Link>
            <Link href="/upload">
  <Button variant="secondary">Upload sample CSV</Button>
</Link>
          </div>
        </div>

        <Card id="preview" className="scroll-mt-24 p-4">
          <div className="rounded-xl bg-slate-950 p-5 text-white">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-slate-400">Morning Brief</p>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Revenue ↑ 12%
              </span>
            </div>

            <h2 className="text-2xl font-semibold">Good morning, Sarah 👋</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Revenue increased this month, but returning customers declined.
              Email was your strongest channel and Classic Hoodie generated 42%
              of total sales.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {["$48.2K Revenue", "1,248 Orders", "$38.65 AOV", "42% Hoodie Sales"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </Card>
      </section>

      <section
  id="features"
  className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-10 pt-4 md:py-16"
>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <Upload className="mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold">Upload CSV</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Import sales exports and turn raw rows into readable performance data.
            </p>
          </Card>

          <Card>
            <BarChart3 className="mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold">View trends</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Track revenue, orders, channels, products, and returning customers.
            </p>
          </Card>

          <Card>
            <Brain className="mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold">Ask Commerce Copilot</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Get AI-powered explanations and recommendations from your business data.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}