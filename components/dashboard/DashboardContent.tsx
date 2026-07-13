"use client";

import { useState } from "react";
import { MorningBrief } from "@/components/dashboard/MorningBrief";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { TopProductsChart } from "@/components/charts/TopProductsChart";
import { SalesChannelsChart } from "@/components/charts/SalesChannelsChart";
import { RecommendationCard } from "@/components/dashboard/RecommendationCard";
import { getDashboardMetrics } from "@/lib/storage";
import { DashboardMetrics } from "@/types/analytics";
import { generateRecommendations } from "@/services/recommendations";

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })}`;
}

export function DashboardContent() {
  const [metrics] = useState<DashboardMetrics | null>(() => {
  if (typeof window === "undefined") return null;
  return getDashboardMetrics();
});
const recommendations = generateRecommendations(metrics);
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-500">Workspace</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Good afternoon, Sarah 👋
        </h1>
        <p className="mt-2 text-slate-600">
          Here’s what’s happening in your business today.
        </p>
      </div>

      <MorningBrief
  revenue={metrics ? formatCurrency(metrics.totalRevenue) : "$48.2K"}
  topProduct={metrics?.topProducts[0]?.product ?? "Classic Hoodie"}
  topChannel={metrics?.channels[0]?.name ?? "Email"}
  returningRate={
    metrics ? `${Math.round(metrics.returningCustomerRate)}%` : "42%"
  }
/>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Key Metrics</h2>
          <p className="text-slate-500">
            A quick overview of your uploaded sales data.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Revenue"
            value={metrics ? formatCurrency(metrics.totalRevenue) : "$48.2K"}
            change="+12%"
            positive={true}
            description="From uploaded CSV"
          />

          <MetricCard
            title="Orders"
            value={metrics ? String(metrics.totalOrders) : "1,248"}
            change="+8%"
            positive={true}
            description="From uploaded CSV"
          />

          <MetricCard
            title="Avg. Order Value"
            value={
              metrics ? formatCurrency(metrics.averageOrderValue) : "$38.65"
            }
            change="-2%"
            positive={false}
            description="Revenue divided by orders"
          />

          <MetricCard
            title="Returning Customers"
            value={
              metrics
                ? `${Math.round(metrics.returningCustomerRate)}%`
                : "42%"
            }
            change="-8%"
            positive={false}
            description="Based on customer type"
          />
        </div>
      </section>

      <RevenueChart
  data={
    metrics?.revenueTrend.length
      ? metrics.revenueTrend
      : [
          { month: "Jan", revenue: 32000 },
          { month: "Feb", revenue: 38000 },
          { month: "Mar", revenue: 31000 },
          { month: "Apr", revenue: 42000 },
          { month: "May", revenue: 45200 },
          { month: "Jun", revenue: 48200 },
        ]
  }
/>

      <div className="grid gap-6 xl:grid-cols-2">
        <TopProductsChart
  data={
    metrics?.topProducts.length
      ? metrics.topProducts
      : [
          { product: "Classic Hoodie", revenue: 18400 },
          { product: "Everyday Tee", revenue: 13200 },
          { product: "Canvas Tote", revenue: 9200 },
          { product: "Denim Jacket", revenue: 7400 },
        ]
  }
/>
        <SalesChannelsChart
  data={
    metrics?.channels.length
      ? metrics.channels
      : [
          { name: "Email", value: 42 },
          { name: "Instagram", value: 28 },
          { name: "Google Ads", value: 18 },
          { name: "Organic", value: 12 },
        ]
  }
/>
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">
            AI Recommendations
          </h2>
          <p className="text-slate-500">
            Commerce Copilot identified three actions to improve performance.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {recommendations.map((recommendation) => (
  <RecommendationCard
    key={recommendation.title}
    priority={recommendation.priority}
    title={recommendation.title}
    reason={recommendation.reason}
    action={recommendation.action}
  />
))}
        </div>
      </section>
    </div>
  );
}