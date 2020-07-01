import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import map from "../../assets/design/map.png";
import tidotLogos from "../../assets/design/TidotWhite.png" 

const styles = (theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#004AAD",
  },
  papers: {
    flexDirection: "flex",
    backgroundColor : "#004AAd",
    // backgroundColor : "black",
    // margin: theme.spacing(2, 3)
    padding : theme.spacing(1, 3)
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
class OrderRide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          className={classes.papers}
          component={Paper}
          elevation={6}
          square
        >
          <Grid container spacing={10}>
          <Grid item xs={6}>
          <Avatar src={tidotLogos} variant="square" style={{width:"150px", height:"136px"}}></Avatar>
          </Grid>
          {/* <Grid></Grid> */}
            <Grid item xs={4}>
            <h2 style={{paddingTop : "20px",paddingLeft : "60%", width : "50%",}}>Order ride</h2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square>
          <Avatar
            src={map}
            style={{ width: "100%", height: "100vh" }}
            variant="square"
          ></Avatar>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(OrderRide);
