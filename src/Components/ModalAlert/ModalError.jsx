import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

/* Modal de la ventana de error: salta al tener un error cuando */
/* lanzamos la consulta a la API.                               */
export const ErrorModal = ({ open, onClose, errorMessage }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <Typography variant="text">{errorMessage}</Typography>
      </DialogContent>
    </Dialog>
  );
};
