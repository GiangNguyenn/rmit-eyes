import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(20),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/dashboard/admin/:id" className={classes.link}>
            Home
          </Link>

          <Link to="/user_request" className={classes.link}>
            User Request
          </Link>

          <Link to="/user_list" className={classes.link}>
            User List
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
