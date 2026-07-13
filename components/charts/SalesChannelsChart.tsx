"use client";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/Card";

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#64748B"];

type SalesChannelsChartProps = {
  data: {
    name: string;
    value: number;
  }[];
};

export function SalesChannelsChart({ data }: SalesChannelsChartProps) {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-950">Sales Channels</h2>
        <p className="mt-1 text-sm text-slate-500">
          Email drove the largest share of revenue.
        </p>
      </div>

      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className="h-72 overflow-visible">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={4}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, "Share"]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm text-slate-600">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-slate-900">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}