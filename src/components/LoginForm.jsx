import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from '../http-common';
import { getUserLogged, storeUserSession } from '../helpers/userHelper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
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

export default LoginForm;
