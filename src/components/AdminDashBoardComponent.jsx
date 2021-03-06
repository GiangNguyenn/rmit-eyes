import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from '../http-common';
import { useParams } from 'react-router-dom';
import Camera from './Camera';
import { getUserLogged } from '../helpers/userHelper';
import UserDetail from './detail/UserDetail';
import UserDescriptionDetail from './detail/UserDescriptionDetail';

function AdminDashBoardComponent() {
  const id = getUserLogged();
  console.log('id', id);
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [detectedUser, setDetectedUser] = useState({});
  const [queueUsers, setQueueUsers] = useState([]);
  useEffect(async () => {
    if (id) {
      const user = await axios.get('users/findUser', {
        params: {
          user_id: id,
        },
      });
      if (user) {
        setUser(user.data);
      }
    }
    const userList = await axios.get('users/');
    if (userList) {
      setUserList(userList.data);
    }
  }, [id]);
  const findDetectedUser = (match) => {
    if (match && match.length) {
      const sid = match[0]._label.split('----')[1];
      const found = userList.find((user) => user.sid === sid);
      if (found) {
        setDetectedUser(found);
        if (found && Object.keys(found) && !queueUsers.includes(found.sid))
          setQueueUsers([...queueUsers, found.sid]);
      }
    }
  };
  return (
    userList && (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Camera users={userList} findDetectedUser={findDetectedUser} />
        {/*<div> Bee vo </div>*/}
        {detectedUser ? (
          <UserDescriptionDetail user={detectedUser} queueUsers={queueUsers} />
        ) : (
          <div style={{ width: '400px' }}> </div>
        )}
      </div>
    )
  );
}

export default AdminDashBoardComponent;
