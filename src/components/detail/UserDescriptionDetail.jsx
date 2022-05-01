import * as React from 'react';
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";
import {Button} from "@mui/material";
import io from 'socket.io-client'
import ConfirmCheckinModal from "../modal/ConfirmCheckinModal";
const style = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingLeft: '10px',
  alignItems: 'center',
  width: '400px',
};


const socket = io('http://localhost:3011', {
  transport: ['websocket', 'polling']
})

const STATUS = {
  pending_to_approve: 'Pending To Approve',
  approved: 'Approved',
};

const IMAGE_URLS = {
  pending_to_approve: 'https://topmeaning.com/english/images/img/EN/i/invalid.jpg',
  approved:
    'https://media.istockphoto.com/vectors/checkmark-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1145805108',
};

export default function UserDescriptionDetail(props) {
  const { sid, status, student_name} = props.user
  const [temp, setTemp] = useState('');
  useEffect(()=> {
    socket.on('connect', () => {
     socket.emit('startReadingTemp', 37)
    })
    socket.on('actualTemp', currentTemp => {
      if (currentTemp) setTemp(currentTemp)
    })
  }, [temp])
  return (
    <div style={style}>
      <div>
        <img width={300} height={300} src={IMAGE_URLS[status]} />
      </div>
      <div>
<<<<<<< HEAD
        <Typography gutterBottom variant="h4" component="div">
          User Detail{' '}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Name: {student_name}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          ID Number: {sid}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Vaccination: {STATUS[status]}
=======
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          CurrentTemp: {temp}
>>>>>>> 66face6d577ec7c9283b5ac07012362ac7b95622
        </Typography>
      </div>
      {status === 'pending_to_approve' ? null : <ConfirmCheckinModal />}
    </div>
  );
}
