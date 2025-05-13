import "./style/theme.css";
import "./style/global.css";

import { Outlet } from "react-router";

import { Header } from "./components/Header/";
import { Menu } from "./components/Menu/";
import { TimerProvider } from "./contexts/TimerContext";


// import { Button } from "./components/Button";

/* 
JSX e TSX: Arquivo de component react

Recebe uma função em PascalCase
Retorno: O que será exibido na página
*/
export function App() {
  return (
    <TimerProvider>
      <div className="container">
        <div className="content">
          <Header />
          <Menu />
          <Outlet />
        </div>
      </div>
    </TimerProvider>
  );
}
