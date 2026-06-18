import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-gradient-to-r from-electric-blue to-electric-violet text-white shadow-glow hover:shadow-[0_22px_70px_rgba(88,166,255,0.28)]",
  secondary:
    "border-white/15 bg-white/[0.07] text-slate-100 hover:border-electric-blue/60 hover:bg-white/[0.11]",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:bg-white/[0.06] hover:text-white",
};

export function Button({
  children,
  variant = "secondary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0",
    variantClasses[variant],
    className,
  ].join(" ");

  if (props.href && !props.disabled) {
    const { href, target, rel } = props;

    return (
      <a className={classes} href={href} rel={rel} target={target}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={props.disabled} type={props.type ?? "button"}>
      {children}
    </button>
  );
}
