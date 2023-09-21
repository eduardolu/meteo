import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

/* El componente que renderiaza los proximos 24h */
export const GetHours = ({ forecastday }) => {
  if (
    !forecastday ||
    !forecastday.length ||
    !forecastday[0].hour ||
    !forecastday[0].hour.length
  )
    return null;

  const curDate = new Date();
  const forecastNext24h = forecastday[0].hour.filter(
    (h) => new Date(h.time) >= curDate
  );
  const initialLength = forecastNext24h.length;
  for (let i = 0; i < forecastday[1].hour.length - initialLength; i++) {
    forecastNext24h.push(forecastday[1].hour[i]);
  }

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
        {forecastNext24h.map((hour, key) => (
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              borderRadius: "10px",
            }}
          >
            <ListItem key={key}>
              <ListItemAvatar>
                <Avatar src={hour.condition.icon} alt={hour.time}></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${hour.temp_c} ºC`}
                secondary={hour.time.split(/[\s]+/).pop()}
              />
            </ListItem>
          </List>
        ))}
      </Box>
    </Grid>
  );
};
