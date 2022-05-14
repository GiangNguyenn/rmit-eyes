import React, { useState } from 'react';
import { Container, TextField, Box } from '@material-ui/core';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from '../../http-common';
import emailJS from '../email/emailJS';

export default function RejectFormModal(props) {
  const [open, setOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRejection = () => {
    console.log('props.user', typeof props.user.sid);
    emailJS({
      ...props.user,
      reason: rejectReason,
      url: 'http://localhost:3000/registration',
    });
    axios
      .delete('/users/user/delete', { data: { sid: props.user.sid } })
      .then((res) => {
        props.setUsers(props.users.filter(user => user.email !== props.user.email && user.sid !== props.user.sid ))
      });
    setOpen(false);
  };

  return (
    <div>
      <Button style={{ margin: '10px' }} variant="contained" color="error" onClick={handleOpen}>
        Reject
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ minWidth: '25%', margin: '20px', position: 'relative' }}>
          <CardContent>
            <Container maxWidth="xs">
              <form>
                <Box mb={2}>
                  <TextField
                    variant="outlined"
                    label="Reason"
                    fullWidth
                    autoComplete="Reason"
                    value={rejectReason}
                    autoFocus
                    onChange={(e) => setRejectReason(e.target.value)}
                  />
                </Box>

                <Button variant="contained" color="error" onClick={() => handleRejection()}>
                  Send reject email
                </Button>
              </form>
            </Container>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}
