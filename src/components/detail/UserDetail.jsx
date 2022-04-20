import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
  maxHeight: '80vh'
};

const STATUS = {
  pending_to_approve: <Chip style={{position: "absolute", top: '10px', right:'10px' }} size="big" label="PENDING" color="primary" />,
  approved:  <Chip style={{position: "absolute", top: '10px', right:'10px' }} size="big" label="APPROVED" color="success" />,
};

export default function UserDetail(props) {
  const {email, image, image_with_mask, phone, sid, status, student_name, vaccine_document} = props.user
  return (
        <Box sx={style}>
          <Typography gutterBottom variant="h4" component="div"> User Detail </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Student <b>{student_name}</b> - student id: <b>{sid}</b>
            {STATUS[status]}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            1. User Face Image (Without Mask):
          </Typography>
          <img width={'60%'} src={image}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            2. User Face Image (With Mask):
          </Typography>
          <img width={'60%'}  src={image_with_mask}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            3. Vaccine Document:
          </Typography>
          <img width={'60%'}  src={vaccine_document}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            4. Contact Information:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <b> Phone:  </b> {phone}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <b> Email:  </b> {email}
          </Typography>
        </Box>
  );
}
