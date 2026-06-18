import type { ElementType, ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Section({
  id,
  children,
  className = "",
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={["site-section relative px-6 py-20 sm:py-24", className].join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}
