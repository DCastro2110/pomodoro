import { AccessAlarm } from "@mui/icons-material";

import style from "./styles.module.css";

export function Header() {
  return (
    <>
      <header className={style.header}>
        <AccessAlarm fontSize="inherit" />
        <h2 className={style["app-name"]}>Chronos</h2>
      </header>
    </>
  );
}
