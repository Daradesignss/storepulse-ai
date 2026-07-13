import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

type InsightCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
};

export function InsightCard({
  icon: Icon,
  title,
  description,
  label,
}: InsightCardProps) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        <Icon size={20} />
      </div>

      <p className="text-sm font-medium text-indigo-600">{label}</p>

      <h3 className="mt-2 text-lg font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </Card>
  );
}