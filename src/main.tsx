import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

/* 
StrictMode: garante o funcionameno melhor durante o desenvolvimento
*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
