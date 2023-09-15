import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { ReactNode } from "react";
import '../custom.css'

interface CustomModalProps {
  title?: string;
  isOpen: boolean;
  toggle: () => void;
  onCancel?: () => void;
  cancelText?: string;
  onSubmit?: () => void;
  submitText?: string;
  onDelete?: () => void;
  deleteText?: string;
  children?: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  title = "Title",
  isOpen,
  toggle,
  onCancel,
  cancelText,
  onSubmit,
  submitText,
  onDelete,
  deleteText,
  children
}: CustomModalProps) => {
  return (
    <>
      {/* <Modal style={{ marginTop: "90px" }} isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          {onCancel && (
            <Button color="secondary" onClick={onCancel}>
              {cancelText || "Cancel"}
            </Button>
          )}
          {onDelete && (
            <Button color="primary" onClick={onDelete}>
              {deleteText || "Delete"}
            </Button>
          )}
          {onSubmit && (
            <Button color="primary" onClick={onSubmit}>
              {submitText || "Submit"}
            </Button>
          )}
        </ModalFooter>
      </Modal> */}


      <Dialog
        open={isOpen}
        onClose={toggle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {onCancel && (
            <button className="ftrbtn1" onClick={onCancel}>
              {cancelText || "Cancel"}
            </button>
          )}
          {onDelete && (
            <button className="ftrbtn1" onClick={onDelete}>
              {deleteText || "Delete"}
            </button>
          )}
          {onSubmit && (
            <button className="ftrbtn" onClick={onSubmit}>
              {submitText || "Submit"}
            </button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomModal;