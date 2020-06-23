import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Biodetails from "../userSection/userProfileSetupssection/Biodetails";
import Personaldetails from "../userSection/userProfileSetupssection/Personaldetails";
import Contanctdetails from "../userSection/userProfileSetupssection/Contanctdetails";
import { withStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import Avatar from "@material-ui/core";
import numberOne from "../../assets/design/number1.png";
import numberTwo from "../../assets/design/number2.png";
import numberThree from "../../assets/design/number3.png";
import clsx from "clsx";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
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
  return ["Bio details", "Personal details", "Emergency contanct"];
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

class HorizontalLabelPositionBelowStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      // setActiveStep: 0,
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

  render() {

    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
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
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
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
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  HorizontalLabelPositionBelowStepper
);
