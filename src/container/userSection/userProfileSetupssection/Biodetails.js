import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TidotLogo from "../../../assets/design/Tidot white logo on blue background.png";
import FacebookLogo from "../../../assets/design/Vector.png";
import Facebook from "../../../assets/design/FacebookTidotDesktop.png";
import GoogleLogo from "../../../assets/design/Icon.png";
import Google from "../../../assets/design/TidotDesktopGoogle.png";
import rides from "../../../assets/design/rides.png";
import transport from "../../../assets/design/transport.svg";
import CircularSpinner from "../../../components/spinner/circularSpinner/circularSpinner";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
  formControl: {
    // margin: theme.spacing(1),
    paddingTop: theme.spacing(2),
    // minWidth: 120,
    // backgroundColor : "#81869A"
    // backgroundColor: "rgba(129, 134, 154, 0.36)"
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

class Biodetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dat: new Date(),
      gender: "",
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDateChange = (date) => {
    this.setState({
      Dat: date,
    });
  };

  handleChange = (event) => {
    // setAge(event.target.value);
    this.setState({
      gender: event.target.value,
    });
  };
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
              style={{ color: "#004AAD", fontSize: "30px" }}
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
                    fontSize: "20px",
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
                    fontSize: "20px",
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
                  // label="Password"
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
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Gender
                </label>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                  // style = {{ backgroundColor: "rgba(129, 134, 154, 0.36)"}}
                >
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={this.state.gender}
                    onChange={this.handleChange}
                    style = {{ backgroundColor: "rgba(129, 134, 154, 0.36)"}}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <label
                  style={{
                    color: "rgba(129, 134, 154, 0.86)",
                    fontWeight: "400",
                    fontSize: "20px",
                  }}
                >
                  Date of birth
                </label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    variant="filled"
                    fullWidth
                    id="date-picker-dialog"
                    format="MM/dd/yyyy"
                    inputVariant="outlined"
                    value={this.state.Dat}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    style={{ backgroundColor: "rgba(129, 134, 154, 0.36)" }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </div>
        </form>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Biodetails);
