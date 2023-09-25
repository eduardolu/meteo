import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Weather } from "./Components/Weather";
import { AppTheme } from "./theme/";
import { createTheme } from "@mui/material";
import { useState } from "react";

function App({ section }) {
  // Define your light and dark themes
  const lightTheme = createTheme();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // State to track the currently selected theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Select the theme based on the state
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <AppTheme theme={selectedTheme}>
      <BrowserRouter>
        <Weather
          section={"section"}
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
        />
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
