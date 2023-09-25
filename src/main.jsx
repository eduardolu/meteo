import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* Quitamos el modo StrinctMode para producción, evitar duplicar peticiones */
  // <React.StrictMode>
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  // </React.StrictMode>
);
