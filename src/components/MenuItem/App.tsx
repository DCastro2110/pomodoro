import { type SvgIconProps } from "@mui/material";
import React, { type ReactElement } from "react";

import style from "./style.module.css";

interface IMenuItem {
  children: ReactElement<SvgIconProps>;
  title: string;
  link: string;
}

export function MenuItem({ children, title, link }: IMenuItem) {
  const IconChildren: ReactElement<SvgIconProps> = React.cloneElement(
    children,
    {
      fontSize: "medium",
    },
  );
  return (
    <a
      className={style.card}
      title={title}
      href={link}
    >
      {IconChildren}
    </a>
  );
}
