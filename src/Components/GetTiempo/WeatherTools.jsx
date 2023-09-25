import { useState } from "react";
import { GetHours } from "./GetHours";
import { GetWeek } from "./GetWeek";
import { WeatherMenu } from "./WeatherTools/WeatherMenu";
import { Grid } from "@mui/material";

export const WeatherTools = ({ forecastday }) => {
  if (!forecastday) return null;

  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (event, buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Grid item container xs={12}>
      <WeatherMenu
        handleButtonClick={handleButtonClick}
        selectedButton={selectedButton}
      />
      {selectedButton === "button1" ? (
        <GetHours forecastday={forecastday} />
      ) : (
        <GetWeek forecastday={forecastday} />
      )}
    </Grid>
  );
};
