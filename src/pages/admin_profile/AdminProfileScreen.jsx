import { Button, Typography } from '@mui/material';
import React from 'react';
import { Type } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getUserLogged } from '../../helpers/userHelper';

const useStyles = makeStyles({
  profileContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '5rem',
    border: '1px solid #808080',
    margin: '5rem',
  },
});

const handleLogout = () => {
  localStorage.clear();
  window.location.href = '/';
};

function AdminProfileScreen() {
  const { profileContainer } = useStyles();
  const { user_id, name } = JSON.parse(getUserLogged());

  return (
    <div className={profileContainer}>
      <Typography variant="h2">
        User Id: <em>{user_id}</em>
      </Typography>
      <Typography variant="h2">
        Name: <em>{name}</em>
      </Typography>
      <Button variant="contained" onClick={() => handleLogout()}>
        Log out
      </Button>
    </div>
  );
}

export default AdminProfileScreen;
