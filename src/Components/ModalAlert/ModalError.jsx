import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

const ErrorModal = ({ open, onClose, errorMessage }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{errorMessage}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorModal;
