import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chip from "@mui/material/Chip";
import UserDetail from "../detail/UserDetail";




export default function UserDetailModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        More Detail
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserDetail user={props.user} />
      </Modal>
    </div>
  );
}
