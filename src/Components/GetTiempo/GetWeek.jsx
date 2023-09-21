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

/* El componente donde renderizamos el tiempo de proximos 3 dias  */
/* se que deberia ser de proximos 7, pero el API actual no lo     */
/* en la version gratis, pero si pagamos, no tenemos que cambiar  */
/* nada del codigo, ahora que viene preparado y la peticion a API */
/* lo tiene en cuenta ya                                          */
export const GetWeek = ({ forecastday }) => {
  if (!forecastday || !forecastday.length) return null;

  return (
    <Grid item>
      <Box
        component="div"
        style={{
          maxHeight: "300px", // Establece una altura máxima
          overflowY: "auto", // Habilita las barras de desplazamiento vertical si el contenido excede la altura máxima
        }}
        sx={{ p: 2 }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            borderRadius: "20px",
          }}
        >
          {forecastday.map((dailyForecast, key) => (
            <ListItem alignItems="flex-start" key={key}>
              <ListItemAvatar>
                <Avatar
                  src={dailyForecast.day.condition.icon}
                  alt={dailyForecast.day.time}
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
                      Tem. minima:{dailyForecast.day.mintemp_c}ºC
                      <br />
                      Tem. maxima:{dailyForecast.day.maxtemp_c}ºC
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
