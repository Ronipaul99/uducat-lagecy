import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function CustomModal({
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
}) {
  return (
    <Modal style={{ marginTop: "90px" }} isOpen={isOpen} toggle={toggle}>
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
    </Modal>
  );
}
