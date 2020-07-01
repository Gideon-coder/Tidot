import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UserImage from "../../assets/design/TidotImage.png";
import smallTidotLogo from "../../assets/design/newTidotLogo.png";
import clsx from "clsx";
import Biodetails from "../userSection/userProfileSetupssection/Biodetails";
import Personaldetails from "../userSection/userProfileSetupssection/Personaldetails";
import Contanctdetails from "../userSection/userProfileSetupssection/Contanctdetails";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

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
    paddingLeft: theme.spacing(0),
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

  smallTidotDesign: {
    width: "90%",
    // height : "%",
    // backgroundColor : "black"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: " #fff;",
  },
});

{
  /* begining of code for the form stepping*/
}
{
  /* begining of code for the form stepping*/
}
{
  /* begining of code for the form stepping*/
}
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundColor: "#FFA300",
  },
  completed: {
    //   backgroundImage:
    //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",

    backgroundColor: "#FFA300",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: (
      <div class="numberCircle">
        <h2>1</h2>
      </div>
    ),
    2: (
      <div class="numberCircle">
        <h2>2</h2>
      </div>
    ),
    3: (
      <div class="numberCircle">
        <h2>3</h2>
      </div>
    ),
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return [
    <h1>Bio details</h1>,
    <h1>Personal details</h1>,
    <h1>Emergency contanct</h1>,
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Biodetails />;
    case 1:
      return <Personaldetails />;
    case 2:
      return <Contanctdetails />;
    default:
      return "Unknown stepIndex";
  }
}
{
  /* end of partition for form stepping code*/
}
{
  /* end of partition for form stepping code*/
}
{
  /* end of partition for form stepping code*/
}

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

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      activeStep: 0,
    };
  }
  handleNext = () => {
    const { activeStep } = this.state;

    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;

    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  componentDidMount() {
    document.title = "        User Profile";
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
    const { classes, loading} = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();
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
                  <Grid container spacing={3}>
                    <Grid item xs={3} style= {{}}>
                      {" "}
                      <div>
                      {/* <Avatar
                        src={smallTidotLogo}
                        alt="logo"
                        className={classes.smallTidotDesign}
                        variant="square"
                      ></Avatar>{" "} */}
                      <img src={smallTidotLogo} style={{width : "20%", height : "20%"}}></img>
                      </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={7} style= {{}}>
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
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                      <p>@12334ddf4</p>
                    </Grid>
                  </Grid>
                  <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    style={{ backgroundColor: "transparent" }}
                    // connector={false}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                          {label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div>
              </Container>
              {/*  */}
              {/*  */}
              {/* second container */}
              <Container maxWidth="md" className={classes.secondContainer}>
                <div className={classes.papers}>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        All steps completed
                      </Typography>
                      <Button onClick={this.handleReset}>Reset</Button>
                    </div>
                  ) : (
                    <div style={{width : "100%"}}>
                      {/* <Typography className={classes.instructions}> */}
                      {getStepContent(activeStep)}
                      {/* </Typography> */}
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.backButton}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>{" "}
              </Container>
            </div>
          </Container>
        </div>
      );
    }
  }
}

export default withStyles(styles, { withTheme: true })(UserProfile);
