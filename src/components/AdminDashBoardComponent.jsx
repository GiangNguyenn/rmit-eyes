import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from '../http-common';
import { useParams } from 'react-router-dom';
import Camera from "./Camera";
function AdminDashBoardComponent() {
  const params = useParams();
  const [ user, setUser]  = useState({});
  useEffect(async () => {
    const user = await axios.get('users/findUser', {
      params: {
        user_id: params.id,
      },
    });
    if (user) {
      console.log('user', user);
      setUser(user.data);
    }
  }, [params]);
  return (
    <Container maxWidth="xs">
      <div> Welcome To Admin Dashboard</div>
      <Camera/>
      <p> validated: </p>
    </Container>
  );
}

export default AdminDashBoardComponent;
