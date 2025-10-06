import { LucideIcon } from "lucide-react";

export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-6 mb-12 last:mb-0">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg flex-shrink-0">
              <step.icon className="w-8 h-8" />
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-border/50 mt-4" />
            )}
          </div>
          <div className="flex-1 pb-8">
            <h3 className="font-serif text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
