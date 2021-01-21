import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Switch, Route, Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Found from "../containers/Found";
import SideDrawer from "./SideDrawer";
import PostIndex from "../mini_components/index";
import Lost from "../containers/Lost";
import LostForm from "./LostForm";
import LNFLogo from "../static/LNF.png";

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: 25,
  },
  margin: {
    margin: theme.spacing(10),
  },
  titleMargin: {
    margin: theme.spacing(3),
  },
  titlePadding: {
    paddingTop: "130px",
  },
  divider: {
    marginTop: "20px",
    background: "#FFFFFF",
  },
  tyopPaddingT: {
    paddingBottom: "20px",
  },
  typoPaddingD: {
    paddingTop: "20px",
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Buttons = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item>
          <img src={LNFLogo} alt="LNFLogo" className={classes.image} />
        </Grid>
        <Grid item className={classes.titleMargin}>
          <div className={classes.titlePadding}>
            <WhiteTextTypography
              variant="h1"
              align="left"
              className={classes.typoPaddingT}
            >
              LostNFound
            </WhiteTextTypography>
            <Divider className={classes.divider} />
            <WhiteTextTypography
              variant="h2"
              align="left"
              className={classes.typoPaddingD}
            >
              遺失物通報系統
            </WhiteTextTypography>
          </div>
        </Grid>
      </Grid>
      <Link to="/found">
        <Button
          variant="contained"
          color="primary"
          style={{
            minWidth: "300px",
            minHeight: "100px",
            maxWidth: "300px",
            maxHeight: "100px",
          }}
          className={classes.margin}
        >
          <Typography variant="h4">我撿到東西</Typography>
        </Button>
      </Link>
      <Link to="/lost">
        <Button
          variant="contained"
          color="secondary"
          style={{
            minWidth: "300px",
            minHeight: "100px",
            maxWidth: "300px",
            maxHeight: "100px",
          }}
          className={classes.margin}
        >
          <Typography variant="h4">我要找東西</Typography>
        </Button>
      </Link>
    </div>
  );
};

const Test = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Buttons} />
        <Route path="/postindex" component={PostIndex} />
        <Route exact path="/lost" component={Lost} />
        <Route path="/lost/form" component={LostForm} />
        <Route path="/lost/search" component={SideDrawer} />
      </Switch>
    </div>
  );
};

export default Test;

/*
Here lies other pages redirection
      <Link to="/postindex">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("handleNext");
          }}
        >
          PostIndex
        </Button>
      </Link>
      <Link to="/imgupload">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("handleNext");
          }}
        >
          SideDrawer
        </Button>
      </Link>
*/
