import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "./router";

/* 
StrictMode: garante o funcionameno melhor durante o desenvolvimento
*/

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
