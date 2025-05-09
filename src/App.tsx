import "./style/global.css";

import { Header } from "./components/Header/App";

/* 
JSX e TSX: Arquivo de component react

Recebe uma função em PascalCase
Retorno: O que será exibido na página
*/
export function App() {
  return (
    <>
      <Header />
    </>
  );
}
