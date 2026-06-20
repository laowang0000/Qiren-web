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
    "border-amber-200/35 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-[0_18px_55px_rgba(245,158,11,0.22)] hover:shadow-[0_22px_70px_rgba(245,158,11,0.32)]",
  secondary:
    "border-amber-100/18 bg-slate-950/45 text-slate-100 hover:border-amber-200/45 hover:bg-slate-900/70",
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
    "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0",
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
