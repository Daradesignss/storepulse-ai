import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type InsightTone = "growth" | "risk" | "opportunity";

type InsightCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
  tone: InsightTone;
};

const toneStyles: Record<
  InsightTone,
  {
    icon: string;
    label: string;
    border: string;
    glow: string;
  }
> = {
  growth: {
    icon: "bg-emerald-50 text-emerald-600",
    label: "text-emerald-700",
    border: "hover:border-emerald-200",
    glow: "hover:shadow-emerald-100/70",
  },
  risk: {
    icon: "bg-red-50 text-red-600",
    label: "text-red-700",
    border: "hover:border-red-200",
    glow: "hover:shadow-red-100/70",
  },
  opportunity: {
    icon: "bg-amber-50 text-amber-600",
    label: "text-amber-700",
    border: "hover:border-amber-200",
    glow: "hover:shadow-amber-100/70",
  },
};

export function InsightCard({
  icon: Icon,
  title,
  description,
  label,
  tone,
}: InsightCardProps) {
  const styles = toneStyles[tone];

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        styles.border,
        styles.glow
      )}
    >
      <div
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
          styles.icon
        )}
      >
        <Icon size={21} />
      </div>

      <p className={cn("text-sm font-semibold", styles.label)}>{label}</p>

      <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
          tone === "growth" && "bg-emerald-500",
          tone === "risk" && "bg-red-500",
          tone === "opportunity" && "bg-amber-500"
        )}
      />
    </Card>
  );
}