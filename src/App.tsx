import "./style/theme.css";
import "./style/global.css";

import { Header } from "./components/Header/App";
import { Menu } from "./components/Menu/App";

/* 
JSX e TSX: Arquivo de component react

Recebe uma função em PascalCase
Retorno: O que será exibido na página
*/
export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
    </div>
  );
}
