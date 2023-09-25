import { Button, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";

export const WeatherMenu = ({ handleButtonClick, selectedButton }) => {
  return (
    <Grid item container padding={1}>
      <ToggleButtonGroup
        value={selectedButton}
        exclusive
        onChange={handleButtonClick}
        fullWidth
      >
        <ToggleButton value="button1">Próximas 24 horas</ToggleButton>
        <ToggleButton value="button2">Próximos 3 días</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
