import { Button, Typography } from '@mui/material';
import React from 'react';
import { Type } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  profileContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: "5rem",
    border:"1px solid #808080",
    margin:"5rem"
  },
});
function AdminProfileScreen() {
  const { profileContainer } = useStyles();
  const dispatch = useDispatch();
  const { user_id, name } = useSelector((state) => state.auth.user);

  const handleLogout = () => {};
  return (
    <div className={profileContainer}>
      <Typography variant="h2">User Id: {user_id}</Typography>
      <Typography variant="h2">Name: {name}</Typography>
      <Button variant="contained" onClick={handleLogout()}>
        Log out
      </Button>
    </div>
  );
}

export default AdminProfileScreen;
