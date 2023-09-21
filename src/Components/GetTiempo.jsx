import { Grid } from "@mui/material";
import { useFetchTime } from "../Hooks/useFetchTime";
import { WeatherToday } from "./GetTiempo/WeatherToday";
import { WeatherTools } from "./GetTiempo/WeatherTools";

/* Este componente llama a useFetchTime para obtener resultado de API y se lo pasa          */
/* a los componentes como WeatherToday para renderizar el tiempo de hoy, y a                */
/* WeatherTools para renderizar el tiempo con detalle si es proximos dias y proximas horas  */

export const GetTiempo = ({ buscar }) => {
  const { tiempo, current, condition, isLoading, forecastday } =
    useFetchTime(buscar);

  return (
    <Grid item>
      {isLoading && <h2>Cargando...</h2>}
      <WeatherToday tiempo={tiempo} current={current} condition={condition} />
      <WeatherTools forecastday={forecastday} />
    </Grid>
  );
};
