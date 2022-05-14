import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { register } from '../../styles/registration';
import logo from '../../asset/general/logo.png';
import AdminDashBoardComponent from '../../components/AdminDashBoardComponent';

class HomeScreen extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div className={classes.main}>
          <div
            style={{
              position: 'relative',
              justifyContent: 'space-around',
              display: 'flex',
              flexDirection: 'column',
              verticalAlign: 'middle',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="" className={classes.icon} />
            <h1 style={{ color: '#020052' }}>Admin Dashboard</h1>
          </div>
        </div>
        <div className={classes.paper} style={{ width: '70vw' }}>
          <AdminDashBoardComponent />
        </div>
      </div>
    );
  }
}

export default withStyles(register)(HomeScreen);
