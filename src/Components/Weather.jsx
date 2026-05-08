import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { GetTiempo } from "./GetTiempo";
import { ModalAlert } from "./ModalAlert";

const SunIcon = () => (
  <SvgIcon>
    <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
  </SvgIcon>
);

const MoonIcon = () => (
  <SvgIcon>
    <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
  </SvgIcon>
);

const SearchIcon = () => (
  <SvgIcon>
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16a6.5 6.5 0 0 0 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </SvgIcon>
);

/* Componente principal desde dónde llamamos al resto de los componentes*/
export const Weather = ({ section, toggleTheme, isDarkTheme }) => {
  const storedCount = sessionStorage.getItem("count");
  const initialCount = storedCount ? Number(storedCount) : 0; //cogemos la variable contador de sessionStorage y si no existe ponemos 0.
  const [text, setText] = useState(""); //detectar cambio de texto introducido en TextField.
  const [count, setCount] = useState(initialCount); // contador de las veces que hemos lanzado consulta (con éxito).
  const [modalVisible, setModalVisible] = useState(false);
  const [cityN, setcityN] = useState(""); //nombre de ciudad que deseamos buscar.
  const [cambio, setCambio] = useState(false); //detectar el cambio de ciudad.
  const [history, setHistory] = useState(() => {
    try {
      const storedHistory = sessionStorage.getItem("weatherHistory");
      const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];
      return Array.isArray(parsedHistory) ? parsedHistory : [];
    } catch {
      return [];
    }
  });

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addToHistory = (city) => {
    setHistory((currentHistory) => {
      const normalizedCity = city.trim();
      const nextHistory = [
        normalizedCity,
        ...currentHistory.filter(
          (item) => item.toLowerCase() !== normalizedCity.toLowerCase()
        ),
      ].slice(0, 5);

      sessionStorage.setItem("weatherHistory", JSON.stringify(nextHistory));
      return nextHistory;
    });
  };

  const launchSearch = (city) => {
    setcityN(city);
    setCambio(true);
    addToHistory(city);
  };

  /* Lanzar la consulta y comprobar el número de consultas realizadas */
  /* si supera el número máximo de consultas lanza la alerta (modal). */
  const handleSubmit = () => {
    const city = text.trim();

    if (count >= 5) {
      setModalVisible(true);
      return;
    }
    launchSearch(city);
    setText("");
  };

  /* Lanzar el hadleSubmit con el enter, sin necesidad de pulsar el botón */
  const handleKeyDown = (event) => {
    if ((event.key === "Enter" || event.key === 13) && text.trim()) {
      handleSubmit();
    }
    return;
  };

  // Al cargar la página, verifica si ya existe un valor para 'count' en sessionStorage
  useEffect(() => {
    const storedCount = sessionStorage.getItem("count");
    if (storedCount) {
      setCount(Number(storedCount));
    }
  }, []);

  // Actualiza sessionStorage cada vez que 'count' cambia
  useEffect(() => {
      sessionStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <Grid
      container
      className={`home ${isDarkTheme ? "home-dark" : "home-light"}`}
      style={{ backgroundColor: isDarkTheme ? "#222222" : "#f5f3f3" }}
    >
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          pt={2}
        >
          <Box>
            <Typography variant="h4" fontWeight={900}>
              El Tiempo
            </Typography>
            <Typography color="text.secondary">
              Consulta rápida por municipio
            </Typography>
          </Box>
          <IconButton
            color="primary"
            aria-label="Cambiar tema"
            onClick={toggleTheme}
          >
            {isDarkTheme ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Stack>
      </Grid>
      <Grid item container>
        <Grid item xs={8} padding={1}>
          <TextField
            id="search"
            label="Municipio"
            type="search"
            name="buscarText"
            value={text}
            onChange={handleChange}
            size="small"
            onKeyDown={handleKeyDown}
            sx={{ width: "100%" }}
            helperText={`Búsquedas restantes: ${Math.max(5 - count, 0)}`}
          />
        </Grid>
        <Grid item xs={4} padding={1} paddingLeft={0}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleSubmit}
            disabled={!text.trim() || modalVisible}
            sx={{ width: "100%" }}
          >
            Buscar
          </Button>
        </Grid>

        {/* zona donde muestra el resultado de la búsqueda */}
        <Grid item container>
          {cambio ? (
            <GetTiempo
              key={cityN}
              section={section}
              cityN={cityN}
              setCount={setCount}
            />
          ) : (
            <Grid item xs={12} p={2}>
              <Box className="empty-state">
                <Typography variant="h6" fontWeight={700}>
                  Busca una ciudad
                </Typography>
                <Typography color="text.secondary">
                  Prueba con Madrid, London o Barcelona.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {history.length > 0 && (
          <Grid item xs={12} px={2} pb={2}>
            <Box className="history-panel">
              <Typography variant="subtitle2" fontWeight={700}>
                Últimas búsquedas
              </Typography>
              <Stack direction="row" gap={1} mt={1} flexWrap="wrap">
                {history.map((city) => (
                  <Button
                    key={city}
                    size="small"
                    variant={city === cityN ? "contained" : "outlined"}
                    onClick={() => launchSearch(city)}
                    disabled={city === cityN}
                  >
                    {city}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Grid>
        )}

        {/* El modal de la alerta que debería saltar */}
        <ModalAlert
          count={count}
          setCount={setCount}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Grid>

    </Grid>
  );
};
