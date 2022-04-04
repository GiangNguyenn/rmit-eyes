import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@material-ui/core';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (e) => {
  //   setUsername({ [e.currentTarget.id]: e.currentTarget.value });
  // };
  return (
    <Container maxWidth="xs">
      <form>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="username"
            fullWidth
            autoComplete="username"
            autoFocus
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="password"
            fullWidth
            autoComplete="password"
            autoFocus
          />
        </Box>

        <Button variant="contained" type="submit" fullWidth color="primary">
          Log in
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
