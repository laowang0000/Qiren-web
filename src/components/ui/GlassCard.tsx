import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-amber-100/10 bg-slate-950/45 p-6 shadow-glass backdrop-blur-sm transition duration-200 hover:border-amber-200/24 hover:bg-slate-900/55",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
