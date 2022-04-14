import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from '../http-common';
import { useParams } from 'react-router-dom';
import Camera from "./Camera";
function AdminDashBoardComponent() {
  const params = useParams();
  const [ user, setUser]  = useState({});
  const [ userList, setUserList]  = useState([]);
  const [detectedUser, setDetectedUser] = useState({});
  useEffect(async () => {
    const user = await axios.get('users/findUser', {
      params: {
        user_id: params.id,
      },
    });
    const userList = await axios.get('users/')
    if (user) {
      console.log('user', user);
      setUser(user.data);
    }
    if (userList){
      setUserList(userList.data)
    }
  }, [params]);
  const findDetectedUser = (match) => {
    if (match && match.length) {
      console.log('match', match)
      const sid = match[0]._label.split(' ')[1]
      setDetectedUser(userList.find(user => user.sid === sid))
    }}
  let us = null;
  if (detectedUser && Object.keys(detectedUser).length) {
    us = Object.keys(detectedUser).map(prop => <h2>
      {prop}: {detectedUser[prop]}
    </h2>)
  }
  return (
    userList.length ?
    <Container maxWidth="xs">
      <div> Welcome To Admin Dashboard</div>
      <Camera users={userList} findDetectedUser={findDetectedUser}/>
      {us}
    </Container> : null
  );
}

export default AdminDashBoardComponent;
