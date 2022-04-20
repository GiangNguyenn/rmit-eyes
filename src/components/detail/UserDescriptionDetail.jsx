import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";
import {Button} from "@mui/material";
import ConfirmCheckinModal from "../modal/ConfirmCheckinModal";
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
  pending_to_approve: "Pending To Approve",
  approved:  "Approved",
};

const IMAGE_URLS = {
  pending_to_approve: 'https://topmeaning.com/english/images/img/EN/i/invalid.jpg',
  approved: 'https://media.istockphoto.com/vectors/checkmark-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1145805108'
}

export default function UserDescriptionDetail(props) {
  const { sid, status, student_name} = props.user
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', paddingLeft: '10px', alignItems:'center', width: '400px'}}>
      <div>
      <img width={300} height={300} src={IMAGE_URLS[status]} />
      </div>
      <div>
      <Typography gutterBottom variant="h4" component="div"> User Detail </Typography>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Name: {student_name}
      </Typography>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        ID Number: {sid}
      </Typography>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Vaccination: {STATUS[status]}
      </Typography>
      </div>
      {status === 'pending_to_approve' ? null : <ConfirmCheckinModal/>}
    </div>
  );
}
