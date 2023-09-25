import { Grid, Typography } from "@mui/material";

/* El componente de tiempo actual */
export const WeatherToday = ({ tiempo, current, condition }) => {
  if (!current || !tiempo || !condition) return null;
  return (
    <Grid item xs={12} p={2}>
      <Typography variant="h3">{tiempo.name}</Typography>
      <Typography variant="h4">{current.temp_c}º</Typography>
      <img src={condition.icon} alt={condition.text} />
    </Grid>
  );
};
