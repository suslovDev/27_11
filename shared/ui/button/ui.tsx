import cn from "classnames";
import React from "react";

import st from "./styles.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "active" | "dark";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

export const TextButton: React.FC<Props> = ({
  variant = "active",
  size = "medium",
  children,
  ...props
}) => {
  return (
    <button className={cn(st.btn, st[size], st[variant])} {...props}>
      {children}
    </button>
  );
};
