import { useState } from "react";
import { Alert, Grid } from "@mui/material";
import { GetHours } from "./GetHours";
import { GetWeek } from "./GetWeek";
import { WeatherMenu } from "./WeatherTools/WeatherMenu";

/* El menu de 24h o 3 días y renderizar el componente correcto. */
export const WeatherTools = ({ section, forecastday, fallbackReason }) => {
  const [selectedButton, setSelectedButton] = useState("dias");

  if (!forecastday) {
    return (
      <Grid item xs={12} px={2} pb={2}>
        <Alert severity="info">
          {fallbackReason ||
            "El pronóstico no está disponible ahora mismo. Se muestra solo el tiempo actual."}
        </Alert>
      </Grid>
    );
  }

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
