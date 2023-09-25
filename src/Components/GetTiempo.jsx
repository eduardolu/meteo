import { Box, CircularProgress, Grid, LinearProgress } from "@mui/material";
import { useFetchTime } from "../Hooks/useFetchTime";
import { WeatherToday } from "./GetTiempo/WeatherToday";
import { WeatherTools } from "./GetTiempo/WeatherTools";
import ErrorModal from "./ModalAlert/ModalError";

/* Este componente llama a useFetchTime para obtener resultado de API y se lo pasa          */
/* a los componentes como WeatherToday para renderizar el tiempo de hoy, y a                */
/* WeatherTools para renderizar el tiempo con detalle si es proximos dias y proximas horas  */

export const GetTiempo = ({ cityN, count, setCount }) => {
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
          <WeatherTools forecastday={forecastday} />
        </>
      )}
    </Grid>
  );
};
