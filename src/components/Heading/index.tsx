import type { SvgIconProps } from "@mui/material";
import React from "react";

import style from "./style.module.css";

interface IHeadingProps {
  title: string;
  children?: React.ReactElement<SvgIconProps>;
}

export function Heading({ title, children }: IHeadingProps) {
  return (
    <h1 className={style.heading}>
      {title}
      {children
        ? React.cloneElement(children, {
            fontSize: "inherit",
          })
        : ""}
    </h1>
  );
}
