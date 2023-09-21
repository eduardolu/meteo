import { useState } from "react";
import { GetHours } from "./GetHours";
import { GetWeek } from "./GetWeek";
import { WeatherMenu } from "./WeatherTools/WeatherMenu";
import { Grid } from "@mui/material";

export const WeatherTools = ({ forecastday }) => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Grid item>
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
