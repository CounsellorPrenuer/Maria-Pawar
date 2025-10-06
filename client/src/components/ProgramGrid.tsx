import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

export interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProgramGridProps {
  programs: Program[];
}

export default function ProgramGrid({ programs }: ProgramGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program, index) => (
        <GlassCard key={index} hover>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <program.icon className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
              <p className="text-sm text-muted-foreground">{program.description}</p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
