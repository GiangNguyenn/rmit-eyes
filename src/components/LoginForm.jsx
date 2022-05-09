import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from '../http-common';
import { getUserLogged, storeUserSession } from '../helpers/userHelper';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';
import {connect} from "react-redux";

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.login(username, password)
  };

  return (
    <Container maxWidth="xs">
      <form>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="username"
            fullWidth
            autoComplete="username"
            value={username}
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="password"
            fullWidth
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
        </Box>

        <Button
          variant="contained"
          type="submit"
          onClick={(e) => handleSubmit(e)}
          fullWidth
          color="primary"
        >
          Log in
        </Button>
      </form>
    </Container>
  );
}
const mapReduxStateToProp = (state) => {
  console.log('state all', state)
  return {admin: state.admin}
}

export default connect(mapReduxStateToProp, {login})(LoginForm);
