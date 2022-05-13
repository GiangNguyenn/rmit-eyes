import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const STATUS = {
  pending_to_approve: (
    <Chip
      style={{ position: 'absolute', top: '10px', right: '10px' }}
      size="big"
      label="PENDING"
      color="primary"
    />
  ),
  approved: (
    <Chip
      style={{ position: 'absolute', top: '10px', right: '10px' }}
      size="big"
      label="APPROVED"
      color="success"
    />
  ),
};

export default function ConfirmCheckinModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleAllowCheckin = () => {
    setOpen(false);
  };

  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={() => handleOpen()}
        style={{ marginTop: '20px' }}
        size={'large'}
        variant={'contained'}
      >
        {' '}
        Checkin
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Confirm checkin
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              You allow this student to pass the entrance gate?
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Button size={'large'} color={'success'} onClick={() => handleAllowCheckin()}>
                {' '}
                Allow{' '}
              </Button>
              <Button size={'large'} color={'error'} onClick={() => setOpen(false)}>
                {' '}
                Reject{' '}
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
