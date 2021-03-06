import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from '../http-common';
import { getUserLogged, storeUserSession } from '../helpers/userHelper';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post('/auth/login', { username, password });
    if (result) {
      console.log('go here ', result.data);
      storeUserSession(JSON.stringify(result.data));
      if (getUserLogged()) navigate('/dashboard/admin');
    }
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
            type={'password'}
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
