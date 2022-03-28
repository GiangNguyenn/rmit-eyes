import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "./style/RegistrationStyles";
import logo from "../../media/general/logo.png";
import rmitLogo from "../../media/general/rmit.png";
import emblem1 from "../../media/general/emblem1.png";
import emblem2 from "../../media/general/emblem2.png";

import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import PublishIcon from "@material-ui/icons/Publish";
import { DropzoneArea } from "material-ui-dropzone";

import CloseIcon from "@material-ui/icons/Close";

class Registration extends Component {
  state = {
    email: "",
    name: "",
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
    if (this.state.email === "") {
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
      <div className={classes.main}>
        <img
          src={emblem1}
          style={{
            right: "0px",
            position: "absolute",
            top: "25%",
            width: "202px",
            height: "550px",
          }}
          alt=""
        />
        <img
          src={emblem2}
          alt=""
          style={{
            left: "0px",
            position: "absolute",
            top: "25%",
            width: "202px",
            height: "550px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "10rem",
            margin: "1.5rem",
          }}
          src={rmitLogo}
          alt=""
        />
        <div
          style={{
            position: "relative",
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "column",
            verticalAlign: "middle",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="" className={classes.icon} />
          <h1 style={{ color: "#020052" }}>Register</h1>
        </div>

        <div className={classes.paper}>
          <form
            className={classes.form}
            onSubmit={() => this.submitRegistration}
          >
            <Grid container>
              <Grid item xs={6}>
                <FormControl required fullWidth margin="normal">
                  <InputLabel htmlFor="email" className={classes.labels}>
                    e-mail
                  </InputLabel>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={classes.inputs}
                    disableUnderline={true}
                    onChange={this.handleChange("email")}
                  />
                </FormControl>
                <FormControl required fullWidth margin="normal">
                  <InputLabel htmlFor="name" className={classes.labels}>
                    Name
                  </InputLabel>
                  <Input
                    name="name"
                    autoComplete="name"
                    className={classes.inputs}
                    disableUnderline={true}
                    onChange={this.handleChange("name")}
                    type="input"
                  />
                </FormControl>
                <DropzoneArea
                  onChange={(files) => console.log("Files:", files)}
                  Icon={PublishIcon}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl required fullWidth margin="normal">
                  <InputLabel htmlFor="name" className={classes.labels}>
                    Name
                  </InputLabel>
                  <Input
                    name="name"
                    autoComplete="name"
                    className={classes.inputs}
                    disableUnderline={true}
                    onChange={this.handleChange("name")}
                    type="input"
                  />
                </FormControl>

                <Grid item xs={10}>
                  <FormControl required fullWidth margin="normal">
                    <DropzoneArea
                      onChange={(files) => console.log("Files:", files)}
                      Icon={PublishIcon}
                    />
                  </FormControl>
                  <FormControl required fullWidth margin="normal">
                    <DropzoneArea
                      onChange={(files) => console.log("Files:", files)}
                      Icon={PublishIcon}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Button
              fullWidth
              color="#E60028"
              variant="contained"
              className={classes.button}
              type="submit"
              onClick={this.submitRegistration}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(register)(Registration);