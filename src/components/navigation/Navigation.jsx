import React from 'react';
import { AppBar, Toolbar, CssBaseline, makeStyles } from '@material-ui/core';

import NavBarButton from './NavBarButton';
import NavbarLogo from './NavbarLogo';

import { navigationRoutes } from '../properties';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(30),
    display: 'flex',
  },

  navbar: { backgroundColor: '#F6F6F6' },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <NavbarLogo />
        <div className={classes.navlinks}>
          {navigationRoutes.map((route) => {
            return <NavBarButton path={route.route} name={route.name} icon={route.icon} />;
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
