import { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import SearchIcon from "@mui/icons-material/Search";
import { GetTiempo } from "./GetTiempo";
import { ModalAlert } from "./ModalAlert";

/* Componente principal desde dónde llamamos al resto de los componentes*/
export const Weather = ({ section, toggleTheme, isDarkTheme }) => {
  const storedCount = sessionStorage.getItem("count");
  const initialCount = storedCount ? Number(storedCount) : 0; //cogemos la variable contador de sessionStorage y si no existe ponemos 0.
  const [text, setText] = useState(""); //detectar cambio de texto introducido en TextField.
  const [count, setCount] = useState(initialCount); // contador de las veces que hemos lanzado consulta (con éxito).
  const [modalVisible, setModalVisible] = useState(false);
  const [cityN, setcityN] = useState(""); //nombre de ciudad que deseamos buscar.
  const [cambio, setCambio] = useState(false); //detectar el cambio de ciudad.

  const handleChange = (e) => {
    setText(e.target.value);
  };

  /* Lanzar la consulta y comprobar el número de consultas realizadas */
  /* si supera el número máximo de consultas lanza la alerta (modal). */
  const handleSubmit = () => {
    const city = text.trim();

    if (count >= 5) {
      setModalVisible(true);
      return;
    }
    setcityN(city);
    setCambio(true);
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
      className="home"
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
            {isDarkTheme ? <Brightness7Icon /> : <Brightness3Icon />}
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
