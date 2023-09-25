import { Box, CircularProgress, Grid } from "@mui/material";
import { useFetchTime } from "../Hooks/useFetchTime";
import { WeatherToday } from "./GetTiempo/WeatherToday";
import { WeatherTools } from "./GetTiempo/WeatherTools";
import { ErrorModal } from "./ModalAlert/ModalError";

/* Este componente llama a useFetchTime para obtener el resultado de la API y se lo pasa  */
/* a los componentes como WeatherToday para renderizar el tiempo de hoy, y a WeatherTools */
/* para renderizar el tiempo con detalle para próximos días y horas.                      */

export const GetTiempo = ({ section, cityN, count, setCount }) => {
  const {
    tiempo,
    current,
    condition,
    isLoading,
    forecastday,
    error,
    setError,
  } = useFetchTime({ cityN, count, setCount });

  const handleCloseErrorModal = () => {
    setError(null);
  };

  return (
    <Grid item xs={12}>
      {isLoading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <CircularProgress />
        </Box>
      )}
      <ErrorModal
        open={error}
        onClose={handleCloseErrorModal}
        errorMessage={error}
      />
      {!isLoading && !error && (
        <>
          <WeatherToday
            tiempo={tiempo}
            current={current}
            condition={condition}
          />
          <WeatherTools section={section} forecastday={forecastday} />
        </>
      )}
    </Grid>
  );
};
