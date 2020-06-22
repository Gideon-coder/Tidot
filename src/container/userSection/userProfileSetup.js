import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
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
import UserImage from "../../assets/design/TidotImage.png";
import smallTidotLogo from "../../assets/design/smallTidotLogo.png";
import rides from "../../assets/design/rides.png";
import transport from "../../assets/design/transport.svg";
import CircularSpinner from "../../components/spinner/circularSpinner/circularSpinner";
import Biodetails from "../userSection/userProfileSetupssection/Biodetails";
import Personaldetails from "../userSection/userProfileSetupssection/Personaldetails";
import Contanctdetails from "../userSection/userProfileSetupssection/Contanctdetails";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  UserProfilePaper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    // display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
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
    backgroundColor: "rgba(129, 134, 154, 0.15)",
    minHeight: "79vh",
  },

  UserProfile: {
    width: "25%",
    height: "100%",
    // width : "133px",
    // height : "133px"
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

  smallTidotDesign: {
    width: "70%",
    // height : "%",
    // backgroundColor : "black"
  },

  avatar: {
    width: 95,
    height: 95,
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
    width: "15%",
    height: "25%",
  },

  Transportavatar: {
    width: "85%",
    height: "100%",
  },
  ridesAvatars: {
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

// const steps = ["Bio details", "Personal details", "Contanct details"];

// //function for steps
// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <Biodetails />;
//     case 1:
//       return <Personaldetails />;
//     case 2:
//       return <Contanctdetails />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      step : 1, 
    };
  }
  
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step : step + 1
    });
  }

  PrevStep = () => {
    const { step } = this.state;
    this.setState({
      step : step - 1
    });
  }

  handleChange = input => e => {
    this.setState({[input] : e.target.value });
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
    const { classes, loading } = this.props;
    const isMobile = width <= 500;
    // the rest is the same...

    if (isMobile) {
      return <h1>Mobile</h1>;
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
                <div
                  className={classes.UserProfilePaper}
                  style={{ flexDirection: "row" }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={3}>
                      {" "}
                      <Avatar
                        src={smallTidotLogo}
                        alt="logo"
                        className={classes.smallTidotDesign}
                        variant="square"
                      ></Avatar>{" "}
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={8}>
                      <Typography
                        component="h1"
                        variant="h5 bold"
                        align="left"
                        style={{
                          color: "rgba(129, 134, 154, 0.86)",
                          fontWeight: "500",
                          width: "70%",
                          // height: "25%",
                        }}
                      >
                        Profile setup
                      </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                      <Avatar
                        src={UserImage}
                        alt="logo"
                        className={classes.UserProfile}
                      ></Avatar>
                    </Grid>
                  </Grid>
                </div>
              </Container>
              {/*  */}
              {/*  */}
              {/* second container */}
              <Container maxWidth="md" className={classes.secondContainer}>
                {" "}
                <Avatar
                  src={TidotLogo}
                  alt="logo"
                  className={classes.TidotSecondavatar}
                  variant="square"
                ></Avatar>{" "}
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
                          style={{ color: "#004AAD", fontSize: "24px" }}
                        >
                          Sign in with
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
                          <Grid item xs={6}>
                            <BootstrapButton
                              href="/"
                              variant="contained"
                              color="primary"
                              // disabled={loading}
                              fullWidth
                            >
                              <Avatar
                                src={Google}
                                alt="i"
                                variant="square"
                                className={classes.realLogo}
                                // style={{ paddingRight: "20px" }}
                              />
                            </BootstrapButton>
                          </Grid>
                          <Grid item xs={6}>
                            <BootstrapButton
                              href="/"
                              variant="contained"
                              color="primary"
                              // disabled={loading}
                              fullWidth
                            >
                              <Avatar
                                src={Facebook}
                                className={classes.realLogoFacbook}
                                variant="square"
                                alt="i"
                                // style={{ paddingRight: "20px" }}
                              />
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

export default withStyles(styles, { withTheme: true })(UserProfile);
