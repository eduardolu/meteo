import { Box } from "@mui/material";
import { ModalWindow } from "./ModalAlert/ModalWindow";

/* Este componente es el modal que salta cuando llegamos a lanzar 5 consultas */
/* y nos deja elegir entre dos opciones:                                      */
/*    -Aceptar: en esta beta se resetea el contador y podemos realizar otras  */
/*              5 consultas, en en el futuro deberia llevar a la pestaña de   */
/*              registro o pasos para hacerse premiuns                        */
/*    -Cancelar: cierra la ventana modal y no nos deja hacer mas consultas    */
export const ModalAlert = ({
  count,
  setCount,
  modalVisible,
  setModalVisible,
}) => {
  const aceptar = () => {
    setCount(0);
    setModalVisible(false);
  };

  const cerrar = () => {
    setModalVisible(false);
  };

  if (!modalVisible) return null;
  if (count < 5) return null;
  return (
    <Box>
      <ModalWindow
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        aceptar={aceptar}
        cerrar={cerrar}
      />
    </Box>
  );
};
