export interface SalesRow {
  date: string;
  product: string;
  revenue: number;
  orders: number;
  customer_type: string;
  channel: string;
}

export interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  returningCustomerRate: number;

  revenueTrend: {
    month: string;
    revenue: number;
  }[];

  topProducts: {
    product: string;
    revenue: number;
  }[];

  channels: {
    name: string;
    value: number;
  }[];
}