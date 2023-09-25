import { Route, Routes } from "react-router-dom";
import { GetWeek } from "../Components/GetTiempo/GetWeek";
import { GetHours } from "../Components/GetTiempo/GetHours";
import { Weather } from "../Components/Weather";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="week" element={<App section={"week"} />} />
      <Route path="hours" element={<App section={"hours"} />} />
      <Route path="/*" element={<App section={"week"} />} />
    </Routes>
  );
};
