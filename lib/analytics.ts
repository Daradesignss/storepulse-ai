import { DashboardMetrics, SalesRow } from "@/types/analytics";

function getMonthLabel(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { month: "short" });
}

export function calculateMetrics(rows: SalesRow[]): DashboardMetrics {
  const totalRevenue = rows.reduce((sum, row) => sum + row.revenue, 0);

  const totalOrders = rows.reduce((sum, row) => sum + row.orders, 0);

  const averageOrderValue =
    totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const returningRows = rows.filter(
    (row) => row.customer_type.toLowerCase() === "returning"
  );

  const returningCustomerRate =
    rows.length > 0 ? (returningRows.length / rows.length) * 100 : 0;

  const revenueByMonth = new Map<string, number>();
  const revenueByProduct = new Map<string, number>();
  const revenueByChannel = new Map<string, number>();

  rows.forEach((row) => {
    const month = getMonthLabel(row.date);

    revenueByMonth.set(
      month,
      (revenueByMonth.get(month) ?? 0) + row.revenue
    );

    revenueByProduct.set(
      row.product,
      (revenueByProduct.get(row.product) ?? 0) + row.revenue
    );

    revenueByChannel.set(
      row.channel,
      (revenueByChannel.get(row.channel) ?? 0) + row.revenue
    );
  });

  const revenueTrend = Array.from(revenueByMonth.entries()).map(
    ([month, revenue]) => ({
      month,
      revenue,
    })
  );

  const topProducts = Array.from(revenueByProduct.entries())
    .map(([product, revenue]) => ({
      product,
      revenue,
    }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 4);

  const totalChannelRevenue = Array.from(revenueByChannel.values()).reduce(
    (sum, revenue) => sum + revenue,
    0
  );

  const channels = Array.from(revenueByChannel.entries()).map(
    ([name, revenue]) => ({
      name,
      value:
        totalChannelRevenue > 0
          ? Math.round((revenue / totalChannelRevenue) * 100)
          : 0,
    })
  );

  return {
    totalRevenue,
    totalOrders,
    averageOrderValue,
    returningCustomerRate,
    revenueTrend,
    topProducts,
    channels,
  };
}