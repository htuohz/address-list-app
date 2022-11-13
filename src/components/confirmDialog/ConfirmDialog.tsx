import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

type ConfirmDialogProps = {
  dialogOpen: boolean;
  message: string;
  handleConfirm: () => void;
  setDialogOpen: (status: boolean) => void;
};

export default function ConfirmDialog({
  dialogOpen,
  message,
  handleConfirm,
  setDialogOpen,
}: ConfirmDialogProps) {
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button
          onClick={() => {
            setDialogOpen(false);
            handleConfirm();
          }}
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
