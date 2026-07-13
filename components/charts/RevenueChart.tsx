"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/Card";

function formatCurrency(value: number) {
  return `$${Math.round(value / 1000)}k`;
}

type RevenueChartProps = {
  data: {
    month: string;
    revenue: number;
  }[];
};

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">
            Revenue Trend
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Revenue recovered after March and grew steadily through June.
          </p>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
          +12%
        </span>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748B", fontSize: 13 }}
            />

            <YAxis
              tickFormatter={formatCurrency}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748B", fontSize: 13 }}
            />

            <Tooltip
              formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]}
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#4F46E5"
              strokeWidth={3}
              fill="url(#revenueFill)"
              activeDot={{
                r: 6,
                fill: "#4F46E5",
                stroke: "white",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}