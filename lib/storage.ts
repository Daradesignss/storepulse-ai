import { DashboardMetrics, SalesRow } from "@/types/analytics";

export const STORAGE_KEYS = {
  salesRows: "storepulse_sales_rows",
  dashboardMetrics: "storepulse_dashboard_metrics",
};

export function saveSalesRows(rows: SalesRow[]) {
  localStorage.setItem(STORAGE_KEYS.salesRows, JSON.stringify(rows));
}

export function saveDashboardMetrics(metrics: DashboardMetrics) {
  localStorage.setItem(STORAGE_KEYS.dashboardMetrics, JSON.stringify(metrics));
}

export function getDashboardMetrics(): DashboardMetrics | null {
  const saved = localStorage.getItem(STORAGE_KEYS.dashboardMetrics);
  return saved ? JSON.parse(saved) : null;
}