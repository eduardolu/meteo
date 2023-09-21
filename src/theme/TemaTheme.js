import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

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