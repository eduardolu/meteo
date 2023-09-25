import App from "../App";
import { Navigate, Route, Routes } from "react-router-dom";

/* Configuración de las rutas para diferentes páginas. */
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App section={"inicio"} />} />
      <Route path="dias" element={<App section={"dias"} />} />
      <Route path="horas" element={<App section={"horas"} />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
