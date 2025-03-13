import { Alert, Snackbar } from "@mui/material";

interface ICustomSnackbarProps {
  open: boolean;
  autoHideDuration: number;
  onClose: () => void;
  message: string;
  severity: "success" | "error" | "warning" | "info";
  anchorOrigin: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
}

function CustomSnackbar({
  open,
  autoHideDuration,
  onClose,
  message,
  severity,
  anchorOrigin,
}: ICustomSnackbarProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
export default CustomSnackbar;
