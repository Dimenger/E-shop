import styles from "./Button.module.css";
import type { ButtonHTMLAttributes } from "react";

type Variant = "nav-button" | "confirm" | "delete";
type FontSize = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: FontSize;
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = "nav-button",
  size = "md",
  isLoading = false,
  disabled,
  ...props
}: Props) => {
  return (
    <button
      className={`${styles.base} ${styles[variant]} ${styles[size]} ${isLoading ? styles.loading : ""}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
