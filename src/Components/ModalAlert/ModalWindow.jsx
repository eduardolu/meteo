import { Box, Button, Modal, Stack, Typography } from "@mui/material";

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

/* El componente Modal de la alerta cuando alcanza el maximo de consultas */
export const ModalWindow = ({
  modalVisible,
  setModalVisible,
  aceptar,
  cancelar,
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
          La versión de prueba solo permite cinco búsquedas, si desea seguir,
          por favor contrata el paquete Premiun. Muchas gracias y un saludo
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
          {/* Por ahora reniciamos la variable count, en un futuro redireccionaremos a la inscripción */}
          <Button variant="contained" onClick={aceptar}>
            Aceptar
          </Button>
          {/* cerramos la alerta sin cambiar la variable Count */}
          <Button variant="contained" onClick={cancelar}>
            Cancelar
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
