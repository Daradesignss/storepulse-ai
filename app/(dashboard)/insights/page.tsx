import { AlertTriangle, Lightbulb, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InsightCard } from "@/components/insights/InsightCard";

const questions = [
  "Why did revenue drop in March?",
  "Which product should I promote?",
  "How can I increase repeat purchases?",
  "Which channel performed best?",
];

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-500">Insights</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Commerce Copilot
        </h1>
        <p className="mt-2 text-slate-600">
          Ask questions, review trend alerts, and turn business data into decisions.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <InsightCard
  icon={TrendingUp}
  tone="growth"
  label="Growth"
  title="Revenue recovered after March"
  description="Sales dipped in March but grew steadily through June, ending 12% above last month."
/>

<InsightCard
  icon={AlertTriangle}
  tone="risk"
  label="Risk"
  title="Returning customers declined"
  description="Repeat purchases dropped by 8%, which may reduce long-term revenue stability."
/>

<InsightCard
  icon={Lightbulb}
  tone="opportunity"
  label="Opportunity"
  title="Email is your strongest channel"
  description="Email generated 42% of revenue and outperformed Instagram by 14 percentage points."
/>
      </div>

      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
            <MessageSquare size={20} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Ask Commerce Copilot
            </h2>
            <p className="text-sm text-slate-500">
              Start with one of these business questions.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {questions.map((question) => (
            <Button
  key={question}
  variant="secondary"
  className="justify-start text-left hover:border-indigo-300 hover:bg-indigo-50"
>
  {question}
</Button>
          ))}
        </div>
      </Card>
    </div>
  );
}