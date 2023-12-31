import { Box } from "@mui/material";
import { ModalWindow } from "./ModalAlert/ModalWindow";

/* Este componente es el modal que salta cuando llegamos a lanzar 5 consultas */
/* y nos deja elegir entre dos opciones:                                      */
/*    -Aceptar: en esta beta se resetea el contador y podemos realizar otras  */
/*              5 consultas, en en el futuro deberia llevar a la pestaña de   */
/*              registro o pasos para hacerse premium                         */
/*    -Cancelar: cierra la ventana modal y no nos deja hacer más consultas    */
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

  const cancelar = () => {
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
        cancelar={cancelar}
      />
    </Box>
  );
};
