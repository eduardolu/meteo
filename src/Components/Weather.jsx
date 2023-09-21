import { GetTiempo } from "./GetTiempo";
import { useEffect, useState } from "react";
import { ModalAlert } from "./ModalAlert";
import { Button, Grid, TextField, Typography } from "@mui/material";

/* Componente principal donde llama resto de componentes*/
export const Weather = () => {
  const storedCount = sessionStorage.getItem("count");
  const initialCount = storedCount ? Number(storedCount) : 0; //coger el variable contador de sessionStorage si no existe ponemos 0
  const [text, setText] = useState("");
  const [count, setCount] = useState(initialCount);
  const [modalVisible, setModalVisible] = useState(false);
  const [busca, setBusca] = useState("");
  const [Cambio, setCambio] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  /* Lanzar la consulta y comprobar el numero de consulta realizado */
  /* si supera al numero maximo de consultas lanza la alerta (modal)*/
  const handleSubmit = () => {
    setCount(count + 1);
    if (count >= 5) {
      setModalVisible(true);
      return;
    }
    setBusca(text);
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
      sx={{
        //display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <Typography
          variant="h2"
          color="blue"
          fontWeight="bold"
          fontFamily="Geométricas"
        >
          El Tiempo
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          m: 2,
        }}
      >
        <TextField
          id="search"
          label="Municipio"
          type="search"
          name="buscarText"
          value={text}
          onChange={handleChange}
          size="small"
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="contained"
          sx={{ flex: 1, ml: 1 }}
          onClick={handleSubmit}
          disabled={!(text && text.length) || modalVisible}
        >
          buscar
        </Button>

        {/* zona donde muestra el resultado de busqueda */}
        <Grid item>{Cambio ? <GetTiempo buscar={busca} /> : null}</Grid>
        <Grid item></Grid>

        {/* el modal de la alerta que deberia saltar */}
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
