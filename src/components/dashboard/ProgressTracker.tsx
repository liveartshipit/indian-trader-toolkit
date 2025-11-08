import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2Icon, CircleIcon } from 'lucide-react';

const stages = [
  { id: 1, name: 'Setup & Account Opening', completed: true },
  { id: 2, name: 'Learning Fundamentals', completed: true },
  { id: 3, name: 'Paper Trading', completed: false },
  { id: 4, name: 'Live Trading', completed: false },
];

export default function ProgressTracker() {
  const completedCount = stages.filter((s) => s.completed).length;
  const progressPercentage = (completedCount / stages.length) * 100;

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Your Learning Journey</CardTitle>
        <CardDescription className="text-muted-foreground">
          Track your progress through the trading toolkit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-foreground font-medium">Progress</span>
            <span className="text-muted-foreground">
              {completedCount} of {stages.length} stages
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-1 h-full transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {stages.map((stage) => (
            <div key={stage.id} className="flex items-center gap-3">
              {stage.completed ? (
                <CheckCircle2Icon className="w-6 h-6 text-success flex-shrink-0" strokeWidth={2} />
              ) : (
                <CircleIcon className="w-6 h-6 text-muted-foreground flex-shrink-0" strokeWidth={2} />
              )}
              <span
                className={
                  stage.completed
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }
              >
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
