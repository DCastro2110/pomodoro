import React, { type ReactElement } from "react";
import styles from "./styles.module.css";
import type { SvgIconProps } from "@mui/material";

interface IButtonProps {
  color?: string;
  children: React.ReactElement<SvgIconProps>;
  onClick: () => void
}

export const Button = ({ color, children, onClick }: IButtonProps) => {
  const Icon = () => {
    return React.cloneElement(children as ReactElement<SvgIconProps>, {
      fontSize: "inherit",
    });
  };

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};
