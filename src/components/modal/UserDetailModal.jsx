import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chip from "@mui/material/Chip";
import UserDetail from "../detail/UserDetail";


const STATUS = {
  pending_to_approve: <Chip style={{position: "absolute", top: '10px', right:'10px' }} size="big" label="PENDING" color="primary" />,
  approved:  <Chip style={{position: "absolute", top: '10px', right:'10px' }} size="big" label="APPROVED" color="success" />,
};

export default function UserDetailModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  return (<div>
      <Button variant="contained" onClick={handleOpen}> More Detail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserDetail user={props.user}/>
      </Modal>
    </div>
  );
}
