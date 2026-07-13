import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type RecommendationCardProps = {
  priority: string;
  title: string;
  reason: string;
  action: string;
};

export function RecommendationCard({
  priority,
  title,
  reason,
  action,
}: RecommendationCardProps) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
        <Sparkles size={14} />
        {priority}
      </div>

      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{reason}</p>

      <Button variant="secondary" className="mt-5 gap-2">
        {action} <ArrowUpRight size={16} />
      </Button>
    </Card>
  );
}