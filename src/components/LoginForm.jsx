import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';
import axios from '../http-common';
import { getUserLogged, storeUserSession } from '../helpers/userHelper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/store/authSlice';
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post('/auth/login', { username, password });
    if (result) {
      dispatch(authActions.login(result.data));
      storeUserSession(result.data.user_id);
      console.log('Object.entries(user).length !== 0', Object.entries(user).length !== 0)
      if (Object.entries(user).length !== 0) {
        navigate('/dashboard/admin');
      } else {
      }
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
