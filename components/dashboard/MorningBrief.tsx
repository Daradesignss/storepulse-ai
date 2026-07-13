import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type MorningBriefProps = {
  revenue: string;
  topProduct: string;
  topChannel: string;
  returningRate: string;
};

export function MorningBrief({
  revenue,
  topProduct,
  topChannel,
  returningRate,
}: MorningBriefProps) {
  return (
    <Card className="overflow-hidden border-indigo-100 bg-gradient-to-br from-indigo-600 to-slate-950 p-0 text-white">
      <div className="p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-indigo-100">
            <Sparkles size={15} />
            Commerce Copilot Brief
          </div>

          <span className="hidden rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200 sm:inline">
            Revenue ↑ 12%
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-sm text-indigo-100">Today’s summary</p>

            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight lg:text-4xl">
              Your store generated {revenue} this month.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-indigo-100 lg:text-base">
              Revenue is based on your uploaded sales file. {topChannel} was your strongest
              channel, while {topProduct} drove the highest product revenue. Returning
              customers currently represent {returningRate} of your uploaded records.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
            <p className="text-sm text-indigo-100">AI opportunity</p>
            <p className="mt-2 text-lg font-semibold">
              Re-engage returning customers
            </p>
            <p className="mt-2 text-sm leading-6 text-indigo-100">
              A win-back email campaign could recover missed repeat purchases.
            </p>

            <Button className="mt-4 gap-2 bg-white text-slate-950 hover:bg-indigo-50">
              View Insight <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}