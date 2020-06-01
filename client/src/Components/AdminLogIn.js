import React from "react";
import Container from "@material-ui/core/Container";
import "./login.css";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
const styles = (theme) => ({
  padding: {
    padding: theme.spacing.unit,
  },
});

class LoginTab extends React.Component {
  state = {
    username: "",
    password: "",
  };

  componentWillMount() {
    if (localStorage.length > 0) {
      this.props.history.push("/AdminDashboard");
    }
  }

  handleInputUser = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleInputPass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = () => {
    if (this.state.username.length >= 4 && this.state.password.length >= 5) {
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);

      this.props.history.push("/AdminDashboard");
    } else {
      alert("Details length is short ");
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="background">
        <div
          style={{
            width: "550px",
            height: "250px",
            margin: "auto",
            paddingTop: "150px",
          }}
        >
          <Paper
            className={classes.padding}
            style={{
              height: "100%",
              width: "100%",
              margin: "10px",
              padding: "20px",
            }}
          >
            <div className={classes.margin}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <Face />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                  <TextField
                    id="username"
                    label="Username"
                    type="email"
                    fullWidth
                    autoFocus
                    required
                    onChange={this.handleInputUser}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                  <TextField
                    id="username"
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    onChange={this.handleInputPass}
                  />
                </Grid>
              </Grid>

              <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ textTransform: "none" }}
                  size="large"
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </Grid>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginTab);
