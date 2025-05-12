import { type SvgIconProps } from "@mui/material";
import React, { type ReactElement } from "react";

import style from "./styles.module.css";

interface IMenuItemProps {
  children: ReactElement<SvgIconProps>;
  title: string;
  link: string;
}

// React.ReactNode: Tipo que abrange tudo

export function MenuItem({ children, title, link }: IMenuItemProps) {
  const IconChildren: ReactElement<SvgIconProps> = React.cloneElement(
    children,
    {
      fontSize: "large",
    },
  );

  const isActivate = true;
  return (
    <a
      className={`${style.card} ${isActivate ? style.cardActivate : style.card}`}
      title={title}
      href={link}
    >
      {IconChildren}
    </a>
  );
}
