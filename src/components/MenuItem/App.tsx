import { type SvgIconProps } from "@mui/material";
import React, { type ReactElement } from "react";

import style from "./style.module.css";

interface IMenuItem {
  children: ReactElement<SvgIconProps>;
  title: string;
}

export function MenuItem({ children, title }: IMenuItem) {
  const IconChildren: ReactElement<SvgIconProps> = React.cloneElement(
    children,
    {
      fontSize: "medium",
    },
  );
  return (
    <div
      className={style.card}
      title={title}
    >
      {IconChildren}
    </div>
  );
}
