import { Card } from "@/components/ui/card";

interface StatItem {
  label: string;
  value: number;
  color: string;
}

interface AdminStatsProps {
  stats: StatItem[];
}

export default function AdminStats({ stats }: AdminStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
}
