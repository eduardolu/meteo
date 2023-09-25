import "./App.css";
import { useState } from "react";
import { createTheme } from "@mui/material";
import { AppTheme } from "./theme/";
import { Weather } from "./Components/Weather";

function App({ section }) {
  // Definir el modo Oscuro
  const lightTheme = createTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // Donde cambiamos de modo
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // comprobamos el modo que está isDarkTheme
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <AppTheme theme={selectedTheme}>
      <Weather
        section={section}
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
      />
    </AppTheme>
  );
}

export default App;
