 "use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick:()=>void;
}

export const Button = ({ children, className, appName,onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        padding:10,
        border:10,
        margin:5
      }}
    >
      {children}
    </button>
  );
};
