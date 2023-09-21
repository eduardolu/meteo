import { Box, Button, Modal, Stack, Typography } from "@mui/material";

/* El componente Modal de la alerta, donde viene definido */
const style = {
  borderRadius: 4,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ModalWindow = ({
  modalVisible,
  setModalVisible,
  aceptar,
  cerrar,
}) => {
  const handleClose = () => setModalVisible(false);
  return (
    <Modal
      keepMounted
      open={modalVisible}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h4">
          Aviso
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          La version de prueba solo permite 5 busquedas, si desea seguir, por
          favor contrata el paquete premiun. muchas gracias y un saludo
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            mt: 2,
          }}
        >
          <Button variant="contained" onClick={aceptar}>
            aceptar
          </Button>
          <Button variant="contained" onClick={cerrar}>
            cerrar
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
