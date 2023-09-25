import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

/* El componente donde renderizamos el tiempo de los proximos 3 días  */
/* sé que deberia ser de los proximos 7, pero la API actual no lo     */
/* incluye en la version gratuita, pero si pagamos no tenemos que     */
/* cambiar nada del código, ya que está preparado en la peticion de   */
/* la API.                                                             */
export const GetWeek = ({ forecastday }) => {
  /* Comprobar si hay información en forecastday. */
  if (!forecastday || !forecastday.length) return null;

  return (
    <Grid item xs={12}>
      <Box
        component="div"
        style={{
          maxHeight: "300px", // Establece una altura máxima
          overflowY: "auto", // Habilita las barras de desplazamiento vertical si el contenido excede la altura máxima
        }}
        p={1}
      >
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "20px",
          }}
        >
          {forecastday.map((dailyForecast, key) => (
            <ListItem alignItems="flex-start" key={key} mb={1}>
              <ListItemAvatar>
                <Avatar
                  src={dailyForecast.day.condition.icon}
                  alt={dailyForecast.day.time}
                  sx={{ width: 85, height: 85 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={dailyForecast.date}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Tem. mínima: {dailyForecast.day.mintemp_c}ºC
                      <br />
                      Tem. máxima: {dailyForecast.day.maxtemp_c}ºC
                      <br />
                      Precipitaciones: {dailyForecast.day.totalprecip_mm}mm
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};
