import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Form from "@material-ui/core";
import TidotLogo from "../../../assets/design/Tidot white logo on blue background.png";
import FacebookLogo from "../../../assets/design/Vector.png";
import Facebook from "../../../assets/design/FacebookTidotDesktop.png";
import GoogleLogo from "../../../assets/design/Icon.png";
import Google from "../../../assets/design/TidotDesktopGoogle.png";
import rides from "../../../assets/design/rides.png";
import transport from "../../../assets/design/transport.svg";
import CircularSpinner from "../../../components/spinner/circularSpinner/circularSpinner";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  papers: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    paddingLeft: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "",
  },

  mainContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  secondContainer: {
    backgroundColor: "#fff",
    minHeight: "79vh",
  },
  firstContainer: {
    backgroundColor: "rgba(129, 134, 154, 0.36)",
    minHeight: "79vh",
    // height : "100%"
  },

  iconsButton: {
    marginTop: theme.spacing(5),
  },

  inputField: {
    backgroundColor: "rgba(129, 134, 154, 0.36)",
  },

  SigninButton: {
    marginTop: theme.spacing(3),
  },

  avatar: {
    // marginBottom: theme.spacing(5),
    width: 95,
    height: 95,
    // position: "absolute",
  },

  realLogo: {
    width: "30%",
    height: "50%",
  },

  realLogoFacbook: {
    width: "50%",
    height: "50%",
  },

  TidotSecondavatar: {
    // marginBottom: theme.spacing(5),
    width: "15%",
    height: "25%",
    // position: "absolute",
  },

  Transportavatar: {
    width: "85%",
    height: "100%",
  },
  ridesAvatars: {
    // width: 392,
    width: "45%",
    height: "100%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer: {
    padding: theme.spacing(0, 0),
    marginTop: "auto",
    backgroundColor: "#B670D3",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: " #fff;",
  },
});


class Personaldetails extends Component {
  state = {};
  render() {
    const { classes, loading } = this.props;
    return (
      <Container
        maxWidth="md"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="bold"
              align="start"
              style={{ color: "#004AAD", fontSize: "24px" }}
            >
              Let us know you
            </Typography>
          </Grid>
        </Grid>
        <form className={classes.form} Validate onSubmit={this.handleSubmit}>
          <div
            style={{
              alignItems: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={6}></Grid>
            </Grid>

            <Grid container spacing={4} className={classes.iconsButton}>
              <Grid item xs={12}>
                <label
                  style={{
                    color: "rgba(129, 134, 154, 0.86)",
                    fontWeight: "400",
                    fontSize: "24px",
                  }}
                >
                  Firstname
                </label>
                <TextField
                  className={classes.inputField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  // label="Email Address"
                  name="firstName"
                  autoComplete="email"
                  onChange={this.handleInputChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <label
                  style={{
                    color: "rgba(129, 134, 154, 0.86)",
                    fontWeight: "400",
                    fontSize: "24px",
                  }}
                >
                  Lastname
                </label>
                <TextField
                  className={classes.inputField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <label
                  style={{
                    color: "rgba(129, 134, 154, 0.86)",
                    fontWeight: "400",
                    fontSize: "24px",
                  }}
                >
                  Gender
                </label>
                <TextField
                  className={classes.inputField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <label
                  style={{
                    color: "rgba(129, 134, 154, 0.86)",
                    fontWeight: "400",
                    fontSize: "24px",
                  }}
                >
                  Date of birth
                </label>
                <TextField
                  className={classes.inputField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
            {/* 
          <Grid container spacing={2} style={{ marginTop: 15 }}>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="p"
                style={{ fontSize: 12 }}
                align="center"
              >
                Not Registered ?
                <a id="link" href="/register" variant="p">
                  {" "}
                  Sign up
                </a>
              </Typography>
            </Grid>
          </Grid> */}
          </div>
        </form>
      </Container>
      // </div>
    );
  }
}

export default withStyles(styles,{withTheme:true})(Personaldetails);
// export default withStyles(styles, {withTheme: true})(contanctdetails);

