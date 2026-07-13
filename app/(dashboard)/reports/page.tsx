import { Download, FileText, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const reports = [
  {
    title: "Monthly Performance Summary",
    description: "Revenue, orders, AOV, channels, and key business changes.",
    date: "Generated today",
    icon: FileText,
  },
  {
    title: "Product Performance Report",
    description: "Top products, revenue contribution, and promotion opportunities.",
    date: "Generated today",
    icon: Package,
  },
  {
    title: "Customer Behavior Report",
    description: "New vs returning customers and retention opportunities.",
    date: "Generated today",
    icon: Users,
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-500">Reports</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Business reports
        </h1>
        <p className="mt-2 text-slate-600">
          Turn uploaded sales data into shareable summaries for business decisions.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {reports.map((report) => {
          const Icon = report.icon;

          return (
            <Card key={report.title} className="transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Icon size={22} />
              </div>

              <h2 className="text-lg font-semibold text-slate-950">
                {report.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {report.description}
              </p>

              <p className="mt-4 text-xs font-medium text-slate-400">
                {report.date}
              </p>

              <Button variant="secondary" className="mt-5 gap-2">
                <Download size={16} />
                View report
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}