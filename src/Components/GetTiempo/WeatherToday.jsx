import { Avatar, Grid, Typography } from "@mui/material";

/* El componente del tiempo actual. */
export const WeatherToday = ({ tiempo, current, condition }) => {
  /* Comprobar si hay información en las variables. */
  if (!current || !tiempo || !condition) return null;
  return (
    <Grid item xs={12} p={2}>
      <Typography variant="h3">{tiempo.name}</Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Avatar
            alt={condition.text}
            src={condition.icon}
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h5"> Temperatura: {current.temp_c}º </Typography>
          <Typography variant="h8">
            Precipitaciones: {current.precip_mm}mm
          </Typography>
          <Typography variant="h8"> Viento: {current.wind_kph} km/h</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
