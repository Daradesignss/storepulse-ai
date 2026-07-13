import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  description: string;
};

export function MetricCard({
  title,
  value,
  change,
  positive,
  description,
}: MetricCardProps) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-slate-950">
            {value}
          </h3>
        </div>

        <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600 opacity-60 transition group-hover:opacity-100">
          <Sparkles size={18} />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {positive ? (
          <ArrowUpRight className="text-emerald-500" size={18} />
        ) : (
          <ArrowDownRight className="text-red-500" size={18} />
        )}

        <span
          className={`font-semibold ${
            positive ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </Card>
  );
}