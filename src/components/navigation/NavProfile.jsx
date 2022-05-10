import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  profileButtonContainer: {
    margin: '10px',
    position: 'absolute',
    top: '0px',
    right: '0px',
  },
  profileButton: {
    position: 'relative',
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'column',
  },
  profileText: {
    color: '#E71D2C',
  },
  profileIcon: { color: '#E71D2C', height: '30px' },
}));

function NavProfile() {
  const classes = useStyles();
  return (
    <Link to="/profile" className={classes.profileButtonContainer}>
      <IconButton className={classes.profileButton} size="large">
        <AccountCircleIcon className={classes.profileIcon} fontSize="largeÏ" />
        <Typography className={classes.profileText}>Profile</Typography>
      </IconButton>
    </Link>
  );
}

export default NavProfile;
