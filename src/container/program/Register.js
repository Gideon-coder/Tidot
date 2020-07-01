import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TidotLogo from "../../assets/design/Tidot white logo on blue background.png";
import FacebookLogo from "../../assets/design/Vector.png";
import Facebook from "../../assets/design/FacebookTidotDesktop.png";
import GoogleLogo from "../../assets/design/Icon.png";
import Google from "../../assets/design/TidotDesktopGoogle.png";
import rides from "../../assets/design/rides.png";
import transport from "../../assets/design/transport.svg";
import CircularSpinner from "../../components/spinner/circularSpinner/circularSpinner";
//
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
      backgroundColor: "#004AAD",
      borderColor: "#004AAD",
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

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      showPassword: false,
    };
  }

  handleClickShowPassword = () => {
    // setValues({ ...values, showPassword: !values.showPassword });
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    const { classes, loading } = this.props;
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
                        Sign up to Tidot
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
                              alt="i"
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
                              Sign up with Google
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
                              alt="i"
                              style={{ paddingRight: "20px" }}
                            />
                            <Typography
                              component="h5"
                              variant="h5 bold"
                              align="center"
                              style={{ color: "#004AAD", fontSize: "16px" }}
                            >
                              Sign up with Facebook
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
                          {loading && <CircularSpinner />}
                          <BootstrapButton
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                              backgroundColor: "#004AAD",
                            }}
                            disabled={loading}
                            fullWidth
                          >
                            Sign up.{" "}
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
                            Already Registered ?
                            <a id="link" href="/register" variant="p">
                              {" "}
                              Login
                            </a>
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </form>
                </div>
              </Container>
            </div>
          </Container>
        </div>
      );
    } else {
      return (
        <div className={classes.root} style={{ backgroundColor: " #004AAD" }}>
          <Container
            component="main"
            maxWidth="xl"
            className={classes.mainContainer}
            style={{ backgroundColor: "" }}
          >
            {" "}
            <div className={classes.paper} style={{ flexDirection: "row" }}>
              {/* first Container */}
              <Container maxWidth="md" className={classes.firstContainer}>
                {" "}
                {/* <img
                  src={TidotLogo}
                  alt="logo"
                  className={classes.TidotSecondavatar}
                ></img>{" "} */}
                <div className={classes.papers}>
                  <Container
                    maxWidth="md"
                    style={{
                      backgroundColor: "",
                    }}
                  >
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        <img
                          className={classes.ridesAvatars}
                          src={rides}
                          variant="square"
                        >
                          {/* <LockOutlinedIcon /> */}
                        </img>
                      </Grid>
                      <Grid item xs={12}>
                        <Avatar
                          className={classes.Transportavatar}
                          src={transport}
                          variant="square"
                        >
                          {/* <LockOutlinedIcon /> */}
                        </Avatar>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </Container>
              {/* second container */}
              <Container maxWidth="md" className={classes.secondContainer}>
                {" "}
                <Grid container spacing={1}>
                  <Avatar
                    src={TidotLogo}
                    alt="logo"
                    className={classes.TidotSecondavatar}
                    variant="square"
                  ></Avatar>{" "}
                  <Grid item xs={9}>
                    <p align="right">
                      Already registered?{" "}
                      <a href="/" style={{ color: "#FFA300" }}>
                        Sign in
                      </a>
                    </p>
                    {/* <Typography
                              component="label"
                              variant="p"
                              style={{ fontSize: 12 }}
                              align="right"
                            >
                              Already Registered ?
                              <a id="link" href="/register" variant="p">
                                {" "}
                                Login
                              </a>
                            </Typography> */}
                  </Grid>
                </Grid>
                <div className={classes.papers}>
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
                          variant="h5 bold"
                          align="start"
                          style={{ color: "#004AAD", fontSize: "30px" }}
                        >
                          Sign up
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
                              id="phone number"
                              label="Phone number"
                              name="phone number"
                              // autoComplete="number"
                              onChange={this.handleInputChange}
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl
                              className={classes.inputField}
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                            >
                              <InputLabel htmlFor="outlined-adornment-password">
                                Password
                              </InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-password"
                                type={
                                  this.state.showPassword ? "text" : "password"
                                }
                                // value={this.state.showPassword}
                                // onChange={handleChange("password")}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={this.handleClickShowPassword}
                                      onMouseDown={this.handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {this.state.showPassword ? (
                                        <Visibility />
                                      ) : (
                                        <VisibilityOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                labelWidth={70}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            {/* <div className="form-check"> */}
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              required
                            />
                            <label className="form-check-label" for="gridCheck">
                              {/* <a href="/terms" id="alt">
                                
                              </a> */}
                              Creating an account with us means, you agree to
                              our{" "}
                              <a href="/" style={{ color: "#FFA300" }}>
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a href="/" style={{ color: "#FFA300" }}>
                                Privacy Policy
                              </a>
                            </label>
                            {/* </div> */}
                          </Grid>

                          <Grid item xs={12} className={classes.SigninButton}>
                            {loading && <CircularSpinner />}
                            <BootstrapButton
                              type="submit"
                              variant="contained"
                              color="primary"
                              style={{
                                backgroundColor: "#004AAD",
                              }}
                              disabled={loading}
                              fullWidth
                            >
                              Sign up.{" "}
                            </BootstrapButton>
                          </Grid>
                        </Grid>
                      </div>
                    </form>
                  </Container>
                </div>
              </Container>
            </div>
          </Container>
        </div>
      );
    }
  }
}

export default withStyles(styles, { withTheme: true })(Register);
