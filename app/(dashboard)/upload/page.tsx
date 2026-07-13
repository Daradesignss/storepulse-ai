import { CheckCircle2, FileText } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { UploadDropzone } from "@/components/upload/UploadDropzone";

const columns = ["date", "product", "revenue", "orders", "customer_type", "channel"];

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-500">Upload Data</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Import your sales report
        </h1>
        <p className="mt-2 text-slate-600">
          Upload a CSV file so Commerce Copilot can generate metrics and insights.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
  <UploadDropzone />

  <Card>
    <h2 className="text-xl font-semibold text-slate-950">
      How it works
    </h2>

    <div className="mt-5 space-y-5">
      {[
        {
          step: "01",
          title: "Upload your CSV",
          text: "Import a sales export with revenue, orders, products, channels, and customer type.",
        },
        {
          step: "02",
          title: "StorePulse analyzes it",
          text: "The data engine calculates metrics, trends, product performance, and sales channels.",
        },
        {
          step: "03",
          title: "Review your insights",
          text: "Your dashboard updates with business health, charts, and AI recommendations.",
        },
      ].map((item) => (
        <div key={item.step} className="flex gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-semibold text-indigo-600">
            {item.step}
          </div>

          <div>
            <h3 className="font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Card>
</div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-slate-950">
            Required columns
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Your CSV should include these fields.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
  {columns.map((column) => (
    <div
      key={column}
      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
    >
      <div className="flex items-center gap-2">
        <CheckCircle2 size={16} className="text-emerald-500" />
        <span className="font-medium">{column}</span>
      </div>

      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
        Required
      </span>
    </div>
  ))}
</div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-slate-950">
            Recent uploads
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Your latest imported reports.
          </p>

          <div className="mt-5 space-y-3">
            {["June sales report.csv", "May sales report.csv"].map((file) => (
              <div
                key={file}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{file}</p>
                    <p className="text-xs text-slate-500">248 rows processed</p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  Processed
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}