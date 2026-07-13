import { DashboardMetrics } from "@/types/analytics";

export function generateRecommendations(metrics: DashboardMetrics | null) {
  const topProduct = metrics?.topProducts[0]?.product ?? "Classic Hoodie";
  const topChannel = metrics?.channels[0]?.name ?? "Email";
  const returningRate = metrics?.returningCustomerRate ?? 42;

  return [
    {
      priority: returningRate < 40 ? "High Priority" : "Retention",
      title:
        returningRate < 40
          ? "Re-engage returning customers"
          : "Strengthen customer loyalty",
      reason:
        returningRate < 40
          ? `Returning customers represent only ${Math.round(
              returningRate
            )}% of uploaded records. A win-back campaign could help recover repeat purchases.`
          : `Returning customers represent ${Math.round(
              returningRate
            )}% of uploaded records. Keep nurturing this segment with loyalty offers.`,
      action: "View segment",
    },
    {
      priority: "Growth Opportunity",
      title: `Promote ${topProduct}`,
      reason: `${topProduct} generated the highest product revenue in your uploaded sales data.`,
      action: "View product",
    },
    {
      priority: "Channel Insight",
      title: `Scale ${topChannel}`,
      reason: `${topChannel} is responsible for the largest share of sales in this upload.`,
      action: "Open report",
    },
  ];
}