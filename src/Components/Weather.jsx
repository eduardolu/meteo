import { GetTiempo } from "./GetTiempo";
import { useEffect, useState } from "react";
import { ModalAlert } from "./ModalAlert";
import { Button, Grid, TextField, Typography } from "@mui/material";

/* Componente principal donde llama resto de componentes*/
export const Weather = ({ toggleTheme, isDarkTheme }) => {
  const storedCount = sessionStorage.getItem("count");
  const initialCount = storedCount ? Number(storedCount) : 0; //coger el variable contador de sessionStorage si no existe ponemos 0
  const [text, setText] = useState("");
  const [count, setCount] = useState(initialCount);
  const [modalVisible, setModalVisible] = useState(false);
  const [cityN, setcityN] = useState("");
  const [cambio, setCambio] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  /* Lanzar la consulta y comprobar el numero de consulta realizado */
  /* si supera al numero maximo de consultas lanza la alerta (modal)*/
  const handleSubmit = () => {
    if (count >= 5) {
      setModalVisible(true);
      return;
    }
    setcityN(text);
    setCambio(true);
    setText("");
  };

  /* Lanzar el hadleSubmit con el enter, sin necesidad de pulsar el buton */
  const handleKeyDown = (event) => {
    if ((event.key === "Enter" || event.key === 13) && text) {
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
      <Grid item container>
        <Typography
          variant="h2"
          color="blue"
          fontWeight="bold"
          fontFamily="Geométricas"
          sx={{ textAlign: "center", width: "100%" }}
        >
          El Tiempo
        </Typography>
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
            helperText={`Búsquedas restantes: ${5 - count}`}
          />
        </Grid>
        <Grid item xs={4} padding={1} paddingLeft={0}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!(text && text.length) || modalVisible}
            sx={{ width: "100%" }}
          >
            buscar
          </Button>
        </Grid>

        {/* zona donde muestra el resultado de busqueda */}
        <Grid item container>
          {cambio ? (
            <GetTiempo cityN={cityN} count={count} setCount={setCount} />
          ) : null}
        </Grid>

        {/* el modal de la alerta que deberia saltar */}
        <ModalAlert
          count={count}
          setCount={setCount}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Grid>
      <button onClick={toggleTheme}>
        Toggle Theme ({isDarkTheme ? "Dark" : "Light"})
      </button>
    </Grid>
  );
};
