import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from "../http-common";
import {useParams} from "react-router-dom";

function AdminDashBoardComponent() {
  const params = useParams()
  const {user, setUser} = useState({})
  console.log('params',params)
  // const {user_id, user_name, name, password, is_employee, employ_date} = params;
  useEffect(async ()=> {
    const user =  await axios.get('users/findUser', {
      params: {
        foo: 'bar'
      }
    })
    if (user ) {
      console.log('user', user)
      setUser(user)
    }
  })
  return (
    <Container maxWidth="xs">
      <div> Welcome To Admin Dashboard</div>
      <p> userid:  </p>
      <p> validated:  </p>
    </Container>
  );
}

export default AdminDashBoardComponent;
