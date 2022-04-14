import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import logo from '../../asset/general/logo.png';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    width: 'auto',
  },
  logo: {
    position: 'relative',
    width: '3rem',
    height: '3rem',
  },
  logoCaption: {
    position: 'relative',
    fontSize: '25px',
    color: '#020052',
  },
}));

function NavbarLogo() {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <img src={logo} alt="" className={classes.logo} />
      <Typography variant="h4" className={classes.logoCaption}>
        RMIT EYES
      </Typography>
    </div>
  );
}

export default NavbarLogo;
