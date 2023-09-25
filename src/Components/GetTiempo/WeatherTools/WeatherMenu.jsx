import { Link } from "react-router-dom";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";

/* Menu de opciones de 24h o días. */
export const WeatherMenu = ({ setSelectedButton, selectedButton }) => {
  const handleButtonClick = (event, newValue) => {
    if (newValue == null) return; //por funcionamiento de ToggleButtonGroup devuelve null si volvemos a pulsar el boton.
    setSelectedButton(newValue);
  };
  return (
    <Grid item container padding={1}>
      <ToggleButtonGroup
        exclusive={true}
        fullWidth
        value={selectedButton}
        onChange={handleButtonClick}
      >
        <ToggleButton
          value="horas"
          className={selectedButton === "horas" ? "selected" : ""}
          component={Link}
          to="/horas"
        >
          Próximas 24 horas
        </ToggleButton>
        <ToggleButton
          value="dias"
          className={selectedButton === "dias" ? "selected" : ""}
          component={Link}
          to="/dias"
        >
          Próximos 3 días
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
