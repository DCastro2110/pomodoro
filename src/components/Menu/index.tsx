import { MenuItem } from "../MenuItem";
import { Home, History, Settings, Sunny } from "@mui/icons-material";

import style from "./styles.module.css";

export function Menu() {
  return (
    <nav className={style.navbar}>
      <MenuItem
        title="Tela Inicial"
        link="/"
      >
        <Home />
      </MenuItem>
      <MenuItem
        title="Histórico"
        link="/"
      >
        <History />
      </MenuItem>
      <MenuItem
        title="Configurações"
        link="/"
      >
        <Settings />
      </MenuItem>
      <MenuItem
        title="Modo Noturno"
        link="/"
      >
        <Sunny />
      </MenuItem>
    </nav>
  );
}
