import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import io from 'socket.io-client';
import { Spin } from 'antd';
import ConfirmCheckinModal from '../modal/ConfirmCheckinModal';
import axios from '../../http-common';

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
  maxHeight: '80vh',
};

const socket = io('http://localhost:3011', {
  transport: ['websocket', 'polling'],
});

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
  const { sid, status, student_name } = props.user;
  const queueUsers = props.queueUsers;
  const [temp, setTemp] = useState('37.5');
  const [checkedList, setCheckedList] = useState([]);
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('startReadingTemp', 37);
    });
    socket.on('actualTemp', (currentTemp) => {
      if (currentTemp) setTemp(currentTemp);
    });
  }, [temp]);
  useEffect(() => {
    if (
      queueUsers &&
      sid &&
      !queueUsers.includes(sid) &&
      temp &&
      temp < 39 &&
      status === 'approved'
    ) {
      const result = axios
        .post('/users/check-in/', {
          sid: sid,
          temperature: temp,
        })
        .then((res) => {
          if (!checkedList.includes(sid)) setCheckedList([...checkedList, sid]);
        });
    }
  });
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '10px',
        alignItems: 'center',
        width: '400px',
      }}
    >
      <div>
        <img width={300} height={300} src={IMAGE_URLS[status]} />
      </div>
      <div>
        <Typography gutterBottom variant="h4" component="div">
          {' '}
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
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          CurrentTemp: {temp ? temp : 'Please Plugin temperature sensor'}
        </Typography>
      </div>
      <div> {!temp ? 'Please Plugin temperature sensor' : null} </div>
      {/*{!automaticChecked ? <Spin size="large"/> : <div> <img width={25} height={25} src={IMAGE_URLS[status]}/> automatically checked user in. This student can access campus now!</div>}*/}
      {checkedList.includes(sid) ? (
        <div>
          <img width={25} height={25} src={IMAGE_URLS[status]} /> automatically checked user in.
          This student can access campus now!
        </div>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
}
