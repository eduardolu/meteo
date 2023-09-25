import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

/* El tema principal de la app */
export const TemaTheme = createTheme({
    palette:{
        primary:{
            main:'#222654'
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main:red.A400
        }
    }
})