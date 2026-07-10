import type { ReactNode } from "react";

type ButtonVariant = "primary" | "accent" | "outline" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/30",
  outline:
    "border-2 border-primary-600 text-primary-700 hover:bg-primary-50 bg-white/60",
  ghost: "text-primary-800 hover:bg-primary-50",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-heading font-semibold text-base transition-all hover:-translate-y-0.5 active:translate-y-0 ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
