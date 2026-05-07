import { Avatar, Box, Chip, Grid, Stack, SvgIcon, Typography } from "@mui/material";

const AirIcon = () => (
  <SvgIcon>
    <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5S17 5.67 17 6.5 16.33 8 15.5 8H2v2h13.5C17.43 10 19 8.43 19 6.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z" />
  </SvgIcon>
);

const OpacityIcon = () => (
  <SvgIcon>
    <path d="M17.66 8 12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z" />
  </SvgIcon>
);

const ThermostatIcon = () => (
  <SvgIcon>
    <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z" />
  </SvgIcon>
);

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
