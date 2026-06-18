import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-md transition duration-200 hover:border-white/18 hover:bg-white/[0.075]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
