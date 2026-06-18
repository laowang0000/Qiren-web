import type { HTMLAttributes, ReactNode } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-electric-blue/25 bg-electric-blue/10 px-3 py-1 text-xs font-medium text-sky-100",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
