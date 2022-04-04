import React, {useState, useEffect} from 'react';
import {Container, TextField, Button, Box} from '@material-ui/core';
import axios from "../http-common";
import {useParams} from "react-router-dom";
import WebcamCapture from "./WebcamComponent";

function AdminDashBoardComponent() {
  const params = useParams()
  const [user, setUser] = useState({})
  console.log('params', params)
  const {user_id, user_name, name, password, is_employee, employ_date} = params;
  useEffect(async () => {
    const user = await axios.get('users/findUser', {
      params: {
        id: params.id
      }
    })
    if (user.data) {
      console.log('user.data',user.data)
      setUser(user.data)
    }
  }, [])
  return (
    <Container maxWidth="xs" style={{marginTop: '200px'}}>
      <div> Welcome To Admin Dashboard</div>
      <div> user name: {user?.name}</div>
      <WebcamCapture/>
    </Container>
  );
}

export default AdminDashBoardComponent;
