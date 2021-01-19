/* eslint-disable no-alert */
import React from "react";
//  import ReactDom from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import SearchBar from "./SearchBar";
import BriefIntro from "./Grids/BriefIntro";
import Location from "./Grids/Location";
import Time from "./Grids/Time";
import Category from "./Grids/Category";
import PostCard from "./PostCard";
import SimpleMap from "./Map";
import Detail from "./Detail";
//	import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const handleSubmit = (history, t, c, l, ti) => {
  alert(`title:${t}, cat: ${c}, location: ${l}, time:${ti}`);
  history.push("/");
};

const LostForm = () => {
  const classes = useStyles();
  const history = useHistory();
  // Below only for test
  const title = useSelector((state) => state.briefIntro);
  const category = useSelector((state) => state.category);
  const location = useSelector((state) => state.location);
  const time = useSelector((state) => state.time);

  return (
    <>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Website name
          </Typography>
        </Toolbar>
      </AppBar>
      <PostCard />
      <Detail />
      <SimpleMap />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            申報拾獲物
          </Typography>
          <Grid container spacing={3}>
            <BriefIntro />
            <Category />
            <Location />
            <Grid item xs={12}>
              <TextField
                id="floor"
                name="floor"
                label="拾獲樓層(用select)"
                fullWidth
              />
            </Grid>
            <Time />
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="打勾勾"
              />
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                handleSubmit(history, title, category, location, time)}
              className={classes.button}
            >
              Finish
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
};

export default LostForm;
// reference https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
