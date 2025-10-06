import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-card/20 border border-border/30 rounded-2xl p-8 shadow-2xl",
        hover && "transition-transform duration-300 hover:scale-102 hover-elevate",
        className
      )}
    >
      {children}
    </div>
  );
}
