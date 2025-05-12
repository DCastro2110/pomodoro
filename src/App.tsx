import "./style/theme.css";
import "./style/global.css";

import { Header } from "./components/Header/";
import { Menu } from "./components/Menu/";
import { Heading } from "./components/Heading/";
import { History } from "@mui/icons-material";

/* 
JSX e TSX: Arquivo de component react

Recebe uma função em PascalCase
Retorno: O que será exibido na página
*/
export function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Menu />
        <main>
          <Heading title="Texto">
            <History />
          </Heading>
        </main>
      </div>
    </div>
  );
}
