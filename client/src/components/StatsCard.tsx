import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: "primary" | "secondary" | "accent";
}

export default function StatsCard({ icon: Icon, value, label, color = "primary" }: StatsCardProps) {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <GlassCard hover className="text-center">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${color}/10 mb-4`}>
        <Icon className={`w-6 h-6 ${colorClasses[color]}`} />
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </GlassCard>
  );
}
