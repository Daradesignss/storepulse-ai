"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/Card";

type TopProductsChartProps = {
  data: {
    product: string;
    revenue: number;
  }[];
};

export function TopProductsChart({ data }: TopProductsChartProps) {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-950">Top Products</h2>
        <p className="mt-1 text-sm text-slate-500">
          Classic Hoodie generated the highest revenue this month.
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" hide />
            <YAxis
              dataKey="product"
              type="category"
              width={110}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
            />
            <Tooltip
  cursor={{ fill: "#EEF2FF" }}
  formatter={(value) => [
    `$${Number(value).toLocaleString()}`,
    "Revenue",
  ]}
  contentStyle={{
    borderRadius: "14px",
    border: "1px solid #E2E8F0",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
    fontSize: "14px",
  }}
/>
           <Bar dataKey="revenue" fill="#4F46E5" radius={[0, 10, 10, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}