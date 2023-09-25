import { useState } from "react";
import { Grid } from "@mui/material";
import { GetHours } from "./GetHours";
import { GetWeek } from "./GetWeek";
import { WeatherMenu } from "./WeatherTools/WeatherMenu";

/* El menu de 24h o 3 días y renderizar el componente correcto. */
export const WeatherTools = ({ section, forecastday }) => {
  if (!forecastday) return null;
  const [selectedButton, setSelectedButton] = useState("dias");

  return (
    <Grid item container xs={12}>
      <WeatherMenu
        setSelectedButton={setSelectedButton}
        selectedButton={selectedButton}
      />
      {section === "horas" ? (
        <GetHours forecastday={forecastday} />
      ) : (
        <GetWeek forecastday={forecastday} />
      )}
    </Grid>
  );
};
