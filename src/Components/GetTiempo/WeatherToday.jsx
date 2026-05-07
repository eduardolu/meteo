import { Avatar, Box, Chip, Grid, Stack, Typography } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThermostatIcon from "@mui/icons-material/Thermostat";

/* El componente del tiempo actual. */
export const WeatherToday = ({ tiempo, current, condition }) => {
  /* Comprobar si hay información en las variables. */
  if (!current || !tiempo || !condition) return null;

  return (
    <Grid item xs={12} p={2}>
      <Box className="weather-card">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h4" fontWeight={800}>
              {tiempo.name}
            </Typography>
            <Typography color="text.secondary">
              {tiempo.region ? `${tiempo.region}, ` : ""}
              {tiempo.country}
            </Typography>
          </Box>
          <Avatar
            alt={condition.text}
            src={`https:${condition.icon}`}
            sx={{ width: 88, height: 88 }}
          />
        </Stack>

        <Typography variant="h2" fontWeight={800} mt={1}>
          {Math.round(current.temp_c)}º
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {condition.text}
        </Typography>

        <Stack direction="row" gap={1} mt={2} flexWrap="wrap">
          <Chip
            icon={<ThermostatIcon />}
            label={`Sensación ${Math.round(current.feelslike_c ?? current.temp_c)}º`}
          />
          <Chip icon={<OpacityIcon />} label={`${current.precip_mm} mm`} />
          <Chip icon={<AirIcon />} label={`${current.wind_kph} km/h`} />
        </Stack>
      </Box>
    </Grid>
  );
};
