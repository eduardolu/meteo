import { Button, Grid } from "@mui/material";

export const WeatherMenu = ({ handleButtonClick, selectedButton }) => {
  return (
    <Grid
      item
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        p: 2,
      }}
    >
      <Grid item>
        <Button
          variant="contained"
          onClick={() => handleButtonClick("button1")}
          className={selectedButton === "button1" ? "selected" : ""}
        >
          Próximas 24 horas
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{ ml: 1 }}
          onClick={() => handleButtonClick("button2")}
          className={selectedButton === "button2" ? "selected" : ""}
        >
          Próximos 3 días
        </Button>
      </Grid>
    </Grid>
  );
};
