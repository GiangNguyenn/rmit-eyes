import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navLinkContainer: {
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
    width: 'auto',
  },

  link: {
    border: '1px solid #808080',
    textDecoration: 'none',
    color: '#000000',
    backgroundColor: '#E5E5E5',
    fontSize: '20px',
    margin: 'none',
    padding: '10px',
    '&:hover': {
      color: '#E71D2C',
    },
  },
}));

const NavBarButton = (props) => {
  const { path, name, icon } = props;
  const {link, navLinkContainer} = useStyles();

  return (
    path && (
      <Link to={path} className={link}>
        <div className={navLinkContainer}>
          {icon}
          {name}
        </div>
      </Link>
    )
  );
};
export default NavBarButton;
