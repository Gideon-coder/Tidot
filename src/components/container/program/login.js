import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TidotLogo from "../../../assets/design/Tidot white logo on blue background.png";
import FacebookLogo from "../../../assets/design/Vector.png";
import GoogleLogo from "../../../assets/design/Icon.png";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
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
  },
});

const BootstrapButton = withStyles({
  root: {
    // width: 50,
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 2.8,
    backgroundColor: "#fff",
    borderColor: "#004AAD",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#b80707",
      borderColor: "#b80707",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#b80707",
      borderColor: "#b80707",
    },
    "&:focus": {
      boxShadow: "0#B66FD3",
    },
    "&:disabled": {
      backgroundColor: "#b80707",
    },
  },
})(Button);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentDidMount() {
    document.title = "        Login";
    document.body.style.backgroundColor = "#fff";
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  //beggining of render method
  render() {
    const { width } = this.state;
    const { classes } = this.props;
    const isMobile = width <= 500;
    // the rest is the same...

    if (isMobile) {
      return (
        <div className={classes.root}>
          <Container component="main" maxWidth="xl">
            <div className={classes.paper}>
              <div>
                <img
                  src={TidotLogo}
                  alt="logo"
                  className={classes.avatar}
                ></img>
              </div>
              <Container
                maxWidth="xs"
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <CssBaseline />
                <div className={classes.paper}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        component="h1"
                        variant="h5 bold"
                        align="center"
                        style={{ color: "#004AAD", fontSize: "24px" }}
                      >
                        Sign in to Tidot
                      </Typography>
                    </Grid>
                  </Grid>
                  <form
                    className={classes.form}
                    Validate
                    onSubmit={this.handleSubmit}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        paddingLeft: 0,
                        paddingRight: 0,
                      }}
                    >
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <BootstrapButton
                            href="/"
                            variant="contained"
                            color="primary"
                            // disabled={loading}
                            fullWidth
                          >
                            <img
                              src={GoogleLogo}
                              style={{ paddingRight: "20px" }}
                            />
                            <Typography
                              component="h5"
                              variant="h5 bold"
                              align="center"
                              style={{
                                color: "#004AAD",
                                fontSize: "16px",
                              }}
                            >
                              Sign in with Google
                            </Typography>
                          </BootstrapButton>
                        </Grid>
                        <Grid item xs={12}>
                          <BootstrapButton
                            href="/"
                            variant="contained"
                            color="primary"
                            // disabled={loading}
                            fullWidth
                          >
                            <img
                              src={FacebookLogo}
                              style={{ paddingRight: "20px" }}
                            />
                            <Typography
                              component="h5"
                              variant="h5 bold"
                              align="center"
                              style={{ color: "#004AAD", fontSize: "16px" }}
                            >
                              Sign in with Facebook
                            </Typography>
                          </BootstrapButton>
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        spacing={0}
                        className={classes.iconsButton}
                      >
                        <Grid item xs={12}>
                          <TextField
                            className={classes.inputField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={this.handleInputChange}
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12}>
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

                        <Grid item xs={12} className={classes.SigninButton}>
                          {/* {loading && <CircularSpinner />} */}
                          <BootstrapButton
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                              backgroundColor: "#004AAD",
                            }}
                            // disabled={loading}
                            fullWidth
                          >
                            Sign in.{" "}
                          </BootstrapButton>
                        </Grid>
                      </Grid>

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
                      </Grid>
                    </div>
                  </form>
                </div>
              </Container>
              {/* <Grid container spacing={2} style={{ marginTop: 5 }}>
                <Grid item xs={12}>
                  <div class="copyright" style={{ textAlign: "center" }}>
                    Copyright &copy; 2016 -
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | <a href="/">Alaajo.com</a>
                  </div>
                </Grid>
              </Grid> */}
            </div>
          </Container>
        </div>
      );
    } else {
      return <h1>this is only for desktop</h1>;
    }
  }
}

// export default Login;
export default withStyles(styles, { withTheme: true })(Login);
