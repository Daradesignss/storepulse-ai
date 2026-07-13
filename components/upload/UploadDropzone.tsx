"use client";

import Papa from "papaparse";
import { FileSpreadsheet, UploadCloud, CheckCircle2, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { calculateMetrics } from "@/lib/analytics";
import { saveDashboardMetrics, saveSalesRows } from "@/lib/storage";
import { SalesRow } from "@/types/analytics";


const requiredColumns = ["date", "product", "revenue", "orders", "customer_type", "channel"];

export function UploadDropzone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleFile(file: File) {
    setStatus("processing");
setMessage("Analyzing revenue, products, channels, and customer behavior...");
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const fields = (results.meta.fields ?? []).map((field) =>
  field.trim().toLowerCase()
);
        const missing = requiredColumns.filter((col) => !fields.includes(col));

        if (missing.length > 0) {
          setTimeout(() => {
  setStatus("error");
  setMessage(`Missing columns: ${missing.join(", ")}`);
}, 1200);
return;
        }

        const rows = results.data as Record<string, string>[];

const normalizedRows: SalesRow[] = rows.map((row) => ({
  date: row.Date || row.date,
  product: row.Product || row.product,
  revenue: Number(row.Revenue || row.revenue),
  orders: Number(row.Orders || row.orders),
  customer_type: row.Customer_type || row.customer_type,
  channel: row.Channel || row.channel,
}));

const metrics = calculateMetrics(normalizedRows);

saveSalesRows(normalizedRows);
saveDashboardMetrics(metrics);

setTimeout(() => {
  setStatus("success");
  setMessage(`${normalizedRows.length} rows processed successfully. Dashboard updated.`);
}, 1200);
      },
      error: () => {
        setStatus("error");
        setMessage("Something went wrong while reading the CSV.");
      },
    });
  }

  return (
    <Card className="border-dashed border-indigo-200 bg-indigo-50/30 text-center">
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
        <UploadCloud size={26} />
      </div>

      <h2 className="mt-5 text-xl font-semibold text-slate-950">
        Upload sales CSV
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
        Drop your Shopify, sales, or marketing export here. StorePulse will
        analyze revenue, products, channels, and customer behavior.
      </p>

      <Button className="mt-6" onClick={() => inputRef.current?.click()}>
        Choose CSV file
      </Button>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
        <FileSpreadsheet size={16} />
        Supports .csv files up to 5MB
      </div>

      {message && (
  <div
    className={`mx-auto mt-5 max-w-md rounded-2xl px-4 py-4 text-sm font-medium ${
      status === "success"
        ? "bg-emerald-50 text-emerald-700"
        : status === "processing"
        ? "bg-indigo-50 text-indigo-700"
        : "bg-red-50 text-red-700"
    }`}
  >
    <div className="flex items-center justify-center gap-2">
      {status === "success" && <CheckCircle2 size={16} />}
      {status === "error" && <AlertCircle size={16} />}
      {status === "processing" && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />
      )}

      <span>{message}</span>
    </div>

    {status === "success" && (
      <div className="mt-4 flex justify-center">
        <Link href="/dashboard">
          <Button variant="secondary">
            Go to Overview
          </Button>
        </Link>
      </div>
    )}
  </div>
)}
    </Card>
  );
}