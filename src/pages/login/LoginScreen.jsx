import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { register } from '../register/style/RegistrationStyles';
import LoginForm from '../../components/LoginForm';
import logo from '../../asset/general/logo.png';
import rmitLogo from '../../asset/general/rmit.png';
import emblem1 from '../../asset/general/emblem1.png';
import emblem2 from '../../asset/general/emblem2.png';

class Login extends Component {
  state = {
    email: '',
    name: '',
  };

  errorClose = (e) => {
    this.setState({
      errorOpen: false,
    });
  };

  handleChange = (name) => (e) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  isValid = () => {
    if (this.state.email === '') {
      return false;
    }
    return true;
  };
  submitRegistration = (e) => {
    e.preventDefault();
  };

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
          <img
            src={emblem1}
            style={{
              right: '0px',
              position: 'absolute',
              top: '25%',
              width: '202px',
              height: '550px',
            }}
            alt=""
          />
          <img
            src={emblem2}
            alt=""
            style={{
              left: '0px',
              position: 'absolute',
              top: '25%',
              width: '202px',
              height: '550px',
            }}
          />
          <img
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '10rem',
              margin: '1.5rem',
            }}
            src={rmitLogo}
            alt=""
          />
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
            <h1 style={{ color: '#020052' }}>login</h1>
          </div>
        </div>
        <div className={classes.paper}>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default withStyles(register)(Login);
